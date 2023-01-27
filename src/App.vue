<template>
  <div class="allContent">

    <div class="inputPart">
      <p>Total cards in your deck is {{ count }}</p>
      <InputText v-model="front" placeholder="front"></InputText>
      <InputText v-model="back" placeholder="back"></InputText>
      <Button class="shadow-8" label="add card to the deck" @click="addCard()" />
    </div>

    <Button class="shadow-8" label="flip" @click="flipCard()"/>

    <div class="cardDisplay" v-if="count">

      <div class="flip-card">
        <!-- class binding i sor-->
        <div class="flip-card-inner">

          <div class="flip-card-front">
            <p id="txt">{{ front }}</p>
          </div>

          <div class="flip-card-back">
            <p id="txt" >{{ back }}</p>
          </div>

        </div>
      </div>
    </div>

    <div class="buttons">
      {{ prevCount }}<Button class="shadow-8" label="prev" @click="showPrev()" />
      {{ nextCount }}<Button class="shadow-8" label="next" @click="showNext()" />
    </div>

  </div>
</template>



<script>
import Card from "primevue/card";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  data() {
    return {
      prevCount: 0,
      nextCount: 0,
      count: 0,
      front: "",
      back: "",
      flashCards: [["add a card to start", "add a card to start"]],
      cardInfo: ["", ""],
      cardIndex: 0,
      sideIndex: 0, //0 or 1
      flipped: false,
    };
  },

  methods: {
    addCard() {
      this.count++;
      this.nextCount++;
      this.cardInfo = [this.front, this.back];
      console.log(this.front);
      console.log(this.back);
      this.flashCards.push(this.cardInfo);
    },

    showPrev() {
      if (this.cardIndex == 0) {
        this.cardIndex == 1;
        alert("End of deck!");
        return;
      }
      this.cardInfo = this.flashCards[this.cardIndex--];
      this.nextCount++;
      this.prevCount--;

    },
    showNext() {
      if (this.cardIndex == this.flashCards.length - 1) {
        this.cardIndex == this.flashCards.length - 2;
        alert("End of deck!");
        return;
      }
      this.cardInfo = this.flashCards[this.cardIndex++];
      this.nextCount--;
      this.prevCount++;
    },


    flipCard(){
      this.flipped = !this.flipped;
    }

  },

  components: {
    InputText,
    Button,
    Card
  }
}
</script>


<style scoped>

#txt{
  padding: 70px 0;
}


.cardDisplay{
  justify-items: center;
}
.flip-card{
  margin-left: 90px;
}

/*
code below is taken from w3schools
*/

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
  /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}

/*code above is from w3sxhools
*/
</style>
