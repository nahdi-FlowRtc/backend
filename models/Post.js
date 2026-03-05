import mongoose from "mongoose";

const Post = new mongoose.Schema({
  question: { type: String, required: true },
  Author: { type: String, required: true },
  seen: { type: Number, required: true },
  up: { type: Number, required: true },
  users: { type: [String], required: true },
  tags: { type: [String], required: true }
  
}, { timestamps: true });

export default mongoose.model("Post", Post);