<template>
  <div class="word-container">
    <article class="word-card" v-bind:key="word.meta.id" v-for="word in wordInfo">
      <div class="word-title">
        <h2>{{ word.meta.id }}</h2>
        <h3>{{ word.fl }}</h3>
      </div>
      <div class="word-info">
        <div v-bind:key="def" v-for="(def, index) in word.def[0].sseq">
          <p class="definition">{{ index + 1}}. {{ def[0][1].dt[0][1] }}</p>
          <div class="synonyms">
            <p>Synonyms</p>
            <button v-on:click="$emit('update', syn.wd)" v-bind:key="syn.wd" v-for="syn in def[0][1].syn_list[0]">{{ syn.wd }}</button>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    name: "ValidWord",
    props: {
      wordInfo: Array
    }
  }
</script>

<style scoped>
  .word-container {
    margin-top: 160px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .word-card {
    padding: 10px;
    margin: 20px;
    
  }
  .word-title {
    color: #ffffff;
    box-shadow: 0 0 4px 0 rgba(0,0,0,.10);
    border-radius: 5px;
    background-color: #3a4249;
    margin-bottom: 10px;
    padding: 10px;
  }
  h2 {
    text-transform: capitalize;
  }
  .word-info {
    padding: 20px;
    text-align: left;
    box-shadow: 0 0 4px 0 rgba(0,0,0,.10);
    border-radius: 5px;
    background-color: #ffffff;
  }
  .definition {
    margin-bottom: 10px;
  }
  .synonyms {
    margin-left: 10px;
    margin-bottom: 10px;
  }
</style>