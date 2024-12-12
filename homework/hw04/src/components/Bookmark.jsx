import React, { useState } from "react";

import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function Bookmark({ bookmarkId, postId, token }) {
  const [statebookmarkId, setStateBookmarkId] = useState(bookmarkId);

  async function createBookmark() {
    const sendData = {
      post_id: postId,
    };

    const responseData = await postDataToServer(
      token,
      "/api/bookmarks/",
      sendData
    );

    console.log(responseData);
    setStateBookmarkId(responseData.id);
  }

  async function deleteBookmark() {
    const responseData = await deleteDataFromServer(
      token,
      "api/bookmarks/" + statebookmarkId
    );

    console.log(responseData);

    setStateBookmarkId(null);
  }


    return statebookmarkId ? (
        <button
            aria-label="remove bookmark"
            aria-checked="true"
            aria-roledescription="toggle"
            onClick={deleteBookmark}
        >
            <i className="fas fa-bookmark"></i>
        </button>
        ) : (
        <button
            aria-label="add bookmark"
            aria-checked="false"
            aria-roledescription="toggle"
            onClick={createBookmark}
        >
            <i className="far fa-bookmark"></i>
        </button>
    );
}