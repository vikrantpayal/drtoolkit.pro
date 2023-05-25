import './style.css'
import React, { Component, useState, Fragment } from 'react';
import { BrowserRouter  as Router, Routes, Route, Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import {data} from './data.js'

class SearchMedicines extends Component {
  render() {
    return (
      <>
       <br/>
       <h2>Search Medicines</h2>
       <br/>
        <p>
            <SearchBox />
        </p>
      </>
    )
  }
}



const SearchBox = () => {
    const [search, setSearch] = useState('')
    
    function handleChange(e){
        setSearch(e.target.value)
    }

     
    return (
        <div>
          
            <Container>
               
               <Form>
                   <InputGroup className='my-3'>
                       <Form.Control
                           onChange={handleChange}
                           placeholder='Search medicines'
                       />
                   </InputGroup>
               </Form> 
                <Table striped bordered hover>
         <thead>
            <tr>
              <th>Brand</th>
              <th>Category</th>
              <th>Sub-category</th>
              <th>Ingredient 1</th>
              <th>Ingredient 2</th>
              <th>Unit</th>
              <th>PTR</th>
              <th>Pharma</th>
            </tr>
          </thead>
  
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.brandName.toLowerCase().includes(search.toLowerCase()) || 
                    item.category.toLowerCase().includes(search.toLowerCase()) ||
                    item.subcategory.toLowerCase().includes(search.toLowerCase())  ||
                    item.ingredient1.toLowerCase().includes(search.toLowerCase())  ||
                    item.ingredient2.toLowerCase().includes(search.toLowerCase())  ||
                    item.unit.toLowerCase().includes(search.toLowerCase())  ||
                    item.ptr.toLowerCase().includes(search.toLowerCase()) ||
                    item.pharma.toLowerCase().includes(search.toLowerCase());
              })

                  .map((item, index) => (
                  <tr key={index}>
                      <td>{item.brandName}</td>
                      <td>{item.category}</td>
                      <td>{item.subcategory}</td>
                      <td>{item.ingredient1}</td>
                      <td>{item.ingredient2}</td>
                      <td>{item.unit}</td>
                      <td>{item.ptr}</td>
                      <td>{item.pharma}</td>
                   </tr>
                   ))}
          </tbody>          
                </Table>

            </Container>
        </div>

    );
}

export default SearchMedicines;
