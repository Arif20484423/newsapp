import React, { useState } from 'react'
import Navbar from "./Components/Navbar"
import News from './Components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const  App=()=> {
  const [progress,setProgress]=useState(0);
  const [search,setSearch]=useState("");
  const handlesearch=(event)=>{
    console.log(event.target.value)
    setSearch(event.target.value);
    console.log(search);
  }
  const loadprogress=(prog)=>{
    
    setProgress(progress=>prog);
  }
  
  
  const apikey=process.env.REACT_APP_API_KEY;
  

    return (
      <BrowserRouter>

      <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Navbar handlesearch={handlesearch} search={search}/>
      <Routes>
        <Route index element={<News apikey={apikey} loadprogress={ loadprogress}  category="business" key="home"/>}/>
        <Route exact path="politics" element={<News apikey={ apikey} loadprogress={ loadprogress} key="politics" category="politics"/>}/>
        <Route exact path="weather" element={<News apikey={ apikey} loadprogress={ loadprogress} key="weather" category="weather"/>}/>
        <Route exact path="nation" element={<News apikey={ apikey} loadprogress={ loadprogress} key="nation" category="nation"/>}/>
        <Route exact path="sports" element={<News apikey={ apikey} loadprogress={ loadprogress} key="sports" category="sports"/>}/>
        <Route exact path="entertainment" element={<News apikey={ apikey} loadprogress={ loadprogress} key="entertainment" category="entertainment"/>}/>
        <Route exact path={search} element={<News apikey={ apikey} loadprogress={ loadprogress} key={search} category={search}/>}/>
      </Routes>
      
      </div>
      </BrowserRouter>
    )
  
}

export default App;