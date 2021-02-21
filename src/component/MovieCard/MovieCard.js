import React from 'react'
import { Card, ListGroup, ListGroupItem,} from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";

const MovieCard = ({movie}) => {

    return (
      <div style={{ padding: "20px" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={movie.img} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <Rating
                name="half-rating-read"
                defaultValue={movie.rating}
                precision={0.5}
                readOnly
              />
            </ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    );
}

export default MovieCard
