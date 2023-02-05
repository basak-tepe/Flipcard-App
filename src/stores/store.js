import {defineStore} from 'pinia';

export const useStore = defineStore('store' , {
    state : () => {
        return {flashCards : [] };
    },

    actions: {
        addCard(card){
            this.flashCards.push(card);
        },

        deleteCard(removed){
            this.flashCards = this.flashCards.filter(function (card) {
                return card !== removed;
            });
        }
    }
});