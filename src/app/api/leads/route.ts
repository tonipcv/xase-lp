import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const requestId = globalThis.crypto?.randomUUID?.() ?? `req_${Date.now()}`

  try {
    let body: any
    try {
      body = await request.json()
    } catch {
      console.error('[api/leads] invalid_json', { requestId })
      return NextResponse.json(
        {
          error: 'invalid_json',
          message: 'Request body must be valid JSON',
          requestId,
        },
        { status: 400 }
      )
    }

    const {
      name,
      email,
      whatsapp,
      segment,
      budget,
      company,
      role,
      dataType,
      source,
    } = body ?? {}

    const missing: string[] = []
    if (!name) missing.push('name')
    if (!email) missing.push('email')

    const receivedKeys = body && typeof body === 'object' ? Object.keys(body).sort() : []
    const safeEmail = typeof email === 'string' ? email.replace(/(^.).*(@.*$)/, '$1***$2') : email

    console.info('[api/leads] request', {
      requestId,
      referer: request.headers.get('referer'),
      userAgent: request.headers.get('user-agent'),
      receivedKeys,
      namePresent: Boolean(name),
      emailPresent: Boolean(email),
      source,
    })

    // Validate required fields
    if (missing.length > 0) {
      return NextResponse.json(
        {
          error: 'validation_error',
          message: 'Missing required fields',
          missing,
          receivedKeys,
          received: {
            name,
            email: safeEmail,
            whatsapp: whatsapp ? '[provided]' : undefined,
            segment,
            budget,
            company,
            role,
            dataType,
            source,
          },
          requestId,
        },
        { status: 400 }
      )
    }

    // Create new lead
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        whatsapp,
        segment: segment ?? role,
        budget,
        company,
        role,
        dataType,
        source,
      },
    })

    return NextResponse.json({ ...lead, requestId })
  } catch (error) {
    console.error('[api/leads] error_creating_lead', { requestId, error })
    return NextResponse.json(
      {
        error: 'Error creating lead',
        requestId,
      },
      { status: 500 }
    )
  }
}