<template>
	<div class="container-mit">
        <div class="main__wrap">
            <div class="circle">
                <div class="main__card">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" class="main__card-icon">
                        <g clip-path="url(#clip0_220_1142)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.054767 8.45463C0 8.9617 0 9.56421 0 10.7692C0 11.9742 0 12.5768 0.054767 13.0838C0.532807 17.5099 4.0286 21.0057 8.45463 21.4837C8.9617 21.5385 9.56421 21.5385 10.7692 21.5385H45.2308C46.4358 21.5385 47.0383 21.5385 47.5454 21.4837C51.9714 21.0057 55.4672 17.5099 55.9452 13.0838C56 12.5768 56 11.9742 56 10.7692C56 9.56421 56 8.9617 55.9452 8.45463C55.4672 4.0286 51.9714 0.532807 47.5454 0.054767C47.0383 0 46.4358 0 45.2308 0H10.7692C9.56421 0 8.9617 0 8.45463 0.054767C4.0286 0.532807 0.532807 4.0286 0.054767 8.45463ZM1.03236 26.7107C0 28.7368 0 31.3892 0 36.6938V40.8458C0 46.1505 0 48.8028 1.03236 50.8289C1.94044 52.6112 3.38943 54.0602 5.17165 54.9682C7.19776 56.0006 9.8501 56.0006 15.1548 56.0006H40.8452C46.1499 56.0006 48.8022 56.0006 50.8284 54.9682C52.6106 54.0602 54.0596 52.6112 54.9676 50.8289C56 48.8028 56 46.1505 56 40.8458V36.6938C56 31.3892 56 28.7368 54.9676 26.7107C54.0596 24.9285 52.6106 23.4795 50.8284 22.5714C48.8022 21.5391 46.1499 21.5391 40.8452 21.5391H15.1548C9.8501 21.5391 7.19776 21.5391 5.17165 22.5714C3.38943 23.4795 1.94044 24.9285 1.03236 26.7107Z" fill="#EBB5FF"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_220_1142">
                            <rect width="56" height="56" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p class="main__card-title">Участие<br>в комьюнити</p>
                    <p class="main__card-text">взаимовыручка для IT-специалистов</p>
                    <div class="toggle-switch">
                        <input :checked="checked" type="checkbox" id="switch" /><label for="switch">Toggle</label>
                        <div class="checkbox-text">
                            <p @click="toggle" class="checkbox-text__left" :class="{'active':!checked}">для компаний</p>
                            <p @click="toggle" class="checkbox-text__right" :class="{'active':checked}">для физ. лиц</p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="checked" class="wrap">
                <div class="card-fiz__content">
                    <svg style="margin-bottom: 24px;" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.1111 37.3334H24.8888C21.4666 37.3334 18.6666 34.5334 18.6666 31.1112V24.889C18.6666 21.4667 21.4666 18.6667 24.8888 18.6667H31.1111C34.5333 18.6667 37.3333 21.4667 37.3333 24.889V31.1112C37.3333 34.5334 34.5333 37.3334 31.1111 37.3334Z" fill="#F87171"/>
                        <path d="M49.7778 18.6668H43.5556C40.1334 18.6668 37.3334 15.8668 37.3334 12.4446V6.22234C37.3334 2.80012 40.1334 0.00012207 43.5556 0.00012207H49.7778C53.2 0.00012207 56 2.80012 56 6.22234V12.4446C56 15.8668 53.2 18.6668 49.7778 18.6668Z" fill="#F87171"/>
                        <path d="M12.4444 37.3335H6.22222C2.8 37.3335 0 40.1335 0 43.5557V49.7779C0 53.2002 2.8 56.0002 6.22222 56.0002H12.4444C15.8667 56.0002 18.6667 53.2002 18.6667 49.7779V43.5557C18.6667 40.1335 15.8667 37.3335 12.4444 37.3335Z" fill="#F87171"/>
                        <path d="M37.3334 49.7779V43.5557C37.3334 40.1335 40.1334 37.3335 43.5556 37.3335H49.7778C53.2 37.3335 56 40.1335 56 43.5557V49.7779C56 53.2002 53.2 56.0002 49.7778 56.0002H43.5556C40.1334 56.0002 37.3334 53.2002 37.3334 49.7779Z" fill="#F87171"/>
                        <path d="M18.6667 12.4446V6.22234C18.6667 2.80012 15.8667 0.00012207 12.4444 0.00012207H6.22222C2.8 0.00012207 0 2.80012 0 6.22234V12.4446C0 15.8668 2.8 18.6668 6.22222 18.6668H12.4444C15.8667 18.6668 18.6667 15.8668 18.6667 12.4446Z" fill="#F87171"/>
                        <path d="M12.4445 18.6668C15.8667 18.6668 18.6667 15.8668 18.6667 12.4446C18.6667 15.8668 21.4667 18.6668 24.8889 18.6668C21.4667 18.6668 18.6667 21.4668 18.6667 24.889C18.6667 21.4668 15.8667 18.6668 12.4445 18.6668Z" fill="#F87171"/>
                        <path d="M31.1111 18.6668C34.5333 18.6668 37.3333 15.8668 37.3333 12.4446C37.3333 15.8668 40.1333 18.6668 43.5555 18.6668C40.1333 18.6668 37.3333 21.4668 37.3333 24.889C37.3333 21.4668 34.5333 18.6668 31.1111 18.6668Z" fill="#F87171"/>
                        <path d="M12.4445 37.3334C15.8667 37.3334 18.6667 34.5334 18.6667 31.1112C18.6667 34.5334 21.4667 37.3334 24.8889 37.3334C21.4667 37.3334 18.6667 40.1334 18.6667 43.5557C18.6667 40.1334 15.8667 37.3334 12.4445 37.3334Z" fill="#F87171"/>
                        <path d="M31.1111 37.3334C34.5333 37.3334 37.3333 34.5334 37.3333 31.1112C37.3333 34.5334 40.1333 37.3334 43.5555 37.3334C40.1333 37.3334 37.3333 40.1334 37.3333 43.5557C37.3333 40.1334 34.5333 37.3334 31.1111 37.3334Z" fill="#F87171"/>
                    </svg>
                    <p class="card-fiz__title" style="margin-top: auto;">5000 р/год</p>
                    <p class="card-fiz__text" style="margin-bottom: 24px;">для It-специалистов</p>
                    <p class="card-fiz__title">2000 р/год</p>
                    <p class="card-fiz__text" style="margin-bottom: auto;">для It-студентов</p>
                </div>
            </div>
            <div v-else class="wrap">
                <div class="wrap__card">
                    <MainpageAtomSipmleCard price="50 000 ₽" title="< 20">  
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" class="card__header-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.01717 38.175C0.95683 35.5467 0.282552 32.7768 0.0118793 29.9559C-0.137683 28.3972 1.14578 27.125 2.71164 27.125L17.1514 27.125C17.3949 27.125 17.4618 26.7723 17.2377 26.677V26.677C13.8256 25.2259 10.7253 23.099 8.11378 20.4177C5.50226 17.7364 3.43069 14.5533 2.01735 11.05C1.09569 8.76543 0.465706 6.37393 0.13893 3.93492C-0.150507 1.77461 1.6435 -4.752e-06 3.82312 -4.56145e-06L12.9602 -3.76266e-06C15.1398 -3.57211e-06 16.8436 1.81588 17.5674 3.87181C17.625 4.03536 17.6862 4.1977 17.7512 4.35869C18.3087 5.74057 19.1258 6.99617 20.1559 8.05381C21.1861 9.11145 22.409 9.95042 23.7549 10.5228C25.1008 11.0952 26.5434 11.3898 28.0002 11.3898C29.457 11.3898 30.8995 11.0952 32.2454 10.5228C33.5914 9.95042 34.8143 9.11146 35.8444 8.05382C36.8745 6.99617 37.6917 5.74057 38.2492 4.35869C38.3141 4.1977 38.3754 4.03536 38.433 3.87181C39.1568 1.81588 40.8605 -1.32353e-06 43.0402 -1.13299e-06L52.1772 -3.34197e-07C54.3569 -1.43649e-07 56.1509 1.77461 55.8614 3.93493C55.5346 6.37394 54.9047 8.76544 53.983 11.05C52.5697 14.5533 50.4981 17.7364 47.8866 20.4177C45.2751 23.099 42.1747 25.2259 38.7626 26.677V26.677C38.5385 26.7723 38.6054 27.125 38.8489 27.125L53.2884 27.125C54.8543 27.125 56.1377 28.3972 55.9881 29.9559C55.7175 32.7768 55.0432 35.5467 53.9828 38.175C52.5695 41.6783 50.4979 44.8614 47.8864 47.5427C45.2749 50.224 42.1746 52.3509 38.7624 53.802C35.3503 55.2531 31.6932 56 28 56C24.3068 56 20.6497 55.2531 17.2376 53.802C13.8254 52.3509 10.7251 50.224 8.1136 47.5427C5.50208 44.8614 3.43052 41.6783 2.01717 38.175Z" fill="#34D399"/>
                        </svg>
                    </MainpageAtomSipmleCard>
                    <MainpageAtomSipmleCard price="100 000 ₽" title="20 — 50">  
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" class="card__header-icon">
                            <g clip-path="url(#clip0_220_1142)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.054767 8.45463C0 8.9617 0 9.56421 0 10.7692C0 11.9742 0 12.5768 0.054767 13.0838C0.532807 17.5099 4.0286 21.0057 8.45463 21.4837C8.9617 21.5385 9.56421 21.5385 10.7692 21.5385H45.2308C46.4358 21.5385 47.0383 21.5385 47.5454 21.4837C51.9714 21.0057 55.4672 17.5099 55.9452 13.0838C56 12.5768 56 11.9742 56 10.7692C56 9.56421 56 8.9617 55.9452 8.45463C55.4672 4.0286 51.9714 0.532807 47.5454 0.054767C47.0383 0 46.4358 0 45.2308 0H10.7692C9.56421 0 8.9617 0 8.45463 0.054767C4.0286 0.532807 0.532807 4.0286 0.054767 8.45463ZM1.03236 26.7107C0 28.7368 0 31.3892 0 36.6938V40.8458C0 46.1505 0 48.8028 1.03236 50.8289C1.94044 52.6112 3.38943 54.0602 5.17165 54.9682C7.19776 56.0006 9.8501 56.0006 15.1548 56.0006H40.8452C46.1499 56.0006 48.8022 56.0006 50.8284 54.9682C52.6106 54.0602 54.0596 52.6112 54.9676 50.8289C56 48.8028 56 46.1505 56 40.8458V36.6938C56 31.3892 56 28.7368 54.9676 26.7107C54.0596 24.9285 52.6106 23.4795 50.8284 22.5714C48.8022 21.5391 46.1499 21.5391 40.8452 21.5391H15.1548C9.8501 21.5391 7.19776 21.5391 5.17165 22.5714C3.38943 23.4795 1.94044 24.9285 1.03236 26.7107Z" fill="#A78BFA"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_220_1142">
                                <rect width="56" height="56" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </MainpageAtomSipmleCard>
                </div>
                <div class="wrap__card">
                    <MainpageAtomSipmleCard price="200 000 ₽" title="50 — 100">  
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" class="card__header-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.261C0 4.59402 4.59402 0 10.261 0H17.7216C23.3886 0 27.9826 4.59402 27.9826 10.261V14.3827C27.9826 14.3924 27.9904 14.4002 28 14.4002C28.0096 14.4002 28.0174 14.3924 28.0174 14.3827V10.261C28.0174 4.59402 32.6114 0 38.2785 0H45.739C51.406 0 56 4.59402 56 10.261V17.7042C56 23.3712 51.406 27.9652 45.739 27.9652H41.626C41.6067 27.9652 41.591 27.9809 41.591 28.0002C41.591 28.0195 41.6067 28.0352 41.626 28.0352H45.7042C51.3712 28.0352 55.9653 32.6292 55.9653 38.2962V45.7393C55.9653 51.4063 51.3712 56.0004 45.7042 56.0004H38.2437C32.5767 56.0004 27.9827 51.4063 27.9827 45.7393V42.3654C27.9827 42.3654 27.9827 42.3654 27.9826 42.3654C27.9826 42.3654 27.9826 42.3654 27.9826 42.3654V45.7042C27.9826 51.3712 23.3886 55.9652 17.7216 55.9652H10.261C4.59402 55.9652 0 51.3712 0 45.7042V38.261C0 32.594 4.59402 28 10.261 28H13.591C13.6007 28 13.6084 27.9922 13.6084 27.9826C13.6084 27.973 13.6007 27.9652 13.591 27.9652H10.261C4.59402 27.9652 0 23.3712 0 17.7042V10.261Z" fill="#F472B6"/>
                        </svg>
                    </MainpageAtomSipmleCard>
                    <MainpageAtomSipmleCard price="300 000 ₽" title="> 100">  
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" class="card__header-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.17861e-05 10.4C1.17861e-05 4.65626 4.65626 0 10.4 0H17.5651C23.3089 0 27.9651 4.65625 27.9651 10.4V12.0004C27.9651 13.3259 29.0396 14.4004 30.3651 14.4004H35.965C39.4996 14.4004 42.365 17.2658 42.365 20.8004V25.6351C42.365 26.9606 43.4395 28.0351 44.765 28.0351H45.5302C51.274 28.0351 55.9302 32.6913 55.9302 38.4351V45.6001C55.9302 51.3439 51.274 56.0002 45.5302 56.0002H38.3652C32.6214 56.0002 27.9651 51.3439 27.9651 45.6002V42.3655C27.9651 42.3655 27.9651 42.3655 27.9651 42.3655C27.9651 42.3655 27.9651 42.3655 27.9651 42.3655V45.5651C27.9651 51.3088 23.3089 55.9651 17.5651 55.9651H10.4C4.65626 55.9651 0 51.3089 0 45.5651V38.4C0 32.6563 4.65625 28 10.4 28H14.3825C14.3921 28 14.3999 27.9922 14.3999 27.9826C14.3999 27.9729 14.3921 27.9651 14.3825 27.9651H10.4C4.65627 27.9651 1.17861e-05 23.3089 1.17861e-05 17.5651V10.4ZM48.4001 15.1999C52.5974 15.1999 56 11.7973 56 7.59997C56 3.40262 52.5974 0 48.4001 0C44.2027 0 40.8001 3.40262 40.8001 7.59997C40.8001 11.7973 44.2027 15.1999 48.4001 15.1999Z" fill="#60A5FA"/>
                        </svg>
                    </MainpageAtomSipmleCard>
                </div>
            </div>
        </div>
	</div>
</template>

<script setup lang="ts">
const checked = useSwitchInMainPage();
const toggle = () => {
    if(checked.value){
        checked.value=false;
    }else{
        checked.value=true;
    }
}
</script>


<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
.main__wrap{
    width: 100vw;
    max-width: 2560px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.circle{
    width: 50vw;
    height: 100%;
    max-width: 1280px;
    max-height: 1280px;
    display: flex;
    align-self: center;
}
.main__card{
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    padding: 25% 132px 0px;
    flex-shrink: 0;
    background: #F5F3FF;
    border-radius: 50%;
    margin: 0 auto;
}

.main__card-icon{
    width: 56px;
    height: 56px;
}

.main__card-title{
    max-width: 628px;
    padding-top: 20px;
    font-family: 'Inter';
    font-weight: 700;
    @include adaptiv-size(96, 48, 32);
    @include adaptiv-height(104, 52, 40);
    display: flex;
    align-items: center;
    text-align: center;
    color: #1B1B29;
}

.toggle-switch{
    position: relative;
}

.checkbox-text{
    position: absolute;
    cursor: pointer;
    width: 100%;
    top: 9%;
    left: 7%;
    display: flex;
    flex-direction: row;
}

.checkbox-text__left{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 90px;
    color: #1B1B29;
}
.checkbox-text__left.active{
    color: #fff;
    transition: 1s;
}
.checkbox-text__right.active{
    color: #fff;
    transition: 1s;
}
.checkbox-text__right{
    padding-left: 20%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 90px;
    color: #1B1B29;
}

input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 461px;
	height: 78px;
	background: transperent;
	display: block;
	border-radius: 100px;
	border: 1.5px solid #34057B;
	position: relative;
}

label:after {
	content: '';
	position: absolute;
	top: 5px;
	left: 5px;
	width: 205px;
	height: 66px;
	background: #E45289;
	border-radius: 90px;
	transition: 0.6s;
}

input:checked + .checkbox-text .checkbox-text__left {
	color: #fff;
}

input:checked + label:after {
	left: calc(100% - 5px);
	transform: translateX(-100%);
}

label:active:after {
	width: 130px;
}

.main__card-text{
    padding-top: 20px;
    padding-bottom: 24px;
    font-family: 'Inter';
    font-weight: 400;
    @include adaptiv-size(36, 18, 16);
    @include adaptiv-height(56, 28, 24);
    display: flex;
    align-items: center;
    color: #1B1B29;
}

.main__card-img{
    width: 100%;
    max-width: 800px;
}

.wrap__card{
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.card__header-icon{
    width: 112px;
    height: 112px;
}
.wrap{
    width: 50vw;
    // height: 100%;
}
.card-fiz__content{
    width: 100%;
    height: 100%;
    max-height: 1280px;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 11% 27px;
    background: #F5F3FF;
    border-radius: 28.125px;
}
.card-fiz__title{
    padding-top: 15px;
    font-family: 'Inter';
    font-weight: 700;
    @include adaptiv-size(96, 48, 32);
    @include adaptiv-height(104, 52, 40);
    display: flex;
    align-items: center;
    text-align: center;
    color: #1B1B29;
}
.card-fiz__text{
    padding-top: 20px;
    font-family: 'Inter';
    font-weight: 400;
    @include adaptiv-size(56, 48, 26);
    @include adaptiv-height(66, 38, 36);
    display: flex;
    align-items: center;
    text-align: center;
    color: #1B1B29;
}
.card-fiz__price{
    padding-top: 15px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #921CBC;
    text-decoration: underline;
}
.main-img{
    width: 400px;
}
@media only screen and (max-width: 1921px) {
    .main__card-img{
        max-width: 655px;
    }
    .card-fiz__content{
        padding: 3% 27px;
    }
    .card__header-icon{
        width: 84px;
        height: 84px;
    }
}
@media only screen and (max-width: 1281px) {
    .main__card{
        padding: 30% 132px 0 ;
    }
    .main__card-img{
        max-width: 446px;
    }
    .card-fiz__content{
        padding: 10% 3%;
        justify-content: flex-end;
        max-height: 640px;
        width: 100%;
    }
    .card__header-icon{
        width: 56px;
        height: 56px;
    }
}
@media only screen and (max-width: 1279px) {
    .circle{
        width: 100%;
    }
    .main__wrap{
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
    .wrap{
        width: 100%;
    }
    .main__card-img{
        max-width: 446px;
    }
    .main__card-title{
        font-size: 80px;
        line-height: 97px;
    }
    .main__card-text{
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 40px;
        line-height: 52px;
        text-align: center;
    }
}
@media only screen and (max-width: 1000px) {
    .main__card{
        padding: 20% 132px 0 ;
    }
}
@media only screen and (max-width: 830px) {
    .main__card-title{
        font-size: 60px;
        line-height: 77px;
    }
    .main__card-text{
        font-size: 30px;
        line-height: 42px;
    }
}
@media only screen and (max-width: 768px) {
    .circle{
        max-width: 100%;
        max-height: 100%;
    }
    .wrap{
        width: 100%;
    }
    .main__wrap{
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
    
    .main__card{
        width: 100%;
        height: 95vw;
        padding: 20vw 12px 0px;
    }
    .card__header-icon{
        width: 32px;
        height: 32px;
    }
    .main__card-icon{
        width: 32px;
        height: 32px;
    }
    .main__card-img{
        width: 170px;
    }
    .card-fiz__content{
        width: 100%;
        // max-height: 320px;
    }
    .checkbox-text__left{
        font-size: 14px;
        line-height: 40px;
    }
    .checkbox-text__right{
        font-size: 14px;
        line-height: 40px;
    }
    .card-fiz__title{
        padding-top: 0px;
    }
    .card-fiz__text{
        padding-top: 5px;
    }
    .card-fiz__price{
        padding-top: 5px;
        font-size: 20px;
        line-height: 20px;
    }
    label {
        width: 255px;
        height: 40px;
    }
    label:after {
        width: 106px;
        height: 29px;
    }
    .checkbox-text {
        top: 25%;
        left: 4%;
    }
    .main__card-title{
        font-size: 50px;
        line-height: 62px;
    }
    .main__card-text{
        font-size: 20px;
        line-height: 32px;
    }
}
@media only screen and (max-width: 465px) {
    .main__card-title{
        font-size: 40px;
        line-height: 52px;
    }
    .main__card-text{
        font-size: 16px;
        line-height: 24px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .main__card{
        padding: 10vw 12px 0;
    }
}
@media only screen and (max-width: 390px){
    .card__header-icon{
        width: 24px;
        height: 24px;
    }
    .main__card-img{
        width: 145px;
    }
    .main__card-text{
        padding-top: 5px;
        text-align: center;
    }
    .checkbox-text{
        top: 49%;
    }
    .main__card-title{
        padding-top: 12px;
    }
    label {
        width: 190px;
        height: 30px;
    }
    label:after {
        width: 85px;
        height: 19px;
    }
    .checkbox-text {
        top: 35%;
        left: 4%;
    }
    .checkbox-text__right{
        padding-left: 15px;
        font-size: 12px;
        line-height: 30px;
    }
    .checkbox-text__left{
        font-size: 12px;
        line-height: 30px;
    }
    .main__card-text{
        max-width: 175px;
    }
    .main__card{
        padding: 10vw 12px 0;
    }
}
@media only screen and (max-width: 380px){
    .main__card-title{
        font-size: 30px;
        line-height: 42px;
    }
    .main__card-text{
        font-size: 16px;
        line-height: 24px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
}
</style>
