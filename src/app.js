const express = require("express")
const noteModel =  require("./models/note.model")

const app = express();
app.use(express.json());


// note = {title,description}

app.post("/notes",async (req,res)=>{
    const data =  req.body
    await noteModel.create({
        title : data.title,
        description : data.description
    })
    res.status(201).json({
        message: "Note created successfully"
    })
})

app.get('/notes', async (req,res)=>{
    const notes = await noteModel.find() //find() always return an array of objects
    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })
});

app.delete("/notes/:id", async (req,res) =>{
    const id = req.params.id
    await noteModel.findOneAndDelete({_id: id})
    res.status(200).json({
        message: "Note deleted successfully"
    })
})



module.exports = app