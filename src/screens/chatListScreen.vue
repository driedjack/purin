<template>
  <nb-container>
    <nb-header />
    <nb-content>
      <nb-list-item avatar :on-press="handleOnPress">
        <nb-left>
          <nb-thumbnail small :source="avatar" />
        </nb-left>
        <nb-body>
          <nb-text>Kumar Pratik</nb-Text>
          <nb-text note :numberOfLines="1">Doing what you like will always keep you happy . .</nb-Text>
        </nb-body>
        <nb-right>
          <nb-text note>3:43 pm</nb-text>
        </nb-right>
      </nb-list-item>
    </nb-content>
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
        avatar: require('../../assets/images/squirtle.png')
      }
    },
    methods: {
      handleOnPress() {
        this.navigation.navigate('PrivateChat')
      }
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
