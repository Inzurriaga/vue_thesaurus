<template>
  <header class="header">
    <div class="main-title-container">
      <div class="title-container-first">
        <div class="title-container-second">
          <h1>Not<br>Merriam-<br>Webster</h1>
        </div>
      </div>
      <h2>since 2019</h2>
    </div>
    <div class="search-input">
      <input v-bind:value="word" v-on:keyup="updateWord" placeholder="search word" v-on:keyup.enter="$emit('update', word )"/>
      <button  v-on:click="$emit('update', word )">
        <svg width="26px" height="29px" viewBox="0 0 26 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Search" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g class="g-search-icon" transform="translate(1.000000, 1.000000)" fill="#ae0015" fill-rule="nonzero">
              <path d="M17.5185815,17.4073633 L24.5896493,24.4784311 C24.9801736,24.8689554 24.9801736,25.5021204 24.5896493,25.8926447 L23.1754357,27.3068582 C22.7849114,27.6973825 22.1517464,27.6973825 21.7612221,27.3068582 L14.6901543,20.2357904 C14.29963,19.8452661 14.29963,19.2121011 14.6901543,18.8215769 L16.1043679,17.4073633 C16.4948922,17.016839 17.1280572,17.016839 17.5185815,17.4073633 Z M10.5,21 C4.70101013,21 0,16.2989899 0,10.5 C0,4.70101013 4.70101013,0 10.5,0 C16.2989899,0 21,4.70101013 21,10.5 C21,16.2989899 16.2989899,21 10.5,21 Z M10.5,18 C14.6421356,18 18,14.6421356 18,10.5 C18,6.35786438 14.6421356,3 10.5,3 C6.35786438,3 3,6.35786438 3,10.5 C3,14.6421356 6.35786438,18 10.5,18 Z" id="Oval"></path>
            </g>
          </g>
        </svg>
      </button>
    </div>
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
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
    margin: 0;
    position: fixed;
    top: 0;
    background-color: #375d71;
    box-shadow: 0 0 4px 0 rgba(0,0,0,.10);
    width: 100%;
    height: 120px;
  }
  h1 {
    margin: 0;
    color: #09417a;
    font-size: 20px;
  }
  h2 {
    margin-left: 20px;
    color: #ffffff;
  }
  .main-title-container {
    font-family: "Times New Roman";
    margin-top: 18px;
    display: flex;
    align-items: center;
  }
  .title-container-first {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 130px;
    border-radius: 100px;
    background-color: #ffffff;
  }
  .title-container-second {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 120px;
    height: 120px;
    border-radius: 100px;
    border: 5px solid #c4232a;
  }
  .search-input {
    display: flex;
    width: 550px;
    height: 50px;
    padding: 0;
    border: 1px solid #b1b9bf;
  }
  input {
    padding: 0.3em 40px 0.3em 1em;
    font-size: 1.25em;
    font-weight: 300;
    height: 100%;
    width: 85%;
    outline: none;
    border: none;
  }
  button {
    cursor: pointer;
    height: 100%;
    width: 15%;
    border: none;
    outline: none;
  }
</style>