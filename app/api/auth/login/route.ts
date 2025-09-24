import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prismadb'
import { verifyPassword } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const { EmailId, password, User_type } = await req.json()

    if (!EmailId || !password || !User_type) {
      return NextResponse.json({ error: 'Missing credentials' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { EmailId },
    })

    if (!user || user.User_type !== User_type) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const isMatch = await verifyPassword(password, user.password)
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    return NextResponse.json({ success: true, UserName: user.UserName, User_type: user.User_type })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}
