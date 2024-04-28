import React, { useState } from 'react';

function CreatePost() {
    const[post,setPost] = useState({
        title : '',
        author : '',
        content:'',

    })
   const addPost=(e)=>{
        const name  = e.target.name;
        const value = e.target.value;
        setPost({
            ...post,
            [name] : value,
        })

   }
   const savePost=async()=>{
            try {
             const response =    await fetch(`http://localhost:8000/post/writePost`,{
                    method: "POST",
                    body : JSON.stringify(post),
                    headers:{
                        "Content-Type" :"application/json"
                      },
                })

            const value = await response.json();
    
            if(value.success)
            {
                setPost({
                    title:'',
                    author:'',
                    content:''
                })
            }
           
            } catch (error) {
                console.log(error);
            }
   }
 const onsubmitHandle=(e)=>{
        e.preventDefault();
        savePost();
 }

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Create a New Post</h2>
            <form onSubmit={onsubmitHandle}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={(e)=>addPost(e)}
                        value={post.title}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        onChange={(e)=>addPost(e)}
                        value={post.author}
                        
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        onChange={(e)=>addPost(e)}
                        value={post.content}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        rows="6"
                    />
                </div>

                <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">Submit Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
