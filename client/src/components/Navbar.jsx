// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { useAuth } from "../context/ContextProvider";
// import { TbMessageChatbotFilled } from "react-icons/tb";

// const Navbar = ({setQuery,setNotes}) => {
//   const { user,logout } = useAuth();
  
//   return (
//     <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
//       <div className="text-xl font-bold">
//         <Link to="/">NotesApp</Link>
//       </div>
//       <input
//         type="text"
//         placeholder="Search Notes..."
//         className="bg-gray-700 text-white px-4 py-2 rounded"
//         onChange={(e)=>setQuery(e.target.value)}
//       />
//       <div>
//         {!user ? (
//           <>
//           <div className="flex items-center gap-4">
//           <Link to="/chatbot" className="flex items-center justify-center bg-gray-700 px-4 py-2 rounded h-[40px]">
//     <TbMessageChatbotFilled size={24} />
//   </Link>

//             <Link to="/login" className="bg-blue-500 px-4 py-2 rounded mr-4">
//               Login
//             </Link>
//             <Link to="/register" className="bg-green-600 px-4 py-2 rounded mr-4">
//               Signup
//             </Link>
//             </div>
//           </>
//         ) : (
//           <>
//               <div className="flex items-center gap-4">
//           <Link to="/chatbot" className="flex items-center justify-center bg-gray-700 px-4 py-2 rounded h-[40px]">
//     <TbMessageChatbotFilled size={24} />
//   </Link>
//             <span className="mr-4c">{user.name}</span>

//             <button className="bg-red-800 px-4 py-2 rounded" onClick={() => { logout(); setNotes([]); }}>Logout</button>
//             </div>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ setQuery, setNotes }) => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">NotesApp</Link>
        </div>

        <div className="hidden md:block w-1/3">
          <input
            type="text"
            placeholder="Search Notes..."
            className="w-full bg-gray-700 text-white px-4 py-2 rounded"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/chatbot"
            className="flex items-center justify-center bg-gray-700 px-4 py-2 rounded h-[40px]"
          >
            <TbMessageChatbotFilled size={24} />
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className="bg-blue-500 px-4 py-2 rounded"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-600 px-4 py-2 rounded"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <span>{user.name}</span>
              <button
                className="bg-red-800 px-4 py-2 rounded"
                onClick={() => {
                  logout();
                  setNotes([]);
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <input
            type="text"
            placeholder="Search Notes..."
            className="w-full bg-gray-700 text-white px-4 py-2 rounded"
            onChange={(e) => setQuery(e.target.value)}
          />

          <Link
            to="/chatbot"
            className="block bg-gray-700 px-4 py-2 rounded text-center"
            onClick={() => setMenuOpen(false)}
          >
            <TbMessageChatbotFilled size={24} className="mx-auto" />
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className="block bg-blue-500 px-4 py-2 rounded text-center"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block bg-green-600 px-4 py-2 rounded text-center"
                onClick={() => setMenuOpen(false)}
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <p className="text-center">{user.name}</p>
              <button
                className="w-full bg-red-800 px-4 py-2 rounded"
                onClick={() => {
                  logout();
                  setNotes([]);
                  setMenuOpen(false);
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
