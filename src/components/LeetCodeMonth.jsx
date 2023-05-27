import React,{useState, useEffect} from 'react'
import axios from 'axios'


const LeetCodeMonth = () => {
  
  return (
    <div class="ele-container" id="ele-4">
    <nav id="leet-nav-container">
      <div class="leet-nav-left">
        <h2>This Month</h2>
        <img src="./assets/images/down-leet.png" alt="" srcset="" />
      </div>
      <img
        src="./assets/images/leetcode.png"
        id="leet-code-icon"
        alt=""
        srcset=""
      />
    </nav>
    <div class="leet-streak-container">
      <div class="leet-month-streak">
        <div class="light-green leet-box"></div>
        <div class="light-green leet-box"></div>
        <div class="light-green leet-box"></div>
        <div class="yellow leet-box"></div>
        <div class="dark-green leet-box"></div>
        <div class="dark-green leet-box"></div>
        <div class="light-green leet-box"></div>
        <div class="light-green leet-box"></div>
        <div class="light-green leet-box"></div>
        <div class="yellow leet-box"></div>
        <div class="light-green leet-box"></div>
        <div class="light-green leet-box"></div>
        <div class="dark-green leet-box"></div>
        <div class="dark-green leet-box"></div>
        <div class="dark-green leet-box"></div>
        <div class="light-green leet-box"></div>
        <div class="light-green leet-box"></div>
        <div class="light-green leet-box"></div>
        <div class="light-green leet-box"></div>
        <div class="light-green leet-box"></div>
        <div class="yellow leet-box"></div>
        <div class="light-green leet-box"></div>
        <div class="light-green leet-box"></div>
        <div class="light-green leet-box"></div>
        <div class="light-green leet-box"></div>
        <div class="yellow leet-box"></div>
        <div class="dark-green leet-box"></div>
        <div class="dark-green leet-box"></div>
      </div>
    </div>

    <div class="leet-lower-area">
      <div class="leet-left">
        <img src="./assets/images/leet-progress.png" alt="" />
      </div>
      <div class="leet-right">
        <img src="./assets/images/leet-badges.png" alt="" />
        <div class="fucking-text">
          <span class="yellow-text">03</span>

          <span class="leet-lower-text">Badges</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LeetCodeMonth