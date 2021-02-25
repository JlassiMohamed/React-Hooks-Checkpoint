import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Button } from "react-bootstrap";

const Movie = ({ location, history }) => {
  const movie = location.state.movie;
  console.log(movie.title);
  return (
    <div>
      <div className="container" style={{ paddingTop: "10px" }}>
        <div className="card float-left">
          <div className="row ">
            <div className="col-sm-7">
              <div className="card-block">
                <h6></h6>
                <h4 class="card-title">{movie.title}</h4>
                <hr />
                <h6>Details:</h6>
                <p>{movie.info}</p>
                <hr />
                <h6>Synopsis:</h6>
                <p>{movie.description}</p>
                <hr />
                <Rating
                  name="half-rating-read"
                  defaultValue={movie.rating}
                  precision={0.5}
                  readOnly
                />
              </div>
            </div>
            <div className="col-sm-5">
              <iframe
                width="100%"
                height="100%"
                src={movie.video || movie.img}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <Button variant="info" onClick={() => history.goBack()}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default Movie;
