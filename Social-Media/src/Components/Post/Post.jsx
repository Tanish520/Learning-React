import "./Post.css";

const Post = ({ title, body, tags }) => {
  return (
    <div className="Post">
      <div className="Post-img">
        <img src="https://dummyjson.com/icon/emilys/128" alt="" />
      </div>
      <div className="Post-content">
        <h3>{title}</h3>
        <p>{body}</p>
        <div className="Post-tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
