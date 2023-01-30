<template>
    <div class="inputPart">
        <p>Total cards in your deck is {{ count }}</p>
        <InputText class="m-2" v-model="front" placeholder="front"></InputText>
        <InputText class="m-2" v-model="back" placeholder="back" @keyup.enter="addCard()"></InputText>
        <Button class="m-2 shadow-8" label="add card to the deck" @click="addCard()"/>

        <div class="field-checkbox">
            <Checkbox v-model="isDeletable" binary/>
            <label for="isDeletable"> is Deletable</label>
        </div>


        

    </div>
</template>


<script>
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox';


export default {
    props: ["count"],

    data() {
        return {
            d_count:0,
            front: "",
            back: "",
            isDeletable: true,
        };
    },

    mounted () {
            this.d_count = this.count;
            this.d_flashCards = this.flashCards;
    },

    watch: {
    count(newValue, oldValue) {
        this.d_count = newValue;
    }

    },

    methods: {
        addCard() {
            this.d_count++;
            this.d_cardInfo = {
                front: this.front,
                back: this.back,
                isDeletable: this.isDeletable,
            };
            
            console.log(this.front);
            console.log(this.back);
            this.$emit('update:count', this.d_count);
            this.$emit('update:flashcards', this.d_cardInfo);
        },
    },

    components: {
        InputText,
        Checkbox
    }
};
</script>


<style>

.inputPart{
    padding: 30px;
    display: inline-block;
}


</style>