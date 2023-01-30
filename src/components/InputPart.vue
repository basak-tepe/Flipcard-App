<template>
    <div class="inputPart">
        <p>Total cards in your deck is {{ d_count }}</p>
        <InputText class="m-2" v-model="front" placeholder="front"></InputText>
        <InputText class="m-2" v-model="back" placeholder="back"></InputText>
        <Button class="m-2 shadow-8" label="add card to the deck" @click="addCard()" />
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';


export default {
    props: ["count","flashCards"],

    data() {
        return {
            d_count:0,
            front: "",
            back: "",
            d_flashCards: [["add a card to start", "add a card to start"]],
        };
    },

    mounted () {
            this.d_count = this.count;
            this.d_flashCards = this.flashCards;
    },


    methods: {
        addCard() {
            this.d_count++;
            this.d_cardInfo = [this.front, this.back];
            console.log(this.front);
            console.log(this.back);
            this.d_flashCards.push(this.d_cardInfo);
            this.$emit('update-count', this.d_count);
            this.$emit('update-flashcards', this.d_flashCards);
        },
    },

    components: {
        InputText,
    }
};
</script>


<style>
.inputPart{
    padding: 30px;
    display: inline-block;
}


</style>