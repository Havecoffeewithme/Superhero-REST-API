"# Superhero-REST-API" 


This project is a basic REST API built with Express.js and MongoDB. It lets you manage superheroes by creating, reading, updating and deleting records. The app connects to MongoDB using Mongoose and exposes clean JSON endpoints.

## Features

* MongoDB connection with Mongoose
* Full CRUD operations for superheroes
* Fetch all superheroes or a single hero by ID
* Create new heroes with name and superheroname
* Update or delete heroes by ID
* JSON body parsing
* Simple and clear Express routing

## Endpoints

* GET `/superhero` – fetch all heroes
* GET `/superhero/:id` – fetch a single hero
* POST `/superhero` – create a hero
* PUT `/superhero/:id` – update a hero
* DELETE `/superhero/:id` – delete a hero
* GET `/` – health message

## How to Run

1. Install dependencies

   ```
   npm install
   ```
2. Ensure your MongoDB URI is set correctly in `config/db.js`
3. Start the server

   ```
   node index.js
   ```
4. Visit

   ```
   http://localhost:3000
   ```

## Purpose

This project is for practicing Express.js, Mongoose and REST API design while performing real CRUD operations.


