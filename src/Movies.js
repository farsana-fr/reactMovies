import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Movies.css'
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
function Movies() {
  const [movieList, setMovie] = useState([]);

  const getData = async () => {
    const res = await fetch("/movies.json");
    res.json().then((data) => {
      setMovie(data.movies);
    });
  };

  console.log(movieList);
  useEffect(() => {
    getData();
  }, []);
  return (

    <Row className='ms-5 mb-5 p-2'>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/329583.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperset.com/w/full/b/d/8/537550.jpg"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701635249.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
        {
            movieList.map(movie=>(
                
                    <Col id="c1" className="p-2" lg={4} md={6} >
                    <Link id='l1' to={`/viewMovie/${movie.id}`} >
                        <Card className='mt-5 ms-5 rounded-5' style={{ width: '18rem', height:'400px' }}>
                        <Card.Img variant="top" src={movie.Poster} height="250" />
                        <Card.Body className="text-center text-white">
                            <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text>{movie.Year}
                            <br></br>
                            {movie.Genre}</Card.Text>
                        </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                
            ))
        }
    </Row>
  );
}

export default Movies;
