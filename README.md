# 📝 NotesApp with Integrated Chatbot (MERN Stack)

A modern full-stack **Notes Management Application** that allows users to register, login, create, edit, delete, and search notes. It also features an AI-powered **Chatbot Assistant** to enhance productivity and user experience.

## 🌟 Features

- 🔐 **Authentication**: Secure registration and login using JWT.
- 🧠 **AI Chatbot**: Integrated chatbot using OpenAI/Gemini API.
- 🗂️ **CRUD Notes**: Create, Read, Update, and Delete notes.
- 🔎 **Search Notes**: Live search bar for filtering notes.
- 🖼️ **Responsive UI**: Fully responsive across all devices.
- 🧾 **Clean UI/UX**: Built with **TailwindCSS** and React Icons.
- 🚪 **Protected Routes**: Auth-protected backend and frontend routing.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- React Icons
- Toastify for notifications

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- Bcrypt for hashing passwords
- dotenv for environment variables

---

## 📁 Folder Structure

```bash
├── client/               # React frontend
│   ├── pages/            # Login, Register, Home, Chatbot
│   ├── components/       # Navbar, NoteCard, NoteModel
│   ├── context/          # Auth context
│   ├── App.js            # Main App file
│   └── ...
├── server/               # Node.js backend
│   ├── models/           # User.js, Note.js
│   ├── routes/           # auth.js, note.js
│   ├── middleware/       # middleware.js
│   ├── db.js             # MongoDB connection
│   └── index.js          # Main entry file
├── .env
├── README.md
⚙️ Getting Started
1. Clone the repository

git clone https://github.com/your-username/notesapp-chatbot.git
cd notesapp-chatbot
2. Setup Server (Backend)

cd server
npm install
Create a .env file in the root of the server/ directory with the following:

env
JWT_SECRET=secretKey1234#@
3. Setup Client (Frontend)

cd ../client
npm install
🚀 Running the Application
Start Backend Server

cd server
npm start
The server runs on http://localhost:2000

Start Frontend

cd client
npm run dev
The client runs on http://localhost:5173 (default for Vite)

🔐 API Routes
Auth Routes /api/auth
Method	Endpoint	Description
POST	/register	Register a new user
POST	/login	Login user
GET	/verify	Verify JWT & get user

Notes Routes /api/note
Method	Endpoint	Description
POST	/add	Add a new note
GET	/	Get all user notes
PUT	/:id	Update note by ID
DELETE	/:id	Delete note by ID

🤖 Chatbot
Chatbot is accessible at /chatbot route and can provide assistance, tips, or AI-driven responses. You can extend its functionality by integrating with an AI API (like OpenAI or Gemini).

📷 Screenshots

<img width="1438" height="822" alt="1" src="https://github.com/user-attachments/assets/98c6d602-5f34-4ac0-9785-11da3a7c3e70" />
<img width="1893" height="862" alt="2" src="https://github.com/user-attachments/assets/f6ac47b7-8c9e-4397-b66a-5c6029bf17f4" />
<img width="1223" height="741" alt="3" src="https://github.com/user-attachments/assets/952fbaa9-397a-4968-afa8-7325d0a2915f" />


📌 Future Enhancements
🎤 Voice input for chatbot

📦 Export notes as PDF

🌙 Dark mode

🧠 Chatbot memory or history

🧑‍💻 Author
👤 Gunjan Mahara

📧 gunjanmahara2@gmail.com
