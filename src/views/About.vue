<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger" @click="dangerClick">危险按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button } from 'vant'
import { Toast } from 'vant'
// import Button from 'vant/lib/button';
// import 'vant/lib/button/style';
// import Rx from 'rxjs/Rx'

export default {
  name: 'about',
  components: {
    vanButton: Button
  },
  created () {
    // Rx.Observable.of(1,2,3).map(function (x) { return x + '!!!'; })
  },
  methods: {
    dangerClick () {
      // Rx.Observable.of(1,2,3)
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
    }
  }
}
</script>
