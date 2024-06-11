import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getBlogById, getOtherBlogs } from "../../config/typeDef";

const BlogDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(getBlogById, {
    variables: { id: parseInt(id) },
  });
  const { data: otherBlogsData } = useQuery(getOtherBlogs);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (data && data.blogs.length > 0) {
      setBlog(data.blogs[0]);
    }
  }, [data]);

  useEffect(() => {
    console.log("Data:", data);
    console.log("Error:", error);
  }, [data, error]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!blog) return <div>Blog not found</div>;

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <Link to="/">
            <button type="button" className="btn btn-secondary mb-3">
              <span style={{ fontWeight: "bold", textDecoration: "none", color: "white" }}>Back To Homepage</span>
            </button>
          </Link>
          <h1 className="mb-3" style={{ fontFamily: "'Bad Script', sans-serif", fontWeight: "bolder" }}>
            {blog.title}
          </h1>
          <p>Dehaexport - {new Date(blog.created_at).toLocaleDateString()}</p>
          {blog.image && <img src={blog.image} alt={blog.title} className="img-fluid" />}
          <div className="mt-3" style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.6" }}>
            <p>
              <strong>Author:</strong> {blog.author ? blog.author : "Anonymous"}
            </p>
            <div dangerouslySetInnerHTML={{ __html: blog.description }} />
            <a href={blog.link} target="_blank" rel="noopener noreferrer" style={{ marginBottom: "20px", display: "block" }}>
              <b>Read Full Article</b>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <h4 className="ps-4" style={{ paddingTop: 150 }}>
            Other Blogs
          </h4>
          <ul className="list-unstyled">
            {otherBlogsData &&
              otherBlogsData.blogs.map((otherBlog, index) => (
                <li key={otherBlog.id} className="d-flex align-items-center mb-2">
                  <div className="rounded-circle bg-danger text-white d-flex justify-content-center align-items-center" style={{ width: "30px", height: "30px" }}>
                    {index + 1}
                  </div>
                  <div className="ml-2" style={{ display: "flex", flexDirection: "column" }}>
                    <a href={`/blog/${otherBlog.id}`} style={{ textDecoration: "none", color: "black", fontFamily: "'Inter', sans-serif", fontWeight: "700" }}>
                      {truncateTitle(otherBlog.title, 30)}
                    </a>
                    {otherBlog.image && <img src={otherBlog.image} alt={otherBlog.title} className="img-fluid mt-1" style={{ maxWidth: "100px" }} />}
                    <p className="mb-0">Created at: {new Date(otherBlog.created_at).toLocaleDateString()}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
