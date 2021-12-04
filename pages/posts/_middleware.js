export default function middleware(req, ev) {
  console.log('Edit and run at the edge!')

  return new Response({
    ip: req.ip,
    geo: req.geo, // this will spin the globe!
    ua: req.ua
  })
}