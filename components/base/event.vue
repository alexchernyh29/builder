<template>
	<AtomWrapper :ab="ab" :abdata="ab_page" :bgcolor="bg" :fullwidth="full">
		<div class="mit-docs content">
            <div class="content__wrap">
                <div v-for="(item, i) in superarr" :key="i" class="content__wrap-card">
                    <img :src="item.img" src="/images/events-card-1.png" alt="events-card-img" class="content__wrap-img">
                    <div class="content__wrap-card-content">
                        <p class="content__wrap-card-title">{{ item.title }}</p>
                        <p class="content__wrap-card-info">{{ item.quantity_place }}</p>
                        <div class="content__wrap-list">
                            <div class="content__wrap-list-item">
                                <svg style="margin-right: 8px;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 20.4616L8.99998 18.3616L4.69615 20.027C4.40128 20.1411 4.12821 20.1084 3.87692 19.9289C3.62564 19.7494 3.5 19.5039 3.5 19.1924V6.07706C3.5 5.87962 3.55289 5.70238 3.65868 5.54533C3.76444 5.38828 3.91283 5.2745 4.10385 5.20398L8.99998 3.5386L15 5.63861L19.3038 3.97323C19.5987 3.85913 19.8717 3.88701 20.123 4.05688C20.3743 4.22675 20.5 4.46425 20.5 4.76938V17.9616C20.5 18.1655 20.4423 18.3443 20.3269 18.4982C20.2115 18.652 20.0551 18.7642 19.8576 18.8347L15 20.4616ZM14.25 18.627V6.92703L9.74995 5.35395V17.054L14.25 18.627ZM15.75 18.627L19 17.5501V5.70011L15.75 6.92703V18.627ZM4.99997 18.3001L8.25 17.054V5.35395L4.99997 6.45011V18.3001Z" fill="#921CBC"/>
                                </svg>
                                <p class="content__wrap-list-item-text">{{ item.place }}</p>
                            </div>
                            <div class="content__wrap-list-item">
                                <svg style="margin-right: 8px;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.3077 21.5001C4.80257 21.5001 4.375 21.3251 4.025 20.9751C3.675 20.6251 3.5 20.1975 3.5 19.6924V6.30784C3.5 5.80271 3.675 5.37514 4.025 5.02514C4.375 4.67514 4.80257 4.50014 5.3077 4.50014H6.69233V2.38477H8.23075V4.50014H15.8077V2.38477H17.3076V4.50014H18.6923C19.1974 4.50014 19.625 4.67514 19.975 5.02514C20.325 5.37514 20.5 5.80271 20.5 6.30784V19.6924C20.5 20.1975 20.325 20.6251 19.975 20.9751C19.625 21.3251 19.1974 21.5001 18.6923 21.5001H5.3077ZM5.3077 20.0001H18.6923C18.7692 20.0001 18.8397 19.9681 18.9038 19.904C18.9679 19.8398 19 19.7693 19 19.6924V10.3078H4.99997V19.6924C4.99997 19.7693 5.03202 19.8398 5.09612 19.904C5.16024 19.9681 5.23077 20.0001 5.3077 20.0001ZM4.99997 8.80787H19V6.30784C19 6.23091 18.9679 6.16038 18.9038 6.09627C18.8397 6.03217 18.7692 6.00012 18.6923 6.00012H5.3077C5.23077 6.00012 5.16024 6.03217 5.09612 6.09627C5.03202 6.16038 4.99997 6.23091 4.99997 6.30784V8.80787ZM12 14.077C11.7551 14.077 11.5465 13.9908 11.374 13.8184C11.2016 13.646 11.1154 13.4373 11.1154 13.1924C11.1154 12.9476 11.2016 12.7389 11.374 12.5665C11.5465 12.3941 11.7551 12.3078 12 12.3078C12.2448 12.3078 12.4535 12.3941 12.6259 12.5665C12.7984 12.7389 12.8846 12.9476 12.8846 13.1924C12.8846 13.4373 12.7984 13.646 12.6259 13.8184C12.4535 13.9908 12.2448 14.077 12 14.077ZM7.99998 14.077C7.75511 14.077 7.54646 13.9908 7.37403 13.8184C7.20159 13.646 7.11538 13.4373 7.11538 13.1924C7.11538 12.9476 7.20159 12.7389 7.37403 12.5665C7.54646 12.3941 7.75511 12.3078 7.99998 12.3078C8.24484 12.3078 8.45349 12.3941 8.62593 12.5665C8.79836 12.7389 8.88458 12.9476 8.88458 13.1924C8.88458 13.4373 8.79836 13.646 8.62593 13.8184C8.45349 13.9908 8.24484 14.077 7.99998 14.077ZM16 14.077C15.7551 14.077 15.5465 13.9908 15.374 13.8184C15.2016 13.646 15.1154 13.4373 15.1154 13.1924C15.1154 12.9476 15.2016 12.7389 15.374 12.5665C15.5465 12.3941 15.7551 12.3078 16 12.3078C16.2448 12.3078 16.4535 12.3941 16.6259 12.5665C16.7984 12.7389 16.8846 12.9476 16.8846 13.1924C16.8846 13.4373 16.7984 13.646 16.6259 13.8184C16.4535 13.9908 16.2448 14.077 16 14.077ZM12 18.0001C11.7551 18.0001 11.5465 17.9139 11.374 17.7415C11.2016 17.569 11.1154 17.3604 11.1154 17.1155C11.1154 16.8707 11.2016 16.662 11.374 16.4896C11.5465 16.3171 11.7551 16.2309 12 16.2309C12.2448 16.2309 12.4535 16.3171 12.6259 16.4896C12.7984 16.662 12.8846 16.8707 12.8846 17.1155C12.8846 17.3604 12.7984 17.569 12.6259 17.7415C12.4535 17.9139 12.2448 18.0001 12 18.0001ZM7.99998 18.0001C7.75511 18.0001 7.54646 17.9139 7.37403 17.7415C7.20159 17.569 7.11538 17.3604 7.11538 17.1155C7.11538 16.8707 7.20159 16.662 7.37403 16.4896C7.54646 16.3171 7.75511 16.2309 7.99998 16.2309C8.24484 16.2309 8.45349 16.3171 8.62593 16.4896C8.79836 16.662 8.88458 16.8707 8.88458 17.1155C8.88458 17.3604 8.79836 17.569 8.62593 17.7415C8.45349 17.9139 8.24484 18.0001 7.99998 18.0001ZM16 18.0001C15.7551 18.0001 15.5465 17.9139 15.374 17.7415C15.2016 17.569 15.1154 17.3604 15.1154 17.1155C15.1154 16.8707 15.2016 16.662 15.374 16.4896C15.5465 16.3171 15.7551 16.2309 16 16.2309C16.2448 16.2309 16.4535 16.3171 16.6259 16.4896C16.7984 16.662 16.8846 16.8707 16.8846 17.1155C16.8846 17.3604 16.7984 17.569 16.6259 17.7415C16.4535 17.9139 16.2448 18.0001 16 18.0001Z" fill="#921CBC"/>
                                </svg>
                                <p class="content__wrap-list-item-text">{{ item.data }}</p>
                            </div>
                        </div>
                        <p class="content__wrap-card-text">{{ item.description }}</p>
                        <div class="content__wrap-card-footer">
                            <div class="wrap">
                                <div class="wrap-img">
                                    <img v-if='item.img1' :src="item.img1" class="img numb-0 " :class="cssClass">
                                    <img v-if='item.img2' :src="item.img2" class="img numb-1 " :class="cssClass">
                                    <img v-if='item.img3' :src="item.img3" class="img numb-2 " :class="cssClass">
                                </div>
                                <p class="card__partners-text" v-if='item.title_image'>{{ item.title_image }}</p>
                            </div>
                            <div class="content__wrap-card-footer-buttons">
                                <div class="content__wrap-card-footer-button-search">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.0011 21.7501C17.2375 21.7501 16.5881 21.4827 16.0529 20.948C15.5176 20.4133 15.25 19.764 15.25 19.0001C15.25 18.8753 15.2599 18.746 15.2798 18.6122C15.2997 18.4785 15.3295 18.3552 15.3692 18.2424L7.97305 13.9116C7.70895 14.1744 7.40831 14.3799 7.07113 14.528C6.73394 14.676 6.37689 14.7501 5.99997 14.7501C5.23609 14.7501 4.58679 14.4828 4.05207 13.9483C3.51736 13.4138 3.25 12.7648 3.25 12.0012C3.25 11.2377 3.51736 10.5882 4.05207 10.053C4.58679 9.51775 5.23609 9.25012 5.99997 9.25012C6.37689 9.25012 6.73394 9.32416 7.07113 9.47222C7.40831 9.62031 7.70895 9.82576 7.97305 10.0886L15.3692 5.7578C15.3295 5.64498 15.2997 5.5217 15.2798 5.38795C15.2599 5.25421 15.25 5.12493 15.25 5.0001C15.25 4.23621 15.5173 3.58691 16.0518 3.0522C16.5863 2.51748 17.2353 2.25012 17.9989 2.25012C18.7624 2.25012 19.4118 2.51737 19.9471 3.05187C20.4823 3.58637 20.75 4.23541 20.75 4.99897C20.75 5.76254 20.4826 6.41195 19.9479 6.9472C19.4132 7.48245 18.7639 7.75007 18 7.75007C17.6231 7.75007 17.266 7.67604 16.9288 7.52797C16.5916 7.37989 16.291 7.17444 16.0269 6.91162L8.63073 11.2424C8.67048 11.3552 8.70028 11.4783 8.72015 11.6116C8.74002 11.7449 8.74995 11.8737 8.74995 11.9981C8.74995 12.1225 8.74002 12.252 8.72015 12.3866C8.70028 12.5213 8.67048 12.645 8.63073 12.7578L16.0269 17.0886C16.291 16.8258 16.5916 16.6203 16.9288 16.4722C17.266 16.3242 17.6231 16.2501 18 16.2501C18.7639 16.2501 19.4132 16.5174 19.9479 17.0519C20.4826 17.5864 20.75 18.2354 20.75 18.999C20.75 19.7625 20.4827 20.4119 19.9482 20.9472C19.4137 21.4824 18.7647 21.7501 18.0011 21.7501ZM18 6.25012C18.3474 6.25012 18.6426 6.12865 18.8856 5.8857C19.1285 5.64273 19.25 5.34753 19.25 5.0001C19.25 4.65266 19.1285 4.35746 18.8856 4.1145C18.6426 3.87155 18.3474 3.75007 18 3.75007C17.6525 3.75007 17.3573 3.87155 17.1144 4.1145C16.8714 4.35746 16.75 4.65266 16.75 5.0001C16.75 5.34753 16.8714 5.64273 17.1144 5.8857C17.3573 6.12865 17.6525 6.25012 18 6.25012ZM5.99997 13.2501C6.34741 13.2501 6.64261 13.1286 6.88558 12.8857C7.12853 12.6427 7.25 12.3475 7.25 12.0001C7.25 11.6527 7.12853 11.3575 6.88558 11.1145C6.64261 10.8715 6.34741 10.7501 5.99997 10.7501C5.65254 10.7501 5.35734 10.8715 5.11438 11.1145C4.87143 11.3575 4.74995 11.6527 4.74995 12.0001C4.74995 12.3475 4.87143 12.6427 5.11438 12.8857C5.35734 13.1286 5.65254 13.2501 5.99997 13.2501ZM18 20.2501C18.3474 20.2501 18.6426 20.1286 18.8856 19.8857C19.1285 19.6427 19.25 19.3475 19.25 19.0001C19.25 18.6527 19.1285 18.3575 18.8856 18.1145C18.6426 17.8715 18.3474 17.7501 18 17.7501C17.6525 17.7501 17.3573 17.8715 17.1144 18.1145C16.8714 18.3575 16.75 18.6527 16.75 19.0001C16.75 19.3475 16.8714 19.6427 17.1144 19.8857C17.3573 20.1286 17.6525 20.2501 18 20.2501Z" fill="white"/>
                                    </svg>
                                </div>
                                <div class="content__wrap-card-footer-button-open">
                                    <a :href="item.link">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.99951 9.00012H15.9995" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                            <path d="M9.99951 3.00012L16.4995 9.00012L9.99951 15.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="content__wrap-card-header">
                            <p class="content__wrap-card-header-tag">{{ item.tag_header }}</p>
                            <div class="wrap">
                                <div class="wrap-img">
                                    <img v-if='item.img4' :src="item.img4" class="img numb-0 " :class="cssClass">
                                    <img v-if='item.img5' :src="item.img5" class="img numb-1 " :class="cssClass">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
		superarr: {
			default: [
				{
                    img: "/images/events-card-1.png",
                    title: "IT conference 2023",
                    quantity_place: "Осталось всего 5 мест",
                    place: "г. Москва, ул. Льва Толстого, 16",
                    data: "24 июня 2023, 09:30",
                    description: "Поддержание диалога между сотрудниками индустрии и Минцифрами. Регулярно наполняемая База знаний с ответами и инструкциями",
                    img1: "/images/photo-0.png",
                    img2: "/images/photo-1.png",
                    img3: "/images/photo-2.png",
                    img4: "/images/11.png",
                    img5: "/images/12.png",
                    title_image: "— Наши спикеры",
                    link: "/",
                    cssClass: "small_img",
                    tag_header: "поддержка",
				}
			],
			type: Array
		}
	})
</script>

<style lang="scss" scoped>
.content{
    padding: 48px;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border-radius: 60px;
    @media (max-width: 720px) {
		padding: 24px;
        border-radius: 36px;
	}

    &__wrap {
        margin-top: 24px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        &:first-child {
            margin-top: 0;
        }
        @media (max-width: 1260px) {
            flex-direction: column;
            margin: 0 auto;
            align-items: center;
        }
    }

    &__wrap-card {
        position: relative;
        padding: 16px;
        max-width: 580px;
        width: 100%;
        background: #F5F3FF;
        border-radius: 60px;
        @media (max-width: 720px) {
            border-radius: 30px;
            margin-top: 24px;
        }
    }

    &__wrap-img {
        max-width: 550px;
        width: 100%;
        height: 320px;
        border-radius: 43px;
        @media (max-width: 720px) {
            border-radius: 30px;
            height: 230px;
        }
        @media (max-width: 600px) {
            border-radius: 30px;
            height: 160px;
        }
    }

    &__wrap-card-title {
        font-family: 'Inter';
        font-weight: 600;
        font-size: 28px;
        line-height: 32px;
        color: #000000;
        @media (max-width: 720px) {
            font-size: 18px;
            line-height: 24px;
        }
    }

    &__wrap-list {
        margin-bottom: 16px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 720px) {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    &__wrap-list-item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    &__wrap-list-item-text {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1B1B29;
        @media (max-width: 720px) {
            font-size: 12px;
            line-height: 18px;
        }
    }

    &__wrap-card-content {
        padding: 32px 15px 32px 32px;
        @media (max-width: 720px) {
            padding: 10px 0 0;
        }
    }

    &__wrap-card-text {
        max-width: 484px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #828282;
        @media (max-width: 720px) {
            font-size: 12px;
            line-height: 18px;
        }
    }
   
    &__wrap-card-info {
        margin-top: 8px;
        margin-bottom: 16px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #828282;
    }

    &__wrap-card-footer {
        margin-top: 32px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    &__wrap-card-footer-buttons {
        display: flex;
        flex-direction: row;
    }

    &__wrap-card-footer-button-search {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background: #BBADFF;
        border-radius: 25px;
        @media (max-width: 720px) {
            width: 35px;
            height: 35px;
        }
    }

    &__wrap-card-footer-button-open {
        margin-left: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background: #025BFF;
        border-radius: 25px;
        @media (max-width: 720px) {
            width: 35px;
            height: 35px;
        }
    }

    &__wrap-card-header {
        position: absolute;
        top: 42px;
        left: 40px;
        max-width: 500px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 720px) {
            top: 32px;
            left: 25px;
            max-width: 85%;
        }
    }

    &__wrap-card-header-tag {
        padding: 10px 24px 12px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #FFFFFF;
        background: rgba(146, 28, 188, 0.8);
        border-radius: 120px;
        height: 50px;
        @media (max-width: 720px) {
            font-size: 12px;
            line-height: 18px;
            padding: 5px 10px;
            height: 30px;
        }
    }
}
.wrap{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.wrap-img{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.wrap-img:hover > .img {
    margin-left: -18px;
    transition: 0.9s;
}
.img{
    width: 64px;
    height: 64px;
    margin-left: -24px;
    transition: 0.9s;
}

.img:first-child{
    margin-left: 0px;
}
.wrap-img:hover > .img:first-child {
    margin-left: 0px;
}

.numb-1{
    z-index: 1;
}

.numb-2{
    z-index: 2;
}

.numb-3{
    z-index: 3;
}

.numb-4{
    z-index: 4;
}

.numb-5{
    z-index: 5;
}

.small_img{
    width: 54px;
    height: 54px;
}
.large_img{
    width: 128px;
    height: 128px;
    margin-left: -35px;
}

.card__partners-text{
    padding-left: 16px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #828282;
    @media (max-width: 1400px) {
        font-size: 14px;
        line-height: 16px;
    }
    @media (max-width: 500px) {
        display: none;
    }
}
@media only screen and (max-width: 1920px) {
    .wrap-img:hover > .img {
        margin-left: -18px;
        transition: 0.9s;
    }
    .img{
        width: 64px;
        height: 64px;
        margin-left: -24px;
        transition: 0.9s;
    }
    .large_img{
        width: 96px;
        height: 96px;
        margin-left: -35px;
    }

    .small_img{
        width: 54px;
        height: 54px;
    }
}
@media only screen and (max-width: 1281px) {
    .text-question{
        margin-top: 16px;
        padding: 10px 16px 12px;
    }
}
@media only screen and (max-width: 1800px){
    .large_img{
        width: 64px;
        height: 64px;
        margin-left: -25px;
    }
}
@media only screen and (max-width: 1000px) {
    .img{
        width: 48px;
        height: 48px;
    }
    .large_img{
        width: 48px;
        height: 48px;
        margin-left: -25px;
    }
}
@media only screen and (max-width: 360px) {
    .img{
        width: 44px;
        height: 44px;
    }
    .small_img{
        width: 36px;
        height: 36px;
    }
}
</style>
