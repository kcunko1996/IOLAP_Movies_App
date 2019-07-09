
exports.seed = function(knex) {
  return knex('movies').del()
  .then(() => {
      return knex('movies').insert({
      name: ' Star Trek ',
      genre: '  Action, Adventure, Sci-Fi',
      rating: 8,
      Year: 2009,
      Time: 130,
      Desc : 'The brash James T. Kirk tries to live up to his fathers legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.',
      Language: 'English',
      PictureLink: 'https://www.space.ca/wp-content/uploads/2018/04/header1.jpg', 
      BackgroundLink: 'https://www.syfy.com/sites/syfy/files/wire/legacy/startrek_top.jpg'
      });
      })
      .then(() =>{
  return knex('movies').insert({
  name: ' Pain & Gain',
  genre: 'Crime/Drama ',
  rating: 7,
  Year: 2013,
  Time: 120,
  Desc : 'A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.',
  Language: 'English',
  PictureLink: 'https://images.wallpaperscraft.com/image/pain_and_gain_daniel_lugo_paul_doyle_dwayne_johnson_mark_wahlberg_82445_1920x1200.jpg', 
  BackgroundLink: 'https://m.media-amazon.com/images/M/MV5BYWE2OTk4ZGQtYWM2Ni00MzFlLWE3MjYtZTI5Mjc1ZGNhMWJhXkEyXkFqcGdeQXVyNjM2NTIzMTI@._V1_SX1777_CR0,0,1777,740_AL_.jpg'
  });
  })
  .then(() => {
    return knex('movies').insert({
    name: ' Ice Age: Dawn of the Dinosaurs ',
    genre: 'Animation, Adventure, Comedy ',
    rating: 7,
    Year: 2009,
    Time: 130,
    Desc : 'When Sids attempt to adopt three dinosaur eggs gets him abducted by their real mother to an underground lost world, his friends attempt to rescue him.',
    Language: 'English',
    PictureLink: 'https://www.animationsource.org/sites_content/age_de_glace/img_screenshot/153560.jpg', 
    BackgroundLink: 'https://d1jo0zet24jmxt.cloudfront.net/content/12398/83b1f73180246950f8f37248959da5a9.jpg'
    
    });
    })
    .then(() => {
      return knex('movies').insert({
      name: ' Star Wars: The Force Awakens ',
      genre: '  Fantasy/Sci-fi ',
      rating: 8,
      Year: 2015,
      Time: 130,
      Desc : 'Three decades after the Empires defeat, a new threat arises in the militant First Order. Defected stormtrooper Finn and the scavenger Rey are caught up in the Resistances search for the missing Luke Skywalker.',
      Language: 'English',
      PictureLink: 'https://cdn-images-1.medium.com/max/2400/1*S7LfTcdi4uLWmbuueEIycQ.jpeg', 
      BackgroundLink: 'https://images.wallpaperscraft.com/image/darth_vader_armor_star_wars_film_hat_snow_93645_1920x1080.jpg'
      });
      })   
};
