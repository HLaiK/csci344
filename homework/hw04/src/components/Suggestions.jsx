import React, { useEffect, useState } from "react";
import { getDataFromServer } from "../server-requests";

export default function Suggestions({ token }) {
  const [suggestions, setSuggestions] = useState([]);

  async function getSuggestions() {
    const data = await getDataFromServer(token, "api/suggestions");
    setSuggestions(data);
  }

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className="mt-4">
      <p className="text-base text-gray-400 font-bold mb-4">
        Suggestions for you
      </p>
      {suggestions.map((suggestion) => (
        <section
          key={suggestion.id}
          class="flex justify-between items-center mb-4 gap-2"
        >
          <img src={suggestion.thumb_url} class="rounded-full" />
          <div class="w-[180px]">
            <p class="font-bold text-sm">{suggestion.username}</p>
            <p class="text-gray-500 text-xs">suggested for you</p>
          </div>
          <button class="text-blue-500 text-sm py-2">follow</button>
        </section>
      ))}
    </div>
  );
}