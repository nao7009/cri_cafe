<template>
  <div>
    <MyHeader/>
    <main class="atmosphere">
      <h1>atmosphere</h1>
      <div class="atmosphere__item">
        <div class="atmosphere__item--image">
          <img src="../assets/images/cafe_02.jpg">
        </div>
        <div class="atmosphere__item--text">
          <p>カウンターではバリスタが心を込めて一杯をいれています。<br>カウンター横には手作りのスイーツもご用意しておりますので<br>ぜひお召し上がりください。</p>
        </div>
      </div>
      <div class="atmosphere__item">
        <div class="atmosphere__item--text">
          <p>多趣味な当店のオーナー。<br>趣味の一つである自転車がインテリアの主役になっています。<br>当店で使用しているマグカップ等の販売もございます。</p>
        </div>
        <div class="atmosphere__item--image">
          <img src="../assets/images/cafe_main.jpg">
        </div>
      </div>
      <div class="atmosphere__item">
        <div class="atmosphere__item--image">
          <img src="../assets/images/cafe_03.jpg">
        </div>
        <div class="atmosphere__item--text">
          <p>開放感のあるテラス席もございます。<br>爽やかな気候のときにぜひご利用ください。<br>冬場はヒーターを設置しています。</p>
        </div>
      </div>
      <div class="atmosphere__item">
        <div class="atmosphere__item--text">
          <p>一人でゆっくり過ごしたいときは窓際のカウンター席をどうぞ。<br>のんびりとした時間をお過ごしください。</p>
        </div>
        <div class="atmosphere__item--image">
          <img src="../assets/images/cafe_04.jpg">
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
  name: 'AtmosphereCRICafe',
  components: {
    MyHeader,
    MyFooter,
  }
}
</script>

<style lang="scss" scoped>
.atmosphere{
  @include mq('max','md') {
  }
  &__item{
    width: 85%;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    border-bottom: 1px solid #999;
    @include mq('max','md') {
      width: 100%;
      margin: 0 auto;
      padding: 15px;
      flex-direction:column;
    }
    &--image{
      width: 450px;
      height: auto;
      @include mq('max','md') {
        width: 300px;
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
      p{
        font-size: 15px;
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
