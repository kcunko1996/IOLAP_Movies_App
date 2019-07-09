const express = require('express')
const router = express.Router()
const db = require('../../database_connection/database_connection')
const isValidated = require('../../validation/Validation')

// @route   GET request /api/v1/movies
//@desc     Retrieving all the data from table movies
//@pristup  Public Route
router.get('/', (req,res) => {
  db.select('*')
  .from('movies')
  .then(data => res.json(data))
  .catch(err => res.status(404).json(err))
})

// @route   GET request /api/v1/movies/:id
//@desc     Retrieving one single pice of data from table movies
//@pristup  Public Route
router.get('/:id', (req,res) => {
  const id = req.params.id;
  db.select('*')
  .from('movies')
  .where('id','=', id)
  .then(data =>{
    if (data === undefined || data.length == 0) {
      res.status(400).json( `There is no such movie entrie  `)
  } else {
  res.json(data)
  }
    
  })
  .catch((err) => res.status(404).json(err))
})

// @route   POST request /api/v1/movies
//@desc     Adding a movie entrie to movies table 
//@pristup  Public Route
router.post('/', (req,res) => {

  const {name,genre,rating,Year,Time,Desc,Language,PictureLink,BackgroundLink} = req.body

  const {errors, isValid} = isValidated(req.body)

  if(!isValid){
    return res.status(400).json(errors)
  }

  db.insert({
    name,
    genre,
    rating,
    Year,
    Time,
    Desc,
    Language,
    PictureLink,
    BackgroundLink})
    .into('movies')
    .returning('*')
    .then(data => res.json(data))
    .catch(() => res.status(404).json({msg: 'Movie entrie was unsuccessful'}))
})

// @route   PUT request /api/v1/movies/:id
//@desc     Updating  movie entrie in a movies table 
//@pristup  Public Route
router.put('/:id', (req,res) => {
  const id = req.params.id
  const {name,genre,rating,Year,Time,Desc,Language,PictureLink,BackgroundLink} = req.body
  
  const {errors, isValid} = isValidated(req.body)

  if(!isValid){
    return res.status(400).json(errors)
  }

  db('movies')
  .where({id})
  .update({
    name,
    genre,
    rating,
    Year,
    Time,
    Desc,
    Language,
    PictureLink,
    BackgroundLink
  })
  .returning('*')
  .then(data => {
    if( data === undefined || data.length == 0){
      res.status(400).json({msg: `There is no such movie entrie  with an ${id}`})
    } else {
      res.json(data)
    }
  })
  .catch(() => res.json({msg: 'Updating is not possible at the moment'}))
})

// @route   DELETE request /api/v1/movies/:id
//@desc     Deleting movie entrie in a movies table 
//@pristup  Public Route
router.delete('/:id', (req,res) => {
  const id = req.params.id

  db('movies').
  where({id})
  .del().
  then(() => res.json({
  msg: 'Movie entrie was successfully deleted'
  }))
  .catch(() => res.json(
  {msg: 'Deleting is not possible at the moment'}
   ))
})
module.exports = router