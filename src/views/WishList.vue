<template>
    <body class="overflow-y-hidden">
        <div class=" py-12">
            <!-- Desktop Responsive Start -->
            <div class="hidden sm:flex flex-col my-auto justify-center items-center">
                <div class="pl-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-start space-x-4">
                    <h1 class="text-4xl font-semibold leading-9 text-gray-800">
                        Favourites
                    </h1>
                    <p class="text-base leading-4 text-gray-600 pb-1">({{wishListCount}} Items)</p>
                </div>
                <table class="w-2/3 mt-16 whitespace-nowrap " >
                    <thead aria-label="table heading" class="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 border-b ">
                        <tr>
                            <th class="text-base font-medium leading-4 text-gray-600 2xl:pl-20 pl-4 lg:pl-10">
                                YOUR PRODUCT
                            </th>
                            <th class="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                NAME
                            </th>
                            <th class="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                PRICE
                            </th>
                            <th class="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                ACTIONS
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody class="w-full text-left">
                        <tr class="border-gray-200 border-b" v-for="(product,index) in wishList" :key="index" >
                            <td>
                                <router-link  v-bind:to="'/details/'+ product.invId">
                                    <img class="my-5 l-4 w-2/3 mx-auto md:w-full  lg:pl-10 max-w-xs 2xl:pl-20" src="../assets/product-1.png" :alt="product.name" />
                                </router-link>
                            </td>
                            <th class="mt-5  text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                <router-link  v-bind:to="'/details/'+ product.invId">
                                    <p class=" text-base leading-4 text-gray-800">{{ product.name }}</p>
                                </router-link>
                            </th>
                            <th class="my-5   pl-6 lg:pl-20 2xl:pl-52">
                                <p class="">${{ product.price }}</p>
                            </th>
                            <th class="my-5  text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                
                                <button @click="addToCart(product.invId)" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 21.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195zm-13.805-4c6.712 1.617 7 9 7 9h2l-4 4-4-4h2s.94-6.42-3-9z"/></svg>
                                    
                                </button>

                                <button @click="removeFromWishList(product.invId)" class="ml-3 mr-5 pb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"/></svg>
                                </button>
                            </th>
                            
                        </tr>
    
                    </tbody>
                </table>
            </div>
            <!-- Desktop Responsive End -->
    
            <!-- Mobile Responsive Start -->
            <div class=" flex justify-center items-center mx-5">
                <div class="sm:hidden flex flex-col justify-start items-start ">
                    <div class="px-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
                        <p class="text-4xl font-semibold leading-9 text-gray-800">
                            Favourites
                        </p>
                        <p class="text-base leading-4 text-gray-600 pb-1">({{wishListCount}} Items)</p>
                    </div>
                    <div class="border-gray-200 border-b pb-10" v-for="(product,index) in wishList" :key="index">
                        <div class="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div class="w-3/4 mx-auto">
                                <router-link  v-bind:to="'/details/'+ product.invId">
                                    <img src="../assets/product-1.png" :alt="product.name" />
                                </router-link>    
                            </div>
                        </div>
                        <div class="px-4 mt-6 justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <router-link  v-bind:to="'/details/'+ product.invId">
                                    <p class="w-36 text-base leading-6 text-gray-800">{{ product.name }}</p>
                                </router-link>
                            </div>
                            <div>
                                <p class="text-base font-semibold leading-4 text-gray-800">${{ product.price }}</p>
                            </div>
                        </div>
                        <div class="px-4 mt-6 justify-between w-full flex ">
                            <div class="ml-auto"> 
                                <button @click="addToCart(product.invId)" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 21.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195zm-13.805-4c6.712 1.617 7 9 7 9h2l-4 4-4-4h2s.94-6.42-3-9z"/></svg>
                                    
                                </button>

                                <button @click="removeFromWishList(product.invId)" class="ml-3 mr-5 pb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <!-- Mobile Responsive End -->
        </div>
    </body>
</template>

<script>
export default {
    name: "wishlist",
    computed: {
    inList() { return this.$store.getters.wishList; },
    wishListCount() { return this.inList.length; },
    wishList() {
      return this.$store.getters.wishList.map((listItem) => {
        return this.$store.getters.forSale.find((forSaleItem) => {
          return listItem === forSaleItem.invId;
        });
      });
    },
    total() {
      return this.cart.wishList((acc, cur) => acc + cur.price * cur.onCar, 0).toFixed(2);
    },
  },
  methods: {
    addToCart (invId) {
      this.$store.dispatch('addToCart', invId);
    },
    removeFromWishList(invId) { this.$store.dispatch('removeFromWishList', invId); },
  },
};
</script>

<style>

</style>
