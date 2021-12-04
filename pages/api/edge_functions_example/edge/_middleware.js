export async function middleware(req) {

  const response = await fetch(`https://catfact.ninja/fact`);
  const post = await response.json();

  return new Response(JSON.stringify({ fact: post.fact }), {
    status: 200,
    header: {
      'Content-Type': 'application/json'
    },
  });

}
