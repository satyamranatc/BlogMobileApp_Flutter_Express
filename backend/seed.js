import mongoose from "mongoose";
import dotenv from "dotenv";
import Blog from "./models/Blog.js";

dotenv.config();

const blogs = [
  {
    title: "The Future of Web Development in 2026",
    desc: "Explore upcoming trends in web development, from AI-assisted workflows and WebAssembly to real-time collaborative frameworks and edge computing.",
    poster: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mastering Modern CSS: Grid, Flexbox, and Subgrid",
    desc: "A comprehensive guide to building responsive, fluid, and scalable layouts using modern CSS primitives without relying on heavy external UI frameworks.",
    poster: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Demystifying Artificial Intelligence & Large Language Models",
    desc: "Understand how modern LLMs work under the hood, how embeddings and vector search power semantic apps, and practical strategies for integrating AI into products.",
    poster: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "The Art of Clean Code: Writing Maintainable Software",
    desc: "Writing code is easy; writing code that your team can maintain two years later is an art. Discover best practices for naming, modularity, and refactoring.",
    poster: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Building Scalable RESTful APIs with Node.js & Express",
    desc: "Learn how to structure enterprise-grade Express APIs with clean controllers, schema validation, standardized error handling, and robust routing.",
    poster: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Minimalist Productivity for Developers",
    desc: "How to eliminate digital noise, optimize deep work sessions, and maintain long-term focus while shipping high-impact engineering projects.",
    poster: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "The Rise of Edge Computing and Serverless Architecture",
    desc: "Why pushing compute closer to end-users with CDN edge workers and serverless microservices is transforming modern application latency and cost efficiency.",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Designing Accessible Web Experiences (A11y)",
    desc: "Practical steps to ensure web applications are inclusive, screen-reader friendly, keyboard navigable, and compliant with modern WCAG standards.",
    poster: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Database Performance & Indexing Strategies in MongoDB",
    desc: "Optimize query execution, avoid collection scans, and master compound indexes, explain plans, and aggregation pipelines for high-throughput apps.",
    poster: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cybersecurity Fundamentals: Protecting Web Applications",
    desc: "An essential checklist covering OWASP Top 10 vulnerabilities, secure headers, CORS, JWT management, and defense-in-depth strategies for developers.",
    poster: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
];

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/BlogApp";
    console.log("Connecting to MongoDB at:", mongoUri);
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB successfully.");

    // Remove existing blogs to prevent duplicates
    const deleteResult = await Blog.deleteMany({});
    console.log(`Cleared ${deleteResult.deletedCount} existing blog(s).`);

    // Insert the 10 sample blogs
    const insertedBlogs = await Blog.insertMany(blogs);
    console.log(`Successfully seeded ${insertedBlogs.length} blogs!`);

    insertedBlogs.forEach((blog, index) => {
      console.log(` [${index + 1}] ${blog.title}`);
    });

    await mongoose.disconnect();
    console.log("Database connection closed.");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seedDB();
