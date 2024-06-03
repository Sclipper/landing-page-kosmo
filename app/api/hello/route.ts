import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  return NextResponse.json({ message: 'POST Method' })
}
export async function GET(req: Request) {
  try {
    return NextResponse.json({ message: 'GET method' })
  } catch (error) {
    return NextResponse.json({ message: error })
  }
}
