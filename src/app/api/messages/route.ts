import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { leadId, text, isUser } = body

    const message = await prisma.chatMessage.create({
      data: {
        leadId,
        text,
        isUser
      }
    })

    return NextResponse.json(message)
  } catch (error) {
    console.error('Error saving message:', error)
    return NextResponse.json(
      { error: 'Failed to save message' },
      { status: 500 }
    )
  }
} 