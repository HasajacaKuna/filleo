import path from 'node:path';
import { NextResponse } from 'next/server';
import { sendFormMail } from '@/lib/mail';

export const runtime = 'nodejs';

const MAX_FILE_SIZE = 8 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set(['.pdf', '.doc', '.docx', '.rtf']);

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
    const formData = await request.formData();
    const language = String(formData.get('language') ?? 'pl').toLowerCase();
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const file = formData.get('file');

    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message || !(file instanceof File)) {
      return NextResponse.json({ error: 'Invalid payload.' }, { status: 400 });
    }

    const fileExt = path.extname(file.name).toLowerCase();
    if (!ALLOWED_EXTENSIONS.has(fileExt)) {
      return NextResponse.json({ error: 'Invalid file type.' }, { status: 400 });
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File too large.' }, { status: 400 });
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    const subject = `[Filleo] New career form (${language})`;
    const text = [
      'New career submission',
      `Language: ${language}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Message: ${message}`,
      `Attachment: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`,
    ].join('\n');

    const html = `
      <h2>New career submission</h2>
      <p><strong>Language:</strong> ${escapeHtml(language)}</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong><br/>${escapeHtml(message).replaceAll('\n', '<br/>')}</p>
      <p><strong>Attachment:</strong> ${escapeHtml(file.name)} (${(file.size / 1024 / 1024).toFixed(2)} MB)</p>
    `;

    await sendFormMail({
      subject,
      text,
      html,
      replyTo: email,
      attachments: [
        {
          filename: file.name,
          content: fileBuffer,
          contentType: file.type || undefined,
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Could not send e-mail.' }, { status: 500 });
  }
}
