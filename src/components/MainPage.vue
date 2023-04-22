<template>
  <main class="main">
    <p>心をこめた、一杯をどうぞ。</p>
    <Carousel />
    <div class="main__about">
      <div class="main__about--image">
        <img src="../assets/images/food.jpg">
      </div>
      <div class="main__about--text">
        <h2>Food</h2>
        <p>看板メニューのパンケーキをはじめとしたスイーツや、<br>ランチプレートなどをご用意しています。<br>朝食やカフェタイムのリフレッシュにいかがでしょうか。</p>
        <a href="/menu">more</a>
      </div>
    </div>
    <div class="main__about">
      <div class="main__about--text">
        <h2>Drink</h2>
        <p>豆からこだわって丁寧に淹れたコーヒーや、<br>季節限定のドリンクなどをご用意しています。</p>
        <a href="/menu">more</a>
      </div>
      <div class="main__about--image">
        <img src="../assets/images/drink.jpg">
      </div>
    </div>
  </main>
</template>

<script>
import Carousel from '@/components/Carousel.vue'


export default {
  name: 'MainPage',
  components: {
    Carousel,
  }
}
</script>

<style lang="scss" scoped>
.main{
  @include mq('max','md') {
  }
  p{
    font-size: 20px;
    margin: 0 auto;
    padding-top: 40px;
    text-align: center;
    @include mq('max','md') {
      font-size: 15px;
    }
  }
  &__about{
    width: 85%;
    margin: 50px auto;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    @include mq('max','md') {
      width: 100%;
      padding: 20px;
      margin: 0 auto;
      flex-direction:column;
    }
    &:last-child{
      border-top: 1px solid #999;
    }
    &--image{
      width: 450px;
      height: auto;
      @include mq('max','md') {
        width: 250px;
        margin: 10px auto;
      }
      img{
        width: 100%;
        @include mq('max','md') {
        }
      }    
    }
    &--text{
      width: 450px;
      text-align: center;
      @include mq('max','md') {
        width: 100%;
        margin: 0 auto;
      }
      h2{
        padding: 15px;
        font-size: 25px;
        @include mq('max','md') {
          margin: 5px;
          padding: 5px;
          font-size: 15px;
        }
      }
      p{
        font-size: 15px;
        margin: 10px;
        padding: 10px;
        @include mq('max','md') {
          font-size: 12px;
          margin: 5px;
          padding: 5px;
        }
      }
      a{
        margin-top: 60px;
        font-size: 20px;
        position: relative;
        display: inline-block;
        @include mq('max','md') {
          margin-top: 20px;
          font-size: 12px;
        }
        &:after{
          position: absolute;
          bottom: -4px;
          left: 0;
          content: '';
          width: 100%;
          height: 2px;
          background: #666;
          transform: scale(0, 1);
          transform-origin: center top;
          transition: transform .3s;
          @include mq('max','md') {
          } 
        }
        &:hover:after {
            transform: scale(1, 1);
            @include mq('max','md') {
            }
        }
      }  
    }
  }
}
</style>
