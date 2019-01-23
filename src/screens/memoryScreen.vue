<template>
  <nb-container>
    <nb-header>
      <nb-left/>
      <nb-body>
        <nb-title>Ký ức</nb-title>
      </nb-body>
      <nb-right/>
    </nb-header>
    <view v-if="loadCards" :style="{flex: 1, padding: 12}">
      <nb-deck-swiper
          :dataSource="cardItemsArr"
          :looping="isLoopingRequired"
          :renderItem="handleCardRendering"
      />
    </view>
  </nb-container>
</template>

<script>
  import React from "react"
  import CardComponent from "./common/cardComponent.vue"
  import firebase from '../firebase.js'

  export default {
    data() {
      return {
        user: firebase.auth().currentUser,
        loadCards: false,
        cardItemsArr: [],
        isLoopingRequired: true
      }
    },
    created() {
      this.fetchCards()
    },
    methods: {
      fetchCards: async function() {
        this.loadCards = false
        await firebase.database().ref(`users/${this.user.uid}/memos`).once('value').then(snapshot => {
          let cards = snapshot.val()
          this.cardItemsArr = Object.keys(cards).map(date => {
            return { name: date, text: cards[date].content.split('\\n').join('\n'), emoji: cards[date].emoji, image: `data:image/jpeg;base64,${cards[date].image}` }
          })
        })
        this.loadCards = true
      },
      handleCardRendering(item) {
        return <CardComponent item={item} />;
      }
    }
  }
</script>
