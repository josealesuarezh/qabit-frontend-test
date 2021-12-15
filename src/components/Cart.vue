<template>
  <div class="flex items-center pt-2">
  <button class="relative flex" @click="$modal.show('shopping-cart')">
      <svg class="flex-1 w-8 h-8" viewbox="0 0 24 24">
        <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
      </svg>
      <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
        {{ numInCart }}
      </span>
  </button>

  <modal name="shopping-cart" classes=" px-5 bg-card rounded-lg" height="auto">
      <div class="flex flex-col  p-6 space-y-4 sm:p-10 bg-coolGray-50 text-coolGray-800">
    <h2 class="text-xl font-semibold">Your cart <span v-if="numInCart == 0">is empty</span></h2>
    
    <ul class="flex flex-col overflow-y-auto max-h-96 divide-y divide-coolGray-300 pr-6" >
      <li 
        class="flex flex-col py-4"
        v-for="(product, index) in cart" :key="index"
        >
        <div class="flex w-full">
          <img class="flex-shrink-0 hidden mr-5 md:flex object-cover border-transparent rounded outline-none sm:w-32 sm:h-32 bg-coolGray-500" 
              src="../assets/product-1.png" :alt="product.name">
          <div class="flex flex-col justify-between w-full pb-4">
            <div class="flex justify-between w-full pb-2 space-x-2">
              <div class="space-y-1 justify-between flex flex-col">
                <h3 class="text-lg font-semibold leading-snug sm:pr-8">{{product.name}}</h3>
                <p class="text-lg mb-auto text-coolGray-600">Price</p>
              </div>
              <div class="text-right">
                <p class="text-md text-coolGray-400">${{ product.price }} <span><br> x{{ product.onCar }}</span></p>
                <p class="text-lg font-semibold">${{ parseFloat(product.onCar * product.price).toFixed(2) }}</p>
              </div>
            </div>
            <div class="flex text-sm ">
              <button type="button" @click="removeFromCart(index)" class="flex items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
                  <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                  <rect width="32" height="200" x="168" y="216"></rect>
                  <rect width="32" height="200" x="240" y="216"></rect>
                  <rect width="32" height="200" x="312" y="216"></rect>
                  <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                </svg>
                <span>Remove</span>
              </button>
            </div>
          </div>
        </div>
      </li>
      
    </ul>
    <div class="space-y-1 text-right">
      <p>Total amount:
        <span class="font-semibold">${{total}} </span>
      </p>
      <!-- <p class="text-sm text-coolGray-600">Not including taxes and shipping costs</p>-->
    </div>
    <div class="flex justify-end space-x-4">
      <button type="button" @click="$modal.hide('shopping-cart')" class="px-6 py-2 border rounded-md border-violet-600">Back
      </button>
      <button type="button" :class="total == 0 ?'opacity-50 cursor-not-allowed' : ''" class="bg-blue-700 hover:bg-blue-800 px-6 py-2 border rounded-md text-white">
        Checkout
      </button>
	</div>
</div>
  </modal>

  </div>
</template>

<script>

export default {
  name: 'shoppingCart',
  computed: {
    inCart() { return this.$store.getters.inCart; },
    numInCart() { return this.inCart.reduce((a, b) => a + (b['amount'] || 0), 0);  },
    cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.forSale.find((forSaleItem) => {
           if(cartItem.id === forSaleItem.invId){
             forSaleItem.onCar = cartItem.amount
             return true
           }
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price * cur.onCar, 0).toFixed(2);
    },
  },
  methods: {
    removeFromCart(index) { this.$store.dispatch('removeFromCart', index); },
  },
};
</script>
