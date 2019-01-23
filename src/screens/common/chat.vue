<template>
  <gifted-chat
    :messages="messages"
    :on-send="messages => send(messages)"
    :user="user"
    :loadEarlier="showLoadBtn"
    :onLoadEarlier="loadEarlier"
    :isLoadingEarlier="isLoad"
  />
</template>

<script>
  import { GiftedChat } from 'react-native-gifted-chat'
  import firebase from '../../firebase.js'


  export default {
    components: { GiftedChat },
    data() {
      const currentUser = firebase.auth().currentUser

      return {
        ref: firebase.database().ref('messages'),
        messages: [],
        user: { name: currentUser.displayName, _id: currentUser.uid },
        isLoad: true,
        showLoadBtn: true,
        startAt: 0
      }
    },
    created() {
      this.fetchMess()
    },
    methods: {
      loadEarlier() {
        // console.log('enter load')
        // this.showLoadBtn = false
        this.isLoad = true
        // setTimeout(() => {
        //   this.showLoadBtn = false
        //   this.isLoad = true
        // }, 1000)
        // this.ref.startAt(this.startAt).limitToLast(10)
        //     .on('child_added', snapshot => {

        //       this.messages = GiftedChat.append(this.messages, this.parse(snapshot))})
        // console.log(this.isLoad)
        // this.isLoad = false
        // this.startAt += 10
      },
      fetchMess() {
        this.ref.limitToLast(20)
           .on('child_added', snapshot => this.messages = GiftedChat.append(this.messages, this.parse(snapshot)))
        this.startAt = 20
      },
      parse(snapshot) {
        let { timestamp: numberStamp, text, user } = snapshot.val()
        let { key: _id } = snapshot
        // 2.
        let timestamp = new Date(numberStamp)
        // 3.
        let message = {
          _id,
          timestamp,
          text,
          user,
        }
       return message
      },
      send(messages) {
        let timestamp = firebase.database.ServerValue.TIMESTAMP;
        for (let i = 0; i < messages.length; i++) {
          let { text, user } = messages[i];
          // 4.
          let message = {
            text,
            user,
            timestamp: timestamp,
          }
          this.ref.push(message)
        }
      }
    }
  }
</script>
