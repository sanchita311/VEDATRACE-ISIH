
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyPassword } from '@/lib/auth'
import { signJwt } from '@/lib/jwt'

export async function POST(req: Request) {
  try {
      const { UserName, password, User_type } = await req.json();
      console.log('LOGIN DEBUG:', { UserName, password, User_type });

    if (!UserName || !password || !User_type) {
      return NextResponse.json({ error: 'Missing credentials' }, { status: 400 })
    }

      const user = await prisma.user.findUnique({
        where: { UserName },
      });
    console.log('LOGIN DEBUG: user from db', user);

    if (!user) {
      console.log('LOGIN DEBUG: user not found');
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }
    if ((user.User_type || '').toLowerCase() !== (User_type || '').toLowerCase()) {
      console.log('LOGIN DEBUG: user type mismatch', { expected: user.User_type, got: User_type });
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const isMatch = await verifyPassword(password, user.password)
    if (!isMatch) {
      console.log('LOGIN DEBUG: password mismatch');
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    // Create JWT session
    const token = signJwt({ UserName: user.UserName, User_type: user.User_type })
    // Set cookie
    return new NextResponse(
      JSON.stringify({ success: true, UserName: user.UserName, User_type: user.User_type }),
      {
        status: 200,
        headers: {
          'Set-Cookie': `vedatrace_session=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=604800`,
          'Content-Type': 'application/json',
        },
      }
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}
