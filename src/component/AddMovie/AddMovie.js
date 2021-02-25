import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AddMovie = ({ handleItem }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [img, setImg] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleItem({ title, rating, img, info });
    handleClose();
  };

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add your Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>Poster Url:</label>
        <input
          onChange={(e) => setImg(e.target.value)}
          value={img}
          placeholder="Enter the poster's url"
        />
        <br />
        <label>Name:</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="type the movie's name"
        />
        <br />
        <label>Description:</label>
        <input
          onChange={(e) => setInfo(e.target.value)}
          value={info}
          placeholder="Describe your movie"
        />
        <br />
        <label>Rate:</label>
        <input
          type="number"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          placeholder="Rate your movie"
          min={0}
          max={5}
        />
        <br />
        <button>Add</button>
      </form>
    </div>
  );

  return (
    <div>
      <button onClick={handleOpen} style={{ width: "18rem", height: "36rem" }}>
        [ + ]
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};
export default AddMovie;
