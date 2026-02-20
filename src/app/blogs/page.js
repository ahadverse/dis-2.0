"use client";
import Blog from "../../components/blogs/blog";
import Subcribe from "../../components/subscribe/subcribe";
import { getBlogs } from "../../lib/actions/blogActions";
import { Pagination } from "@mantine/core";
import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc");
  const [pagination, setPagination] = useState({
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
  });

  useEffect(() => {
    loadBlogs();
  }, [page, limit, search, sort]);

  async function loadBlogs() {
    setLoading(true);
    const result = await getBlogs({ page, limit, search, sort });
    console.log("Blogs result:", result);
    if (result.success) {
      setData(result.blogs);
      setPagination(result.pagination);
    } else {
      console.error(result.error);
    }
    setLoading(false);
  }

  if (loading) {
    return <div className='text-center py-8'>Loading blogs...</div>;
  }

  return (
    <div
      className='py-16'
      style={{
        background:
          "linear-gradient(284deg,rgb(75, 184, 247) -13.73%, #E0F2FE 84.32%)",
      }}
    >
      <h1 className='text-4xl text-center font-bold'>
        What Insights Are Hidden in Our Blogs?
      </h1>
      <p className='text-lg text-center mt-5'>
        Our blogs are treasure troves of wisdom, from cutting-edge web
        development techniques <br /> to innovative maintenance strategies.
      </p>
      {/* Filters */}
      <div className='w-full max-w-6xl mx-auto px-4 mt-8 mb-8'>
        <div className='bg-white rounded-lg shadow p-4 md:p-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Search
              </label>
              <input
                type='text'
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder='Search by title...'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Sort
              </label>
              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setPage(1);
                }}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
              >
                <option value='desc'>Newest First</option>
                <option value='asc'>Oldest First</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Page Size
              </label>
              <select
                value={limit}
                onChange={(e) => {
                  setLimit(parseInt(e.target.value));
                  setPage(1);
                }}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
              >
                <option value={3}>3</option>
                <option value={6}>6</option>
                <option value={9}>9</option>
                <option value={12}>12</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Blogs Grid */}
      {data.length === 0 ? (
        <div className='text-center py-8 text-gray-600'>
          No blogs found. Try adjusting your search or filters.
        </div>
      ) : (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4'>
            {data?.map((blog) => (
              <Blog key={blog?._id} blog={blog} />
            ))}
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className='flex justify-center mt-16'>
              <Pagination
                value={page}
                onChange={setPage}
                total={pagination.totalPages}
              />
            </div>
          )}
        </>
      )}
      <br /> <br />
      <Subcribe blog={true} />
      <br />
    </div>
  );
};

export default Blogs;
