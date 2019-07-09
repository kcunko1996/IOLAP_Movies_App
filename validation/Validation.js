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

    if(!Validator.isLength(data.genre, {min:3, max: 30})){
      errors.genre = 'Genre must be between 3 and 30 characters'
    }

    if(isNaN(data.rating) || data.rating === '' || !(data.rating % 1 === 0)){
      errors.rating = 'Rating must be a number and without decimals'
    }

    if(isNaN(data.Year) || data.Year === '' || !(data.Year % 1 === 0)){
      errors.Year = 'Year must be a number and without decimals'
    }

    if(!Validator.isLength(data.Desc, {min:10, max: 500})){
      errors.Desc = 'Description must be between 10 and 500 characters'
    }

    if(!Validator.isLength(data.Language, {min:3, max: 20})){
      errors.Language = 'Language must be between 3 and 20 characters'
    }

    if(isNaN(data.Time) || data.Time === ''|| !(data.Time % 1 === 0)){
      errors.Time = 'Time must be a number and without decimals'
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