import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  return NextResponse.json({ message: 'POST Method' })
}
export async function GET(req: Request) {
  return NextResponse.json({ message: 'GET method' })
}
