<template>
  <div id="app">
    <Header v-on:update="updateWord"/>
    <WordContainer  v-bind:home="home" v-bind:error="error" v-bind:wordInfo="wordInfo" v-bind:word="word" v-bind:loading="loading" v-on:update="updateWord"/>
  </div>
</template>

<script>
import WordContainer from "./components/WordContainer.vue"
import Header from "./components/Header.vue"

export default {
  name: 'app',
  components: {
    WordContainer,
    Header,
  },
  data() {
    return {
      home: true,
      wordInfo: [],
      loading: false,
      word: "",
      error: false
    }
  },
  methods: {
    async updateWord(word){
      this.word = word
      this.home = false
      const updateWord = word.replace(/ /gi , "%20")
      try{
        this.error = false
        this.loading = true
        const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${updateWord}?key=${process.env.VUE_APP_APIKEY}`
        const response = await fetch(url)
        const data = await response.json()
        this.wordInfo = data
      } catch (error){
        this.error = true
        console.log(error)
      }
      this.loading = false
    },
    fetchWord: async () => {
      const response = await fetch()
      const wordData = response.json()
    }
  }
}
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: #f4f4f4;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
