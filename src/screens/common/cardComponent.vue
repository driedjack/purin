<template>
  <nb-card :style="{ elevation: 3 }">
    <nb-cardItem>
      <nb-left>
        <nb-body>
          <nb-text></nb-text>
          <nb-text note>{{item.name}}</nb-text>
        </nb-body>
      </nb-left>
    </nb-cardItem>
    <nb-card-item>
      <nb-body>
        <image :source="{ uri: item.image }" class="card-item-image" :style="stylesObj.cardItemImage"/>
        <nb-text class="content">{{item.text}}</nb-text>
      </nb-body>
    </nb-card-item>
    <nb-cardItem>
      <!-- <nb-icon-nb name="ios-heart" :style="{ color: '#ED4A6A' }" /> -->
      <nb-text>{{feeling}}</nb-text>
    </nb-cardItem>
  </nb-card>
</template>

<script>
  import { Dimensions } from "react-native"

  const deviceWidth = Dimensions.get("window").width
  const feelings = {
    1: { icon: '😊', text: 'thật hạnh phúc' },
    2: { icon: '😆', text: 'rất rất vui' },
    3: { icon: '😑', text: 'chả vui chả buồn' },
    4: { icon: '😥', text: 'hơi nhói trong tim' },
  }

  export default {
    props: {
      item: {
        type: Object
      }
    },
    data() {
      return {
        stylesObj: {
          cardItemImage: {
            resizeMode: "cover",
            width: deviceWidth / 1.18
          }
        },
        // feeling: `Mẹ thấy ${feelings[this.item.emoji].text} ${feelings[this.item.emoji].icon}`
      }
    },
    computed: {
      feeling() {
        return `Mẹ ${feelings[this.item.emoji].text} ${feelings[this.item.emoji].icon}`
      }
    },
    filters:{
      breakLine(content) {
        return content.split('\n').join('{"\n"}')
      }
    }
  };
</script>

<style>
  .card-item-image {
    align-self: center;
    height: 150;
    margin-vertical: 5;
  }
</style>

