<template>
    <div class="inputPart">
        <p>Total cards in your deck is {{ d_count }}</p>
        <InputText v-model="front" placeholder="front"></InputText>
        <InputText v-model="back" placeholder="back"></InputText>
        <Button class="shadow-8" label="add card to the deck" @click="addCard()" />
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';


export default {
    //props are read only - does importing them matter?

    props: ["count","nextCount","flashCards","cardInfo"],

    data() {
        return {
            d_count:0,
            d_nextCount:0,
            front: "",
            back: "",
            d_flashCards: [["add a card to start", "add a card to start"]],
            d_cardInfo: ["", ""],
        };
    },

    mounted () {
            this.d_count = this.count;
            this.d_nextCount = this.nextCount;
            this.d_flashCards = this.flashCards;
            this.d_cardInfo = this.cardInfo;
    },


    methods: {
        addCard() {
            this.d_count++;
            this.d_nextCount++;
            this.d_cardInfo = [this.front, this.back];
            console.log(this.front);
            console.log(this.back);
            this.d_flashCards.push(this.d_cardInfo);
            this.$emit('update-count', this.d_count);
            this.$emit('update-nextcount', this.d_nextCount);
            this.$emit('update-flashcards', this.d_flashCards);
            this.$emit('update-cardinfo', this.d_cardInfo);
        },
    },

    components: {
        InputText,
    }
};
</script>
