import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TripBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if(blogs.length === 0) {
      try {
        axios.get(`http://localhost:4000/blogs`).then((response: any) => {
          console.log(response.data);
          setBlogs(response.data.blogs);
        });
      } catch (error) {
        console.log(error);
      }
    }
  });




    return (
      <div className="container px-4 pb-4">
        <div className="py-4 bg-white bg-opacity-10 border border-gray rounded text-white h-100 shadow-lg">
            <h2 className="text-center">Latest Trips</h2>
            
            {blogs.map((blog: any, index: number) => {
              return (
                <div className="p-4">
                  <div className="px-4">
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                    <Link className="text-white hover:text-blue" to={`/blog/${blog._id}`}>read more</Link>
                  </div>
                </div>
              )
            })}
            
        </div>
      </div>
    );
  }
  
  export default TripBlog;