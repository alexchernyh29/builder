<template>
  <div class="video" :class="{ video_small: isMinimal }">
    <div class="video__wrap">
      <div class="video__content">
        <video
          poster="/images/poster123.png"
          ref="video"
          :muted="isMuted"
          class="video-width"
        >
          <source src="/video/rty.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <svg
      class="video__progress"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
    >
      <circle
        cx="150"
        cy="150"
        r="147px"
        :stroke-dasharray="`${progress}, 20000`"
      ></circle>
    </svg>
    <div class="video__controls">
      <button class="video__sound-btn" @click="toggleMute">
        <svg
          v-if="isMuted"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#fff"
          stroke-width="1.5"
          class="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.531V19.94a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25h2.24z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#fff"
          stroke-width="1.5"
          class="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25h2.24z"
          />
        </svg>
      </button>
      <button
        class="video__play-btn"
        :class="{ paused: isPaused }"
        @click="playVideo"
      >
        <svg
          v-if="isPaused"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="56"
            height="56"
            rx="28"
            fill="#828282"
            fill-opacity="0.4"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23 18C21.62 18 20.5 19.12 20.5 20.5V35.5C20.5 36.88 21.62 38 23 38C24.38 38 25.5 36.88 25.5 35.5V20.5C25.5 19.12 24.38 18 23 18ZM35.5 20.5V35.5C35.5 36.88 34.38 38 33 38C31.62 38 30.5 36.88 30.5 35.5V20.5C30.5 19.12 31.62 18 33 18C34.38 18 35.5 19.12 35.5 20.5Z"
            fill="white"
          />
        </svg>
        <svg
          v-else
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="56"
            height="56"
            rx="28"
            fill="#828282"
            fill-opacity="0.4"
          />
          <path
            d="M36.1667 27.9999L22.1667 36.1666V19.8333L36.1667 27.9999Z"
            fill="#F6FBFD"
            fill-opacity="0.75"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  isMinimal: {
    default: false,
    type: Boolean,
  },
});

const isMuted = ref(false);
const isPaused = ref(false);
const video = ref(null);
const progress = ref(0);

const toggleMute = () => {
  isMuted.value = !isMuted.value;
};

const playVideo = () => {
  if (isPaused.value) {
    video.value.pause();
  } else {
    video.value.play();
  }
  isPaused.value = !isPaused.value;
};

watchEffect(() => {
  if (video.value) {
    bindVideoEvents();
  }
});

const updateProgress = () => {
  const currentProgress = Math.floor(
    (100 * video.value.currentTime) / video.value.duration
  );
  const maxVal = 925;
  const newVal = (currentProgress * maxVal) / 100;
  progress.value = newVal;
};

const bindVideoEvents = () => {
  video.value.addEventListener("timeupdate", function (e) {
    updateProgress();
  });
  video.value.addEventListener("ended", function (e) {
    progress.value = 0;
    isPaused.value = false;
  });
};

const unbindVideoEvents = () => {
  video.value.removeEventListener("timeupdate", function (e) {
    console.log("timeupdate", e);
  });
  video.value.removeEventListener("ended", function (e) {
    console.log("ended", e);
  });
};

onBeforeUnmount(() => {
  unbindVideoEvents();
});
</script>
<style lang="scss" scoped>
.video {
  position: relative;
  width: 100%;
  height: 100%;
  animation: showDiv 1s forwards;

  &_small {
    .video__progress {
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;

      circle {
        stroke: #ef5da8;
      }
    }
  }

  &:hover .video__play-btn.paused {
    opacity: 1;
  }

  &__wrap {
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 1280px;
    max-height: 1280px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s;
  }

  &__progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    circle {
      fill: none;
      stroke: #fff;
      stroke-width: 3;
      stroke-linecap: round;
      transform-origin: center;
      transform: rotate(-90deg);
      transition: stroke-dasharray 1s;
    }
  }

  &__content {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 3px;
    overflow: hidden;
    position: relative;
    video {
      position: absolute;
      top: 50%;
      left: 48%;
      transform: translate(-50%, -50%);
      width: 130%;
      height: 103%;
      max-width: none;

      @media only screen and (max-width: 1120px) {
        left: 49%;
      }
    }
    video[poster] {
      max-width: 130%;
    }
  }

  &__controls {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: opacity 0.2s;
    animation: showContrl 1s forwards;
  }

  &__sound-btn {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    text-align: center;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 500px) {
      top: 10px;
      width: 25px;
      height: 25px;
    }
  }

  &__play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    border-radius: 50%;
    width: 20%;
    &.paused {
      opacity: 0;
      transition: opacity 0.3s;
    }
    @media only screen and (max-width: 1120px) {
      width: 25%;
    }
  }
}
@keyframes showDiv {
  0%,
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes showContrl {
  0%,
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
