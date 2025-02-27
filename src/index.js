export default {
	async fetch(request) {
	  const url = new URL(request.url);
  
	  if (url.pathname === "/") {
		return new Response("Hello World!", {
		  status: 200,
		  headers: { "Content-Type": "text/plain" },
		});
	  }
  
	  if (url.pathname === "/api") {
		return new Response(JSON.stringify({ message: "health check server" }), {
		  status: 200,
		  headers: { "Content-Type": "application/json" },
		});
	  }
  
	  return new Response("404 Not Found", { status: 404 });
	},
  };
  