import { NextResponse } from 'next/server';
import { sendFormMail } from '@/lib/mail';

export const runtime = 'nodejs';

type SubscribePayload = {
  language?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  day?: string;
  month?: string;
  year?: string;
  zip?: string;
  country?: string;
  region?: string;
  consent?: boolean;
};

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SubscribePayload;
    const email = body.email?.trim() ?? '';
    const firstName = body.firstName?.trim() ?? '';
    const lastName = body.lastName?.trim() ?? '';
    const language = (body.language ?? 'pl').toLowerCase();
    const birth = `${body.day ?? ''}/${body.month ?? ''}/${body.year ?? ''}`;

    if (!firstName || !lastName || !/^\S+@\S+\.\S+$/.test(email) || !body.consent) {
      return NextResponse.json({ error: 'Invalid payload.' }, { status: 400 });
    }

    const subject = `[Filleo] New subscribe form (${language})`;
    const text = [
      'New subscribe submission',
      `Language: ${language}`,
      `First name: ${firstName}`,
      `Last name: ${lastName}`,
      `Email: ${email}`,
      `Birth date: ${birth}`,
      `Postal code: ${body.zip ?? ''}`,
      `Country: ${body.country ?? ''}`,
      `Region: ${body.region ?? ''}`,
      `Consent: ${body.consent ? 'yes' : 'no'}`,
    ].join('\n');

    const html = `
      <h2>New subscribe submission</h2>
      <p><strong>Language:</strong> ${escapeHtml(language)}</p>
      <p><strong>First name:</strong> ${escapeHtml(firstName)}</p>
      <p><strong>Last name:</strong> ${escapeHtml(lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Birth date:</strong> ${escapeHtml(birth)}</p>
      <p><strong>Postal code:</strong> ${escapeHtml(body.zip ?? '')}</p>
      <p><strong>Country:</strong> ${escapeHtml(body.country ?? '')}</p>
      <p><strong>Region:</strong> ${escapeHtml(body.region ?? '')}</p>
      <p><strong>Consent:</strong> ${body.consent ? 'yes' : 'no'}</p>
    `;

    await sendFormMail({
      subject,
      text,
      html,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Could not send e-mail.' }, { status: 500 });
  }
}
