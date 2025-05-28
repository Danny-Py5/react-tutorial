import { delay, http } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users/*", async (resolve) => {
    await delay(5000); // this makes the request wait before sending the response;
    return Response.json({
      id: resolve.params.id,
      name: "Daniel",
      username: "dannypy",
      email: "olatundedaniel943@gmail.com",
    });
  }),
  // other handlers go here...
];
