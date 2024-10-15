import axios from "axios";
import { useState } from "react";

const MakeBlog = () => {
  const token = localStorage.getItem("medium_token");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePublish = async (e) => {
    if (!title || !content) {
      setError("Title and content cannot be empty.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const req = await axios.post(
        "https://medium.sunny3355singh.workers.dev/api/v1/blog/createPost",
        {
          title: title,
          content: content,
          published: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      setSuccess("Post published successfully!");
      setTitle("");
      setContent("");
      console.log(req);
    } catch (err) {
      setError("Failed to publish post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full h-screen'>
      {/* Navigation bar */}
      <div className='w-full h-[9vh] flex items-center justify-between'>
        <div className='w-1/2 flex items-center gap-3 h-full justify-center pr-32'>
          <div>
            {/* Your original SVG logo */}
          </div>
          <div className="f2 h-fit mt-2 opacity-80 tracking-wide">
            <h2>Draft in NikoChan</h2>
          </div>
        </div>

        <div className="w-1/2 h-full flex items-center justify-center gap-6 pl-32">
          <div
            onClick={handlePublish}
            className={`px-[10px] flex items-center justify-center py-[2px] rounded-full ${loading ? 'bg-gray-400' : 'bg-[#c6e1c5]'} text-[0.9rem] f2 text-white`}
          >
            {loading ? 'Publishing...' : 'Publish'}
          </div>
          {/* Your existing icons */}
        </div>
      </div>

      {/* Typing area */}
      <div className="w-full h-[60%] pt-10 flex justify-center">
        <div className="w-[60%] h-full px-10">
          <div>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="f1 text-[3rem] outline-none text-[grey]"
              type="text"
              placeholder="Title"
              value={title}
            />
          </div>
          <div className="mt-3">
            <input
              onChange={(e) => setContent(e.target.value)}
              className="f1 text-[1.5rem] outline-none text-[grey]"
              type="text"
              placeholder="Tell your story...."
              value={content}
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-500">{success}</div>}
        </div>
      </div>
    </div>
  );
};

export default MakeBlog;
