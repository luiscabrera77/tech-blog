

# Tech Blog

## Description
![badge](https://img.shields.io/badge/license-MIT-blue)

A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. This site was built completely from scratch and it was deployed to Heroku. 

The app follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session nom package for authentication.

Visit the site in Heroku here: https://secret-reaches-00812.herokuapp.com/

![Screenshot](https://user-images.githubusercontent.com/54341829/118558426-36288000-b72c-11eb-8e8c-26093d79da0d.png)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acceptance Criteria](#acceptance-criteria)
- [Questions](#questions)

## Installation
NPM install the following:

- npm init -y            
- npm install express sequelize mysql2
- npm install dotenv
- npm install bcrypt
- npm install express-handlebars
- npm i express-session connect-session-sequelize            

## Usage
Make a .env file with your connection settings. Then, open "mysql -u root -p" and run "source db/schema,sql" to create the database. Then, "use YOURDATABASENAME". Exit MySql and then do npm start.

## License

MIT License Copyright
(view most recent version at https://spdx.org/licenses/MIT.html)

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.


## Acceptance-Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Questions
Find me on Github as: [luiscabrera77](https://github.com/luiscabrera77)

The best way to reach out with additional questions is to write me a detailed email. 

Happy coding!

luis.cabrera@gmail.com

