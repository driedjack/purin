<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>

<script>
  import { StackNavigator } from "vue-native-router"
  import { Root } from "native-base"
  import HomeScreen from "./screens/homeScreen.vue"
  import PregnantDayScreen from "./screens/pregnantDayScreen.vue"
  import DiaryScreen from "./screens/diaryScreen.vue"

  const AppNavigation = StackNavigator(
    {
      Home: HomeScreen,
      PregnantDay: PregnantDayScreen,
      Diary: DiaryScreen
    }, {
      initialRouteName: 'Home',
      headerMode: 'none'
    }
  )

  export default {
    components: { Root, AppNavigation }
  }
</script>
