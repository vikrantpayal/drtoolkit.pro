import React, { Component } from 'react';
import './style.css';

class Home extends Component {
  render() {
    return (
      <>
        <br/>
         <h2>About Dr. Toolkit Pro</h2>
         <br/>     
         <p>Fast, simple tools for Allopathy practitioners across India.</p>
         <p>
         This toolkit started with an idea - making life easier for busy healthcare professionals. 
         The first tool we have built is a fast search.  
         Click on Search Medicines in the menu to try it.
         </p>
         <p>
         The <b>Search Medicines</b> tool helps doctors quickly query
         our database of medicines. You can search on ingredients, brand,
         mode of administration, even prices. This helps doctors recommend
         the best from the available options. The tool is designed with a 
         focus on ergonomics and speed - no forms or buttons. See results
         instantly, while you key in the search. 
         </p>
         <p>
         More tools coming soon. Meanwhile do reach out if you have feedback or suggestions. 
         Our mail id is <a href="mailto:drtoolkit.pro@gmail.com">drtoolkit.pro@gmail.com</a></p>
         <br/>
         <p><i>~ Dr. Abhishek Payal</i></p>
      </>
    )
  }
}

export default Home;
