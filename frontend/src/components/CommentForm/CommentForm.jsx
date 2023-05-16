import React, { useState } from "react";

const CommentForm = ({ submitComment }) => {
  const [commentText, setCommentText] = useState("");

  return (
    <form
      className="commentForm"
      onSubmit={(e) => {
        e.preventDefault();
        submitComment(commentText);
        setCommentText("");
      }}
    >
      <label>
        Type Here: {""}{" "}
        <input type="text" name="commentText" value={commentText} onChange={(e) => setCommentText(e.target.value)}/>
      </label>
    </form>
  );
};

export default CommentForm;
