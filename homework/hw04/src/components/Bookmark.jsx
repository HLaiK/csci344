import React, {useState} from "react";

import { postDataToServer, deleteDataFromServer }from "../server-requests";

export default function Bookmark({bookmarkID, postID, token}){
    const [_bookmarkID, _setBookmarkID] = useState(bookmarkID);

    async function createBookmark(){
        const sendData = {
            post_id: postID,
        };

        const responseData = await postDataToServer(
            token,
            "/api/bookmarks/",
            sendData
        );

        console.log(responseData);

        -_setBookmarkID(responseData.id);
    }
    async function deleteBookmark() {
        const responseData = await deleteDataFromServer(
          token,
          "api/bookmarks/" + _bookmarkID
        );
    
        console.log(responseData);
    
        _setBookmarkID(null);
      }
    
      return _bookmarkID ? (
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
          aria-checked="true"
          aria-roledescription="toggle"
          onClick={createBookmark}
        >
          <i className="far fa-bookmark"></i>
        </button>
      );
}
