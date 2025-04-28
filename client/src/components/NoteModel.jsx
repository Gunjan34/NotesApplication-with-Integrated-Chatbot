// import React, { useEffect, useState } from 'react'
// const NoteModel = ({closeModel,addNote,currentNote,editNote}) => {
//     const [title,setTitle] = useState("");
//     const [description,setDescription]= useState("");
//     useEffect(()=>{
//      if(currentNote){
//       setTitle(currentNote.title);
//       setDescription(currentNote.description);

//      }
//     },{currentNote})
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       if(currentNote){
//         editNote(currentNote._id,title,description);
//       }else{
//         addNote(title,description);
//       }
//     };
//   return (
//     <div className='fixed inset-0 bg-gray-600 bg-opacity-80 flex justify-center items-center'>
//       <div className='bg-white p-8 rounded'>
//        <h2 className='text-xl font-bold mb-4'>{currentNote ? "Edit Note" :  "Add New Note"}</h2>
//        <form onSubmit={handleSubmit}>
//        <input type="text"
//        value={title}
//        onChange={(e)=>setTitle(e.target.value)}
//        placeholder='Note Title'
//        className='border p-2 w-full mb-4'
//        />
//        <textarea value={description}
//        onChange={(e)=>setDescription(e.target.value)}
//        placeholder='Note Description'
//        className='border p-2 w-full mb-4'
//        />
//        <button
//        type='submit'
//        className='bg-teal-800 text-white px-4 py-2 rounded'
//        >
//          {currentNote ? "Update Note " :" Add Note"}
//        </button>
//        </form>
//        <button className='mt-4 text-red-800' onClick={closeModel}>Cancel</button>
//       </div>
//     </div>
//   )
// }

// export default NoteModel



import React, { useEffect, useState } from 'react';

const NoteModel = ({ closeModel, addNote, currentNote, editNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setDescription(currentNote.description);
    }
  }, [currentNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentNote) {
      editNote(currentNote._id, title, description);
    } else {
      addNote(title, description);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-80 flex justify-center items-center px-4 z-50 overflow-auto">
      <div className="bg-white p-6 sm:p-8 rounded-xl w-full max-w-lg shadow-lg">
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">
          {currentNote ? "Edit Note" : "Add New Note"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note Title"
            className="border border-gray-300 p-2 rounded w-full"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Note Description"
            className="border border-gray-300 p-2 rounded w-full h-32 resize-none"
            required
          />
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded transition-colors"
            >
              {currentNote ? "Update Note" : "Add Note"}
            </button>
            <button
              type="button"
              className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded transition-colors"
              onClick={closeModel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteModel;

