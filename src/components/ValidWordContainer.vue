<template>
  <div>
    <article v-for="word in wordInfo">
      <div>
        <h2>{{ word.meta.id }}</h2>
        <h3>{{ word.fl }}</h3>
      </div>
      <div v-for="def in word.def[0].sseq">
        <p>{{ def[0][1].dt[0][1] }}</p>
        <div>
          <p>Synonyms</p>
          <button v-for="syn in def[0][1].syn_list[0]">{{ syn.wd }}</button>
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


</style>