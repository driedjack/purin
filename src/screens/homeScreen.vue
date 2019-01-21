<template>
  <nb-container>
    <view class="logo">
      <image
        :style="{width: 50, height: 50}"
        :source="logo"
      />
    </view>
    <view class="title">
      <nb-h1 class="title-text">Purin</nb-h1>
      <nb-text class="subtitle">Nhật kí mẹ bầu</nb-text>
    </view>
    <view>
      <nb-button rounded dark class="create-btn" :on-press="singin">
        <nb-text class="btn-text">Tạo nhật kí bằng tài khoản facebook</nb-text>
      </nb-button>
      <nb-text class="tip">* Hiện tại app chỉ hỗ trợ đăng nhập facebook, xin lỗi vì bất tiện này</nb-text>
    </view>
  </nb-container>
</template>

<script>
  import firebase from '../firebase.js'

  export default {
    props: {
      navigation: { type: Object }
    },
    data() {
      return {
        logo: require('../../assets/images/purin.png')
      }
    },
    methods: {
      singin: async function() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
          '228986724672295', { permissions: ['public_profile'] }
        )
        if (type === 'success') {
          const credential = firebase.auth.FacebookAuthProvider.credential(token)

          firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
            console.log(error)
          })
        }
        this.isLogged()
      },
      isLogged() {
        firebase.auth().onAuthStateChanged((user) => {
          if (user != null) {
            firebase.database().ref('/users/' + user.uid).once('value').then((snapshot) => {
              this.navigation.navigate(snapshot.exists() ? 'Diary' : 'PregnantDay')
            })
          }
        })
      }
    },
    created() {
      this.isLogged()
    }
  }
</script>

<style>
  .logo {
    align-items: center;
    margin-top: 100;
  }
  .title {
    align-items: center;
    height: 80;
  }
  .title-text {
    padding-top: 55;
    fontFamily: Dancing_script_bold;
    fontSize: 75;
  }
  .subtitle {
    margin-top: -10;
    fontSize: 20;
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
    margin: 10;
    color: #999;
  }
  .create-btn {
    margin-top: 40;
    align-self: center;
    padding: 10;
  }
  .btn-text {
    font-weight: bold;
  }
</style>
