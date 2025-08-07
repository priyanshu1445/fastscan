// pages/BlogDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { FaClock, FaUser } from "react-icons/fa";

// Example blog data
const blogs = [
  {
    id: 1,
    title: "Why NFC Is the Future of Smart Connectivity",
    author: "TechNerd",
    date: "August 1, 2025",
    image:
      "https://images.unsplash.com/photo-1581091012184-5c8d0bce62b6?auto=format&fit=crop&w=1400&q=80",
    content:
      "NFC (Near Field Communication) is revolutionizing how we connect and interact with smart devices. From quick file sharing to secure contactless payments, NFC offers seamless and efficient communication. In the near future, expect to see NFC integrated into everyday objects, making life more convenient and connected than ever.",
  },
  {
    id: 2,
    title: "5 Creative Uses of NFC Keychains",
    author: "NFC Guru",
    date: "July 25, 2025",
    image:
      "https://images.unsplash.com/photo-1602168473895-4c3c9cd5cbbf?auto=format&fit=crop&w=1400&q=80",
    content:
      "NFC keychains are more than just tech accessories. You can use them to instantly share your digital business card, automate smart home actions, or even trigger location-based reminders. These handy devices are customizable and powerful tools for tech-savvy individuals.",
  },
  {
    id: 3,
    title: "Smart Standees: The New Marketing Trend",
    author: "BrandSpark",
    date: "July 15, 2025",
    image:
      "https://images.unsplash.com/photo-1620394842997-b8d7f187c33a?auto=format&fit=crop&w=1400&q=80",
    content:
      "Smart standees with NFC capabilities are revolutionizing event marketing. Just a tap can lead attendees to landing pages, videos, or social handles. These interactive displays not only engage users but also provide valuable analytics for brands.",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000] to-[#090040] text-white">
        <h1 className="text-3xl font-semibold">🚧 Blog Coming Soon</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#090040] text-white px-4 md:px-10 py-16 font-sans">
      <div className="max-w-4xl mx-auto bg-[#0f0f3d] rounded-xl shadow-lg overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 md:p-10">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-400 mb-6 gap-2 sm:gap-6">
            <div className="flex items-center gap-2">
              <FaUser className="text-[#ffba08]" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-[#ffba08]" />
              <span>{blog.date}</span>
            </div>
          </div>
          <p className="text-lg leading-7 text-gray-300">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
