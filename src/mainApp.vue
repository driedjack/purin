<template>
  <root>
    <tab-navigation></tab-navigation>
  </root>
</template>

<script>
  import { TabNavigator, TabBarBottom } from "vue-native-router"
  import { Root } from "native-base"
  import DiaryScreen from "./screens/diaryScreen.vue"
  import MomsScreen from "./screens/momsScreen.vue"
  import TimelineScreen from "./screens/timelineScreen.vue"
  import MemoryScreen from "./screens/memoryScreen.vue"

  const TabNavigation = TabNavigator(
    {
      Diary: DiaryScreen,
      Moms: MomsScreen,
      Timeline: TimelineScreen,
      Memory: MemoryScreen
    }, {
      tabBarPosition: 'bottom',
      tabBarComponent: TabBarBottom,
      swipeEnabled: false
    }
  )

  export default {
    components: { Root, TabNavigation, TabBarBottom }
  }
</script>
