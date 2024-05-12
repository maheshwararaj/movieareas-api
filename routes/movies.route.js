import express from 'express';
import { MovieCreate, MovieIndex, MovieUpdate,MovieDelete } from '../controllers/movies.controller';
const router = express.Router()

// crud functionality of movies
router.get('/',MovieIndex )

//c for creating movies

router.post('/',MovieCreate)

//u - for updating movies
router.put('/:id',MovieUpdate)

//d deleting movies
router.delete('/:id',MovieDelete)

export default router;