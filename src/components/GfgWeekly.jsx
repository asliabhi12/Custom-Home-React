import React from "react";

const GfgWeekly = () => {
  return (
    <div class="ele-container" id="ele-3">
      <nav>
        <h2 id="gfg-today">Today Challenge</h2>
        <img id="gfg-logo" src="./assets/images/gfg-logo.png" alt="" />
      </nav>
      <div class="gfg-container">
        <span class="date">05 April</span>
        <h2>Count Special Numbers</h2>
        <button>Solve Problem</button>
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
