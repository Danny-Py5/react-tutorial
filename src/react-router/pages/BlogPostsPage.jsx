import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function BlogPostsPage() {
  const { state } = useLocation();
  const [posts, setPosts] = useState([]);

  // when we are on the blogPostpage programmatically, if we later refresh the page,
  // it will not lost the state passed from the navigate.

  // we can verify that by logging the state attr of the window history
  console.log("window history", window.history.state);

  useEffect(() => {
    if (state && state.posts) {
      setPosts(state.posts);
    }
  }, [state]);

  return (
    <div>
      <h1>welcome to the BlogPosts Pages</h1>
      {posts.map((post) => {
        return (
          <div style={{ color: "lightpink" }} key={post.id}>
            <h2>{post.title}</h2>
            <p>
              I am {post.name} and I am currently {post.status}
            </p>
          </div>
        );
      })}
    </div>
  );
}
