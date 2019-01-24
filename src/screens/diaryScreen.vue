<template>
  <nb-container>
    <nb-header class="header">
      <nb-left/>
      <nb-body>
        <nb-title>Diary</nb-title>
      </nb-body>
      <nb-right>
        <nb-button transparent :on-press="logout">
          <nb-text>Thoát</nb-text>
        </nb-button>
      </nb-right>
    </nb-header>
    <nb-content>
      <nb-form>
        <nb-item fixedLabel>
          <nb-label>{{ today }}</nb-label>
        </nb-item>
        <image v-if="image"
          :style="{width: 200, height: 150}"
          :source="{uri: image}"
        />
        <nb-button rounded dark v-else :on-press="pickImage">
          <nb-text>Hình ảnh cho hôm nay</nb-text>
        </nb-button>
        <nb-textarea :rowSpan="8" bordered placeholder="Hôm nay bạn cảm thấy thế nào?" v-model="content" />
        <nb-grid>
          <nb-col>
            <nb-text>Cảm xúc cho hôm nay nhé~</nb-text>
          </nb-col>
          <nb-col>
            <nb-left>
              <nb-text>😊</nb-text>
            </nb-left>
            <nb-right>
              <nb-radio :selected="radios[0].state" :on-press="toggleRadio1"/>
            </nb-right>
          </nb-col>
          <nb-col>
            <nb-left>
              <nb-text>😆</nb-text>
            </nb-left>
            <nb-right>
              <nb-radio :selected="radios[1].state" :on-press="toggleRadio2"/>
            </nb-right>
          </nb-col>
          <nb-col>
            <nb-left>
              <nb-text>😑</nb-text>
            </nb-left>
            <nb-right>
              <nb-radio :selected="radios[2].state" :on-press="toggleRadio3"/>
            </nb-right>
          </nb-col>
          <nb-col>
            <nb-left>
              <nb-text>😥</nb-text>
            </nb-left>
            <nb-right>
              <nb-radio :selected="radios[3].state" :on-press="toggleRadio4"/>
            </nb-right>
          </nb-col>
        </nb-grid>
        <nb-button rounded dark :on-press="saveDiary" class="fullwidth">
          <nb-text>Lưu nhật kí</nb-text>
        </nb-button>
      </nb-form>
    </nb-content>
  </nb-container>
</template>

<script>
  import firebase from '../firebase.js'
  import { ImagePicker } from 'expo'

  export default {
    props: {
      navigation: { type: Object }
    },
    data() {
      console.log(firebase.auth().currentUser)
      return {
        today: (new Date()).toISOString().substr(0, 10),
        user: firebase.auth().currentUser,
        pregnantDay: '',
        image: null,
        source: '',
        content: '',
        radios: [
          { value: 1, state: true },
          { value: 2, state: false },
          { value: 3, state: false },
          { value: 4, state: false },
        ]
      }
    },
    created() {
      this.fetchInfo()
    },
    computed: {
      emoji() {
        let index = this.radios.findIndex(radio => radio.state)
        return this.radios[index].value
      }
    },
    methods: {
      logout() {
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
        }).catch(function(error) {
          // An error happened.
        });
        console.log('out')
        this.navigation.navigate('Home')
      },
      fetchInfo() {
        firebase.database().ref(`users/${this.user.uid}`).once('value').then(snapshot => {
          this.pregnantDay = snapshot.val().pregnantDay
        })
      },
      pickImage: async function() {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: 'Images',
          allowsEditing: true,
          aspect: [4, 3],
          base64: true,
          quality: 0.5
        })
        console.log(result)
        this.image = result.uri
        this.source = result.base64
      },
      toggleRadio1: function() {
        this.radios[0].state = true;
        this.radios[1].state = false;
        this.radios[2].state = false;
        this.radios[3].state = false;
      },
      toggleRadio2: function() {
        this.radios[0].state = false;
        this.radios[1].state = true;
        this.radios[2].state = false;
        this.radios[3].state = false;
      },
      toggleRadio3: function() {
        this.radios[0].state = false;
        this.radios[1].state = false;
        this.radios[2].state = true;
        this.radios[3].state = false;
      },
      toggleRadio4: function() {
        this.radios[0].state = false;
        this.radios[1].state = false;
        this.radios[2].state = false;
        this.radios[3].state = true;
      },
      saveDiary() {
        if (this.content) {
          firebase.database().ref(`users/${this.user.uid}/memos/${this.today}`).set({
            image: this.source,
            content: this.content,
            emoji: this.emoji
          });
        }else{
          alert('Vui lòng nhập nội dung')
        }
      }
    }
  }
</script>

<style>
  .header {
    margin-top: 30px;
    background-color: black;
  }
</style>
