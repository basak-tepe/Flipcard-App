<template>
  <div>
    <InputPart
    :count="count"
    :flashCards = "flashCards"

    @update:count="updateCount" 
    @update:flashcards="updateFlashCards"
    />


    <ul id="flipCards" class="grid list-none">
      <li v-for="flipcard in flashCards" class="col-12 sm:col-12 md:col-6 lg:col-3">
        <div class="border-round-md shadow-6">
            <FlipCard 
            :flipcard ="flipcard"


            @delete-card="deleteCard"
            />
        </div>
      </li>
    </ul>

  </div>
</template>


<script>
import InputPart from './components/InputPart.vue'
import FlipCard from './components/FlipCard.vue'

export default {

  data(){
    return{
      count: 0,
      //flashcards is a 2D list with cards inside [["front","back"],[],...]
      flashCards: [],

  }
  },

  methods:{
    updateCount(count) {
      this.count = count;
    console.log(this.count);
    },

    updateFlashCards(cardInfo) {
      this.flashCards.push(cardInfo);
    },

    deleteCard(deleted){
      this.flashCards = this.flashCards.filter(function(card){
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

.flipCards {
  align-items: center;
  justify-content: center;
  display: flex;
}

</style>