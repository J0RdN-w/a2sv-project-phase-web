import BlogCard from "./components/BlogCard";
import data from "./data.json";
import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-8">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        J0RdN's Blog Card App
      </h2>
      <section className="flex gap-8 flex-wrap justify-center">
        <BlogCards />
      </section>    </main>
  )
}

const BlogCards = function () {
  return data.map((data) => {
    return <BlogCard {...data} key={data.title}/>
  });
};
