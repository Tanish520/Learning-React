import { useContext } from "react";
import Post from "../Post/Post";
import "./Home.css"
import { Context } from "../../Context/ContextApi";
const Home = () => {
  
  const {posts} = useContext(Context);
  console.log(posts);
  return (
    <div className="Home">
      <h1>Your Post</h1>
      <div className="Posts">
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} tags = {post.tags}></Post>
        ))}
      </div>
    </div>
  );
};

export default Home;
