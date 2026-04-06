import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getCurrentAdmin } from '@/lib/admin-auth'
import { leadStatusUpdateSchema } from '@/lib/validations/lead'

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await getCurrentAdmin()
    if (!admin) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized.' },
        { status: 401 }
      )
    }

    const { id } = await params
    const body = await request.json()
    const parsed = leadStatusUpdateSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid status.',
          errors: parsed.error.issues.map((i) => i.message),
        },
        { status: 400 }
      )
    }

    const updated = await db.lead.update({
      where: { id },
      data: { status: parsed.data.status },
    })

    return NextResponse.json({ success: true, lead: updated })
  } catch (error) {
    console.error('[leads/:id PATCH] error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to update lead.' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await getCurrentAdmin()
    if (!admin) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized.' },
        { status: 401 }
      )
    }

    const { id } = await params
    await db.lead.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[leads/:id DELETE] error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to delete lead.' },
      { status: 500 }
    )
  }
}
