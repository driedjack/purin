<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>

<script>
  import { StackNavigator } from "vue-native-router"
  import { Root } from "native-base"
  import HomeScreen from "./screens/homeScreen.vue"
  import LoginScreen from "./screens/loginScreen.vue"

  const AppNavigation = StackNavigator(
    {
      Home: HomeScreen,
      Login: LoginScreen
    },
    {
      initialRouteName: 'Login'
    }
  )

  export default {
    components: { Root, AppNavigation }
  }
</script>

<style>

</style>
