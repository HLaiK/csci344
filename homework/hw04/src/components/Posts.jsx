import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Posts({ token }) {
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        const data = await getDataFromServer(token, "/api/posts");
        setPosts(data);
    }

    useEffect(() => {
        getPosts();
    }, []);

    function outputPost(postObj){
        return <Post key={postObj.id} postData={postObj} token={token} />;
    }
    return <div>TODO: output all of the posts: {posts.length}</div>;
}