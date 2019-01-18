<template>
  <nb-container>
    <view class="title">
      <nb-h1 class="title-text">Purin</nb-h1>
      <nb-text class="subtitle">Nhật kí mẹ bầu</nb-text>
    </view>
    <nb-content>
      <nb-form class="form">
        <nb-text class="intro">Vui lòng nhập tên mẹ và bé</nb-text>
        <nb-item>
          <nb-input class="input" placeholder="Tên mẹ" />
        </nb-item>
        <nb-item last>
          <nb-input class="input" placeholder="Tên bé" />
        </nb-item>
        <nb-text class="tip">* Nếu chưa nghĩ ra tên cho bé, chúng tôi sẽ gọi bé là cục cưng.</nb-text>
        <nb-button rounded dark class="create-btn">
          <nb-text class="btn-text">Tạo nhật kí</nb-text>
        </nb-button>
      </nb-form>
    </nb-content>
  </nb-container>
</template>

<script>
  export default {
    props: {
      navigation: { type: Object }
    },
    data() {
      return {
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
