<template>
    <h2>Make Cards</h2>
    <InputPart :count="count" :flashCards="flashCards" @update:count="updateCount"
        @update:flashcards="updateFlashCards"/>


    <ul id="flipCards" class="grid list-none">
        <li v-for="flipcard in this.store.flashCards" class="col-12 sm:col-12 md:col-6 lg:col-3">
            <div class="border-round-md shadow-6">
                <FlipCard :flipcard="flipcard" @delete-card="deleteCard" />
            </div>
        </li>
    </ul>
</template>

<script>
import { useStore } from '../stores/store';
import InputPart from "../../src/components/InputPart.vue";
import FlipCard from "../../src/components/FlipCard.vue";


export default {

    data() {
        return {
            count: 0,
            //flashcards is a 2D list with card objects inside [{"front","back","is Deletable"},{},...]
            //flashCards: [],
            store: useStore(),
            
        }
    },

    methods: {
        updateCount(count) {
            this.count = count;
            console.log(this.count);
        },

        updateFlashCards(cardInfo) {
            this.store.addCard(cardInfo);
        },

        deleteCard(deleted) {
            this.store.flashCards = this.store.flashCards.filter(function (card) {
                return card !== deleted;
            });
            this.count = this.store.flashCards.length;
        }
    },

    components: {
        InputPart,
        FlipCard,
    }
}
</script>


<style>
.links {
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