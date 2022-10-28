export default async (req, ctx) => {
  const url = new URL(req.url);
  if (url.searchParams.get("method") != "transform") {
    return;
  }
  const response = await ctx.next();
  const page = await response.text();
  const regex = /LOCATION_UNKNOWN/i;
  const location = `${ctx.geo.city}, ${ctx.geo.country.name}`;
  const updatedPage = page.replace(regex, location);
  return new Response(updatedPage, response);
};


//Runs on:   http://localhost:8888/hello-template?method=transform  