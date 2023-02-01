import {defineStore} from 'pinia';

export const useStore = defineStore('store' , {
    state : () => {
        return {flashCards : [] };
    },

    actions: {
        addCard(card){
            this.flashCards.push(card);
        }
    }


});