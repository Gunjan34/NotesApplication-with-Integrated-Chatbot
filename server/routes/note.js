import express from "express";
import Note from "../models/Note.js";
import middleware from "../middleware/middleware.js";


const router = express.Router()

// router.post('/add',middleware,async(req,res)=>{
//     try {
//         const { title,description } = req.body;
    
//         const newNote = new Note({
//             title,
//             description,
//           userId:req.user.id
//         });
    
//         await newNote.save();
//         return res
//           .status(200)
//           .json({ success: true, message: "Note created successfully" });
//       } catch (error) {
//         return res
//           .status(500)
//           .json({ success: false, message: "Error in adding note" });
//       }
// })


router.post('/add', middleware, async (req, res) => {
    try {
      const { title, description } = req.body;
  
      // Check if title and description are provided
      if (!title || !description) {
        return res.status(400).json({ success: false, message: "Title and description are required" });
      }
  
      // Create new note
      const newNote = new Note({
        title,
        description,
        userId: req.user.id,
      });
  
      await newNote.save();
      return res.status(200).json({ success: true, message: "Note created successfully" });
    } catch (error) {
      console.error("Error in adding note:", error);
      return res.status(500).json({ success: false, message: "Error in adding note" });
    }
  });

  
 router.get('/',middleware,async(req,res)=>{
  try {
    // console.log("hi" + req.user)
    const notes = await Note.find({userId: req.user.id})
      return res.status(200).json({success: true,notes})
  
  } catch (error) {
    return res.status(500).json({success:false, message: "cant't retrieve notes"})
  }
 }) 

 router.put("/:id",async(req,res)=>{
try {
  const {id} = req.params;
  const updateNote = await  Note.findByIdAndUpdate(id,req.body,{new : true});
  return res.status(200).json({success: true,updateNote})

} catch (error) {
  return res.status(500).json({success:false, message: "cant't update notes"})

}
 });

 router.delete("/:id",async(req,res)=>{
  try {
    const {id} = req.params;
    const updateNote = await  Note.findByIdAndDelete(id);
    return res.status(200).json({success: true,updateNote})
  
  } catch (error) {
    return res.status(500).json({success:false, message: "cant't delete notes"})
  
  }
 })

export default router;