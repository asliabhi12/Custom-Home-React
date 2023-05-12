import React from 'react'
import {Spotify} from 'react-spotify-embed'

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
        <Spotify link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83" class="social-container" id="spotify"/>
      </div>
  )
}

export default Social