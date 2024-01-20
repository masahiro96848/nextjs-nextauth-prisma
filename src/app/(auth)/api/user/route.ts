import db from '@/lib/db'
import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { email, username, password } = body

    // emailが既に存在しているかのチェック
    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    })

    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: 'User with this email already exists' },
        { status: 409 }
      )
    }

    // usernameが既に存在しているかのチェック
    const existingUserByUsername = await db.user.findUnique({
      where: { username: username },
    })

    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, message: 'User with this username already exists' },
        { status: 409 }
      )
    }

    // passwordをハッシュ化
    const hashedPassword = await hash(password, 10)
    // Userのデータを作成
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    })

    const { password: newUserPassword, ...rest } = newUser

    return NextResponse.json(
      { user: rest, message: 'User created successfully' },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong!' },
      { status: 500 }
    )
  }
}
