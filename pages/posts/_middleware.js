const middleware = (req, ev) => {
  return new Response(req.ua.os.name);
};

export default middleware;