# E-Commerce Website
This project was built to help you start an E-commerce platform for a Clothing industry.
It includes a frontend/User interface with a boilerplate that is fully prepared for 
various basic frontend tasks. These tasks include authentication.


## Features
User registration and login
Authentication via JWT
Email confirmation



### Technologies/libraries used
React
Redux Toolkit
React-router-dom
Ant Design
AXIOS
SCSS
I18N
EXPRESS
JWT
MULTER




### Installing
git clone https://github.com/SayatArakelyan/e-commerce.git
cd vite-project
npm install

### `npm start`

### Nodemon server.js

* Register via http://localhost:4444/api/auth/register with  email,  password, firstName, lastName,BirthDate, country, gender,and PhoneNumber  in the body as JSON format via Postman or any alternatives
* If successful, you should get a verification email
* Email link should look like this - http://localhost:4444/api/auth/user/confirm/somerandomlygeneratedjwttoken
* Opening the link will change your username confirmed field to true and show confirmed message in the response
* Login via http://localhost:4444/auth/api/login with the same email and password
* Your response should have a JSON token
* Place it inside the Authentication tab Bearer Token
* Make a request to http://localhost:3000/posts
* If you get 200 OK and {"posts": []} as a result, everything was successful






## Author



sayatwebdev@gmail.com  
[@SayatArakelyan](https://www.linkedin.com/in/sayataraqelyan/)




