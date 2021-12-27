import "./blogpost.css";

export default function BlogPost({ post }) {
  return (
    <div>
      <div className="blog-post-container">
        <h2 className="blog-post-heaader">{post.title}</h2>
        <div className="blog-post-author-date">
          <span>Author :{post.author}</span>
          <span>Date : {post.date} </span>
        </div>
        <div className="blog-post-image"></div>
        <div className="blog-post-tag">
          Tags:
          {post.tags.map((tag) => (
            <span>{`#${tag} `}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
