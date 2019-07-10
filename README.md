  # Dickey’s Barbecue Pit 
   ## JavaScript Developer Task
## Main Goal
The goal was to design a RESTful API for a single resource - movies. The API itself should
follow RESTful design principles, using the basic HTTP verbs: GET, POST, PUT, and
DELETE.

### Starting a Project
When file is downloaded, start a project by writing in console npm start or if project isnt started then run commands in following order: 
1. cd movies_app
2. npm run server
3. cd client
4. npm start

### Project is made with following technology's 
**ReactJS**, **Node.js**, **Express.js**, **PostgreSQL**, **Redux**
Libraries: React-Redux, React-Router-Dom, Redux-Thunk, Axios,Body-Parser, Validator

## Error Handling
- If there is no movies in database user will be shown appropriate message.
- If link is invalid 404 message will be displayed.
- If user write inputs in AddMovie modal or Update modal appropriate error message will be shown beneath input fields.

## Errors that are not solved 
-  404 massage won't be displayed for ID that are not in database (reason is unknown).


### Landing Page display
![Landing Page](https://github.com/kcunko1996/IOLAP_Movies_App/blob/master/git_App_Pictures/Movies_landing.PNG)

### Home Page display

![Home Page](https://github.com/kcunko1996/IOLAP_Movies_App/blob/master/git_App_Pictures/Movies_Home.PNG)


### Home Page Movie Grid
![Home Page Movie Grid](https://github.com/kcunko1996/IOLAP_Movies_App/blob/master/git_App_Pictures/Movies_Home_1.PNG)

### Movie Description Page

![Movie Description Page](https://github.com/kcunko1996/IOLAP_Movies_App/blob/master/git_App_Pictures/Movies_Description.PNG)

### Movie Add Movie Modal

![Add Movie Modal](https://github.com/kcunko1996/IOLAP_Movies_App/blob/master/git_App_Pictures/Movies_AddMoive.PNG)

### Project workflow
When project is started Landing Page is displayed. User then can click on Home or Add Movie Link in Navigation bar. If Home Link is clicked it will direct user to the Home page. The Home Page consists of carousel and the Movie grid. Carousel shows first four movies that are in stored in database. Movie grid shows all the movies in database but it only shows three at a time and if user wants to see more movies listed he must click on Load More button to load three more movies and so on till all movies are loaded. Next there is a  Movie description page where  all usefull information are listed about a movie (Name,genre,Year, etc). If user wants to update Movie description he must click on Update button and the modal will pop up where Updated information must be written. If user wants to delete the movie he must click on delte button. The workflow for Add Movie is approximately same as for Update.

## Developer 
Karlo Čunko
