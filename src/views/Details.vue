<template>
<section class="text-gray-700 body-font overflow-hidden bg-white">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="../assets/product-1.png">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest"></h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product.name }}</h1>
       
        <p class="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <ColorPicker :product="product"></ColorPicker>
            <SizePicker :product="product"></SizePicker>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">${{ product.price }}</span>

          <button @click="addToCart(product.invId)"  class="flex ml-auto text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</button>
         
            <div  class="inline-flex items-center justify-center ml-5">
                <a v-if="inWishList" @click.prevent="removeFromWishList(product.invId)"  href="#">
                    <svg style="fill: #d32f2f;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
                </a>
                <a v-else @click.prevent="addToWishList(product.invId)" href="#">
                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/></svg>
                </a>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import SizePicker from '../components/SizePicker.vue'
import ColorPicker from '../components/ColorPicker.vue'

export default {
  name: 'details',
  components: {
    SizePicker,
    ColorPicker
  },
  data(){
        return {invId: this.$route.params.id}
  },
  computed: { 
        product() { 
          return this.$store.getters.forSale.filter(function(product){
              return product.invId == this.invId;
          }.bind(this))[0]
        },
        inWishList() { 
          return this.$store.getters.wishList.includes(this.product.invId) 
        }
  },
  methods: {
     addToCart (invId) {
      this.$store.dispatch('addToCart', invId);
    },
    removeFromWishList(invId) { this.$store.dispatch('removeFromWishList', invId); },
    addToWishList (invId) {
      this.$store.dispatch('addToWishList', invId);
    }
  },
};
</script>
