import { getBlogBySlug } from "../../../lib/actions/blogActions";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const result = await getBlogBySlug(slug);

  if (!result.success || !result.blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const blog = result.blog;
  return {
    title: blog.title,
    description: blog.metaDesc || blog.description,
    keywords: blog.metaKey,
    openGraph: {
      title: blog.title,
      description: blog.metaDesc || blog.description,
      images: blog.thumbnail ? [blog.thumbnail] : [],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = params;
  const result = await getBlogBySlug(slug);

  if (!result.success || !result.blog) {
    return (
      <div className='min-h-screen flex items-center justify-center px-4'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Blog Not Found
          </h1>
          <p className='text-gray-600 mb-8'>
            The blog post you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Link
            href='/blogs'
            className='inline-block bg-[#0997e9] text-white px-6 py-2 rounded hover:bg-cyan-700 transition'
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const blog = result.blog;

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <article className='max-w-4xl mx-auto'>
        <div className='mb-6'>
          <Link
            href='/blogs'
            className='text-[#0997e9] hover:underline text-sm font-medium'
          >
            ← Back to Blogs
          </Link>
        </div>

        {blog.thumbnail && (
          <div className='w-full h-96 mb-8 rounded-lg overflow-hidden'>
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className='w-full h-full object-cover'
            />
          </div>
        )}

        <header className='mb-8'>
          <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
            {blog.title}
          </h1>

          <div className='flex flex-wrap gap-4 text-sm text-gray-600'>
            <span>
              Published:{" "}
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            {blog.metaKey && (
              <span className='text-gray-500'>Tags: {blog.metaKey}</span>
            )}
          </div>
        </header>

        <div className='bg-white rounded-lg shadow p-8 sm:p-12'>
          <section className='mb-12'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>Overview</h2>
            <div
              className='text-gray-700 leading-relaxed'
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
          </section>

          {blog.content && (
            <section>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>Details</h2>
              <div className='text-gray-700 leading-relaxed whitespace-pre-wrap'>
                {blog.content}
              </div>
            </section>
          )}

          <div className='mt-12 pt-8 border-t'>
            <Link
              href='/blogs'
              className='inline-block bg-[#0997e9] text-white px-6 py-2 rounded hover:bg-cyan-700 transition'
            >
              ← Back to All Blogs
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
