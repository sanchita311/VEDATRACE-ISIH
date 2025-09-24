import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prismadb'
import { hashPassword } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      UserName,
      FullName,
      aadharId,
      ph_number,
      EmailId,
      state,
      City,
      District,
      User_type,
      password,
    } = body

    if (!UserName || !FullName || !aadharId || !ph_number || !EmailId || !password || !User_type) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
    }

    const existing = await prisma.user.findUnique({
      where: { EmailId },
    })

    if (existing) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 })
    }

    const hashedPassword = await hashPassword(password)

    const user = await prisma.user.create({
      data: {
        UserName,
        FullName,
        aadharId,
        ph_number,
        EmailId,
        state,
        City,
        District,
        User_type,
        password: hashedPassword,
      },
    })

    return NextResponse.json({ success: true, user: { UserName: user.UserName, EmailId: user.EmailId } })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Signup failed' }, { status: 500 })
  }
}
