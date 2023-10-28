import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
const PostList = () => {
  const notes = useSelector((store) => store.noteReducer.notes);
  
  return notes.length === 0 ? (
    <div className="beyazKutu text-center p-6 rounded-lg">Hiç notunuz yok</div>
  ) : (
    <div >
      {notes.map((note,i) => (
        <Post item={note} key={`${i}${note.id}`} />
      ))}
    </div>
  );
};

export default PostList;
