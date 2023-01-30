<template>
  <div>
    <InputPart
    v-bind:count="count"
    v-bind:flashCards = "flashCards"

    v-on:update-count="updateCount" 
    v-on:update-nextcount="updateNextCount" 
    v-on:update-flashcards="updateFlashCards"
    v-on:update-cardinfo="updateCardInfo" />

    <ul id="flipCards" class="grid list-none">
      <li v-for="flipcard in flashCards" class="col-12 sm:col-12 md:col-6 lg:col-3">
        <div class="border-round-md shadow-6">
            <FlipCard v-bind:flipcard ="flipcard"/>
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
      prevCount: 0,
      nextCount: 0,
      count: 0,
      front: "",
      back: "",
      flashCards: [],
      cardInfo: ["", ""],
      cardIndex: 0,
      sideIndex: 0, //0 or 1
      flipped: false,
  }
  },

  methods:{
    updateCount(count) {
    this.count = count;
    console.log(this.count);
    },
    updateNextCount(nextCount) {
    this.nextCount = nextCount;
    console.log(this.nextCount);
    },
    updatePrevCount(prevCount) {
    this.prevCount = prevCount;
    },
    updateFlashCards(FlashCards) {
    this.flashCards = FlashCards;
    },
    //bad naming
    updateCardInfo(cardInfo) {
    this.cardInfo = cardInfo;
    this.front = cardInfo[0];
    this.back = cardInfo[1];
    },
    updateCardIndex(cardIndex) {
    this.cardIndex = cardIndex;
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

.pink-container {
background-color: pink;
}


</style>