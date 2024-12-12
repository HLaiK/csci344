import React, { useState } from "react";

import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function Like({ likeId, postId, token }) {
  const [_likeId, _setLikeId] = useState(likeId);

  async function createLike() {
    const sendData = {
      post_id: postId,
    };

    const responseData = await postDataToServer(token, "/api/likes/", sendData);

    console.log(responseData);

    _setLikeId(responseData.id);
  }

  async function deleteLike() {
    const responseData = await deleteDataFromServer(
      token,
      "api/likes/" + _likeId
    );

    console.log(responseData);

    _setLikeId(null);
  }

  return _likeId ? (
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