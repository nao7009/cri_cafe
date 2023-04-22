<template>
  <div>
    <MyHeader/>
    <main class="reservation">
      <h1>reservation</h1>
      <p>ランチとディナーの予約は下記のフォームより予約を承っております。<br>※7名以上のご利用はお手数ですが、お電話での予約をお願いいたします。</p>
    <ReservationCalender/>
      <div class="reservation__form">
        <div id="form">
          <form action="reservation" method="post">
            <table>
              <tr>
                <th>
                  日付：
                </th>
                <td>
                  <input type="date" name="name">
                </td>
                <th>
                  時間：
                </th>
                <td>
                  <select name="time">
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:30</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                </select>                                        
                </td>
                <th>
                  人数：
                </th>
                <td>
                  <select name="time">
                    <option>2名</option>
                    <option>3名</option>
                    <option>4名</option>
                    <option>5名</option>
                    <option>6名</option>
                  </select>                                      
                </td>
              </tr>
              <tr>
                <th>
                  お名前：
                </th>
                <td>
                  <input type="text" name="name">
                </td>
                <th>
                フリガナ：
                </th>
                <td colspan="2">
                  <input type="text" name="name">
                </td>
              </tr>
              <tr>
                <th>
                  メールアドレス：
                </th>
                <td>
                  <input type="text" name="mail">
                </td>
                <th>
                  電話番号：
                </th>
                <td colspan="2">
                  <input type="text" name="tel">                                        
                </td>
              </tr>
              <tr>
                <td colspan="4"></td>
                <th>
                  <input type="submit" name="button" value="送信" id="button">
                </th>
              </tr>
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
import ReservationCalender from '@/components/ReservationCalender.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'ReservationCRICafe',
  components: {
    MyHeader,
    ReservationCalender,
    MyFooter
  }
}
</script>

<style lang="scss" scoped>
.reservation{
  @include mq('max','md') {
  }
  p{
    text-align: center;
    @include mq('max','md') {
      font-size: 15px;
    }
  }
  &__form{
    width: 85%;
    margin: 0 auto;
    flex: 1;
    color: #666;
    @include mq('max','md') {
      width: 100%;
      flex-direction: column;
    }
    #form{
      @include mq('max','md') {
      }
      table{
        margin: 0 auto;
        outline: none;
        border: none; 
        tr{
          th{
            margin: 10px;
            padding: 10px;
            font-size: 15px;
            font-weight: normal;
            text-align: right;
            @include mq('max','md') {
              font-size: 12px;
            }
          }
          td{
            outline: none;
            border: none;
            margin: 10px;
            padding: 10px;
            font-size: 15px;
            color: #000;
            text-align: left;
            @include mq('max','md') {
              margin: 5px;
              padding: 5px;
              font-size: 10px;
            }
            select{
              background-color: #fff;
              border-radius: 5px; 
              width:100px;
              height:25px;
              text-align: center;
              @include mq('max','md') {
                width:80px;
              }
            }
            input{
              background-color: #fff;
              border-radius: 5px; 
              width:250px;
              height:25px;
              text-align: center;
              @include mq('max','md') {
                width:150px;
              }
            }
          }
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
    }
  }
}
</style>
