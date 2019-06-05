<template>
  <header class="header">
    <h1>Thesaurus</h1>
    <input v-bind:value="word" v-on:keyup="updateWord" placeholder="search word" v-on:keyup.enter="$emit('update', word )"/>
    <button  v-on:click="$emit('update', word )"></button>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      word: ""
    }
  },
  methods: {
    updateWord: function(e){
      this.word = e.target.value;
    }
  }
}
</script>

<style scoped>
  header {
    z-index: 1;
    margin: 0;
    position: fixed;
    top: 0;
    background-color: #375d71;
    box-shadow: 0 0 4px 0 rgba(0,0,0,.10);
    width: 100%;
    height: 140px;
  }
  h1 {
    margin: 0;
  }
</style>