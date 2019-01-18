<template>
  <view class="container">
    <app-loading v-if="!isAppReady"></app-loading>
    <app v-else></app>
  </view>
</template>

<script>
  import Vue from "vue-native-core"
  import { VueNativeBase } from "native-base"
  import { AppLoading } from "expo"
  import App from "./App.vue"

  // registering all native-base components to the global scope of the Vue
  Vue.use(VueNativeBase)

  export default {
    components: { App, AppLoading },
    data() {
      return {
        isAppReady: false
      }
    },
    created() {
      this.loadFonts()
    },
    methods: {
      loadFonts: async function() {
        try {
          this.isAppReady = false
          await Expo.Font.loadAsync({
            Sarabun: require('../assets/fonts/Sarabun-Regular.ttf'),
            Dancing_script_bold: require('../assets/fonts/DancingScript-Bold.ttf'),
          })
          this.isAppReady = true
        } catch (error) {
          console.log("some error occured", error)
          this.isAppReady = true
        }
      }
    }
  }
</script>

<style>
  .container {
    flex: 1;
  }
</style>
