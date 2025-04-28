// import React from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";
// const NoteCard = ({ note,onEdit,deleteNote }) => {
//   return (
//     <div className="bg-white p-4 rounded shadow">
//       <h2 className="text-xl font-bold">{note.title}</h2>
//       <p>{note.description}</p>
//       <div className="flex justify-end mt-2">
//         <button className="text-blue-500 mr-2" onClick={()=>onEdit(note)}>
//           <FaEdit />
//         </button>
//         <button className="text-red-700" onClick={()=>deleteNote(note._id)}>
//           <FaTrash />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NoteCard;



import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const NoteCard = ({ note, onEdit, deleteNote }) => {
  return (
    <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-md w-full max-w-md mx-auto transition-all duration-300">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 break-words">
        {note.title}
      </h2>
      <p className="text-sm sm:text-base text-gray-700 break-words">{note.description}</p>
      <div className="flex justify-end space-x-4 mt-4">
        <button
          className="text-blue-600 hover:text-blue-800 transition-colors"
          onClick={() => onEdit(note)}
        >
          <FaEdit size={18} />
        </button>
        <button
          className="text-red-600 hover:text-red-800 transition-colors"
          onClick={() => deleteNote(note._id)}
        >
          <FaTrash size={18} />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
