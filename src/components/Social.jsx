import React from 'react'

const Social = () => {
  return (
    <div class="ele-container" id="ele-2">
        <div class="social-container" id="twitter">
          <a href="https://twitter.com/home" target="_blank">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>

        <div class="social-container" id="youtube">
          <a href="https://youtube.com/" target="_blank">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div class="social-container" id="instagram">
          <a href="https://instagram.com/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div class="social-container" id="add">
          <div class="circle">
            <i class="fa-brands fa-add"></i>
          </div>
        </div>
        <div class="social-container" id="spotify">spotify</div>
      </div>
  )
}

export default Social