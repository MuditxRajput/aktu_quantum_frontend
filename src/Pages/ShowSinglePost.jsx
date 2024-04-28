import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ShowSinglePost = () => {
    const location = useLocation();
    const postId = location.state.id;
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: '',
        author: '',
        content: '',
        date:''
    });

    const getPost = async () => {
        try {
            const response = await fetch(`https://aktu-quantum-backend.onrender.com/post/singlePost/${postId}`, {
                method: "GET"
            });
            const val = await response.json();
            setPost({
                ...post,
                title: val.checkArticleIsPresent.title,
                author: val.checkArticleIsPresent.author,
                content: val.checkArticleIsPresent.content,
                date: val.checkArticleIsPresent.createdAt
            });
        } catch (error) {
            console.error(error);
        }
    };

    const enhanceHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        // Style headers
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
            doc.querySelectorAll(tag).forEach(element => {
                element.style.fontWeight = 'bold';
                if (tag !== 'h1' && tag !== 'h2') {
                    element.style.fontSize = '1.2em';
                }
                if (tag === 'h2') {
                    element.style.fontSize = '1.8em';
                }
            });
        });
        // Style links
        doc.querySelectorAll('a').forEach(element => {
            element.style.color = 'blue'; // Set the color to blue
            element.style.textDecoration = 'underline'; // Underline to indicate it's a link
        });
        return doc.body.innerHTML;
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div className='m-7 rounded-md shadow-sm shadow-gray-700 p-10' style={{ fontFamily: 'Roboto, sans-serif' }}>
            <h1 className='font-bold text-3xl mb-2'>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: enhanceHtml(post.content) }}></div>
            <button 
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded m-4"
                onClick={() => navigate("/post")}
            >
                Back
            </button>
            <button 
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded m-4"
                onClick={() => navigate("/")}
            >
                Get All Quantum
            </button>
        </div>
    );
}

export default ShowSinglePost;
