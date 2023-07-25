<template>
  <div>
    <MyHeader/>
    <main class="AccessAndInfo">
      <h1>access & info</h1>
      <div class="AccessAndInfo__items">
        <div class="AccessAndInfo__text">
          <img src="../assets/images/shoes.png">
          <h2>access</h2>
          <ul>
            <li>〒123-5678 東京都世田谷区北沢2-19-5</li>
            <li>京王井の頭線・小田急線 下北沢駅から徒歩3分</li>
            <li>TEL：123-4567</li>
          </ul>
        </div>
        <div class="AccessAndInfo__map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12966.659001077522!2d139.6672775!3d35.6606306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed98990ae6e1597b!2z5qCq5byP5Lya56S-44Kv44Oq44Ko44Kk44OG44Kj44OW44Oq44K944O844K544Kk44Oz44K544OG44Kj44OB44Ol44O844OI!5e0!3m2!1sja!2sjp!4v1653989478594!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div class="AccessAndInfo__items">
        <div class="AccessAndInfo__text">
          <img src="../assets/images/info.png">
          <h2>info</h2>
          <ul>
            <li>営業時間</li>
            <li>月～金：8:00～20:00</li>
            <li>土・日・祝：8:00～22:00</li>
          </ul>
        </div>
        <div class="AccessAndInfo__form">
          <p>お問い合わせは下記フォームからでも可能です。</p>
          <form action="" metdod="post">
            <table>
              <tr>
                <th><label for="name">お名前（必須）：</label></th>
                <td><input type="text" name="name" id="name" required></td>
              </tr>
              <tr>
                <th><label for="name">メールアドレス：</label></th>
                <td><input type="text" name="mail" id="mail" required></td>
              </tr>
              <tr>
                <th><label for="remarks">お問い合わせ内容：</label></th>
                <td><textarea name="remarks"></textarea></td>
              </tr>
              <td></td>
              <td>
                <input type="submit" name="button" value="送信" id="button">
              </td>
            </table>
          </form>
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
  name: 'AccessAndInfo',
  components: {
    MyHeader,
    MyFooter,
  }
}
</script>

<style lang="scss" scoped>
.AccessAndInfo{
  @include mq('max','md') {
  }
  &__items{
    width: 85%;
    margin: 20px auto 0;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    @include mq('max','lg') {
      width: 100%;
      margin: 0 auto;
      flex-direction:column;
    }
    @include mq('max','mg') {
      padding: 20px;
    }
    @include mq('max','sm') {
      padding: 20px;
    }
    &:last-child{
      border-top: 1px solid #999;
    }
  }
  &__text{
    width: 450px;
    text-align: center;
    @include mq('max','md') {
      width: 100%;
      margin: 0 auto;
    }
    img{
      width: 50px;
      height: 50px;
      @include mq('max','md') {
        width: 35px;
        height: 35px;
      }
      @include mq('max','sm') {
        width: 20px;
        height: 20px;
      }
    }
    h2{
      margin: 10px;
      padding: 10px;
      font-size: 25px;
      @include mq('max','md') {
        margin: 5px;
        padding: 5px;
        font-size: 20px;
      }
      @include mq('max','sm') {
        font-size: 15px;
      }
    }
    ul{
      @include mq('max','md') {
      }
      li{
        font-size: 15px;
        text-align: center;
        @include mq('max','md') {
          margin-left: 20px;
          font-size: 12px;
        }
        @include mq('max','sm') {
          margin-left: 20px;
          font-size: 10px;
        }
      }
    }   
  }
  &__map{
    @include mq('max','md') {
      margin: 0 auto;
    }
    iframe{
      width: 420px;
      height: 380px;
      @include mq('max','md') {
        width: 300px;
        height: 200px;
      }
    }
  }
  &__form{
    @include mq('max','md') {
      margin: 0 auto;
    }
    p{
      margin: 5px;
      padding: 5px;
      text-align: center;
      @include mq('max','md') {
        font-size: 12px;
      }
    }
    table{
      margin: 20px;
      padding: 10px;
      @include mq('max','md') {
        margin: 10px;
        padding: 5px;
      }
      th{
        margin: 10px;
        padding: 10px;
        font-size: 15px;
        font-weight: normal;
        text-align: right;
        vertical-align: top;
        @include mq('max','md') {
          font-size: 12px;
        }
      }
      td{
        margin: 10px;
        padding: 10px;
        text-align: left;
        vertical-align: top;
        font-size: 15px;
        @include mq('max','md') {
          margin: 5px;
          padding: 5px;
          font-size: 10px;
        }
        input{
            background-color: #fff;
            border-radius: 5px; 
            width:250px;
            height:25px;
            @include mq('max','md') {
            }
            @include mq('max','sm') {
              width:150px;
              height:20px;
            }
        }
      }
      textarea{
        background-color: #fff;
        border-radius: 5px; 
        resize: none;
        width: 250px;
        height: 100px;
        @include mq('max','md') {
        }
        @include mq('max','sm') {
          width: 150px;
          height: 80px;
        }
      }
    }
    #button{
      width: 55px;
      height: 35px;
      background-color: #C7AA95;
      border: 1px solid #C7AA95;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
      @include mq('max','sm') {
        width: 40px;
        height: 25px;
      }
    }
  } 
}
</style>
