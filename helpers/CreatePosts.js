import Post from "../models/Post.js";

async function CreatePosts(){
   await Post.create([
  {
    question: "How do I use async/await in Node.js?",
    Author: "DevAli",
    seen: 7,
    up: 2,
    users: [ "https://picsum.photos/200/300?1",
      "https://picsum.photos/200/300?2",
      "https://picsum.photos/200/300?3"],
    tags: ["bug", "webrtc"],
  },

  {
    question: "What is the difference between find() and findOne() in Mongoose?",
    Author: "CodeMaster",
    seen: 15,
    up: 5,
    users: [  "https://picsum.photos/200/300?4",
      "https://picsum.photos/200/300?5"],
       tags: ["bug", "webrtc"]
  },
  {
    question: "How can I handle errors in Express middleware?",
    Author: "SaraDev",
    seen: 4,
    up: 1,
    users: [ "https://picsum.photos/200/300?7",
      "https://picsum.photos/200/300?8"],
       tags: ["bug", "webrtc"]
  }
]);
}

export default CreatePosts