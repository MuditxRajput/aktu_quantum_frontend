import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BlogList() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    const getAppPost = async () => {
        const response = await fetch(`https://aktu-quantum-backend.onrender.com/post/allPost`, {
            method: "GET",
        });
        const val = await response.json();
        setPosts(val.allPost);
    };
    function stripHtml(html, length = 250) {
        const doc = new DOMParser().parseFromString(html, "text/html");
        let text = doc.body.textContent || "";
        return text.length > length ? text.substring(0, length) + "..." : text;
    }

    useEffect(() => {
        getAppPost();
    }, []);

    const showPostHandle = (name, id) => {
        navigate(`/post/${name}`, { state: { id: id } });
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            {posts?.map(post => (
                <div key={post._id} className="mb-8 p-5 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    {/* Show snippet of HTML content as plain text */}
                    <div className="text-gray-700 mb-4">
                        {stripHtml(post.content)}
                    </div>
                    <button 
                        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => showPostHandle(post.title, post._id)}
                    >
                        Read More
                    </button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
