import express from 'express';

const router = express.Router()

// crud functionality of movies
router.get('/',(req,res)=>{
  res.send("get all movie list")
})

//c for creating movies

router.post('/',(req,res)=>{
    res.send("create a movie")
})

//u - for updating movies
router.put('/:id',(req,res)=>{
    res.send("update a movie")
})

//d deleting movies
router.delete('/:id',(req,res)=>{
    res.send("delete a movie")
})

export default router;