import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, whatsapp, email, segment, budget } = body

    const lead = await prisma.lead.create({
      data: {
        name,
        whatsapp,
        email,
        segment,
        budget
      }
    })

    return NextResponse.json(lead)
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { error: 'Failed to create lead' },
      { status: 500 }
    )
  }
} 