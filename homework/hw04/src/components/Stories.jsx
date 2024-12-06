import React, { useEffect, useState } from "react";
import { getDataFromServer } from "../server-requests";

export default function Stories({ token }) {
  const [stories, setStories] = useState([]);

  async function getStories() {
    const data = await getDataFromServer(token, "api/stories");
    setStories(data);
  }

  useEffect(() => {
    getStories();
  }, []);

  return (
    <header className="flex gap-6 bg-white border p-2 overflow-hidden mb-6">
      {stories.map((story) => (
        <div key={story.id} class="flex flex-col justify-center items-center">
          <img
            src={story.user.thumb_url}
            class="rounded-full border-4 border-gray-300"
          />
          <p class="text-xs text-gray-500">{story.user.username}</p>
        </div>
      ))}
    </header>
  );
}