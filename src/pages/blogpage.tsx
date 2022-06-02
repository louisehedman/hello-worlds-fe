import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../reusable/urls";

function BlogPage() {
  const blogId = useParams();
  const [blog, setBlog] = useState({
    author: "",
    title: "",
    date: "",
    body: "",
  });  

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        await axios.get(API_URL(`blogs/${blogId.id}`)).then((response: any) => {
          setBlog(response.data.blog);
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchBlog();
  }, []);

  return (
    <>
      <div className="container p-4">
        <header className="text-white d-flex justify-content-between">
          <Link to="/" className="align-self-end text-white">
            ← Back
          </Link>

          <div className="details d-flex flex-column-reverse">
            <span>{blog.author}</span>
            <span>{blog.date}</span>
          </div>
        </header>
        <div className="p-4 bg-white bg-opacity-10 border border-gray rounded text-white h-100 shadow-lg">
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
        </div>
      </div>
    </>
  );
}

export default BlogPage;