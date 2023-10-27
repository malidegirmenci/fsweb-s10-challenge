import axios from "axios";

export const ADD_NOTE = "ADD_NOTE => adds a new note"
export const REMOVE_NOTE = "REMOVE_NOTE => removes a note"

export function addNote(note) {
  return { type: ADD_NOTE, payload: note }
}

export function removeNote(noteId) {
  return { type: REMOVE_NOTE, payload: noteId}
}

export const addNoteAPI = (newNote) => dispatch => {
  
  axios
    .post("https://httpbin.org/anything", newNote)
    .then((res) => {
      
      if (res.status === 200) {
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notEkle ile dispatch edin
        
        dispatch(addNote(newNote));
        console.log("data",res);
      }
    })
    .catch((error) => console.log(error));
}

export const removeNoteAPI = (id) => dispatch => {
  //console.log(id)
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notSil ile dispatch edin 
        dispatch(removeNote(id))
        console.log("removed note", res)
      }
    })
    .catch((error) => console.log(error));
}