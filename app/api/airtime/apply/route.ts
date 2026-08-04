import { NextRequest, NextResponse } from 'next/server'
import { randomBytes, randomUUID } from 'crypto'
import { z } from 'zod'

// AIRTIME "GET API ACCESS" FLOW — INTERIM WIRING
// ------------------------------------------------------------------
// This route accepts the qualification (step 1) and KYC intake (step 2)
// submissions, then returns sandbox credentials immediately (step 3),
// matching the product page's "sandbox access available immediately"
// promise.
//
// What's real vs. illustrative right now:
// - Validation, and the shape of the response, is real.
// - Sandbox credentials are generated fresh per request but NOT persisted
//   anywhere (no database yet) — they are not actually valid against any
//   sandbox API today. Wiring a real sandbox environment is required
//   before these keys do anything.
// - "Production activation gated on KYC review" is not yet enforced by a
//   real compliance workflow — submissions are only logged. Before launch,
//   this needs to write to a database, notify the compliance team, and
//   have production key issuance blocked until a human marks the account
//   verified.
// ------------------------------------------------------------------

const applySchema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().optional(),
  corridors: z.array(z.string()).min(1, 'Select at least one corridor'),
  monthlyVolume: z.string().min(1, 'Estimated monthly volume is required'),
  businessRegistrationName: z.string().min(1, 'Registered business name is required'),
  businessRegistrationNumber: z.string().min(1, 'Business registration number is required'),
  registrationCountry: z.string().min(1, 'Country of registration is required'),
})

function generateSandboxCredentials() {
  return {
    environment: 'sandbox' as const,
    apiKey: `sbx_key_${randomBytes(12).toString('hex')}`,
    apiSecret: `sbx_secret_${randomBytes(18).toString('hex')}`,
  }
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = applySchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  const referenceId = `CVX-AIR-${randomUUID().slice(0, 8).toUpperCase()}`

  // TODO: persist this application to a real database, sync to CRM, and
  // notify sales + compliance so the KYC review is actually actionable.
  console.log('[airtime-apply] new application received (not yet persisted):', {
    referenceId,
    ...parsed.data,
    kycStatus: 'submitted',
    receivedAt: new Date().toISOString(),
  })

  return NextResponse.json({
    ok: true,
    referenceId,
    kycStatus: 'submitted',
    kycMessage:
      'Your business registration details have been submitted for review. Production access activates once compliance confirms your documents — typically within one business day.',
    sandbox: generateSandboxCredentials(),
  })
}
