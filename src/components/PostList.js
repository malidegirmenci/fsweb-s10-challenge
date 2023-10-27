import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
const PostList = () => {
  const notes = useSelector((store) => store.noteReducer.notes);
  
  return notes.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {notes.map((not) => (
        <Post item={not} key={not.id} />
      ))}
    </div>
  );
};

export default PostList;
