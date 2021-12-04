import { NextResponse } from 'next/server'

export function middleware(req) {
  const country = req.geo.country?.toLowerCase() || 'us'

  req.nextUrl.pathname = `/edge/${country}`
  return NextResponse.rewrite(req.nextUrl)
}