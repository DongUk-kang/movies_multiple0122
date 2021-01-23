    import React from 'react';
    import {Card} from "react-bootstrap";

    const Video = ({title, overview, poster}) => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${poster}`} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                             <Card.Text>
                                {overview.substring(0, 80)}...
                            </Card.Text>

                </Card.Body>
            </Card>
        );
    };

    export default Video;
