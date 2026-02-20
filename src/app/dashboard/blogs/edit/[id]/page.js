"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  getBlogById,
  updateBlog,
} from "../../../../../lib/actions/blogActions";
import Link from "next/link";
import dynamic from "next/dynamic";
import ImageUploader from "../../../../../components/ImageUploader";

const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  {
    ssr: false,
    loading: () => <p>Loading editor...</p>,
  },
);

export default function EditBlogPage({ params }) {
  const { id } = params;
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    loadBlog();
  }, [id]);

  async function loadBlog() {
    const result = await getBlogById(id);

    if (result.success && result.blog) {
      setFormData(result.blog);
    } else {
      setError(result.error || "Failed to load blog");
    }
    setLoading(false);
  }

  function handleThumbnailUpload(url) {
    if (formData) {
      setFormData({ ...formData, thumbnail: url });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData) return;

    if (!formData.thumbnail) {
      setError("Thumbnail is required");
      return;
    }

    setError("");
    setSaving(true);

    const result = await updateBlog(id, {
      title: formData.title,
      description: formData.description,
      content: formData.content,
      thumbnail: formData.thumbnail,
      metaKey: formData.metaKey,
      metaDesc: formData.metaDesc,
      status: formData.status,
    });

    if (result.success) {
      router.push("/dashboard/blogs");
      router.refresh();
    } else {
      setError(result.error || "Failed to update blog");
      setSaving(false);
    }
  }

  if (loading) {
    return <div className='text-center py-8'>Loading blog...</div>;
  }

  if (!formData) {
    return (
      <div className='text-center py-8'>
        <p className='text-red-600'>{error || "Blog not found"}</p>
        <Link
          href='/dashboard/blogs'
          className='text-[#0997e9] hover:underline mt-4 inline-block'
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className='flex items-center gap-4 mb-8'>
        <Link
          href='/dashboard/blogs'
          className='text-gray-600 hover:text-gray-900'
        >
          ← Back to Blogs
        </Link>
        <h1 className='text-4xl font-bold text-gray-900'>Edit Blog</h1>
      </div>

      {error && (
        <div className='mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded'>
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className='bg-white rounded-lg shadow p-8 max-w-4xl'
      >
        <div className='space-y-6'>
          <div>
            <label className='block text-sm font-medium text-gray-900 mb-2'>
              Title *
            </label>
            <input
              type='text'
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0997e9] focus:border-transparent outline-none'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-900 mb-2'>
              Thumbnail Image *
            </label>
            {formData.thumbnail && (
              <div className='mb-4'>
                <p className='text-sm text-gray-600 mb-2'>Current thumbnail:</p>
                <img
                  src={formData.thumbnail}
                  alt='Current thumbnail'
                  className='w-full max-w-md h-64 object-cover rounded-lg border border-gray-300'
                />
              </div>
            )}
            <ImageUploader
              onUpload={handleThumbnailUpload}
              label='Replace Thumbnail'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-900 mb-2'>
              Description *
            </label>
            <Editor
              value={formData.description}
              onEditorChange={(content) =>
                setFormData({ ...formData, description: content })
              }
              apiKey='85y33d08bi5k84w3nxa07aq607ko8v165dau2joyygooce9j'
              init={{
                height: 250,
                menubar: true,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              }}
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-900 mb-2'>
              Content
            </label>
            <textarea
              value={formData.content || ""}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              rows={8}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0997e9] focus:border-transparent outline-none font-mono text-sm'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-900 mb-2'>
              Meta Keywords
            </label>
            <input
              type='text'
              value={formData.metaKey || ""}
              onChange={(e) =>
                setFormData({ ...formData, metaKey: e.target.value })
              }
              placeholder='keywords, for, seo'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0997e9] focus:border-transparent outline-none'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-900 mb-2'>
              Meta Description
            </label>
            <textarea
              value={formData.metaDesc || ""}
              onChange={(e) =>
                setFormData({ ...formData, metaDesc: e.target.value })
              }
              placeholder='Description for search engines'
              rows={2}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0997e9] focus:border-transparent outline-none'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-900 mb-2'>
              Status *
            </label>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value,
                })
              }
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0997e9] focus:border-transparent outline-none'
            >
              <option value='draft'>Draft</option>
              <option value='published'>Published</option>
            </select>
          </div>

          <div className='border-t pt-6'>
            <h3 className='text-lg font-semibold text-gray-900 mb-4'>
              Image Upload Utility
            </h3>
            <p className='text-sm text-gray-600 mb-4'>
              Upload images here to get their CloudFront URLs, then paste them
              into TinyMCE editor
            </p>
            <ImageUploader label='Upload Editor Images' />
          </div>

          <div className='flex gap-4 pt-4'>
            <button
              type='submit'
              disabled={saving}
              className='bg-[#0997e9] text-white px-6 py-2 rounded hover:bg-cyan-700 transition disabled:opacity-50'
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
            <Link
              href='/dashboard/blogs'
              className='px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition'
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
