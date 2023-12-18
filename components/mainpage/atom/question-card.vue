<template>
	<div ref="elem" :class="{'show': showIt}" class="wrap__card-auxiliary small_card">
        <div class="wrap__card-content">
            <div class="card__header">
                <MainpageAtomTag :title="tag"/>
            </div>
            <p class="wrap__smallcard-title">{{ title }}</p>
            <p class="wrap__card-text">{{ description }}</p>
        </div>
        <div class="wrap__smallcard-footer">
            <div class="card__partners">
                <MainpageAtomTagQuestion v-if='tag_question' :text="tag_question"/>
            </div>
            <a :href="link" target="_blank" class="wrap__card-next">
                <svg class="btn-plane" viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="75" height="75" rx="37.5" class="bg-plane"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3873 35.4978C27.6615 30.4173 35.1795 27.068 38.9411 25.4498C49.6813 20.8294 51.913 20.0268 53.3676 20.0003C53.6875 19.9945 54.4029 20.0765 54.8662 20.4653C55.2575 20.7937 55.3651 21.2373 55.4167 21.5486C55.4682 21.8599 55.5323 22.5691 55.4813 23.1233C54.8993 29.4482 52.3809 44.7972 51.0997 51.8812C50.5576 54.8787 49.4902 55.8838 48.4567 55.9822C46.2109 56.1959 44.5054 54.447 42.3302 52.9723C38.9264 50.6645 37.0034 49.2279 33.6995 46.976C29.8811 44.3735 32.3564 42.9431 34.5324 40.6055C35.1019 39.9937 44.9973 30.6845 45.1888 29.84C45.2128 29.7344 45.235 29.3407 45.0089 29.1328C44.7827 28.925 44.449 28.996 44.2081 29.0526C43.8668 29.1327 38.4291 32.85 27.8952 40.2045C26.3518 41.3007 24.9537 41.8348 23.7012 41.8068C22.3203 41.7759 19.6641 40.9993 17.6895 40.3354C15.2675 39.5211 13.3426 39.0906 13.5102 37.7077C13.5975 36.9874 14.5565 36.2508 16.3873 35.4978Z" class="plane"/>
                </svg>
            </a>
        </div>
    </div> 
</template>

<script setup>
    const props = defineProps({
		title: {
			default: "title",
			type: String
		},
        description: {
			default: "description",
			type: String
		},
        tag: {
			default: "tag",
			type: String
		},
        tag_question: {
			default: "",
			type: String
		},link: {
			default: "https://t.me/MIT_union",
			type: String
		}
    })

    const elem = ref(null);
    const showIt = ref(false)

    onMounted(() => {
        const options = {
            root: null, // для события используем вьюпорт
            rootMargin: '0px', // к телу элемента добавить 10px на срабатывание события
            threshold: 0.2 // событие должно сработать, когда во вьюпорте появится 10% объекта
        }
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    showIt.value = true // здесь прописываем какое событие должно сработать, когда элемент появится по вьюпорте (все вокруг - это служебное api)
                    observer.unobserve(elem.value) // отключаем слежение за объектом
                }
            })
        }, options)
        observer.observe(elem.value); // включить слежение за объектом
    })
</script>
<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
.wrap__card-auxiliary{
    height: 1150px;
    position: relative;
    top: 150px;
    opacity: 0.2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 96px;
    background: #FFFFFF;
    border-radius: 60px;
    margin-left: 24px;
    width: 100%;
    transition: .7s;
    &.show{
        top: 0;
        opacity: 1;
    }
}
.small_card{
    width: 32%;
    margin-left: 24px;
}

.wrap__card-auxiliary:hover{
    transform: scale(1.03);
    transition: 0.5s;
    box-shadow: 5px 5px 50px 10px rgba(0, 0, 0, 0.3);
}

.wrap__smallcard-title{
    padding: 120px 0 48px;
    font-family: 'Inter';
    font-weight: 600;
    @include adaptiv-size(56, 28, 24);
    @include adaptiv-height(64, 32, 32);
    display: flex;
    align-items: center;
    color: #000000;
}
.wrap__card-question{
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #921CBC;
    padding: 10px 16px 12px;
    border: 1px solid #921CBC;
    border-radius: 120px;
}
.card__partners{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.wrap__smallcard-footer{
    padding-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.card__partners-text{
    padding-left: 16px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #828282;
}
.wrap__card-next{
    border: none;
    width: 100px;
    height: 100px;
    border-radius: 25px;
}
.btn-plane{
    width: 100px;
    height: 100px;
}
.wrap__card-next:hover .plane{
    fill: #025BFF;
    transition: 0.5s;
}
.wrap__card-next:hover .bg-plane{
    fill: #FFFFFF;
    transition: 0.5s;
}
.plane{
    fill: #FFFFFF;
    transition: 0.5s;
}
.bg-plane{
    fill: #025BFF;
    transition: 0.5s;
}
.arrow{
    margin-left: 16px;
}
.card__header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.wrap__card-text{
    max-width: 570px;
    font-family: 'Inter';
    font-weight: 400;
    @include adaptiv-size(36, 18, 16);
    @include adaptiv-height(56, 28, 24);
    color: #828282;
}

@media (max-width: 1921px) {
    .wrap__card-auxiliary{
        height: 850px;
    }
    .wrap__smallcard-title{
        padding: 90px 0 36px;
    }
    .wrap__smallcard-footer{
        padding-top: 90px;
    }
    .wrap__card-auxiliary{
        padding: 72px;
    }
    .btn-plane{
        width: 75px;
        height: 75px;
    }
    .wrap__card-next{
        width: 75px;
        height: 75px;
    }
}
@media (max-width: 1500px) {
    .wrap__card-auxiliary{
        padding: 48px;
    }
    .wrap__card-auxiliary{
        height: 700px;
    }
}

@media (max-width: 1281px) {
    .wrap__card-auxiliary{
        height: 600px;
    }
    .wrap__smallcard-title{
        padding: 48px 0 24px;
    }
    .wrap__smallcard-footer{
        padding-top: 60px;
    }
    .btn-plane{
        width: 50px;
        height: 50px;
    }
    .wrap__card-next{
        width: 50px;
        height: 50px;
    }
}

@media only screen and (max-width: 1000px) {
    .wrap__card-auxiliary .small_card{
        width: 100%;
        margin-left: 0px;
        margin-top: 16px;
        padding: 24px;
        height: 350px;
    }
    .wrap__card-auxiliary{
        margin-top: 16px;
        padding: 24px;
        border-radius: 32px;
        left: 150px;
        height: 350px;
        &.show{
            left: 0;
            opacity: 1;
        }
    }
    .wrap__card-text{
        color: #1B1B29;
    }
    .arrow{
        width: 12px;
        height: 12px;
        margin-left: 10px;
    }
    .card__partners-img{
        width: 166px;
        height: 40px;
    }

    .card__partners-text{
        display: none;
    }
    .wrap__smallcard-title{
        padding-top: 24px;
        padding-bottom: 16px;
    }
    .btn-plane{
        width: 32px;
        height: 32px;
    }
    .wrap__card-next{
        width: 32px;
        height: 32px;
    }
    .wrap__smallcard-footer{
        padding-top: 24px;
    }
}
@media only screen and (max-width: 650px) {
    .wrap__card-auxiliary .small_card{
        height: 100%;
    }
    .wrap__card-auxiliary{
        height: 100%;
    }
    .wrap__smallcard-footer{
        padding-top: 24px;
    }
}
</style>
