import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from "@editorjs/list";
import { usePostBlogMutation } from "../../../redux/features/blogs/blogApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddNewPost = () => {
  const editorRef = useRef(null);
  const[title,setTitle] = useState("")

  const [metaDescription, setMetaDescription] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [PostBlog, { isLoading }] = usePostBlogMutation();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editorjs',
      onReady: () => {
        editorRef.current = editor;
      },
      autofocus: true,
      tools: {
        header: {
          class: Header,
          inlineToolbar: true 
        },
        list: { 
          class: List, 
          inlineToolbar: true 
        },
      }

    })
    return () => {
      editor.destroy();
      editorRef.current = null;
    };
  },[])

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const content = await editorRef.current.save();
      const newPost = {
        title, 
        content,
        coverImg, 
        category, 
        description: metaDescription ,
        author: user._id,
        rating
      };
      const response = await PostBlog(newPost).unwrap();
      toast.success('Post Added Successfully');
      navigate('/')
    } catch (error) {
      console.error(error);
      setMessage("Failed to add blog post. Please try again.");
    }
  }



  return (
    <div className="bg-white md:p-8 p-2">
      <h2 className="text-2xl font-semibold">Create A New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-5 pt-8">
        <div className="space-y-4">
          <label className="font-semibold text-xl">Blog Title</label>
          <input type="text"  className="w-full bg-bgPrimary focus:outline-none px-5 py-3" placeholder="Some write here" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
         
        </div>
        {/* blog details */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="md:w-2/3 w-full">
          <p className=" font-semibold text-xl mb-5">Content Section</p>
            <p className="text-xs italic">Write your post here...</p>
            <div id="editorjs"></div>
          </div>
          <div className="md:w-1/3 w-full border space-y-5 rounded p-5">
          <p className="font-semibold text-xl">Choose Blog Category</p>
          {/* images */}
          <div className="space-y-3">
              <label className=" font-semibold">Blog Cover: </label>
              <input
                type="text"
                value={coverImg}
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                onChange={(e) => setCoverImg(e.target.value)}
                placeholder="Ex: https://unsplash.com/photos/a-wooden-table.png"
                required
              />
            </div>
            {/* catagory */}
          <div className="space-y-3">
              <label className=" font-semibold">Blog Catagory </label>
              <input
                type="text"
                value={category}
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Rooftop/Gardening/something"
                required
              />
            </div>
            {/* metadescription */}
            <div className="space-y-3">
              <label className=" font-semibold">Meta Data: </label>
              <textarea
                type="text"
                cols={4}
                rows={4}
                value={metaDescription}
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder="Add Meta Data to increase SEO performance..."
                required
              />
            </div>
            {/* rating */}
            <div className="space-y-3">
              <label className=" font-semibold">Rating: </label>
              <input
                type="number"
                value={rating}
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                onChange={(e) => setRating(e.target.value)}
                placeholder="add rating: 5"
                required
              />
            </div>
            {/* author */}
            <div className="space-y-3">
              <label className=" font-semibold">Author: </label>
              <input
                type="text"
                value={user.username}
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                placeholder={`${user.username} (not editable)`}
                disabled
              />
            </div>
          </div>
        </div>
        {
          message && <p className="text-red-500">{message}</p> // Display error message if any
        }
        <button
          type="submit"
          // disabled={isLoading}
          className="w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md"
        >
          Add New Blog
        </button>
      </form>
    </div>
  );
};

export default AddNewPost;
