<template>
  <div class="reservationCalender">
    <div id="header">
        <button class="header__arrow" @click="prevMonth">＜</button>
        <div class="date_title">{{ getYearAndMonth }}</div>
        <button class="header__arrow" @click="nextMonth">＞</button>
    </div>
    <div>
        <table id="calender">
        <thead>
          <tr>
            <th v-for="week in weeks" :key="week.id">
              {{ week.value }}
            </th>
          </tr>
          <tr v-for="(week, index) in calendars" :key="index">
            <td v-for="(day, index) in week" :key="index">
              {{ day.date }}
            </td>
          </tr>
        </thead>
        </table>
    </div>
  </div>
</template>

<script>
export default{
  name: 'ReservationCalender',
  data(){
      return{
        weeks:[
        { id: 0, value: '日' },
        { id: 1, value: '月' },
        { id: 2, value: '火' },
        { id: 3, value: '水' },
        { id: 4, value: '木' },
        { id: 5, value: '金' },
        { id: 6, value: '土' }
        ],
      startDay: new Date(this.date().getFullYear(), this.date().getMonth(), 1).getDay(),
      startDate: new Date(this.date().getFullYear(), this.date().getMonth(), 1),
      currentMonth: this.date().getMonth(),
      currentYear: this.date().getFullYear(),
      lastMonthEndDate: new Date(this.date().getFullYear(), this.date().getMonth(), 0).getDate()   
      }
  },
  computed: {
    getYearAndMonth(){
      const month = this.currentMonth + 1
      const result = this.currentYear + '年' + month + '月'
      return result
    },
    calendars () {
      return this.renderCalendar()
    }
  },
  methods: {
    prevMonth () {
      // this.currentMonthが0なら11を、それ以外なら1引く
      this.currentMonth === 0 ? this.currentMonth = 11 : this.currentMonth--
      // this.currentMonthが11ならcurrentYearから1引く
      this.currentMonth === 11 && this.currentYear--
      //第3引数に0を設定し、前月の最後の日を取得
      this.lastMonthEndDate = new Date(this.currentYear, this.currentMonth, 0).getDate()
      const dt = new Date(this.currentYear, this.currentMonth, 1)
      //前月の月と始まりの日(日曜始まりを0とする)、最終日を設定
      this.startDate = dt
      this.startDay = dt.getDay()
      this.lastMonthEndDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate()
    },
    nextMonth () {
      // this.currentMonthが0なら11を、それ以外なら1足す
      this.currentMonth === 11 ? this.currentMonth = 0 : this.currentMonth++
      // this.currentMonthが11ならcurrentYearから1足す
      this.currentMonth === 0 && this.currentYear++
      //第3引数に0を設定し、来月の最後の日を取得
      this.lastMonthEndDate = new Date(this.currentYear, this.currentMonth, 0).getDate()
      const dt = new Date(this.currentYear, this.currentMonth, 1)
      //来月の月と始まりの日(日曜始まりを0とする)、最終日を設定
      this.startDate = dt
      this.startDay = dt.getDay()
      this.lastMonthEndDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate()
    },
    date () {
      return new Date()
    },
    year () {
      return this.date().getFullYear()
    },
    month () {
      return this.date().getMonth()
    },
    //不要？
    endDate () {
      return new Date(this.year(), this.month(), 0)
    },
    //不要？
    endDayCount () {
      return this.endDate().getDay()
    },
    renderCalendar () {
      const startDay = this.startDay
      const currentDate = this.startDate
      const lastMonthEndDate = this.lastMonthEndDate
      const calendars = []

      let lastDateCount = startDay - 1
      for (let i = 0; i < 6; i++) {
        const weekRow = []
        for (let day = 0; day < 7; day++) {
          if (i > 0 || (i === 0 && day >= startDay)) {
            weekRow.push({
              date: currentDate.getDate()
            })
            currentDate.setDate(currentDate.getDate() + 1)
          } else {
            weekRow.push({
              // 曜日を使ってつじつま合わせ
              date: lastMonthEndDate - lastDateCount
            })
            lastDateCount--
          }
        }
        //要素の追加
        calendars.push(weekRow)
      }
      return calendars
    }
  }
}

</script>

<style lang="scss" scoped>
.gray{
  color: #00f;
}
.reservationCalender{
    width: 70%;
    margin: 50px auto;
    color: #666;
    @include mq('max','md') {
  }
}
#header {
    margin: 0 auto;
    padding:15px 20px;
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px; 
    display:flex;
    justify-content: space-between;
    @include mq('max','md') {
    }
}
button{
    padding: 10px 40px;
    background-color: #C7AA95;
    border: 1px solid #C7AA95;
    border-radius: 4px;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    @include mq('max','md') {
        padding: 5px 20px;
    }
    &:hover{
        background-color: #D4BB92;
        border-color: #D4BB92;
        @include mq('max','md') {
        }
    }
}
#calender {
    font-size:16px;
    line-height:1.5em;
    table-layout: fixed;
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    border-bottom: 1px solid #ddd;
    border-collapse: collapse;
    @include mq('max','md') {
    }
}
#calender th {
    padding: 0;
    text-align: center;
    vertical-align: middle;
    font-weight: normal;
    // color: #666;
    @include mq('max','md') {
    }
    &:first-child{
        color: #f00;
        @include mq('max','md') {
        }
      }
      &:last-child{
        color: #00f;
        @include mq('max','md') {
        }
      }
    }
#calender td {
    padding: 8px;
    text-align: center;
    vertical-align: middle;
    border-top: 1px solid #ddd;
    @include mq('max','md') {
    }
}
.today {
    background-color: #fcf8e3;
    @include mq('max','md') {
    }
}
  /* .__calender{
    width: 85%;
    margin: 0 auto;
    flex: 1;
    color: #666;
    @include mq('max','md') {
      width: 100%;
      flex-direction: column;
    }
    #header{
      margin: 0 auto;
      text-align: center;
      font-size: 24px;
      @include mq('max','md') {
        font-size: 12px;
      }
    }
    #calender{
      width: 70%;
      margin: 0 auto;
      text-align: center;
      @include mq('max','md') {
      }
    }
    table{
      width: 100%;
      outline: 2px solid #ddd;
      border-collapse: collapse;
      @include mq('max','md') {
      }
    }
    th{
      color: #000;
      @include mq('max','md') {
      }
      &:first-child{
        color: #f00;
        @include mq('max','md') {
        }
      }
      &:last-child{
        color: #00f;
        @include mq('max','md') {
        }
      }
    }
    th,td{
      outline: 1px solid #ddd;
      padding-top: 10px;
      padding-bottom: 10px;
      text-align: center;
      @include mq('max','md') {
        padding-top: 5px;
        padding-bottom: 5px;
      }
    }
    td{
      &:first-child{
        color: #f00;
        @include mq('max','md') {
        }
      }
      &:last-child{
        color: #00f;
        @include mq('max','md') {
        }
      }
      &.holiday{
          color: #f00;
          @include mq('max','md') {
          }
      }
      &.disabled{
        color: #ccc;
        @include mq('max','md') {
        }
      }
      &.today{
        background-color: #D98989;
        color: #fff;
        @include mq('max','md') {
        }
      }
    }
    #next-prev-button{
      display: flex;
      justify-content: space-around;
      @include mq('max','md') {
      }
      button{
        padding: 10px 40px;
        background-color: #C7AA95;
        border: 1px solid #C7AA95;
        border-radius: 4px;
        font-size: 1rem;
        color: #fff;
        cursor: pointer;
        @include mq('max','md') {
          padding: 5px 20px;
        }
      }
      :hover{
        background-color: #D4BB92;
        border-color: #D4BB92;
        @include mq('max','md') {
        }
      }
    }
    #prev{
      float: left;
      @include mq('max','md') {
      }
    }
    #next{
      float: right;
      @include mq('max','md') {
      }
    } 
  }   */
</style>