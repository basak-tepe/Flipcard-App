<template>
    <div>
    <h2>Game</h2>
    <p>try to predict the backside of a random card</p>
    <FlipCard :flipcard="pickRandomCard()"></FlipCard>
    <InputText class="m-2" v-model="guess" placeholder="your guess"></InputText>
    <Button class="m-2 shadow-8" label="guess the word" @click="checkGuess()"/>
    <p>{{ state }}</p>
    </div>
</template>

<script>
import { useStore } from "../stores/store";
import FlipCard from "../../src/components/FlipCard.vue";
import InputText from 'primevue/inputtext'



export default {

    data() {
        return {
            randomCard:  {
                front:"test",
                back:"test",
                isDeletable: false,   
            },


            store: useStore(),
            guess: "",
            state:"",
            //flashCards: [],
        }
    },
    methods: {
        checkGuess() {
            console.log(this.store.flashCards[0]);
            if(this.randomCard.back.toLowerCase() === this.guess.toLowerCase()){
                this.state = "Your guess was correct!"
                
            }
            else{
                this.state = "Try Again."
            }
        },

        pickRandomCard () {
            this.randomCard = this.store.flashCards[Math.floor(Math.random()*this.store.flashCards.length)];
            return this.randomCard;
        }
    },

    components:{
        FlipCard,
        InputText
    }
}


</script>

<style>

</style>