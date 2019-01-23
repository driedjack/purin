<template>
  <nb-container>
    <nb-header>
      <nb-left/>
      <nb-body>
        <nb-title>Ký ức</nb-title>
      </nb-body>
      <nb-right/>
    </nb-header>
    <view :style="{flex: 1, padding: 12}">
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
      // let user = firebase.auth().currentUser
      // let day = firebase.database().refs(`users/${user.uid}/memos/Tue Jan 22 2019`).o

      return {
        cardItemsArr: [
          {
            text: "Card One",
            name: "One",
            image: require('../../assets/images/purin.png')
          },
        ],
        isLoopingRequired: false
      }
    },
    methods: {
      handleCardRendering(item) {
        return <CardComponent item={item} />;
      }
    }
  }
</script>
