<template>
  <header class="header">
    <div class="header__contents">
      <div class="header__contents--logo">
        <router-link to="/"><img src="../assets/images/logo.png"></router-link>
      </div>
      <div class="header__contents--menu">
        <ul>
          <li><router-link to="/menu">menu</router-link></li>
          <li><router-link to="/atmosphere">atmosphere</router-link></li>
          <li><router-link to="/reservation">reservation</router-link></li>
          <li><router-link to="/access&info">access&info</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
}
</script>

<style lang="scss" scoped>
.header {
  @include mq('max','md') {
  }
    &__contents{
      width: 85%;
      margin: 0 auto;
      @include mq('max','md') {
        width: 100%;
      }
      &--logo{
        margin: 0 auto;
        padding: 5px;
        width: 120px;
        height: 120px;
        display: block;
        @include mq('max','md') {
          width: 100px;
          height: 100px;
        }
        // a{
        //   display: block;
        //   margin: 5px;
        //   padding: 5px;
        //   @include mq('max','md') {
        //   }

        // } 
        img{
            width: 100%;
            @include mq('max','md') {
            }
          } 
      }
      &--menu{
        width: 85%;
        margin: 0 auto;
        @include mq('max','md') {
          width: 100%;
        }
        ul{
          display: flex;
          justify-content: space-evenly;
          @include mq('max','md') {
            margin: 5px;
            padding: 5px;
          }
          li{
            font-size: 20px;
            @include mq('max','md') {
              font-size: 15px;
            }
            a{
              position: relative;
              display: inline-block;
              text-decoration: none;
              @include mq('max','md') {
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
    }
}
</style>
