export default async (req, cxt) => {
  return new Response("This is my first edge function!", {
    headers: {
      "content-type": "text/html",
    },
  });
};
