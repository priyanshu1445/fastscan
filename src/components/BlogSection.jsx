import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Why NFC Is the Future of Smart Connectivity",
      description:
        "Discover how NFC technology is transforming the way we share information and connect with others.",
      image: "https://placehold.co/600x400/EEE/000?text=Blog+1",
    },
    {
      id: 2,
      title: "5 Creative Uses of NFC Keychains",
      description:
        "From digital business cards to smart access control, see how NFC keychains are revolutionizing everyday life.",
      image: "https://placehold.co/600x400/DDD/000?text=Blog+2",
    },
    {
      id: 3,
      title: "Smart Standees: The New Marketing Trend",
      description:
        "Interactive standees powered by NFC are redefining customer engagement and experience.",
      image: "https://placehold.co/600x400/CCC/000?text=Blog+3",
    },
  ];

  return (
    <section
      className="w-full py-16 px-4 text-white"
      style={{
        backgroundImage: "linear-gradient(to right, #000 0%, #090040 90%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Our Latest Blogs
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg overflow-hidden 
                         hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-300 mb-4">{blog.description}</p>
                <button className="text-[#4F9DFF] font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
