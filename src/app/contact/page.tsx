"use client";
import { useState } from "react";

const CommentSection = () => {
    const [comment, setComment] = useState("");  
    const [comments, setComments] = useState<string[]>([]);  

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        if (comment.trim()) {
            setComments([comment, ...comments]);  
            setComment("");
        }
    };

    return (
        <div className="comment-section">
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                <h3 className="text-lg font-semibold mb-2">Comment Section</h3>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}  // Update the comment as the user types
                    placeholder="Add a comment..."
                    className="textarea textarea-bordered w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mb-2 p-2 text-black text-sm"
                ></textarea>
                <button
                    type="submit"
                    className="btn bg-gray-700 hover:bg-gray-800 text-white w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-sm py-1 mb-4"
                >
                    Submit
                </button>
            </form>

            <div className="space-y-2 w-full text-center">
                <h3 className="text-lg font-semibold mb-2">Comments</h3>
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <div
                            key={index}
                            className="p-3 bg-gray-800 border border-gray-600 rounded-lg shadow-md w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-sm"
                        >
                            <p>{comment}</p>
                        </div>
                    ))
                ) : (
                    <div className="p-3 bg-gray-700 rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-sm">
                        <p>No comments yet. Be the first to comment!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function ContactUs() {
    return (
        <div className="comment-page-container">
            <h1>Your opinion matters!</h1>
            <CommentSection />
        </div>
    );
}
