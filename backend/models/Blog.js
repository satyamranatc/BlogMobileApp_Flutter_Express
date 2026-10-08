import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
    },
    desc: {
      type: String,
      required: [true, "Blog description is required"],
      trim: true,
      alias: "description",
    },
    poster: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
