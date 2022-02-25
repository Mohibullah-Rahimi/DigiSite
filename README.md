# 1st & Third

This is an e-commerce website made to practice concepts that ive learned in React so far such as React Router v6 and Context API.

## Table of Concepts

- [Overview](#overview)
    - [Images](#images)
    - [Links](#links)
- [My Process](#my-process)
    - [Built With](#built-with)
    - [Challenges](#challenges)
    - [What I learned](#What-i-learned)
    - [Continued Development](#continued-development)
    - [Instructions](#instructions)
- [Author](#author)

## Overview

### Images

### Links

## My Process

To start the project I first thought about the different pieces I would need to make up the site.  I setup the file structure and added seperate folders for components, images, pages, and utilities.  I installed React Router v6, Styled Components, React Icons

### Built With

### Challenges

- Problem: How to add a background image using styled components?
    - Solution: In my style.js file I had to add the following line:

    ```
        import Img from '../../images/heroDesktop.jpg';
    ```
    Then inside of the container where I wanted to add the background image I had to add the following line:

    ```
        background-image: url(${Img});
    ```

### What I learned

- When you import an image using styled components the name you chose has to start with a capital letter, I noticed I received errors if it was lowercase.

### Continued Development

### Instructions

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Author

- Personal Portfolio: [https://natashajohnson.dev/](https://natashajohnson.dev/)