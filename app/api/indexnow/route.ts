import { NextResponse } from 'next/server'
import { z } from 'zod/v4'
import fs from 'fs'
import path from 'path'

const indexNowSchema = z.object({
  url: z.string().url().optional(),
  urls: z.array(z.string().url()).optional(),
}).refine(
  (data) => data.url || (data.urls && data.urls.length > 0),
  { message: 'Provide either a single "url" or an array of "urls".' }
)

function getIndexNowKey(): string {
  const keyPath = path.join(process.cwd(), 'public', 'indexnow-key.txt')
  return fs.readFileSync(keyPath, 'utf-8').trim()
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = indexNowSchema.safeParse(body)

    if (!parsed.success) {
      const errors = parsed.error.issues.map((i) => i.message)
      return NextResponse.json(
        { success: false, message: 'Validation failed.', errors },
        { status: 400 }
      )
    }

    const data = parsed.data
    const urlList: string[] = data.urls ?? (data.url ? [data.url] : [])

    if (urlList.length === 0) {
      return NextResponse.json(
        { success: false, message: 'No URLs provided.' },
        { status: 400 }
      )
    }

    let key: string
    try {
      key = getIndexNowKey()
    } catch {
      console.error('IndexNow key file not found at public/indexnow-key.txt')
      return NextResponse.json(
        { success: false, message: 'IndexNow key is not configured.' },
        { status: 500 }
      )
    }

    // Determine host from the first URL
    const host = new URL(urlList[0]).host

    const indexNowPayload = {
      host,
      key,
      keyLocation: `https://${host}/indexnow-key.txt`,
      urlList,
    }

    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(indexNowPayload),
    })

    if (!response.ok) {
      const text = await response.text()
      console.error('IndexNow API error:', response.status, text)
      return NextResponse.json(
        {
          success: false,
          message: `IndexNow API returned status ${response.status}.`,
          detail: text,
        },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      message: `Successfully submitted ${urlList.length} URL(s) to IndexNow.`,
      submitted: urlList,
    })
  } catch (error) {
    console.error('IndexNow error:', error)
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}
