// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import NoteModel from "../components/NoteModel";
// import axios from "axios";
// import NoteCard from "../components/NoteCard";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { useAuth } from "../context/ContextProvider";
// const Home = () => {
//   const [isModelOpen,setModelOpen] = useState(false);
//   const [fileteredNotes,setFilteredNotes] = useState(false);
//   const [notes,setNotes] = useState([]);
//   const [currentNote,setCurrentNote] = useState(null);
//   const [query,setQuery] =useState('');
//   const {user} =useAuth();
//   useEffect(()=>{
   
//    fetchNotes()
//   },[])
//   useEffect(()=>{
//     setFilteredNotes(
//       notes.filter((note)=>note.title.toLowerCase().includes(query.toLowerCase())) ||
//       notes.filter((note)=>note.description.toLowerCase().includes(query.toLowerCase()))
//     )

//   },[query,notes])

  

//   const fetchNotes = async () =>{
//     try {
//       const {data} = await axios.get("http://localhost:2000/api/note", {
//         headers:{
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         }
//       })
//       setNotes(data.notes)
//     } catch (error) {
//       console.log(error);
//     }
//    }
//   const closeModel = ()=>{
//     setModelOpen(false);
//   }

//   const onEdit = (note) =>{
//     setCurrentNote(note)
//     setModelOpen(true)
//   }

//   const addNote = async(title,description) =>{
//     try {
//       const response = await axios.post(
//         "http://localhost:2000/api/note/add",
//         { title,description},{
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`
//           }
//         }
//       );
//       console.log(response);
//       if(response.data.success){
//         toast.success("note added");
//         fetchNotes()
//         closeModel();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const deleteNote = async(id)=>{
//     try {
//       const response = await axios.delete(
//         `http://localhost:2000/api/note/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`
//           }
//         }
//       );
//       console.log(response);
//       if(response.data.success){
//         toast.success("note deleted");
//         fetchNotes();
       
  
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   const editNote= async(id,title,description)=>{
//     try {
//       const response = await axios.put(
//         `http://localhost:2000/api/note/${id}`,
//         {title,description},{
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`
//           }
//         }
//       );
//       console.log(response);
//       if(response.data.success){
//         toast.success("note updated");
//         fetchNotes()
//         closeModel();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar setQuery={setQuery} setNotes={setNotes} />
//        <div className="px-8 pt-5  grid grid-cols-1 md:grid-cols-3 gap-6">
//         { fileteredNotes.length > 0 ? fileteredNotes.map(note =>(
//           <NoteCard
//           note={note}
//           onEdit={onEdit}
//           deleteNote={deleteNote}
//           />
//         )) : <p>No Notes</p>}
//        </div>
//       <button
//       onClick={()=>setModelOpen(true)}
//       className= "fixed right-4 bottom-4 text-2xl bg-teal-800 text-white font-serif p-4 rounded-full">
//         +
//       </button>
//       {isModelOpen && <NoteModel  closeModel={closeModel} 
//       addNote={addNote}
//       currentNote={currentNote}
//       editNote={editNote}

//       />}
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NoteModel from "../components/NoteModel";
import axios from "axios";
import NoteCard from "../components/NoteCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/ContextProvider";

const Home = () => {
  const [isModelOpen, setModelOpen] = useState(false);
  const [fileteredNotes, setFilteredNotes] = useState([]);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [query, setQuery] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    setFilteredNotes(
      notes.filter(
        (note) =>
          note.title.toLowerCase().includes(query.toLowerCase()) ||
          note.description.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:2000/api/note", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setNotes(data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModel = () => {
    setModelOpen(false);
    setCurrentNote(null);
  };

  const onEdit = (note) => {
    setCurrentNote(note);
    setModelOpen(true);
  };

  const addNote = async (title, description) => {
    try {
      const response = await axios.post(
        "http://localhost:2000/api/note/add",
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        toast.success("Note added");
        fetchNotes();
        closeModel();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:2000/api/note/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        toast.success("Note deleted");
        fetchNotes();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editNote = async (id, title, description) => {
    try {
      const response = await axios.put(
        `http://localhost:2000/api/note/${id}`,
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        toast.success("Note updated");
        fetchNotes();
        closeModel();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar setQuery={setQuery} setNotes={setNotes} />
      <div className="px-4 sm:px-6 lg:px-8 pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fileteredNotes.length > 0 ? (
          fileteredNotes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onEdit={onEdit}
              deleteNote={deleteNote}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">No Notes</p>
        )}
      </div>

      <button
        onClick={() => setModelOpen(true)}
        className="fixed right-4 bottom-4 text-3xl bg-teal-700 hover:bg-teal-800 text-white p-4 rounded-full shadow-lg transition-all"
        aria-label="Add Note"
      >
        +
      </button>

      {isModelOpen && (
        <NoteModel
          closeModel={closeModel}
          addNote={addNote}
          currentNote={currentNote}
          editNote={editNote}
        />
      )}
    </div>
  );
};

export default Home;
