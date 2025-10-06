import { NextResponse } from 'next/server';

export async function POST() {
  // Clear the session cookie
  return NextResponse.json({ success: true }, {
    status: 200,
    headers: {
      'Set-Cookie': 'vedatrace_session=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0',
    },
  });
}
