<template>
  <div class="invalid-word-container">
    <h1>"{{ word }}" not found, did you mean:</h1>
    <div class="options">
      <button v-on:click="$emit('update', word)" v-for="word in wordInfo">{{ word }}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "InvalidWord",
    props: {
      wordInfo: Array,
      word: String
    }
  }
</script>

<style scoped>
  .invalid-word-container {
    margin-top: 200px;
  }
  button {
    cursor: pointer;
    border-radius: 5px;
    margin: 10px;
    font-size: 30px;
  }
</style>