<template>
  <div>
    <div class="links">
      <router-link class="nav-link" active-class="active"  to="/"  :to="{ name: 'Home', params: { flashCards: flashCards } }" >
        Home Page
      </router-link>

      <router-link class="nav-link" active-class="active" to="/game" :to="{ name: 'Game', params: { flashCards: flashCards } }">
      Game
    </router-link>

    </div>
    <router-view  @flashCards-updated="updateFlashCards"></router-view>

  </div>
</template>


<script>
export default{
  
  data (){
    return {
      count: 0,
      flashCards: [],
    }
  },

  methods: {
    updateFlashCards (updatedFlashCards) {
      this.flashCards = updatedFlashCards;
    }
  }
}

</script>

<style></style>