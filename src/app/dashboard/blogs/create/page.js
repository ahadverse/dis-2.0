"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBlog } from "../../../../lib/actions/blogActions";
import Link from "next/link";
import dynamic from "next/dynamic";
import ImageUploader from "../../../../components/ImageUploader";

const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  {
    ssr: false,
    loading: () => <p>Loading editor...</p>,
  },
);

export default function CreateBlogPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    thumbnail: "",
    metaKey: "",
    metaDesc: "",
    status: "draft",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showImageModal, setShowImageModal] = useState(false);
  const router = useRouter();

  function handleThumbnailUpload(url) {
    setFormData({ ...formData, thumbnail: url });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!formData.thumbnail) {
      setError("Please upload a thumbnail image");
      return;
    }

    setLoading(true);

    const result = await createBlog(formData);

    if (result.success) {
      router.push("/dashboard/blogs");
      router.refresh();
    } else {
      setError(result.error || "Failed to create blog");
      setLoading(false);
    }
  }

  return (
    <div>
      <div className='flex items-center gap-4 mb-8'>
        <h1 className='text-4xl font-bold text-gray-900'>Create Blog</h1>
        <Link
          href='/dashboard/blogs'
          className='text-gray-600 hover:text-gray-900'
        >
          ← Back to Blogs
        </Link>
      </div>
      <button
        type='button'
        onClick={() => setShowImageModal(true)}
        className='bg-blue-600 mb-2 block w-fit ml-auto text-white px-4 py-2 rounded hover:bg-blue-700 transition'
      >
        Extra Image
      </button>
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
              placeholder='Blog title'
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0997e9] focus:border-transparent outline-none'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-900 mb-2'>
              Thumbnail Image *
            </label>
            <ImageUploader
              onUpload={handleThumbnailUpload}
              label='Upload Thumbnail'
              type='thumbnail'
            />
            {formData.thumbnail && (
              <p className='text-sm text-green-600 mt-2'>
                ✓ Thumbnail uploaded
              </p>
            )}
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
              apiKey='fweame5ml6okghqs37ay15w0ts6vyvg3vpb0l1gqeg3hv844'
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
              Meta Keywords
            </label>
            <input
              type='text'
              value={formData.metaKey}
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
              value={formData.metaDesc}
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

          <div className='flex gap-4 pt-4'>
            <button
              type='submit'
              disabled={loading}
              className='bg-[#0997e9] text-white px-6 py-2 rounded hover:bg-cyan-700 transition disabled:opacity-50'
            >
              {loading ? "Creating..." : "Create Blog"}
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
      {/* Image Upload Modal */}
      {showImageModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg shadow-xl p-8 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto'>
            <div className='flex items-center justify-between mb-6'>
              <h2 className='text-2xl font-bold text-gray-900'>
                Upload Images
              </h2>
              <button
                onClick={() => setShowImageModal(false)}
                className='text-gray-500 hover:text-gray-700 text-2xl font-bold'
              >
                ✕
              </button>
            </div>

            <p className='text-sm text-gray-600 mb-6'>
              Upload images here to get their CloudFront URLs, then copy and
              paste them into the TinyMCE editor.
            </p>

            <ImageUploader label='Upload Editor Images' />

            <button
              onClick={() => setShowImageModal(false)}
              className='w-full mt-6 bg-[#0997e9] text-white px-4 py-2 rounded hover:bg-cyan-700 transition'
            >
              Close
            </button>
          </div>
        </div>
      )}{" "}
    </div>
  );
}
