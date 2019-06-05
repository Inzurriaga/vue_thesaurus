<template>
  <div>
    <ValidWord v-if="typeof wordInfo[0].meta.id === 'string'" v-bind:wordInfo="wordInfo"/>
    <InvalidWord v-else/>
  </div>
</template>

<script>
import ValidWord from "./ValidWordContainer.vue"
import InvalidWord from "./InvalidWordContainer.vue"

export default {
  name: 'WordContainer',
  components: {
    ValidWord,
    InvalidWord
  },
  props: {
    wordInfo: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
