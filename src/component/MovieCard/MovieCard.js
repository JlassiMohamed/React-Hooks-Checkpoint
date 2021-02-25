import React from 'react'
import { Card, ListGroup, ListGroupItem, Button} from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
    return (
      <div style={{ padding: "20px" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={movie.img} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.info}</Card.Text>
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
          <Link to={{ pathname: "/movie", state: { movie: movie } }}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card>
      </div>
    );
}

export default MovieCard
