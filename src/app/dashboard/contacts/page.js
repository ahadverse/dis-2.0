"use client";

import { useState, useEffect } from "react";
import {
  getContacts,
  markContactAsReplied,
  deleteContact,
} from "../../../lib/actions/contactActions";
import { FaReply } from "react-icons/fa6";
import { Trash, TrashIcon, Eye, X } from "lucide-react";
import TableToolbar from "../../../components/shared/TableToolbar";

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc");
  const [selectedContact, setSelectedContact] = useState(null);
  const [pagination, setPagination] = useState({
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
  });

  useEffect(() => {
    loadContacts();
  }, [page, search, sort, limit]);

  async function loadContacts() {
    setLoading(true);
    setError("");
    const result = await getContacts({ page, limit, search, sort });

    if (result.success) {
      setContacts(result.contacts);
      setPagination(result.pagination);
    } else {
      setError(result.error);
      setContacts([]);
    }
    setLoading(false);
  }

  async function handleMarkReplied(id) {
    const result = await markContactAsReplied(id);

    if (result.success) {
      setContacts(
        contacts.map((c) => (c._id === id ? { ...c, replied: true } : c)),
      );
    } else {
      setError(result.error);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this contact?")) return;

    const result = await deleteContact(id);

    if (result.success) {
      setContacts(contacts.filter((c) => c._id !== id));
      setPagination((prev) => ({
        ...prev,
        totalCount: prev.totalCount - 1,
      }));
    } else {
      setError(result.error);
    }
  }

  return (
    <div className='p-6'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4'>
        <h1 className='text-4xl font-bold text-gray-900'>Contacts</h1>
        <div className='text-sm text-gray-600'>
          Total: {pagination.totalCount}
        </div>
      </div>

      {error && (
        <div className='mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded'>
          {error}
        </div>
      )}

      {/* View Contact Modal */}
      {selectedContact && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center'>
              <h2 className='text-2xl font-bold text-gray-900'>
                Contact Details
              </h2>
              <button
                onClick={() => setSelectedContact(null)}
                className='text-gray-500 hover:text-gray-700 transition'
              >
                <X size={24} />
              </button>
            </div>
            <div className='p-6 space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-semibold text-gray-500 mb-1'>
                    NAME
                  </label>
                  <p className='text-base text-gray-900 font-medium'>
                    {selectedContact.name}
                  </p>
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-500 mb-1'>
                    EMAIL
                  </label>
                  <p className='text-base text-gray-900 break-all'>
                    {selectedContact.email}
                  </p>
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-500 mb-1'>
                    PHONE NUMBER
                  </label>
                  <p className='text-base text-gray-900'>
                    {selectedContact.phone || "Not provided"}
                  </p>
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-500 mb-1'>
                    STATUS
                  </label>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      selectedContact.replied
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {selectedContact.replied ? "Replied" : "Pending"}
                  </span>
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-500 mb-1'>
                    APPOINTMENT DATE
                  </label>
                  <p className='text-base text-gray-900'>
                    {selectedContact.date || "Not scheduled"}
                  </p>
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-500 mb-1'>
                    APPOINTMENT TIME
                  </label>
                  <p className='text-base text-gray-900'>
                    {selectedContact.time || "Not scheduled"}
                  </p>
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-500 mb-1'>
                    SUBMITTED ON
                  </label>
                  <p className='text-base text-gray-900'>
                    {new Date(selectedContact.createdAt).toLocaleString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      },
                    )}
                  </p>
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-500 mb-1'>
                    LAST UPDATED
                  </label>
                  <p className='text-base text-gray-900'>
                    {new Date(
                      selectedContact.updatedAt || selectedContact.createdAt,
                    ).toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
              <div>
                <label className='block text-sm font-semibold text-gray-500 mb-1'>
                  MESSAGE
                </label>
                <p className='text-base text-gray-900 bg-gray-50 p-4 rounded-lg whitespace-pre-wrap'>
                  {selectedContact.message || "No message provided"}
                </p>
              </div>
              <div className='pt-4 border-t'>
                <TableToolbar className='w-full gap-3'>
                  {!selectedContact.replied && (
                    <button
                      onClick={() => {
                        handleMarkReplied(selectedContact._id);
                        setSelectedContact({
                          ...selectedContact,
                          replied: true,
                        });
                      }}
                      className='flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition'
                    >
                      <FaReply /> Mark as Replied
                    </button>
                  )}
                  <a
                    href={`mailto:${selectedContact.email}`}
                    className='flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'
                  >
                    <FaReply /> Send Email
                  </a>
                  <div className='ml-auto'>
                    <TableToolbar>
                      <button
                        onClick={() => {
                          handleDelete(selectedContact._id);
                          setSelectedContact(null);
                        }}
                        className='flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition'
                      >
                        <TrashIcon size={16} /> Delete
                      </button>
                    </TableToolbar>
                  </div>
                </TableToolbar>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className='bg-white rounded-lg shadow p-4 md:p-6 mb-6'>
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
              placeholder='Search by name or email...'
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
          Loading contacts...
        </div>
      ) : contacts.length === 0 ? (
        <div className='bg-white rounded-lg shadow p-8 text-center'>
          <p className='text-gray-600'>No contact messages found.</p>
        </div>
      ) : (
        <div className='bg-white rounded-lg shadow overflow-hidden'>
          {/* Desktop Table */}
          <div className='hidden md:block overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-100 border-b'>
                <tr>
                  <th className='px-3 py-4 text-left text-sm font-semibold text-gray-900'>
                    Name
                  </th>
                  <th className='px-3 py-4 text-left text-sm font-semibold text-gray-900'>
                    Email
                  </th>
                  <th className='px-3 py-4 text-left text-sm font-semibold text-gray-900'>
                    Phone
                  </th>

                  <th className='px-3 py-4 text-left text-sm font-semibold text-gray-900'>
                    Appointment
                  </th>
                  <th className='px-3 py-4 text-left text-sm font-semibold text-gray-900'>
                    Status
                  </th>
                  <th className='px-3 py-4 text-left text-sm font-semibold text-gray-900'>
                    Submitted
                  </th>
                  <th className='px-3 py-4 text-left text-sm font-semibold text-gray-900'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr
                    key={contact._id}
                    className='border-b hover:bg-gray-50 transition'
                  >
                    <td className='px-3 py-4 text-sm text-gray-900 font-medium w-[150px] '>
                      {contact.name}
                    </td>
                    <td className='px-3 py-4 text-sm text-gray-600'>
                      {contact.email}
                    </td>
                    <td className='px-3 py-4 w-[150px] text-sm text-gray-600'>
                      {contact.phone || "N/A"}
                    </td>
                    <td className='px-3 py-4 text-sm text-gray-600'>
                      {contact.date && contact.time ? (
                        <div className='flex flex-col'>
                          <span className='font-medium'>{contact.date}</span>
                          <span className='text-xs text-gray-500'>
                            {contact.time}
                          </span>
                        </div>
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td className='px-3 py-4 text-sm'>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          contact.replied
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {contact.replied ? "Replied" : "Pending"}
                      </span>
                    </td>
                    <td className='px-3 py-4 text-sm text-gray-600'>
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </td>
                    <td className='px-2 py-2 text-sm'>
                      <TableToolbar>
                        <button
                          onClick={() => setSelectedContact(contact)}
                          className='inline-block bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700 transition text-xs'
                          title='View Details'
                        >
                          <Eye size={14} />
                        </button>
                        {!contact.replied && (
                          <button
                            onClick={() => handleMarkReplied(contact._id)}
                            className='inline-block bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 transition text-xs'
                          >
                            <FaReply />
                          </button>
                        )}
                        <a
                          href={`mailto:${contact.email}`}
                          className='inline-block bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition text-xs'
                        >
                          <FaReply />
                        </a>
                        <button
                          onClick={() => handleDelete(contact._id)}
                          className='inline-block bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition text-xs'
                        >
                          <TrashIcon size={14} />
                        </button>
                      </TableToolbar>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className='md:hidden'>
            <div className='space-y-4 p-4'>
              {contacts.map((contact) => (
                <div
                  key={contact._id}
                  className='border border-gray-200 rounded-lg p-4 hover:shadow-md transition'
                >
                  <div className='space-y-3'>
                    <div>
                      <p className='text-xs text-gray-500 font-semibold'>
                        NAME
                      </p>
                      <p className='text-sm font-bold text-gray-900'>
                        {contact.name}
                      </p>
                    </div>
                    <div>
                      <p className='text-xs text-gray-500 font-semibold'>
                        EMAIL
                      </p>
                      <p className='text-sm text-gray-600'>{contact.email}</p>
                    </div>
                    {contact.phone && (
                      <div>
                        <p className='text-xs text-gray-500 font-semibold'>
                          PHONE
                        </p>
                        <p className='text-sm text-gray-600'>{contact.phone}</p>
                      </div>
                    )}
                    <div>
                      <p className='text-xs text-gray-500 font-semibold'>
                        MESSAGE
                      </p>
                      <p className='text-sm text-gray-600 line-clamp-2'>
                        {contact.message}
                      </p>
                    </div>
                    {contact.date && contact.time && (
                      <div>
                        <p className='text-xs text-gray-500 font-semibold'>
                          APPOINTMENT
                        </p>
                        <p className='text-sm text-gray-600'>
                          {contact.date} at {contact.time}
                        </p>
                      </div>
                    )}
                    <div className='flex justify-between items-start'>
                      <div>
                        <p className='text-xs text-gray-500 font-semibold'>
                          STATUS
                        </p>
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                            contact.replied
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {contact.replied ? "Replied" : "Pending"}
                        </span>
                      </div>
                      <div>
                        <p className='text-xs text-gray-500 font-semibold'>
                          SUBMITTED
                        </p>
                        <p className='text-sm text-gray-600'>
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className='pt-2'>
                      <TableToolbar className='w-full flex-wrap gap-2'>
                        <button
                          onClick={() => setSelectedContact(contact)}
                          className='bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700 transition text-xs font-medium'
                        >
                          View Details
                        </button>
                        {!contact.replied && (
                          <button
                            onClick={() => handleMarkReplied(contact._id)}
                            className='bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition text-xs font-medium'
                          >
                            Mark Replied
                          </button>
                        )}
                        <a
                          href={`mailto:${contact.email}`}
                          className='bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition text-xs font-medium text-center'
                        >
                          Reply
                        </a>
                        <button
                          onClick={() => handleDelete(contact._id)}
                          className='bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-xs font-medium'
                        >
                          Delete
                        </button>
                      </TableToolbar>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className='bg-gray-50 px-4 md:px-6 py-4 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4'>
            <div className='text-sm text-gray-600'>
              Page {pagination.currentPage} of {pagination.totalPages}
            </div>
            <div className='flex gap-2 flex-wrap justify-center md:justify-end'>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm'
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setPage((p) => Math.min(pagination.totalPages, p + 1))
                }
                disabled={page === pagination.totalPages}
                className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm'
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
