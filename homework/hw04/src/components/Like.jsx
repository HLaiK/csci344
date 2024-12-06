import React, { useState } from "react";

import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function Like({ likeID, postID, token }) {
  const [_likeID, _setLikeID] = useState(likeID);

  async function createLike() {
    const sendData = {
      post_id: postID,
    };

    const responseData = await postDataToServer(token, "/api/likes/", sendData);

    console.log(responseData);

    _setLikeID(responseData.id);
  }

  async function deleteLike() {
    const responseData = await deleteDataFromServer(
      token,
      "api/likes/" + _likeID
    );

    console.log(responseData);

    _setLikeID(null);
  }

  return _likeID ? (
    <button
      aria-label="remove like"
      aria-checked="true"
      aria-roledescription="toggle"
      onClick={deleteLike}
    >
      <i className="fas text-red-700 fa-heart"></i>
    </button>
  ) : (
    <button
      aria-label="add like"
      aria-checked="false"
      aria-roledescription="toggle"
      onClick={createLike}
    >
      <i className="far fa-heart"></i>
    </button>
  );
}