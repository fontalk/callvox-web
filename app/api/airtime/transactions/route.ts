import { NextRequest, NextResponse } from 'next/server'

// TRANSACTION VISIBILITY — INTERIM WIRING
// ------------------------------------------------------------------
// This route returns fixture (fake) transaction data so the sandbox
// transaction viewer has something real to render against. It is not
// connected to a real ledger. Before launch, replace this with a query
// against the actual transaction/CDR store, scoped to the authenticated
// account — and put real authentication in front of it (this currently
// accepts any non-empty `key` query param as a stand-in for a session).
// ------------------------------------------------------------------

function maskMsisdn(msisdn: string) {
  return msisdn.slice(0, 5) + '••••' + msisdn.slice(-2)
}

const FIXTURE_TRANSACTIONS = [
  { id: 'txn_9f1a2b', msisdn: '+2348012345678', operator: 'MTN Nigeria', amount: '500 NGN', status: 'delivered', reference: 'txn_abc123', timestamp: '2026-08-04T09:12:41Z' },
  { id: 'txn_7c3d4e', msisdn: '+254712345678', operator: 'Safaricom', amount: '200 KES', status: 'delivered', reference: 'txn_abc124', timestamp: '2026-08-04T08:55:03Z' },
  { id: 'txn_5a8b9c', msisdn: '+919812345678', operator: 'Jio', amount: '100 INR', status: 'delivered', reference: 'txn_abc125', timestamp: '2026-08-04T08:40:22Z' },
  { id: 'txn_2b4f6a', msisdn: '+5511987654321', operator: 'Claro Brazil', amount: '20 BRL', status: 'failed', reference: 'txn_abc126', timestamp: '2026-08-04T08:21:10Z' },
  { id: 'txn_1e9d8c', msisdn: '+971501234567', operator: 'Etisalat', amount: '50 AED', status: 'delivered', reference: 'txn_abc127', timestamp: '2026-08-04T07:58:47Z' },
  { id: 'txn_3f2e1d', msisdn: '+523312345678', operator: 'Telcel', amount: '100 MXN', status: 'pending', reference: 'txn_abc128', timestamp: '2026-08-04T07:44:19Z' },
]

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get('key')

  if (!key || key.trim().length === 0) {
    return NextResponse.json({ error: 'Missing sandbox API key' }, { status: 401 })
  }

  const rows = FIXTURE_TRANSACTIONS.map((t) => ({
    ...t,
    msisdn: maskMsisdn(t.msisdn),
  }))

  return NextResponse.json({ ok: true, transactions: rows })
}
