<template>
	<details>
        <summary class="faq-question">{{title}}</summary>
        <div class="faq-answer" v-html="text"></div>
    </details>
</template>

<script setup>
    const props = defineProps({
		title: {
			default: "title",
			type: String
		},
        text: {
			default: "text",
			type: String
		},
    })
</script>
<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
.faq-answer a {
  cursor: pointer !important;
  color: violet !important;
}
.faq-answer {
  font-family: 'Inter';
  font-weight: 400;
  @include adaptiv-size(34, 16, 14);
  @include adaptiv-height(54, 26, 22);
}
details{
    display: block;
    background: #F3F4F6;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 16px;
}
.faq-question::-webkit-details-marker{display:none;}
.faq-question::-moz-list-bullet{list-style-type:none;}
.faq-question::marker{display:none;} 
.faq-question {
    display:block;
    padding: 24px 72px 24px 24px;
    font-family: 'Inter';
    font-weight: 500;
    @include adaptiv-size(36, 18, 16);
    @include adaptiv-height(56, 28, 24);
    color: #111827;
    cursor: pointer;
    position: relative;
    background: #F3F4F6;
    border-radius: 16px;
}
.faq-question:before {  
  top: 24px;
  right: 24px;
  color: transparent;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYuNTkgOC41OUwxMiAxMy4xNyA3LjQxIDguNTkgNiAxMGw2IDYgNi02eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=") no-repeat 50% 50% / 1em 1em;
  width: 24px;
  height: 24px;
  content: "";
  position: absolute;
  transition: transform 0.3s;
}
details[open] > .faq-question:before {
  transform: scale(1,-1);
}
.faq-question ~ * {
   padding: 0px 24px 24px;
}
details[open] .faq-question ~ *{ 
  animation: sweep 1.1s ease-in-out;
}
@keyframes sweep {
  0%    {opacity: 0;}
  100%  {opacity: 1;}
}
@media only screen and (max-width: 768px) {
	.faq-question {
		font-size: 16px;
		line-height: 24px;
	}
}
@media only screen and (max-width: 390px) {
	.faq-question {
		font-size: 16px;
		line-height: 24px;
    padding: 14px 50px 14px 14px;
	}
  .faq-question ~ * {
    padding: 0px 18px 24px;
  }
}
</style>
