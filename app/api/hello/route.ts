import { NextResponse } from 'next/server'

export async function post(req: Request) {
  return NextResponse.json({ message: 'POST Method' })
}
export async function get(req: Request) {
  try {
    return NextResponse.json({ message: 'GET method' })
  } catch (error) {
    return NextResponse.json({ message: error })
  }
}
