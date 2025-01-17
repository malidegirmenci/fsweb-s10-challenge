import React from "react";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import { useDispatch } from "react-redux";
import { removeNoteAPI } from "../store/actions/noteActions";
import { toast } from "react-toastify";
export default function Post({ item }) {
  const dispatch = useDispatch();
  function handleRemoveNote(id) {
    dispatch(removeNoteAPI(id))
    const notify = () => toast.info("Note removed",{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    notify();
  }

  return (
    <div className="beyazKutu p-8 pb-6 mb-4 text-sm">
      <h1>
        {formatDistanceToNow(new Date(item.date), {
          addSuffix: true,
          locale: tr,
        })}
      </h1>

      {item.body.split("|").map((li, i) => (
        <p className="mt-2" key={`${i}${li}`}>
          - {li}
        </p>
      ))}

      <button className="text-xs text-amber-600 mt-4 underline" onClick={() => handleRemoveNote(item.id)}>
        Bu notu sil
      </button>
    </div>
  );
}
