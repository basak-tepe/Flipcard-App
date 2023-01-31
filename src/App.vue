<template>
  <div>
    <div class="links">
      <router-link class="nav-link" active-class="active"  to="/">
        Home Page
      </router-link>

      <router-link class="nav-link" active-class="active" to="/game">
        Game
      </router-link>
    </div>
    <router-view></router-view>

    <InputPart :count="count" :flashCards="flashCards" @update:count="updateCount"
      @update:flashcards="updateFlashCards" />


    <ul id="flipCards" class="grid list-none">
      <li v-for="flipcard in flashCards" class="col-12 sm:col-12 md:col-6 lg:col-3">
        <div class="border-round-md shadow-6">
          <FlipCard :flipcard="flipcard" @delete-card="deleteCard" />
        </div>
      </li>
    </ul>

  </div>
</template>


<script>
import InputPart from './components/InputPart.vue'
import FlipCard from './components/FlipCard.vue'

export default {

  data() {
    return {
      count: 0,
      //flashcards is a 2D list with cards inside [["front","back"],[],...]
      flashCards: [],

    }
  },

  methods: {
    updateCount(count) {
      this.count = count;
      console.log(this.count);
    },

    updateFlashCards(cardInfo) {
      this.flashCards.push(cardInfo);
    },

    deleteCard(deleted) {
      this.flashCards = this.flashCards.filter(function (card) {
        return card !== deleted;
      });
      this.count = this.flashCards.length;
    }
  },

  components: {
    InputPart,
    FlipCard,
  }
}
</script>


<style>

.links{
  justify-content: right;
  display: flex;
}

.nav-link {
  margin: 10px;
  padding: 5px 10px;
  background-color: beige;
  text-decoration: none;
  color: black;
  border-radius: 5px;
  font-size: 15px;
}

.active {
  margin: 10px;
  padding: 5px 10px;
  background-color: lightblue;
  text-decoration: none;
  color: navy;
  border-radius: 5px;
  font-size: 15px;
} 

.flipCards {
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>