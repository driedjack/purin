<template>
  <nb-container>
    <nb-header>
      <nb-left/>
      <nb-body>
        <nb-title>Những người mẹ như bạn</nb-title>
      </nb-body>
      <nb-right/>
    </nb-header>
    <!-- <view class="container">
      <flat-list class="list"
        :data="mess"
        :render-item="(item) => renderList(item)"
      />
    </view> -->
    <chat/>
  </nb-container>
</template>

<script>
  import React from 'react';
  import {Text} from 'react-native';
  import Chat from './common/chat.vue';

  export default {
    components: { Chat },
    data() {
      return {
        messages: []
        //   {id:1, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet"},
        //   {id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"} ,
        //   {id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
        //   {id:4, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
        //   {id:5, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"},
        //   {id:6, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"},
        //   {id:7, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
        //   {id:8, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
        //   {id:9, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
        // ]
      }
    },
    methods: {
    }
  }
</script>
