<template>
  <div class="FlipCard">
    <div class="flip-card" @click="isFlipped = !isFlipped">
      <div class="flip-card-inner" :class ="{flipped: isFlipped}">
        <div class="flip-card-front">
          <div v-if="flipcard.isDeletable" class="delete right-aligned" @click="deleteCard()"><i class="pi pi-times"></i></div>
          <p id="txt">{{ flipcard.front }}</p>
        </div>
        <div class="flip-card-back">
          <div  v-if="flipcard.isDeletable" class="delete right-aligned" @click="deleteCard()"><i class="pi pi-times"></i></div>
          <p id="txt">{{ flipcard.back }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  //flipcard is a list with 2 items ["front","back","deletable"]
  props: ["flipcard","count"],

  data() {
    return {
      isFlipped: false,  
    }
  },
  methods: {
    deleteCard(){
      this.$emit("delete-card",this.flipcard);
    }
  }
};

</script>



<style>

.delete{
  padding: 10px;
}

.right-aligned {
  text-align: right;
}

#txt {
  padding: 70px 0;
}

.FlipCard {
  justify-items: center;
  padding: 20px;
  margin: 20px;
}

/*
code below is taken from w3schools src = https://www.w3schools.com/howto/howto_css_flip_card.asp
*/

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 250px;
  height: 250px;
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
.flip-card-inner.flipped {
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

.flip-card-front {

}

/*code above is from w3sxhools src = https://www.w3schools.com/howto/howto_css_flip_card.asp
*/

</style>
