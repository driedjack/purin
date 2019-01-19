<template>
  <nb-container>
    <view class="title">
      <nb-h1 class="title-text">Purin</nb-h1>
      <nb-text class="subtitle">Nhật kí mẹ bầu</nb-text>
    </view>
    <nb-content>
      <nb-form class="form">
        <nb-text class="intro"
        @press="toHome"
        >
        Đăng nhập
      </nb-text>
        <nb-text class="intro">Đăng ký</nb-text>
      </nb-form>
    </nb-content>
  </nb-container>
</template>

<script>
import firebaseApp from '../firebaseApp.js'

export default {
  props: {
    navigation: { type: Object }
  },
  mounted() {
    console.log(firebaseApp);
  },
  data() {
    return {
    }
  },
  methods: {
    toHome: () =>{
      this.props.navigation.navigate('Home')
    }
  }
}
</script>

<style>
  .title {
    align-items: center;
    height: 80;
    margin-top: 170;
  }
  .title-text {
    padding-top: 55;
    fontFamily: Dancing_script_bold;
    fontSize: 75;
  }
  .subtitle {
    fontSize: 20;
  }
  .form {
    margin-top: 60;
  }
  .intro {
    text-align: center;
    padding: 20px
  }
  .input {
    text-align: center;
  }
  .tip {
    text-align: center;
    fontSize: 13;
    margin: 15;
    color: #777;
  }
  .create-btn {
    align-self: center;
    padding: 20;
  }
  .btn-text {
    font-weight: bold;
  }
</style>
