import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { PostList } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div>
      <div
        className="card post-card"
        style={{ width: "30rem", marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="card-body">
          <span
            className="position-absolute top-0 start-100 translate-middle delete bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <RiDeleteBin2Fill />
          </span>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((each) => (
            <span
              key={each}
              className="badge text-bg-primary hashtag"
              style={{ padding: "13px" }}
            >
              {each}
            </span>
          ))}
          <div
            className="alert alert-success"
            style={{ marginTop: "20px" }}
            role="alert"
          >
            Reactions on this post: {post.reaction}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
