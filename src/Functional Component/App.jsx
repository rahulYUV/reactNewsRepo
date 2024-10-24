import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default function App() {
    let [search, setSearch] = useState("")
    let [language, setLanguage] = useState("hi")

    function changeLanguage(data) {
        setLanguage(data)
    }
    function changeSearch(data) {
        setSearch(data)
    }
    return (
        <BrowserRouter>
            <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch} />
            <Routes>
                <Route path='' element={<Home language={language} q={search ? search : "All"} />} />
                <Route path='/All' element={<Home language={language} q={search ? search : "All"} />} />
                <Route path='/Politics' element={<Home language={language} q={search ? search : "Politics"} />} />
                <Route path='/Science' element={<Home language={language} q={search ? search : "Science"} />} />
                <Route path='/Technology' element={<Home language={language} q={search ? search : "Technology"} />} />
                <Route path='/Education' element={<Home language={language} q={search ? search : "Education"} />} />
                <Route path='/Crime' element={<Home language={language} q={search ? search : "Crime"} />} />
                <Route path='/Entertainment' element={<Home language={language} q={search ? search : "Entertainment"} />} />
                <Route path='/Sports' element={<Home language={language} q={search ? search : "Sports"} />} />
                <Route path='/Cricket' element={<Home language={language} q={search ? search : "Cricket"} />} />
                <Route path='/World' element={<Home language={language} q={search ? search : "World"} />} />
                <Route path='/Covid-19' element={<Home language={language} q={search ? search : "Covid-19"} />} />
                <Route path='/Jokes' element={<Home language={language} q={search ? search : "Jokes"} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
