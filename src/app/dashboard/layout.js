"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { logoutAdmin } from "../../lib/actions/authActions";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  async function handleLogout() {
    setLoading(true);
    console.log("sdfsdfg");
    const result = await logoutAdmin();

    if (result.success) {
      router.push("/login");
      router.refresh();
    }
    setLoading(false);
  }

  const isActive = (path) => pathname === path;

  const menuItems = [
    { label: "Dashboard", path: "/dashboard", icon: "📊" },
    { label: "Blogs", path: "/dashboard/blogs", icon: "📝" },
    { label: "Contacts", path: "/dashboard/contacts", icon: "💬" },
    { label: "Subscribers", path: "/dashboard/subscribers", icon: "📧" },
  ];

  return (
    <div className='min-h-screen bg-gray-50 flex'>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className='p-6 border-b border-gray-700'>
          <h1 className='text-2xl font-bold'>DIS Admin</h1>
        </div>

        <nav className='p-4 space-y-2'>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                isActive(item.path)
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className='absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700'>
          <button
            onClick={handleLogout}
            disabled={loading}
            className='w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition disabled:opacity-50'
          >
            <span>🚪</span>
            <span>{loading ? "Logging out..." : "Logout"}</span>
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-40 lg:hidden'
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className='flex-1 flex flex-col'>
        {/* Header */}
        <header className='bg-white border-b border-gray-200 px-6 py-4 lg:py-6 flex items-center justify-between'>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className='lg:hidden p-2 rounded-lg hover:bg-gray-100'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>

          <div className='flex-1 text-center lg:text-left lg:ml-8'>
            <h2 className='text-xl font-bold text-gray-900'>Dashboard</h2>
          </div>

          <div className='text-right text-sm text-gray-600'>
            <p>Logged in</p>
          </div>
        </header>

        {/* Page Content */}
        <div className='flex-1 overflow-auto'>
          <div className='p-4 lg:p-8'>{children}</div>
        </div>
      </main>
    </div>
  );
}
