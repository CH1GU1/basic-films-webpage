import "../App.css";
import Film from "./film";
import FilmsJson from "../films.json";
import PageWrapper from "./pageWrapper";
import Pagination from "./pagination";
import React, { useEffect, useState } from "react";

 export default function FilmsList() {
  const [actualPage, setActualPage] = useState(1);
  const totalPerPage = 5; 
  let films = FilmsJson;

  const searchFilms = async () => {
    let url = 'https://lucasmoy.dev/data/react/peliculas.json';
    //let url = 'https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json';

    let result = await fetch(url, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }});
    //debugger;
    
    console.log(result);

    let jsonResult = await result.json();
    console.log("GG"+jsonResult);
  };

  

  const loadFilms = () => {
    films = films.slice(
      (actualPage - 1) * totalPerPage,
      actualPage * totalPerPage
    );
  };

  const getTotalPages = () => {
    let totalFilmsQ = FilmsJson.length;
    return Math.ceil(totalFilmsQ / totalPerPage);
  };

  loadFilms();
  searchFilms();
  
  return (
    <PageWrapper>
      {films.map((film) => (
        <Film
          title={film.title}
          score={film.score}
          director={film.director}
          actors={film.actors}
          date={film.date}
          duration={film.duration}
          img={film.img}
          description={film.description}
        ></Film>
      ))}

      <Pagination
        page={actualPage}
        total={4}
        onChange={(page) => {
          setActualPage(page);
        }}
      ></Pagination>
    </PageWrapper>
  );


}