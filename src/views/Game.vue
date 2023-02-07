<template>
    <div>

        <div v-if="gameOn">
            <h2>Game</h2>
            <p>try to predict the backside of a random card</p>
        </div>

        <div v-if="gameOn">
        <FlipCard :flipcard="randomCard" ref="gameCard"></FlipCard>
        <InputText class="m-2" v-model="guess" placeholder="your guess"></InputText>
        <Button  class="m-2 shadow-8" label="guess the word" @click="checkGuess()" />
        </div>

        <p>{{ state }}</p>

        <Button v-if="correctGuess" class="m-2 shadow-8" label="Get new card" @click="getNewCard()" />

        <Button v-if="!gameOn" class="m-2 shadow-8" label="Start over" @click="startOver()" />
    </div>
</template>





<script>
import { useStore } from "../stores/store";
import FlipCard from "../../src/components/FlipCard.vue";
import InputText from 'primevue/inputtext'



export default {

    data() {
        return {
            gameOn: true,
            store: useStore(),
            guess: "",
            state: "",
            randomCard: {
                front: "",
                back: "",
                isDeletable: false,
            },
            correctGuess: false,
            gameDeck: [],
        }
    },

    mounted() {

        this.gameDeck = [...this.store.flashCards]; //copy the array for game
        console.log(this.gameDeck);
        this.pickRandomCard();
        this.$refs.gameCard.lock();
        this.$refs.gameCard.toggleGameView();
    },

    methods: {
        checkGuess() {
            console.log(this.gameDeck[0]);
            if (this.randomCard.back.toLowerCase() === this.guess.toLowerCase()) {
                this.$refs.gameCard.unlock();
                this.correctGuess = true;
                this.state = "Your guess was correct!"
                this.filterDeck(this.randomCard);
                console.log(this.gameDeck);
            }

            else {
                this.state = "Try Again."
            }
        },

        pickRandomCard() {
            this.randomCard = this.gameDeck[Math.floor(Math.random() * this.gameDeck.length)];
            this.$refs.gameCard.lock();
        },

        getNewCard() {
            this.pickRandomCard();
            this.correctGuess = false;
            this.state = "";
        },

        //remove used card
        filterDeck(removed) {
            if (this.gameDeck.length === 1) {
                this.state = "Your guess was correct!" + "\n" + " No cards left.";
                this.correctGuess = false;
                this.gameOn = false;     

            }
            else {
                this.gameDeck = this.gameDeck.filter(function (card) {
                    return (card !== removed);
                });
            }
        },

        //reset game
        startOver() {
            this.gameDeck = [...this.store.flashCards];
            this.randomCard = {
                front: "",
                back: "",
                isDeletable: false,
            },
            this.pickRandomCard();
            this.correctGuess = false;
            this.gameOver = false;
            this.gameOn = true;
            this.state = "";
            this.$refs.gameCard.toggleGameView();
        }
    },

    components: {
        FlipCard,
        InputText
    }
}


</script>

<style>

</style>