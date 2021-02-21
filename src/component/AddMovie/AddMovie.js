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
  const [description, setDescription] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleRating = (e) => {
    setRating(e.target.value);
  };
  const handleImage = (e) => {
    setImg(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    handleItem({ title, rating, img, description });
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
            onChange={handleImage}
            value={img}
            placeholder="Enter the poster's url"
          />
          <br />
          <label>Name:</label>
          <input
            onChange={handleTitle}
            value={title}
            placeholder="type the movie's name"
          />
          <br />
          <label>Description:</label>
          <input
            onChange={handleDescription}
            value={description}
            placeholder="Describe your movie"
          />
          <br />
          <label>Rate:</label>
          <input
            type="number"
            onChange={handleRating}
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
        <button
          onClick={handleOpen}
          style={{ width: "18rem", height: "36rem" }}
        >
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
