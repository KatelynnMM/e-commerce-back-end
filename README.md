# 13 Object-Relational Mapping (ORM): E-Commerce Back End


## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Installation
To use this application you will need to do the following:
* Clone the repository to your local envornment.
* Creat a .env file a add you MySQL credentails.
* Create the database in your MySQL shell.
* Run 'SOURCE db/schema.sql;'.
* In node run 'npm install' for the necessary dependencies.
* Run ' .\seeds\index.js ' to seed the application.
* Run npm start.

## Links

https://drive.google.com/file/d/1WGVWcMbampy7Zn3Fudc2cNMe97T2Q6KY/view

https://github.com/KatelynnMM/e-commerce-back-end

