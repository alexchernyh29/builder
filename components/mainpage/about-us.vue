<template>
  <div class="container-mit">
    <div class="about-us">
      <div class="about-us__slider">
        <MainpageAtomSlider />
      </div>
      <div class="about-us__video">
        <div class="preload"><div class="loader">loading</div></div>
        <MainpageAtomVideoContent />
        <!-- <div class="preloader-5"></div> -->
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.about-us {
  display: flex;
  width: 100%;
  max-height: 1280px;
}
.about-us__video {
  position: relative;
  width: 50vw;
  height: 50vw;
  max-height: 1280px;
  display: flex;
  align-items: center;
}
.about-us__slider {
  width: 50%;
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
}
// .preloader-5 {
//     display: block;
//     position: relative;
//     width: 150px;
//     height: 150px;
//     margin: 30px auto;
//     border-radius: 50%;
//     border: 3px solid transparent;
//     border-top-color: #34057B;
//     animation: preloader-5-spin 2s linear infinite;
// }
// .preloader-5:before {
//     content: "";
//     position: absolute;
//     top: 5px;
//     left: 5px;
//     right: 5px;
//     bottom: 5px;
//     border-radius: 50%;
//     border: 3px solid transparent;
//     border-top-color: #921CBC;
//     animation: preloader-5-spin 3s linear infinite;
// }
// .preloader-5:after {
//     content: "";
//     position: absolute;
//     top: 15px;
//     left: 15px;
//     right: 15px;
//     bottom: 15px;
//     border-radius: 50%;
//     border: 3px solid transparent;
//     border-top-color: #E45289;
//     animation: preloader-5-spin 1.5s linear infinite;
// }
// @keyframes preloader-5-spin {
//   0%   {
//       transform: rotate(0deg);
//   }
//   100% {
//       transform: rotate(360deg);
//   }
// }
.preload{
  position: absolute;
  margin: 0 auto;
  aspect-ratio: 1/1;
  max-width: 1280px;
  max-height: 1280px;
  width: 50vw;
  height: 50vw;
  padding: 50%;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  animation: showDiv 1s forwards;
}
.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: rgba(255, 255, 255, 0.1);
  font-size: 10px;
  margin: 50% auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes showDiv {
    0%, 99% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
}
@media only screen and (max-width: 1120px) {
  .about-us {
    flex-direction: column;
    margin: 0 auto;
    max-height: 100%;
  }
  .about-us__video {
    width: 100vw;
    margin: 0 auto;
    height: 100vw;
    justify-content: center;
  }
  .about-us__slider {
    width: 100%;
    margin: 0 auto;
  }
  .loader {
    margin: 27% auto;
  }
}
@media only screen and (max-width: 1000px) {
  .about-us__video {
    width: calc(100vw - 30px);
    height: calc(100vw - 30px);
  }
}
@media only screen and (max-width: 768px) {
  .loader {
    margin: 40% auto;
  }
}
@media only screen and (max-width: 390px) {
  .loader {
    margin: 31% auto;
  }
}
</style>
