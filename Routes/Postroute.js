const express = require('express');
const router = express.Router();
const posts =require('../Model/Post');

router.use(express.json());
//post operation
router.post('/add',async(req,res)=>{
    try {
        const post = req.body;
        let newpost = await posts(post).save();
        console.log(newpost);
        res.status(200).send({message:"Blog added"})
    } catch (error) {
        console.log(error);
    }
})

//get
router.get('/posts', async (req, res) => {
    try {
        const allPosts = await posts.find();
        res.status(200).send(allPosts);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching posts");
    }
});

//delete
router.delete("/employee/:id", async (req, res) => {
    try {
      const deletedEmployee = await posts.findByIdAndDelete(req.params.id);
      if (!deletedEmployee) {
        return res.status(404).json({ error: "Employee not found" });
      }
      res.json({ message: "Employee deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  //update
  router.put('/employees/:id', async (req, res) => {
    const { id } = req.params;
    const { Name, Designation, Location, Salary } = req.body;
  
    try {
      const updatedEmployee = await posts.findByIdAndUpdate(
        id,
        { Name, Designation, Location, Salary },
        { new: true }
      );
  
      if (!updatedEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      res.json({ message: 'Employee updated successfully', posts: updatedEmployee });
    } catch (error) {
      console.error('Error updating employee:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports=router;