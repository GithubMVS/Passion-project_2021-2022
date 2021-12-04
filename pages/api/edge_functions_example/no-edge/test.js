export default function handler(req, res) {

  const response = await fetch(`https://catfact.ninja/fact`);
  const post = await response.json();

  res.status(200).json({ fact: post.fact })
}
