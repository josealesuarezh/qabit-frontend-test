<template>

<div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 ">
  <div class="bg-white shadow-md mx-auto rounded-lg max-w-sm border border-solid mb-6">
    
    <header class="p-3 flex">
      <div  class="no-underline text-grey-darker hover:text-red-dark  ml-auto">
        <a v-if="inWishList" @click.prevent="removeFromWishList"  href="#">
            <svg style="fill: #d32f2f;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
        </a>
        <a v-else @click.prevent="addToWishList" href="#">
          <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/></svg>
        </a>
      </div>
    </header>
    <router-link  v-bind:to="'/details/'+ product.invId">
        <img class="rounded-t-lg p-8" src="../assets/product-1.png" :alt="product.name" />
    </router-link>
    <div class="px-5 pb-5">
      <router-link  v-bind:to="'/details/'+ product.invId">
          <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{{ product.name }}</h3>
      </router-link>
        <div class="flex items-center justify-between mt-8">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${{ parseFloat(product.price).toFixed(2) }}</span>
            <button @click="addToCart"  class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm py-1 px-4 sm:px-5 sm:py-2.5 text-center ">
               <svg class="sm:hidden text-white" fill="white" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M10 21.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195zm-13.805-4c6.712 1.617 7 9 7 9h2l-4 4-4-4h2s.94-6.42-3-9z"/></svg>
               <span class="hidden sm:flex">Add to cart</span> 
            </button>
        </div>
    </div>
  </div>
</div>
  
 
</template>

<script>

export default {
  name: 'item',
  props: {
    product: Object
  },
  methods: {
    addToCart () {
      this.$store.dispatch('addToCart', this.product.invId);
    },
    addToWishList () {
      this.$store.dispatch('addToWishList', this.product.invId);
    },
    removeFromWishList() { this.$store.dispatch('removeFromWishList', this.product.invId); },
  },
  computed: {
    inWishList(){ return this.$store.getters.wishList.includes(this.product.invId) }
  }
};
</script>