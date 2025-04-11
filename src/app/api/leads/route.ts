import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, whatsapp, email, segment, budget } = body

    // Validate required fields
    if (!name || !whatsapp || !email || !segment || !budget) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create new lead
    const lead = await prisma.lead.create({
      data: {
        name,
        whatsapp,
        email,
        segment,
        budget,
      },
    })

    return NextResponse.json(lead)
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { error: 'Error creating lead' },
      { status: 500 }
    )
  }
} 