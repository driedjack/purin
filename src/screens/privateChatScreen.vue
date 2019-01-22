<template lang="html">
  <nb-container>
    <nb-header />
      <flat-list
        :data="listViewData"
        :render-item="(item) => renderList(item)"
        :key-extractor="(item) => item.createdAt + '' "
        :refreshing="refreshing"
        inverted
    />
    <nb-header searchBar rounded>
        <nb-input v-model="messages" placeholder="Your messages" />
        <nb-button :on-press="handleSendMessage" @keyup.native.enter="handleSendMessage" transparent>
          <nb-icon active name="send" />
        </nb-button>
    </nb-header>
  </nb-container>
</template>
<script>
// Required for side-effects
  require("firebase/firestore");
  import firebase from '../firebase.js'
  import React from "react";
  import { ListView } from "react-native";
  import { Button, Icon, Text, ListItem } from "native-base";


  export default {
    props: {
      navigation: { type: Object }
    },
    data() {
      return {
        refreshing: false,
        listViewData: [],
        messages: '',
        sendMessage: '',
        avatar: require('../../assets/images/squirtle.png')
      }
    },
    methods: {
      renderList: function(item) {
        return (<Text>{item.item.message}</Text>)
      },
      handleSendMessage: function (){
        let _self = this
        var db = firebase.firestore();
        if (_self.messages != ''){
          let message = {
            createdAt: new Date(),
            message: _self.messages
          }
          db.collection("chats").add({
              message
          })
          .then(function(docRef) {
              console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
              console.error("Error adding document: ", error);
          })
          _self.listViewData.push(message)
          _self.messages = ''
        }
      }
    }
  }
</script>

<style>
  .logo {
    align-items: center;
    margin-top: 100;
  }
</style>
