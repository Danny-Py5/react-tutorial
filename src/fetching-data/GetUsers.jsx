import { useEffect } from "react";

export function GetUsers() {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal } // this is to abort the fetch request if the component unmounts before the request is completed
        );
        // console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    return () => {
      controller.abort(); // this will abort the fetch request if the component unmounts before the request is completed
    };
  }, []);
  return (
    <div>
      <h1>Fetching data from API</h1>
      <hr />
    </div>
  );
}
