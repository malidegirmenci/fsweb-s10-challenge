import { ADD_NOTE, REMOVE_NOTE } from "../actions/noteActions";

const initialNotes = {
    notes:[
        {
            id: "75g1IyB8JLehAr0Lr5v3p",
            date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
            body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
        },
    ],
}
const s10chLocalStorageKey = "s10ch";
export const noteReducer = (state = initialNotes, action) => {
    switch (action.type){
        case ADD_NOTE:
            return {...state,
                notes:[action.payload, ...state.notes]
            }
        case REMOVE_NOTE:
            return {...state,
                notes: state.notes.filter((note) => action.payload !== note.id)
            }
        default:
            return state;
    }
}

function localStorageStateWrite(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateRead(key) {
    return JSON.parse(localStorage.getItem(key));
}

function getInitialNotes(key) {
    const oldNotes = localStorage.getItem(key);

    if (oldNotes) {
        return localStorageStateRead(key);
    } else {
        return initialNotes
    }
}