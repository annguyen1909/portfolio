import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data || {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('Missing RESEND_API_KEY');
      return NextResponse.json({ ok: false, error: 'Email service not configured' }, { status: 500 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'nguyentruongan0919@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; color: #111">
        <h2 style="margin:0 0 8px">New contact message</h2>
        <p style="margin:0 0 8px"><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p style="margin:0 0 12px"><strong>Subject:</strong> ${subject}</p>
        <div style="padding:12px;border:1px solid #e5e7eb;background:#f9fafb;border-radius:8px;white-space:pre-wrap">${message}</div>
      </div>
    `;

    const resendResp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Portfolio Contact <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `Portfolio Contact: ${subject}`,
        html,
      }),
    });

    if (!resendResp.ok) {
      let err: any = undefined;
      try { err = await resendResp.json(); } catch { err = await resendResp.text(); }
      console.error('Resend error:', err);
      const message = typeof err === 'string' ? err : (err?.message || 'Failed to send email');
      return NextResponse.json({ ok: false, error: message }, { status: resendResp.status || 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}
