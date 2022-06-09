import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "./pagination";
import { Link } from "react-router-dom";
import { API_URL } from "../../../helpers/urls";

function TripBlog() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        await axios.get(API_URL("blogs")).then((response: any) => {
          setBlogs(response.data.blogs);
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchBlogs();
  }, []);

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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber)

  return (
    <div className="container px-4 pb-4">
      <div className="py-4 bg-white bg-opacity-10 border border-gray rounded text-white h-100 shadow-lg">
        <h2 className="text-center">News</h2>

        {currentPosts.map((blog: any, index: number) => {
          return (
            <div key={index} className="p-4 ">
              <div className="px-4">
              <p>{blog.date}</p>
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
        
        <div className="d-flex justify-content-center">
        <Pagination postsPerPage={postsPerPage} totalPosts={blogs.length} paginate={paginate} />
        </div>
      </div>
    </div>
  );
}

export default TripBlog;