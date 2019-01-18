<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>

<script>
  import { StackNavigator } from "vue-native-router"
  import { Root } from "native-base"
  import HomeScreen from "./screens/homeScreen.vue"

  const AppNavigation = StackNavigator(
    {
      Home: HomeScreen
    }, {
      initialRouteName: 'Home'
    }
  )

  export default {
    components: { Root, AppNavigation }
  }
</script>

<style>

</style>
