import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {data} from './data.js';


function App() {
    const [search, setSearch] = useState('');
    
    function handleChange(e){
        setSearch(e.target.value);
    }

     
    return (
        <div>
            <Container>
               <h1 className='text-center mt-4'>Dr. Toolkit Pro</h1>
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
              <th>GST %</th>
              <th>GST Amount</th>
              <th>Total w GST</th>
              <th>MRP</th>
              <th>Pharma</th>
            </tr>
          </thead>
  
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.brand_name.toLowerCase().includes(search.toLowerCase()) ||
                    item.category.toLowerCase().includes(search.toLowerCase())  ||
                    item.sub_category.toLowerCase().includes(search.toLowerCase())  ||
                    item.ingredient_1.toLowerCase().includes(search.toLowerCase())  ||
                    item.ingredient_2.toLowerCase().includes(search.toLowerCase())  ||
                    item.unit.toLowerCase().includes(search.toLowerCase())  ||
                    item.pharma.toLowerCase().includes(search.toLowerCase());
              })

                  .map((item, index) => (
                  <tr key={index}>
                      <td>{item.brand_name}</td>
                      <td>{item.category}</td>
                      <td>{item.sub_category}</td>
                      <td>{item.ingredient_1}</td>
                      <td>{item.ingredient_2}</td>
                      <td>{item.unit}</td>
                      <td>{item.ptr}</td>
                      <td>{item.gst_percent}</td>
                      <td>{item.gst_amount}</td>
                      <td>{item.total_w_gst}</td>
                      <td>{item.mrp}</td>
                      <td>{item.pharma}</td>
                   </tr>
                   ))}
          </tbody>          
                </Table>
            </Container>
        </div>

    );
}

export default App;
