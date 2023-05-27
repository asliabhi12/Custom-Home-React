import React, { useEffect, useState } from "react";
import axios from "axios";

const GfgWeekly = () => {
  const [problem, setProblem] = useState("");
  const [link, setLink] = useState("")

  const today = new Date();
  const options = { month: 'long', day: 'numeric' };
  const dateString = today.toLocaleDateString('en-US', options);
  const [month, date] = dateString.split(' ');
  
  
  useEffect(() => {
    axios.get("http://localhost:8800/scrape")
    .then((res)=>{
      setProblem(res.data.problemDescription)
      setLink(res.data.solveButtonHref)
      console.log()
      
    }).catch((error)=>{
      console.log(error)
    })
  

   
  }, []);



  
  
  return (
    <div class="ele-container" id="ele-3">
      <nav>
        <h2 id="gfg-today">Today Challenge</h2>
        <img id="gfg-logo" src="./assets/images/gfg-logo.png" alt="" />
      </nav>
      <div class="gfg-container">
        <span class="date">{date} {month} </span>
        <h2>{problem}</h2>
        <button><a href={link}>Solve Problem </a></button>
       
        
        <br />
        <span class="last-days">
          Last 7 days <i class="fa-solid fa-chevron-down"></i>
        </span>
        <div class="last-seven-container">
          <div class="done-gfg gfg-week-streak"></div>
          <div class="done-gfg gfg-week-streak"></div>
          <div class="done-gfg gfg-week-streak"></div>
          <div class="done-gfg gfg-week-streak"></div>
          <div class="done-gfg gfg-week-streak"></div>
          <div class="not-done-gfg gfg-week-streak"></div>
          <div class="not-done-gfg gfg-week-streak"></div>
        </div>
      </div>
    </div>
  );
};

export default GfgWeekly;
