"use client";

import { useState, useEffect } from "react";
import {
  getSubscribers,
  deleteSubscriber,
} from "../../../lib/actions/subscriberActions";
import TableToolbar from "../../../components/shared/TableToolbar";

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState([]);
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

  useEffect(() => {
    loadSubscribers();
  }, [page, search, sort, limit]);

  async function loadSubscribers() {
    setLoading(true);
    setError("");
    const result = await getSubscribers({ page, limit, search, sort });

    if (result.success) {
      setSubscribers(result.subscribers);
      setPagination(result.pagination);
    } else {
      setError(result.error);
      setSubscribers([]);
    }
    setLoading(false);
  }

  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this subscriber?")) return;

    const result = await deleteSubscriber(id);

    if (result.success) {
      setSubscribers(subscribers.filter((s) => s._id !== id));
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
        <h1 className='text-4xl font-bold text-gray-900'>Subscribers</h1>
        <div className='text-sm text-gray-600'>
          Total: {pagination.totalCount}
        </div>
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
              placeholder='Search by email...'
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
        <div className='text-center py-12 text-gray-600'>
          Loading subscribers...
        </div>
      ) : subscribers.length === 0 ? (
        <div className='bg-white rounded-lg shadow p-8 text-center'>
          <p className='text-gray-600'>No subscribers found.</p>
        </div>
      ) : (
        <div className='bg-white rounded-lg shadow overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-100 border-b'>
                <tr>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                    Email
                  </th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                    Subscribed Date
                  </th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((subscriber) => (
                  <tr
                    key={subscriber._id}
                    className='border-b hover:bg-gray-50 transition'
                  >
                    <td className='px-6 py-4 text-sm text-gray-900 font-medium'>
                      {subscriber.email}
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-600'>
                      {new Date(subscriber.createdAt).toLocaleDateString()}
                    </td>
                    <td className='px-6 py-4 text-sm'>
                      <TableToolbar>
                        <button
                          onClick={() => handleDelete(subscriber._id)}
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
