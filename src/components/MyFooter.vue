<template>
  <footer class="footer">
    <div class="footer__contents">
      <div class="footer__contents--sns">
        <ul>
          <li><a href="https://twitter.com/?lang=ja"><img src="../assets/images/twitter.png"></a></li>
          <li><a href="https://www.instagram.com/"><img src="../assets/images/instagram.png"></a></li>
          <li><a href="https://ja-jp.facebook.com/"><img src="../assets/images/facebook.png"></a></li>
        </ul>
      </div>
      <div class="footer__contents--copy">
      <p>Copyright 2022 Cafe CRI All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter',
}
</script>

<style lang="scss" scoped>
.footer{
    @include mq('max','md') {
  }
  &__contents{
    width: 85%;
    margin: 0 auto;
    @include mq('max','md') {
      width: 100%;
    }
    &--sns{
      margin: 5px;
      padding: 5px;
      @include mq('max','md') {
      }
      ul{
        margin: 5px;
        padding: 5px;
        display: flex;
        @include mq('max','md') {
        }
        li{
          margin: 5px;
          padding: 5px;
          @include mq('max','md') {
          }
          a{
            display: block;
            width: 30px;
            height: 30px;
            @include mq('max','md') {
              width: 25px;
              height: 25px;
            }
            img{
              width: 100%;
              height: 100%;
              @include mq('max','md') {
              }        
            }
          }
        }
      }    
    }
    &--copy{
      margin: 5px;
      padding: 5px;
      @include mq('max','md') {
      }
      p{
        font-size: 12px;
        text-align: center;
        @include mq('max','md') {
          font-size: 10px;
        } 
      }    
    } 
  }
}
</style>
