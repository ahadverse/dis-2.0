"use client";

import { useState } from "react";

export default function ImageUploader({
  onUpload,
  label = "Upload Image",
  type,
}) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleFileSelect(e) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("images", files[0]);

      const response = await fetch("/api/files", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const urls = await response.json();
      const uploadedUrl = urls[0];

      setImageUrl(uploadedUrl);
      setPreview(uploadedUrl);

      if (onUpload) {
        onUpload(uploadedUrl);
      }
    } catch (err) {
      setError(err.message || "Failed to upload image");
      setImageUrl("");
      setPreview("");
    } finally {
      setLoading(false);
    }
  }

  function copyToClipboard() {
    if (imageUrl) {
      navigator.clipboard.writeText(imageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  async function handleDeleteImage() {
    if (!imageUrl) return;

    setDeleting(true);
    setError("");

    try {
      const response = await fetch("/api/files", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: imageUrl }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete image");
      }

      clearImage();
    } catch (err) {
      setError(err.message || "Failed to delete image from server");
    } finally {
      setDeleting(false);
    }
  }

  function clearImage() {
    setImageUrl("");
    setPreview("");
    setError("");
    setCopied(false);
  }

  return (
    <div className='space-y-4'>
      <div>
        <label className='block text-sm font-medium text-gray-700 mb-2'>
          {label}
        </label>
        <input
          type='file'
          accept='image/*'
          onChange={handleFileSelect}
          disabled={loading}
          className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white px-4 py-2 disabled:opacity-50'
        />
        {error && <p className='text-red-600 text-sm mt-1'>{error}</p>}
        {loading && <p className='text-blue-600 text-sm mt-1'>Uploading...</p>}
      </div>

      {preview && (
        <div className='space-y-2'>
          <div className='w-full max-w-md mx-auto relative'>
            <img
              src={preview}
              alt='Preview'
              className='w-full h-64 object-cover rounded-lg border border-gray-300'
            />
            <button
              onClick={handleDeleteImage}
              className='absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-900 transition'
              title='Close preview'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          {type !== "thumbnail" && (
            <div className='flex gap-2'>
              <input
                type='text'
                value={imageUrl}
                readOnly
                className='flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm'
              />
              <button
                onClick={copyToClipboard}
                className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm'
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
