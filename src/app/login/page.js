"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "../../lib/actions/authActions";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await loginAdmin(email, password);

      if (result.success) {
        router.push("/dashboard");
      } else {
        setError(result.error || "Login failed");
      }
    } catch (err) {
      setError("An error occurred during login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0997e9] to-cyan-600 px-4'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-lg p-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2 text-center'>
          Admin Login
        </h1>
        <p className='text-gray-600 text-center mb-8'>
          Digital IT Solutions Dashboard
        </p>

        {error && (
          <div className='mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded'>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Email
            </label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='admin@dis.com'
              required
              disabled={loading}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0997e9] focus:border-transparent outline-none disabled:bg-gray-100'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Password
            </label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='••••••••'
              required
              disabled={loading}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0997e9] focus:border-transparent outline-none disabled:bg-gray-100'
            />
          </div>

          <button
            type='submit'
            disabled={loading}
            className='w-full bg-[#0997e9] hover:bg-cyan-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className='mt-6 p-4 bg-blue-50 rounded border border-blue-200 text-sm text-gray-700'>
          <p className='font-semibold mb-2'>Demo Credentials:</p>
          <p>Email: admin@dis.com</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </div>
  );
}
