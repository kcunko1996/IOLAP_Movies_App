
exports.seed = function(knex) {
  return knex('movies').del()
  .then(() => {
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
    PictureLink: 'https://images.wallpaperscraft.com/image/star_wars_the_force_awakens_main_characters_105940_1280x720.jpg', 
    BackgroundLink: 'https://images.wallpaperscraft.com/image/manfred_manny_ice_age_mammoths_63318_1280x720.jpg'
    });
    })
    .then(() => {
      return knex('movies').insert({
      name: ' Spider-Man: Far from Home ',
      genre: ' Action, Adventure, Sci-Fi ',
      rating: 8,
      Year: 2019,
      Time: 130,
      Desc : 'When Sids attempt to adopt three dinosaur eggs gets him abducted by their real mother to an underground lost world, his friends attempt to rescue him.',
      Language: 'English',
      PictureLink: 'https://images.wallpaperscraft.com/image/darth_vader_armor_star_wars_film_hat_snow_93645_1280x720.jpg', 
      BackgroundLink: 'https://images.wallpaperscraft.com/image/darth_vader_armor_star_wars_film_hat_snow_93645_1280x720.jpg'
      });
      })
      .then(() => {
        return knex('movies').insert({
        name: ' Spider-M  from Home ',
        genre: ' Action, Adventure, Sci-Fi ',
        rating: 8,
        Year: 2019,
        Time: 130,
        Desc : 'When Sids attempt to adopt three dinosaur eggs gets him abducted by their real mother to an underground lost world, his friends attempt to rescue him.',
        Language: 'English',
        PictureLink: 'https://images.wallpaperscraft.com/image/darth_vader_armor_star_wars_film_hat_snow_93645_1280x720.jpg', 
        BackgroundLink: 'https://images.wallpaperscraft.com/image/darth_vader_armor_star_wars_film_hat_snow_93645_1280x720.jpg'
        });
        })
        .then(() => {
          return knex('movies').insert({
          name: ' Man: Far from Home ',
          genre: ' Action, Adventure, Sci-Fi ',
          rating: 8,
          Year: 2019,
          Time: 130,
          Desc : 'When Sids attempt to adopt three dinosaur eggs gets him abducted by their real mother to an underground lost world, his friends attempt to rescue him.',
          Language: 'English',
          PictureLink: 'https://images.wallpaperscraft.com/image/darth_vader_armor_star_wars_film_hat_snow_93645_1280x720.jpg', 
          BackgroundLink: 'https://images.wallpaperscraft.com/image/darth_vader_armor_star_wars_film_hat_snow_93645_1280x720.jpg'
          });
          })
          
};
