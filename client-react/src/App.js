import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {

  const APP_ID = "df5d33a6";
  const APP_KEY = "dc7aeb7bdf3b4c1e7a211c5411cda9ad";


    useEffect(  () =>{
      getRecipes();
    }, []);



  const getRecipes = async () => {
    const response = await fetch('https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}');
    const data = await response.json();
    console.log(data); 
  }

    return (
      <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text" />
          <button className="search-button" type="submit">Search</button>
        </form>  
      </div>
    );
};

export default App;
