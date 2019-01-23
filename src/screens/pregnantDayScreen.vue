<template>
  <nb-container class="container">
    <nb-text>
      Xin chào {{ user.displayName }}
    </nb-text>
    <nb-text>
      Bạn hãy chọn ngày mang thai
    </nb-text>
    <nb-text class="tip">
      (Trong phạm vi mười tháng trở lại, nếu bạn mang thai hơn thời gian này thì có lẽ bạn đã sinh rồi, chức năng nhật kí sau sinh sẽ có ở những phiên bản sau!)
    </nb-text>
    <nb-date-picker
      :defaultDate="defaultDate"
      :minimumDate="minimumDate"
      :maximumDate="maximumDate"
      :modalTransparent="false"
      animationType="fade"
      androidMode="default"
      placeHolderText="Nhấn vào đây"
      :textStyle="{ color: 'purple' }"
      :placeHolderTextStyle="{ color: '#d3d3d3' }"
      :onDateChange="chooseDate"
    />
    <nb-button rounded dark class="setup-btn" :on-press="setDate">
      <nb-text class="btn-text">Thiết lập thời gian</nb-text>
    </nb-button>
  </nb-container>
</template>

<script>
  import firebase from '../firebase.js'

  export default {
    props: {
      navigation: { type: Object }
    },
    data() {
      let today = new Date()

      return {
        defaultDate: today,
        minimumDate: new Date(today.getFullYear(), today.getMonth() - 9, today.getDate()),
        maximumDate: today,
        chosenDate: '',
        user: firebase.auth().currentUser
      }
    },
    methods: {
      chooseDate(date) {
        this.chosenDate = date
      },
      setDate() {
        if (this.chosenDate == '') return alert('Bạn chưa chọn ngày!')

        let date = this.chosenDate.toISOString()

        firebase.database().ref('users/' + this.user.uid).set({
          pregnantDate: date
        })
        this.navigation.navigate('Main')
      }
    },
    created() {
    }
  }
</script>

<style>
  .container {
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  .setup-btn {
    align-self: center;
    margin-top: 20;
  }
  .tip {
    text-align: center;
    fontSize: 13;
    margin: 10;
    color: #999;
  }
</style>
