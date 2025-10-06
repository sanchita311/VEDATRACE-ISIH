// Contact Middleware (example: spam protection)
import { NextRequest, NextResponse } from 'next/server';

export function checkContactSpam(req: NextRequest) {
  // Example: check for spam or rate limit
  // Add your logic here
  return NextResponse.next();
}
