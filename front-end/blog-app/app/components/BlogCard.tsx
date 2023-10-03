import Link from 'next/link';
import React from 'react'

interface BlogCardProps {
    title: string;
    author: string;
    date: string;
    imgUrl: string;
    summary?: string | null;
  }
  
  const BlogCard: React.FC<BlogCardProps> = ({
    title,
    author,
    date,
    imgUrl,
    summary,
  }) => {
    return (
      <Link href={`/${date}`} className="w-64 flex flex-col gap-4 cursor-pointer">
      <img src={imgUrl} alt="" className="w-full h-40 object-cover rounded" />
      <h4 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        {title}
      </h4>
      <p className="text-sm text-gray-500">{summary && summary}</p>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <p className="text-xs font-bold text-gray-500">{author}</p>
          <p className="text-xs font-semibold text-gray-600">{date}</p>
        </div>
      </div>
    </Link>
    );
  };
  
  export default BlogCard;
