import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../reusable/urls";

function TripBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (blogs.length === 0) {
      try {
        axios.get(API_URL("blogs")).then((response: any) => {
          console.log(response.data);
          setBlogs(response.data.blogs);
        });
      } catch (error) {
        console.log(error);
      }
    }
  });

  const getExcerpt = (text: any) => {
    let excerpt: any[] = [];

    for (let letter of text) {
      if (letter === ".") {
        break;
      }
      excerpt.push(letter);
    }

    excerpt.push("...");

    return excerpt;
  };

  return (
    <div className="container px-4 pb-4">
      <div className="py-4 bg-white bg-opacity-10 border border-gray rounded text-white h-100 shadow-lg">
        <h2 className="text-center">News</h2>

        {blogs.map((blog: any, index: number) => {
          return (
            <div className="p-4 ">
              <div className="px-4">
                <h3>{blog.title}</h3>
                <p>{getExcerpt(blog.body)}</p>
                {/* <p>{blog.body}</p> */}
                <Link
                  className="text-white hover:text-blue"
                  to={`/blogs/${blog._id}`}
                >
                  read more
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TripBlog;
