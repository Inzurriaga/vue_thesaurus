<template>
  <div>
    <Loading v-if="loading" />
    <Home v-else-if="home"/>
    <Error v-else-if="error || wordInfo.length === 0" />
    <InvalidWord v-else-if="typeof wordInfo[0] == 'string'" v-bind:word="word" v-bind:wordInfo="wordInfo" v-on="$listeners"/>
    <ValidWord v-else v-bind:wordInfo="wordInfo" v-on="$listeners"/>
  </div>
</template>

<script>
import Home from "./HomePage.vue"
import Error from "./ErrorPage.vue"
import Loading from "./Loading.vue"
import ValidWord from "./ValidWordContainer.vue"
import InvalidWord from "./InvalidWordContainer.vue"

export default {
  name: 'WordContainer',
  components: {
    ValidWord,
    InvalidWord,
    Loading,
    Error,
    Home
  },
  props: {
    loading: Boolean,
    error: Boolean,
    home: Boolean,
    wordInfo: Array,
    word: String,
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
