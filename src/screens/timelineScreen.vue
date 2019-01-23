<template>
  <nb-container>
    <nb-header>
      <nb-left/>
      <nb-body>
        <nb-title>Dòng thời gian</nb-title>
      </nb-body>
      <nb-right/>
    </nb-header>
    <nb-content>
      <timeline :data="timeline"></timeline>
    </nb-content>
  </nb-container>
</template>

<script>
  import Timeline from 'react-native-timeline-listview'
  import firebase from '../firebase.js'

  export default {
    components: { Timeline },
    data() {
      return {
        timeline: []
      }
    },
    created() {
      firebase.database().ref('/timeline').once('value').then(snapshot => {
        // console.log(snapshot.val())
        this.timeline = Object.entries(snapshot.val()).sort((a, b) => a[0] - b[0]).map(([week, value]) => {
          console.log(week)
          let result = value
          result['time'] = `Tuần ${week}`
          return result
        })
      })
    }
  }
</script>
