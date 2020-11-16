import React,{useState} from "react";
import '../App.css';
import'bootstrap/dist/css/bootstrap.min.css'
import {
   Button,Modal
} from 'react-bootstrap';
import StarRatingComponent from "react-star-rating-component";

const AddMovie = (props) => {
    const [show,setShow]=useState(false);
    const handleClose=()=> setShow(false);
    const handleShow=()=> setShow(true);
    const [addMovie,setAddMovie]=useState(
{

    title:"",
    description:"",
    posterUrl:"",
    rate:0
}
    );
    const handle=(e)=> {setAddMovie({...addMovie,[e.target.name]:e.target.value})};
    const handleR=(nextValue,prevValue,name)=> {setAddMovie({...addMovie,[name]:nextValue})};
return (
    <>
<Button variant="primary" onClick={handleShow}>Add Movie </Button>
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      // keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>New Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
<input className="" type="text" name="title" placeholder="movie title" onChange={handle} />
<input className="" type="text" name="posterUrl" placeholder="Img Source" onChange={handle} />
<input className="" type="text" name="Description" placeholder="Description of movie" onChange={handle} /> 
<div>
    <p>
        rating:
    </p>
    <StarRatingComponent name="rate" starCount={5} onStarClick={handleR}/>
</div>
     </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>props.Updatemovie(addMovie)}> Save movie</Button>
       
      </Modal.Footer>
    </Modal>
  </>
);
}
export default AddMovie;