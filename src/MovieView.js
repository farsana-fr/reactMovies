import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Photos from "./Photos";

function MovieView() {
    const [movieList,setMovie]=useState([]);
    const getData=async()=>{
        const res=await fetch('/movies.json')
        res.json().then(data=>setMovie(data.movies))
    }
    
    
console.log(movieList);
    const params=useParams()
    console.log(params);
    const result=movieList.find(i=>i.id==params.id)
    console.log("res",result);
    useEffect(()=>{
        getData();
    },[])
    
  return (
  <div>
    <Container className="mt-5 ms-5 p-5">
      {
      result?
        (<Row>
        <Col lg={6} md={6}><img alt="" src={result.Poster} width="300"></img>
        </Col>
        <Col lg={6} md={6}><strong className="fs-1">{result.Title}</strong>
        <br></br>
        <strong>Genre: </strong>{result.Genre}
        <br></br>
        <strong>Plot: </strong>{result.Plot}
        <br></br>
        <br></br>
        <strong>Released: </strong>{result.Released}
        <br></br>
        <strong>Director: </strong>{result.Director}
        <br></br>
        <strong>Actors: </strong>{result.Actors}
        <br></br>
        <br></br>
        <strong className="fs-3">Rating: {result.imdbRating}</strong>
        <Photos resPhotos={result.Images}></Photos>
        </Col>
      </Row>):""
    }
    </Container>
  </div>
  )
}

export default MovieView;
