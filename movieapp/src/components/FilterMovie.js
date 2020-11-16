import React from "react";
import '../App.css';
import'bootstrap/dist/css/bootstrap.min.css'

import {Navbar,Button,
  InputGroup,
  Form,
  FormControl} from "react-bootstrap";


const FilterMovie =(props)=>{
    return(
        <Navbar className="bg-light justify-content-between">
        <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">filter by rating</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="rate value between 1 and 5"
              aria-label="rate"
              aria-describedby="basic-addon1"
              onChange={v=> props.UpdateRating(v.target.value)}
            />
          </InputGroup>
        </Form>
        <Form inline>
          <FormControl type="text" placeholder="Filter by Title" className=" mr-sm-2" onChange={e=> props.UpdateTitle(e.target.value)} />
          <Button type="Search">Submit</Button>
        </Form>
      </Navbar>

    )
}
export default FilterMovie;