<template>
  <div class="support__cards-shell">
    <div>
      <div class="support__cards-header">
        <MainpageAtomTag :cssClass="colorTag" :title="titleTag" />

        <div class="support__cards-header-icon">
          <img :src="img" />
        </div>
      </div>
      <div class="support__cards-content">
        {{ title }}
      </div>
    </div>
    <div>
      <div class="support__cards-footer">
        <div class="support__cards-footer-text">
          <span class="support__cards-footer-text-span">{{ span }}</span>
          {{ text }}
        </div>

        <a href="https://t.me/MIT_union" target="_blank" class="support__cards-footer-button">
          <svg
            class="support__cards-footer-button-arrow"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.99969 9H15.9997"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M9.99969 3L16.4997 9L9.99969 15"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    default: "title",
    type: String,
  },
  text: {
    default: "text",
    type: String,
  },
  img: {
    default: "",
    type: String,
  },
  cssClass: {},
  span: {
    default: "span",
    type: String,
  },
  titleTag: {
    default: "title",
    type: String,
  },
  colorTag: {},
});
</script>
<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
.support__cards-shell {
  background: #ffffff;
  border: 1px solid #828282;
  border-radius: 60px;
  padding: 48px;
  width: 572px;
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.support__cards-shell:first-child {
  margin-right: 40px;
}

.support__cards-content {
  padding-top: 64px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  @include adaptiv-size(320, 160, 74);
  @include adaptiv-height(320, 160, 84);
  color: #000000;
}
.support__cards-header,
.support__cards-footer {
  display: flex;
  justify-content: space-between;
}
.support__cards-footer-text {
  font-family: "Inter";
  font-weight: 500;
  @include adaptiv-size(36, 18, 16);
  @include adaptiv-height(56, 28, 24);
  width: 50%;
}
.support__cards-footer-text-span {
  font-weight: 700;
}
.support__cards-footer-button {
  width: 50px;
  height: 50px;
  background: #025bff;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}

.support__cards-footer-button:hover {
  background: #002465;
  transition: 0.5s;
}
.support__cards-footer {
  padding-top: 64px;
  align-items: center;
}

@media only screen and (max-width: 1279px) {
  .support__cards-shell:first-child {
    margin-right: 0px;
  }
  .support__cards-shell:last-child {
    margin-top: 16px;
  }
  .support__cards-shell {
    width: 100%;
  }
}
@media only screen and (max-width: 1200px) {
  .support__cards-shell {
    height: 100%;
  }
  .support__cards-footer {
    padding-top: 40px;
  }
}
@media only screen and (max-width: 720px) {
  .support {
    padding: 24px;
    border-radius: 32px;
  }

  .support__title {
    display: none;
  }

  .support__title-mobail {
    display: block;
    font-family: "Inter";
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    background: linear-gradient(295.49deg, #8e1cba 60.3%, #3d0881 80.15%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .support__cards {
    margin-top: 24px;
  }
  .support__cards-shell {
    border-radius: 32px;
    padding: 24px;
    width: 100%;
    height: 100%;
  }

  .support__cards-header-tag {
    padding: 4px 16px;
    width: 125px;
    height: 32px;
    font-size: 16px;
    line-height: 24px;
  }
  .support__cards-header-icon {
    width: 32px;
  }
  .support__cards-content {
    padding-top: 40px;
  }
  .support__cards-footer {
    padding-top: 20px;
    align-items: flex-end;
  }
  .support__cards-footer-button {
    width: 32px;
    height: 32px;
    border-radius: 16px;
  }

  .support__cards-footer-button-arrow {
    width: 12px;
    height: 12px;
  }

  .support__cards-footer-text {
    width: 80%;
  }
}
@media only screen and (max-width: 390px) {
  .support__cards-content {
    padding-top: 40px;
  }
}
</style>
