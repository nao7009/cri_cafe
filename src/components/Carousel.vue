<template>
  <div class="carousel">
    <carousel :per-page="1" :speed="500">
      <slide><img src="../assets/images/cafe_main.jpg"></slide>
      <slide><img src="../assets/images/cafe_03.jpg"></slide>
      <slide><img src="../assets/images/coffee.jpg"></slide>
      <slide><img src="../assets/images/food.jpg"></slide>
      <slide><img src="../assets/images/parfait.jpg"></slide>
      <slide><img src="../assets/images/icecream.jpg"></slide>
    </carousel>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel';

export default{
  name: 'CafeCarouesel',
  components: {
    Carousel,
    Slide
  }
}

</script>

<style lang="scss" scoped>
.carousel{
  width: 85%;
  margin: 30px auto 0;
  @include mq('max','md') {
    margin: 15px auto 0;
    width: 100%;
  }
}
.VueCarousel{
  margin: 0 auto;
  width: 800px;
  @include mq('max','md') {
    width: 500px;
  }
  img{
    width: 100%;
    @include mq('max','md') {
  }
  }
}
.VueCarousel-Slide{
  display: flex;
	align-items: center;
	justify-content: center;
	box-sizing:border-box;
  @include mq('max','md') {
  }
}
</style>