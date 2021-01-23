import React from 'react';
import {Card} from "react-bootstrap";

const Movie = ({moviename, overview, posters}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${posters}`} />
            <Card.Body>
                <Card.Title>{moviename}</Card.Title>
                    <Card.Text>
                        {overview.substring(0, 80)}...
                    </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default Movie;
