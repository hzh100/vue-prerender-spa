<template>
  <div class="back">
    <h1>This is an back page</h1>
  </div>
</template>

<script>
export default {
  name: 'back',
  metaInfo: {
    title: '我是一个title',
    meta: [
        {
            name: 'keywords',
            content: '关键字1,关键字2,关键字3'
        },
        {
            name: 'description',
            content: '这是一段网页的描述'
        }
    ]
  },
  components: {},
  created () {
    // Rx.Observable.of(1,2,3).map(function (x) { return x + '!!!'; })
  },
  methods: {
    dangerClick () {
    }
  }
}
</script>
