<template>
  <div id="app" >
    
      <section class="p-6">
         <div class="container mx-auto">
            <div class="flex flex-wrap -mx-4">
              <Product
                v-for="product in forSale"
                :key="product.invId"
                :product="product"
               />
          </div>
            
        </div>
    </section>
  </div>
</template>

<script>
import Product from '../components/Product.vue';

export default {
  name: 'index',
  computed: {
    forSale() { return this.$store.getters.forSale; },
  },
  components: {
    Product,
    
  },
};
</script>