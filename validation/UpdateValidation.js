const Validator = require('validator')
const isEmpty = require('./isEmpty')
const isImageUrl = require('is-image-url');

module.exports = (data) => {
  let errors = {}

    data.name = !isEmpty(data.name) ? data.name : ''
    data.genre = !isEmpty(data.genre) ? data.genre : ''
    data.Desc = !isEmpty(data.Desc) ? data.Desc : ''
    data.Language = !isEmpty(data.Language) ? data.Language : ''
    data.PictureLink = !isEmpty(data.PictureLink) ? data.PictureLink : ''
    data.BackgroundLink = !isEmpty(data.BackgroundLink) ? data.BackgroundLink : ''
    data.rating = !isEmpty(data.rating) ? data.rating : ''
    data.Time = !isEmpty(data.Time) ? data.Time : ''
    data.Year = !isEmpty(data.Year) ? data.Year : ''

    if(!Validator.isLength(data.name, {min:3, max: 30})){
      errors.name = 'Name must be between 3 and 50 characters'
    }

    if(!Validator.isLength(data.genre, {min:3, max: 10})){
      errors.genre = 'Genre must be between 3 and 10 characters'
    }

    if(isNaN(data.rating) || data.rating === ''){
      errors.rating = 'Rating must be a number'
    }

    if(isNaN(data.Year) || data.Year === ''){
      errors.Year = 'Year must be a number'
    }

    if(!Validator.isLength(data.Desc, {min:10, max: 200})){
      errors.Desc = 'Description must be between 10 and 200 characters'
    }

    if(!Validator.isLength(data.Language, {min:3, max: 20})){
      errors.Language = 'Language must be between 3 and 20 characters'
    }

    if(isNaN(data.Time) || data.Time === ''){
      errors.Time = 'Time must be a number'
    }

    if(!isImageUrl(data.PictureLink)){
      errors.PictureLink = 'Picturelink must be a image url'
    }

    if(!isImageUrl(data.BackgroundLink)){
      errors.BackgroundLink = 'BackgroundLink must be a image url'
    }

    
    return {
    errors,
    isValid: isEmpty(errors)
    }



}