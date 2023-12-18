<template>
  <div style="background-color: black; overflow: hidden;">
    <Html lang="en">
      <Head>
        <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta charset="utf-8" />
        <Title>Ассоциация МИТ - Мы ИТ</Title>
        <Meta name="description" content="Нам не фиолетово" />
        <Link
          rel="preload"
          href="/font/inter/regular.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        />
        <Link
          rel="preload"
          href="/font/inter/bold.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        />
        <Link rel="stylesheet" href="/fonts.css" />
        <Link rel="icon" :href="'/favicon.ico'" as="image/x-icon" />
      </Head>
    </Html>
    <MainpageNavigationHeader />
    <slot />
    <MainpageNavigationFooter />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "../assets/scss/mainpage.scss";
</style>
