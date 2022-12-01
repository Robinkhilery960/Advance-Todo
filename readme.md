#  **DoiT** - Let's Make This Happen
 

DoiT is a todo application built using following technologies **_Mongo DB_**, **_Expresss JS_**, **_React JS_**, **_Node JS_**, **_Tailwind CSS_**. 

Users using the application can explain the todo in more descriptive way with the help of tasks.  This application provides the CRUD operations on todo.

 

 

 
 
 .
 

 

## 😃 Features of DoiT 😃

- Create Todo
- Update Todo
- View Todo
- Delete Todo   
- User Authentication  

![Upcoming features](https://img.shields.io/badge/Upcoming-Features-green)
- User Authentication
- Sorting Todos
- Timestamp on todos 

## 🎯 Machine requirements to run this project 🎯

- Node JS ( runtime environment )
- Mongo DB Compass

## 🪜 Steps to run the project in your machine 🪜

- Download the project locally
- Unzip the folder
- Open the unzipped folder in vscode
- Click on backend folder
- Rename sample.env to .env
- Open the .env file
- Provide value to PORT variable (My suggestion: 4000)
- Provide value tp MONGODB_URL variable (My suggestion: mongodb://localhost:27017/DoiT)
- Open new terminal to run server
- Run command 1: cd backend (If your terminal is not in this directory)
- Run command 2: npm install
- Run command 3: npm start
- Now open frontend folder
- If you have entered different value for PORT variable in backend folder > .env file, Update package.json file in frontend folder.
    - Open package.json look for proxy update :4000 value in the proxy value to the value you provided in .env
    - For example: 
        - Port=5000 (.env file backend folder)
        - proxy:"https://localhost:5000" (package.json file frontend folder)
- Open a new terminal to run frontend
- Run command 1: cd frontend (If your terminal is not in this directory)
- Run command 2: npm install
- Run command 3: npm start

If your webpage doesn't load hit this url in your browser: http://localhost:3000

### 🎉 Here you go your application is up and running... 🎉

  ***


 
## ⏳ Meta Information ⏳

- Time taken: 4 days
- Upcoming Future Enhancement: User Authentication

## 😄 Thanks  for your time 😄