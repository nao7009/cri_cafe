<template>
  <div>
    <MyHeader/>
    <main class="menu">
      <h1>menu</h1>
      <div class="menu__item">
        <div class="menu__item--text">
          <h2>food</h2>
          <ul>
            <li>パンケーキ(プレーン/チョコバナナ/ストロベリー)</li>
            <li>ベイクドチーズケーキ</li>
            <li>ガトーショコラ</li>
            <li>フルーツパフェ</li>
            <li>本日のランチプレート</li>
            <li>自家製ハンバーガー</li>
          </ul>
          <p>and more…</p>
        </div>
        <div class="menu__item--image">
          <ul class="slider">
            <li><img src="../assets/images/food.jpg"></li>
          </ul>
        </div>
      </div>
      <div class="menu__item">
        <div class="menu__item--image">
          <ul class="slider">
            <li><img src="../assets/images/drink.jpg"></li>
          </ul>
        </div>
        <div class="menu__item--text">
          <h2>drink</h2>
          <ul>
            <li>コーヒー(Hot/Ice)</li>
            <li>カフェラテ(Hot/Ice)</li>
            <li>カフェモカ(Hot/Ice)</li>
            <li>紅茶(Hot/Ice)</li>
            <li>スムージー(バナナ＆アボカド/ブルーベリー)</li>
            <li>自家製ジンジャーシロップのソーダ</li>
          </ul>
          <p>and more…</p>
        </div>
      </div>
    </main>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'CafeMenu',
  components: {
    MyHeader,
    MyFooter,
  }
}
</script>

<style lang="scss" scoped>
.main{
  @include mq('max','md') {
  }
}
.menu{
  @include mq('max','md') {
  }
  &__item{
    width: 85%;
    margin: 30px auto 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    @include mq('max','md') {
      width: 100%;
      margin: 0 auto;
      flex-direction:column;
    }
    &:nth-child(3){
      border-top: 1px solid #999;
    }
    &--image{
      width: 500px;
      height: auto;
      @include mq('max','md') {
        width: 350px;
        margin: 0 auto;
      }
      img{
        width: 100%;
        @include mq('max','md') {
        }
      }    
    }
    &--text{
      width: 500px;
      text-align: center;
      @include mq('max','md') {
        width: 100%;
        margin: 0 auto;
      }
      h2{
        font-size: 25px;
        @include mq('max','md') {
          margin: 5px;
          padding: 5px;
          font-size: 18px;
        }
      }
      ul{
        @include mq('max','md') {
        }
        li{
          margin: 0 auto;
          padding: 5px;
          font-size: 15px;
          @include mq('max','md') {
            margin-left: 20px;
            font-size: 12px;
            text-align: center;
          }
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
    } 
  }
}
</style>
