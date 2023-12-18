<template>
	<AtomWrapper :ab="ab" :abdata="ab_page" :bgcolor="bg" :fullwidth="full">
        <div class="content">
            <img class="content__img" :src="img" alt="img">
            <div class="content__item">
                <p class="content__item-title">{{ title }}</p>
                <p class="content__item-description">{{ description }}</p>
                <a :href="link" class="content__item-link">{{ text_link }}</a>
            </div>
        </div>
    </AtomWrapper>
</template>
<script setup>
const props = defineProps({
		bg: {
			default: "",
		},
		full: {
			default: false,
		},
		ab_page: {
			default: "0",
		},
		pd:  {
			default: true,
		},
		ab: {
			default: '0'
		},
        title: {
			default: "A vitae dolor cum non pellentesque nisi pellentesque",
		},
        description: {
			default: "Mattis donec in et risus quis nibh bibendum pellentesque. Congue dignissim nunc convallis nulla. Turpis consectetur dui massa vitae facilisis praesent. In augue auctor at egestas venenatis dictumst vestibulum. At massa vel scelerisque diam ipsum eros nam sit justo.",
		},
        link: {
			default: "/",
		},
        text_link: {
			default: "Button text",
		},
        img: {
			default: "/images/img-default.png",
		},
	})
</script>
<style lang="scss" scoped>
.content {
    max-width: 1920px;
    max-height: 960px;
    width: 100%;
    height: 100%;
    padding: 56px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 60px;
    background: #F9F8F9;
    @media only screen and (max-width: 1200px) {
        flex-direction: column;
        padding: 32px;
        border-radius: 30px;
    }
    @media (max-width: 720px) {
        padding: 24px;
        border-radius: 20px;
    }

    &__img {
        max-width: 460px;
        width: 100%;
        @media only screen and (max-width: 1200px) {
            max-width: 100%;
        }
    }

    &__item {
        margin-left: 26px;
        max-width: 750px;
        width: 100%;
        @media only screen and (max-width: 1200px) {
            margin-left: 0px;
            max-width: 100%;
            margin-top: 24px;
        }
    }

    &__item-title {
        color:  #231D33;
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: -0.96px;
        @media (max-width: 720px) {
            font-size: 22px;
            line-height: 32px;
        }
    }

    &__item-description {
        margin: 16px 0 26px 0;
        color:  #4B445C;
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
        @media (max-width: 720px) {
            font-size: 14px;
            line-height: 26px;
        }
    }

    &__item-link {
        padding: 8px 16px;
        border-radius: 6px;
        background: #231D33;
        color: #FFF;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
    }
}
</style> 