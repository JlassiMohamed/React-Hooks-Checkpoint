import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import "./Filter.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

const Filter = ({ handleSearch, handleRating }) => {
  const classes = useStyles();

  const [inputText, setInputText] = useState("");
  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch({ inputText });
  };

  return (
    <div className="Search">
        <Rating
          name="half-rating"
          defaultValue={3}
          precision={1}
          onChange={(event, newValue) => {
            handleRating(newValue);
          }}
        />
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          value={inputText}
          placeholder="Search by title..."
        />
      </form>
      <div className={classes.root}>
      </div>
    </div>
  );
};

export default Filter;
