import { http } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users/*", (resolve) => {
    return Response.json({
      id: resolve.params.id,
      name: "Daniel",
      username: "dannypy",
      email: "olatundedaniel943@gmail.com",
    });
  }),
  // other handlers go here...
];
