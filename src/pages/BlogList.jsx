import "./bloglist.css";
import { blogData } from "../dummyData";
import BlogPost from "../components/BlogPost/BlogPost";

export default function BlogList() {
  return (
    <div className="blogList">
      {blogData.map((post) => (
        <BlogPost post={post} />
      ))}
    </div>
  );
}
