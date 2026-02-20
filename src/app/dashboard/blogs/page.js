"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getBlogs, deleteBlog } from "../../../lib/actions/blogActions";
import Link from "next/link";
import TableToolbar from "../../../components/shared/TableToolbar";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc");
  const [pagination, setPagination] = useState({
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
  });
  const router = useRouter();

  useEffect(() => {
    loadBlogs();
  }, [page, search, sort, limit]);

  async function loadBlogs() {
    setLoading(true);
    setError("");
    const result = await getBlogs({ page, limit, search, sort });

    if (result.success) {
      setBlogs(result.blogs);
      setPagination(result.pagination);
    } else {
      setError(result.error);
      setBlogs([]);
    }
    setLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      let result;
      if (editingId) {
        result = await updateBlog(editingId, formData);
      } else {
        result = await createBlog(formData);
      }

      if (result.success) {
        setShowForm(false);
        setEditingId(null);
        setFormData({
          title: "",
          description: "",
          content: "",
          status: "draft",
        });
        loadBlogs();
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError("An error occurred");
    }
  }

  async function handleEdit(blog) {
    setEditingId(blog._id);
    setFormData({
      title: blog.title,
      description: blog.description,
      content: blog.content,
      status: blog.status,
    });
    setShowForm(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      let result;
      if (editingId) {
        result = await updateBlog(editingId, formData);
      } else {
        result = await createBlog(formData);
      }

      if (result.success) {
        setShowForm(false);
        setEditingId(null);
        setFormData({
          title: "",
          description: "",
          content: "",
          status: "draft",
        });
        loadBlogs();
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError("An error occurred");
    }
  }

  async function handleEdit(blog) {
    setEditingId(blog._id);
    setFormData({
      title: blog.title,
      description: blog.description,
      content: blog.content,
      status: blog.status,
    });
    setShowForm(true);
  }

  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    const result = await deleteBlog(id);

    if (result.success) {
      setBlogs(blogs.filter((b) => b._id !== id));
      setPagination((prev) => ({
        ...prev,
        totalCount: prev.totalCount - 1,
      }));
    } else {
      setError(result.error);
    }
  }

  return (
    <div>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-4xl font-bold text-gray-900'>Blogs</h1>
        <Link
          href='/dashboard/blogs/create'
          className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'
        >
          + New Blog
        </Link>
      </div>

      {error && (
        <div className='mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded'>
          {error}
        </div>
      )}

      {/* Filters */}
      <div className='bg-white rounded-lg shadow p-6 mb-6'>
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
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className='text-center py-12 text-gray-600'>Loading blogs...</div>
      ) : blogs.length === 0 ? (
        <div className='bg-white rounded-lg shadow p-8 text-center'>
          <p className='text-gray-600'>No blogs found.</p>
        </div>
      ) : (
        <div className='bg-white rounded-lg shadow overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-100 border-b'>
                <tr>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                    Thumbnail
                  </th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                    Title & Details
                  </th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                    Status
                  </th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                    Date
                  </th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr
                    key={blog._id}
                    className='border-b hover:bg-gray-50 transition'
                  >
                    <td className='px-6 py-4 text-sm'>
                      {blog.thumbnail ? (
                        <img
                          src={blog.thumbnail}
                          alt={blog.title}
                          className='w-16 h-16 rounded object-cover border border-gray-200'
                        />
                      ) : (
                        <div className='w-16 h-16 rounded bg-gray-200 flex items-center justify-center text-xs text-gray-500'>
                          No image
                        </div>
                      )}
                    </td>
                    <td className='px-6 py-4'>
                      <div className='space-y-1'>
                        <p className='text-sm font-semibold text-gray-900'>
                          {blog.title}
                        </p>
                        <p className='text-xs text-gray-600 line-clamp-2'>
                          {blog.description
                            .replace(/<[^>]*>/g, "")
                            .substring(0, 100)}
                          ...
                        </p>
                        {blog.metaKey && (
                          <p className='text-xs text-blue-600'>
                            Keywords: {blog.metaKey.substring(0, 50)}...
                          </p>
                        )}
                      </div>
                    </td>
                    <td className='px-6 py-4 text-sm'>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          blog.status === "published"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {blog.status}
                      </span>
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-600'>
                      <div className='space-y-1'>
                        <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
                        <p className='text-xs text-gray-500'>
                          {new Date(blog.createdAt).toLocaleTimeString()}
                        </p>
                      </div>
                    </td>
                    <td className='px-6 py-4 text-sm'>
                      <TableToolbar>
                        <Link
                          href={`/blogs/${blog.slug}`}
                          target='_blank'
                          className='inline-flex items-center justify-center bg-green-600 text-white p-2 rounded hover:bg-green-700 transition'
                          title='View blog'
                        >
                          <svg
                            className='w-4 h-4'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                            />
                          </svg>
                        </Link>
                        <Link
                          href={`/dashboard/blogs/edit/${blog._id}`}
                          className='inline-block bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition text-xs'
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className='inline-block bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-xs'
                        >
                          Delete
                        </button>
                      </TableToolbar>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className='bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between'>
            <div className='text-sm text-gray-600'>
              Page {pagination.currentPage} of {pagination.totalPages}
            </div>
            <div className='space-x-2'>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setPage((p) => Math.min(pagination.totalPages, p + 1))
                }
                disabled={page === pagination.totalPages}
                className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
