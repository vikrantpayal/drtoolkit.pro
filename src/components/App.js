import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchMedicines from './SearchMedicines'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import './App.css'

class App extends Component{
    render(){
       return( <BrowserRouter>
            <Header />
                <SearchMedicines />
                <main className="flex-shrink-0">
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={<Home/>} />
                            <Route path="/searchmedicines" element={<SearchMedicines/>} />
                            <Route path="/about" element={<About/>} />
                            <Route path="/contact" element={<Contact/>} />
                            <Route path="*" element={<NotFound/>} />
                        </Routes>
                    </div>
                </main>

            <Footer />
        </BrowserRouter>
        )
    }
}

export default App
