<template>
    <div class="wrap">
        <div class="circular-progressing">
            <div class="video-contents">
                <video id="video-small" style="border-radius: 50%; padding: 4px; width: 100%;">
                    <source src="/video/video.mp4" type="video/mp4" autoplay/>
                </video>
            </div>
        </div>
        <div class="controls">
            <button class="sounds-button controls-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff" style="stroke: #fff;">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
            </button>
            <button class="plays-button controls-button">
              <svg class="play-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.00012207" width="48" height="48" rx="24" fill="#828282" fill-opacity="0.4"/>
                <path d="M31 24.0001L19 31.0001V17.0001L31 24.0001Z" fill="#F6FBFD" fill-opacity="0.75"/>
              </svg>
            </button>
        </div>
    </div>
    
    </template>
    
    <script setup >
    onMounted(()=>{
    const play = `<svg class="play-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.00012207" width="48" height="48" rx="24" fill="#828282" fill-opacity="0.4"/><path d="M31 24.0001L19 31.0001V17.0001L31 24.0001Z" fill="#F6FBFD" fill-opacity="0.75"/></svg>`;
    const pause = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <g id="Media / Pause_Circle"> <path id="Vector" d="M14 9V15M10 9V15M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </g></svg>`;
    const sound = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M2 14.9588L2 9.04123C2 8.46617 2.44772 8 3 8H6.58579C6.851 8 7.10536 7.8903 7.29289 7.69503L10.2929 4.30706C10.9229 3.65112 12 4.11568 12 5.04332V18.9567C12 19.8908 10.91 20.3524 10.2839 19.6834L7.29437 16.3145C7.10615 16.1134 6.84791 16 6.57824 16H3C2.44772 16 2 15.5338 2 14.9588Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16 8.5C17.3333 10.2778 17.3333 13.7222 16 15.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19 5C22.9879 8.80835 23.0121 15.2171 19 19" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g></svg>`;
    const mute = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M3.15838 13.9306C2.44537 12.7423 2.44537 11.2577 3.15838 10.0694C3.37596 9.70674 3.73641 9.45272 4.1511 9.36978L5.84413 9.03117C5.94499 9.011 6.03591 8.95691 6.10176 8.87788L8.17085 6.39498C9.3534 4.97592 9.94468 4.26638 10.4723 4.45742C11 4.64846 11 5.57207 11 7.41928L11 16.5807C11 18.4279 11 19.3515 10.4723 19.5426C9.94468 19.7336 9.3534 19.0241 8.17085 17.605L6.10176 15.1221C6.03591 15.0431 5.94499 14.989 5.84413 14.9688L4.1511 14.6302C3.73641 14.5473 3.37596 14.2933 3.15838 13.9306Z" fill="#ffffff" fill-opacity="0.24" stroke="#ffffff" stroke-width="1.2"/> <path d="M15 15L21 9" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"/> <path d="M21 15L15 9" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"/></g></svg>`;
    
    const video = document.getElementById("video-small");
    const playButton = document.querySelector(".plays-button");
    const soundButton = document.querySelector(".sounds-button");
    const videoContainer = document.querySelector(".wrap");
    
    playButton.addEventListener("click", function () {
      if (video.paused) {
        video.play();
        videoContainer.classList.add("playing");
        playButton.innerHTML = pause;
      } else {
        video.pause();
        videoContainer.classList.remove("playing");
        playButton.innerHTML = play;
      }
    });
    
    video.onended = function () {
      playButton.innerHTML = play;
    };
    let circularProgress = document.querySelector(".circular-progressing");
    
    video.ontimeupdate = function (e) {
        console.log(e)
        console.log(video.currentTime)
      const percentagePosition = (100 * video.currentTime) / video.duration;
      circularProgress.style.background = `conic-gradient(rgba(239, 93, 168, 1) ${Math.floor(percentagePosition) * 3.6}deg, transparent 0deg)`;
    };
    
    soundButton.addEventListener("click", function () {
      video.muted = !video.muted;
      soundButton.innerHTML = video.muted ? mute : sound;
    });
    })
    </script>
    <style scoped>
    .wrap{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .container{
        display: flex;
        width: 100%;
        padding: 50px 0;
        border-radius: 8px;
        background: transparent;
        row-gap: 30px;
        flex-direction: column;
        align-items: center;
    }
    .circular-progressing{
        position: relative;
        max-width: 372px;
        max-height: 372px;
        border-radius: 50%;
        background: conic-gradient(rgba(239, 93, 168, 1) 3.6deg, transparent 0deg);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .video-contents{
        width: 372px;
    }
    .controls {
      position: absolute;
      top: 0;
      left: 36%;
      align-items: center;
      display: flex;
      flex-direction: column;
      transition: opacity .2s;
    }
    
    .video-player.playing .controls {
      opacity: 0;
    }
    
    .video-player:hover .controls {
      opacity: 1;
    }
    
    .controls-button {
      border: none;
      background: transparent;
      cursor: pointer;
      opacity: 1;
      transition: all .2s;
    }
    
    .controls-button:hover {
      opacity: 1;
    }
    
    .controls-button.plays-button {
      background-color: transparent;
      border-radius: 50%;
      margin-top: 80px;
      width: 100px;
    }
    
    .controls-button.sounds-button {
      height: 40px;
      width: 40px;
      margin-top: 20px;
      background-color: #828282;
      border-radius: 50%;
    }
    .controls-button svg {
      fill: transparent;
    }
    @media only screen and (max-width: 1920px){
      .circular-progressing{
        position: relative;
        max-width: 960px;
        max-height: 960px;
        border-radius: 50%;
        background: conic-gradient(rgba(239, 93, 168, 1) 3.6deg, transparent 0deg);
        display: flex;
        align-items: center;
        justify-content: center;
    }
      .video-contents{
        width: 279px;
      }
      .controls-button.plays-button{
        margin-top: 60px;
        width: 80px;
      }
    }
    @media only screen and (max-width: 1280px){
      .video-contents{
        width: 186px;
      }
      .wrap{
        width: 200px;
        height: 55%;
      }
      .controls-button.plays-button{
        margin-top: 30px;
        width: 50px;
      }
      .controls-button.sounds-button {
        height: 25px;
        width: 25px;
      }
    }
    @media only screen and (max-width: 390px){
      .controls{
        left: 37%;
      }
      .video-contents{
        width: 120px;
      }
      .wrap{
        width: 120px;
      }
      .controls-button.plays-button{
        margin-top: 20px;
        width: 30px;
      }
      .controls-button.sounds-button {
        height: 20px;
        width: 20px;
        margin-top: 10px;
      }
    }
    </style>
    