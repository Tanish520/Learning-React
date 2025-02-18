import { useContext } from "react";
import "./CreatePost.css";
import { Context } from "../../Context/ContextApi";

const CreatePost = () => {
  const {handleCreatePost} = useContext(Context);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const post = {
      id: Math.floor(Math.random() * 1000),
      title: event.target[0].value,
      tags: event.target[1].value.split(' ').map(tag => tag.trim()),
      image: event.target[2].value,
      content: event.target[3].value
    }
    handleCreatePost(post);
  }
  return (
    <form onSubmit={handleOnSubmit} className="form-container">
      <h1>Create Post</h1>
      <div className="form-group">
        <label htmlFor="Post-title">Title: </label>
        <input
          type="text"
          id="Post-title"
          placeholder="Enter your post title..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="Post-tags">Tags: </label>
        <input
          type="text"
          id="Post-tags"
          placeholder="Enter your post tags..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="Post-image">Image: </label>
        <input
          type="file"
          id="Post-image"
          placeholder="Post your image..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="Post-content">Content: </label>
        <textarea
          name="content"
          id="Post-content"
          placeholder="Enter your post content here..."
          rows="3"
          cols="50"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-success">
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
