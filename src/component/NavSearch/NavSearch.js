import React from "react";
import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

const Filter = ({ setSearch, setRating }) => {
  const classes = useStyles();

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">Router</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">Home</Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          className="mr-sm-2"
          placeholder="Search by title..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
      <Rating
        name="half-rating"
        defaultValue={3}
        precision={1}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
    </Navbar>
  );
};

export default Filter;
