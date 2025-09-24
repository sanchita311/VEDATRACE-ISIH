// Consumer Middleware (example: authentication check)
import { NextRequest, NextResponse } from 'next/server';

export function requireConsumerAuth(req: NextRequest) {
  // Example: check for a token or session
  const token = req.headers.get('authorization');
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  // Add more logic as needed
  return NextResponse.next();
}
