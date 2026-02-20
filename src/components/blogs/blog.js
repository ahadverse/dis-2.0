import Link from "next/link";
import React from "react";

const Blog = ({ blog }) => {
  return (
    <div>
      {" "}
      <div className='bg-white shadow-lg shadow-cyan-500/50 rounded'>
        <img className='h-[250px] w-full rounded-t' src={blog?.thumbnail} />
        <h1 className='text-xl  font-bold mt-2 p-3'> {blog?.title}</h1>
        <button className='text-xl bg-[#0997E9] m-3 px-4 text-white mt-3'>
          <Link href={`/blogs/${blog?.slug}`}>Read More</Link>
        </button>
      </div>
    </div>
  );
};

export default Blog;
