<template>
  <header>
    <h1>Thesaurus</h1>
    <input placeholder="search word"/>
    <button v-on:click="update"></button>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      word: "hello word"
    }
  },
  props: {
    updateWord: { type: Function }
  },
  methods: {
    update: function(){
      this.updateWord()
    }
  }
}
</script>