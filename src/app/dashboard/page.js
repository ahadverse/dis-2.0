"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllBlogs } from "../../lib/actions/blogActions";
import { getContacts } from "../../lib/actions/contactActions";
import { getSubscribers } from "../../lib/actions/subscriberActions";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    blogs: 0,
    contacts: 0,
    subscribers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      const [blogsResult, contactsResult, subscribersResult] =
        await Promise.all([
          getAllBlogs(),
          getContacts({ limit: 1 }),
          getSubscribers({ limit: 1 }),
        ]);

      setStats({
        blogs: blogsResult.blogs?.length || 0,
        contacts: contactsResult.pagination?.totalCount || 0,
        subscribers: subscribersResult.pagination?.totalCount || 0,
      });
      setLoading(false);
    }

    loadStats();
  }, []);

  const statCards = [
    {
      label: "Total Blogs",
      value: stats.blogs,
      icon: "📝",
      link: "/dashboard/blogs",
      color: "blue",
    },
    {
      label: "Contact Messages",
      value: stats.contacts,
      icon: "💬",
      link: "/dashboard/contacts",
      color: "green",
    },
    {
      label: "Subscribers",
      value: stats.subscribers,
      icon: "📧",
      link: "/dashboard/subscribers",
      color: "purple",
    },
  ];

  return (
    <div>
      <h1 className='text-4xl font-bold text-gray-900 mb-8'>Dashboard</h1>

      {loading ? (
        <div className='text-center py-12 text-gray-600'>
          Loading statistics...
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          {statCards.map((card) => (
            <Link
              key={card.label}
              href={card.link}
              className={`p-6 rounded-lg shadow hover:shadow-lg transition bg-${card.color}-50 border border-${card.color}-200`}
            >
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-gray-600 text-sm'>{card.label}</p>
                  <p className='text-4xl font-bold text-gray-900 mt-2'>
                    {card.value}
                  </p>
                </div>
                <div className='text-5xl'>{card.icon}</div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className='bg-white rounded-lg shadow p-6'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>Quick Actions</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Link
            href='/dashboard/blogs'
            className='p-4 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition font-semibold'
          >
            View Blogs
          </Link>
          <Link
            href='/dashboard/contacts'
            className='p-4 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition font-semibold'
          >
            View Contacts
          </Link>
          <Link
            href='/dashboard/subscribers'
            className='p-4 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition font-semibold'
          >
            View Subscribers
          </Link>
        </div>
      </div>
    </div>
  );
}
