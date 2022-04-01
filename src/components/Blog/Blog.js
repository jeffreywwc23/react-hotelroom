import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import { IoIosPerson, IoMdCalendar } from "react-icons/io";
import Title from "../Title/Title";
import { useSelector } from "react-redux";

const Blog = () => {
  const blogContent = useSelector((state) => state.RoomSlice.blogContent);

  return (
    <>
      <div className="blogs-title">
        <Title title="Blogs" />
      </div>

      <main className="blogs-container">
        <section className="blogs">
          {blogContent.map((blog) => {
            return (
              <div className={`blog blog-${blog.id}`} key={blog.id}>
                <div
                  className="blog-img"
                  style={{ backgroundImage: `url(${blog.imageUrl})` }}
                ></div>
                <Link to="/" className="blog-link">
                  <div
                    className="blog-img-hovered"
                    style={{ backgroundImage: `url(${blog.imageUrl})` }}
                  ></div>
                </Link>
                <div className="blog-info">
                  <div className="blog-about">
                    <Link to="/" className={`blog-tag tag-${blog.label}`}>
                      {blog.label}
                    </Link>
                    <div className="blog-time">
                      <IoMdCalendar />
                      {blog.date}
                    </div>
                  </div>
                  <h1 className="blog-title">{blog.title}</h1>
                  <div className="blog-creator">
                    <IoIosPerson /> <Link to="/">{blog.author}</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Blog;
