import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests are allowed' });
  }

  const body = req.body;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
        private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({ auth, version: 'v4' });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: body.id,
      range: 'A2:E2',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[body.name, body.email, body.chicos, body.message, body.menu]],
      },
    });

    return res.status(201).json({
      data: response.data,
    });
  } catch (e) {
    console.error('Error:', e);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}