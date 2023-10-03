import React from 'react'
import data from "../data.json";

interface BlogCard {
  title: string;
  author: string;
  date: string;
  imgUrl: string;
  summary?: string | null;
}

const Page = ({ params }: { params: { id: string } }) => {
  const post = data.find((d: BlogCard) => d.date == params.id);  

  return (
<main className="flex min-h-screen flex-col items-center justify-between p-24 gap-8">
<img src={post?.imgUrl} alt="" className="w-full h-40 object-cover rounded" />
      <h4 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        {post?.title}
      </h4>
      <p className="text-sm text-gray-500">{post?.summary && post?.summary}</p>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <p className="text-xs font-bold text-gray-500">{post?.author}</p>
          <p className="text-xs font-semibold text-gray-600">{post?.date}</p>
        </div>
      </div>    </main>
  )
}

export default Page