import { NextRequest, NextResponse } from 'next/server';

type AuditPayload = {
  name?: string;
  email?: string;
  company?: string;
  website?: string;
  businessType?: string;
  adSpend?: string;
  teamSize?: string;
  bottleneck?: string;
  services?: string[];
  notes?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function field(label: string, value?: string | string[]) {
  if (!value || (Array.isArray(value) && value.length === 0)) return '';
  const output = Array.isArray(value) ? value.join(', ') : value;
  return `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(output)}</p>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as AuditPayload;

    if (!body.name?.trim() || !body.email?.trim() || !body.bottleneck?.trim() || !body.notes?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Please complete the required audit fields before submitting.' },
        { status: 400 },
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const resendFrom = process.env.RESEND_FROM;
    const resendTo = process.env.RESEND_TO || 'digitalpointllc1122@gmail.com';

    if (!resendKey || !resendFrom) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email delivery is not configured yet. Add RESEND_API_KEY and RESEND_FROM to continue.',
        },
        { status: 500 },
      );
    }

    const subject = `New Free Growth Audit Request from ${body.name.trim()}`;
    const html = `
      <h2>Free Growth Audit Request</h2>
      ${field('Name', body.name)}
      ${field('Email', body.email)}
      ${field('Company', body.company)}
      ${field('Website', body.website)}
      ${field('Business Type', body.businessType)}
      ${field('Monthly Ad Spend', body.adSpend)}
      ${field('Team Size', body.teamSize)}
      ${field('Primary Bottleneck', body.bottleneck)}
      ${field('Service Focus', body.services)}
      ${field('Notes', body.notes)}
      ${field('UTM Source', body.utmSource)}
      ${field('UTM Medium', body.utmMedium)}
      ${field('UTM Campaign', body.utmCampaign)}
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: resendFrom,
        to: [resendTo],
        reply_to: body.email.trim(),
        subject,
        html,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      const message =
        typeof resendData?.message === 'string'
          ? resendData.message
          : 'We could not send your request right now. Please try again in a moment.';

      console.error('Resend audit submission failed:', resendData);
      return NextResponse.json({ success: false, message }, { status: 502 });
    }

    return NextResponse.json({
      success: true,
      message: 'Audit request received successfully.',
      id: resendData?.id,
    });
  } catch (error) {
    console.error('Audit form error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred while processing your request.',
      },
      { status: 500 },
    );
  }
}
