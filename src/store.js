import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
      { invId: 1, name: 'Apple Watch Series 7 GPS', image: '../assets/product-1.png', price: 589.99 , onCar: 0, colorList: [ 'black', 'orange', 'blue' ], color: 'black', sizeList: [ 'm', 'x' ,'l'], size: 'l'  },
      { invId: 2, name: 'Not and Apple Watch', image: '//placehold.it/200', price: 149.9 , onCar: 0, colorList: [ 'black', 'orange', 'blue' ], color: 'black', sizeList: [ 'm', 'x' ,'l'], size: 'm'  },
      { invId: 3, name: 'Lorem watch ipsum', image: '//placehold.it/200', price: 499 , onCar: 0, colorList: [ 'black', 'orange', 'blue' ], color: 'black', sizeList: [ 'm', 'x' ,'l'], size: 'm'  },
      { invId: 4, name: 'Other watch', image: '//placehold.it/200', price: 299 , onCar: 0 , colorList: [ 'black', 'orange', 'blue' ], color: 'black', sizeList: [ 'm', 'x' ,'l'], size: 'm'},
      { invId: 5, name: 'The return of the watch', image: '//placehold.it/200', price: 499 , onCar: 0, colorList: [ 'black', 'orange', 'blue' ], color: 'black', sizeList: [ 'm', 'x' ,'l'], size: 'm'  },
      { invId: 6, name: 'No watch home ', image: '//placehold.it/200', price: 299 , onCar: 0, colorList: [ 'black', 'orange', 'blue' ], color: 'black', sizeList: [ 'm', 'x' ,'l'], size: 'm'  },
      { invId: 7, name: 'The night watch', image: '//placehold.it/200', price: 499 , onCar: 0, colorList: [ 'black', 'orange', 'blue' ], color: 'black', sizeList: [ 'm', 'x' ,'l'], size: 'm'  },
      { invId: 8, name: 'Watch again', image: '//placehold.it/200', price: 299 , onCar: 0, colorList: [ 'black', 'orange', 'blue' ], color: 'black', sizeList: [ 'm', 'x' ,'l'], size: 'm'  },
      { invId: 9, name: 'Thw watch', image: '//placehold.it/200', price: 299 , onCar: 0, colorList: [ 'black', 'orange', 'blue' ], color: 'black', sizeList: [ 'm', 'x' ,'l'], size: 'm'  },
    ],
    inCart: [],
    wishList: []
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
    wishList: state => state.wishList
  },
  mutations: {
    ADD_TO_CART(state, invId) { 
      let indexInCart = state.inCart.findIndex(function(inCart) {
        if(invId == inCart.id) {
          return true;
        }
    })
    
    if(indexInCart == -1) 
      state.inCart.push( { 'id': invId, 'amount': 1} ); 
    else
      state.inCart[indexInCart].amount = state.inCart[indexInCart].amount + 1   
    },
    REMOVE_FROM_CART(state, index) { 
      if (state.inCart[index].amount > 1) {
        state.inCart[index].amount = state.inCart[index].amount -1
      }else{
        state.inCart.splice(index, 1); 
      }
      
    },
    ADD_TO_WISHLIST(state, invId) {
      if(!state.wishList.includes(invId))
        state.wishList.push(invId); 
    },
    REMOVE_FROM_WISHLIST(state, invId) { 
      state.wishList = state.wishList.filter(item => item !== invId); 
    },
  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
    addToWishList(context, invId) { context.commit('ADD_TO_WISHLIST', invId); },
    removeFromWishList(context, invId) { context.commit('REMOVE_FROM_WISHLIST', invId); },
  },
});
