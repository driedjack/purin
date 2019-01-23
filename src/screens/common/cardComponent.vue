<template>
  <nb-card :style="{ elevation: 3 }">
    <nb-cardItem>
      <nb-left>
        <nb-thumbnail :source="item.image" />
        <nb-body>
          <nb-text></nb-text>
          <nb-text note>NativeBase</nb-text>
        </nb-body>
      </nb-left>
    </nb-cardItem>
    <nb-card-item>
      <nb-body>
        <image :source="item.image" class="card-item-image" :style="stylesObj.cardItemImage"/>
        <nb-text>//Your text here</nb-text>
      </nb-body>
    </nb-card-item>
    <nb-cardItem>
      <nb-icon-nb name="ios-heart" :style="{ color: '#ED4A6A' }" />
      <nb-text></nb-text>
    </nb-cardItem>
  </nb-card>
</template>

<script>
  import { Dimensions } from "react-native";
  const deviceWidth = Dimensions.get("window").width
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
        }
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

