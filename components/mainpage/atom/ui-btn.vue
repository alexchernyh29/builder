<template>
    <a href="#" class="btn">
        <i class="fa fa-fire-extinguisher" aria-hidden="true"></i>
        <span class="btn_text">Наведите мышкой</span>
        <span class="btn_hover"></span>
    </a>
</template>

<script>

</script>

<style lang="scss" scoped>

.about-us{
    display: flex;
    width: 100%;
}
.about-us__video{
    width: 50%;
    display: flex;
    align-items: center;
}
.about-us__slider{
    width: 50%;
    display: flex;
    align-items: center;
}
@media only screen and (max-width: 1120px){
    .about-us{
        flex-direction: column;
        margin: 0 auto;
    }
    .about-us__video{
        width: 100%;
        margin: 0 auto;
    }
    .about-us__slider{
        width: 100%;
        margin: 0 auto;
    }
}

</style>