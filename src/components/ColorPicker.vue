<template>
    <div class="flex">
        <span class="mr-3">Color</span>
        
        <button v-for="(color,index) in product.colorList" :key="index" 
            @click="selectedColor = color"
            class="ml-3 rounded-full w-6 h-6 "
            :style="{ backgroundColor : color}"
            :class="{'border-2 ring-2 ring-blue-700': selectedColor === color}"
            >
            
        </button>
        <!--
        <button class="border-2 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
        <button class="border-2 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button> -->
    </div>
</template>
<script>
export default {
    name:"colorPicker",
    props:{
        product: Object
    },
    data(){
        return {
            selectedColor: this.product.color
        }
    },
    watch:{
        selectedColor(){
            this.product.color = this.selectedColor
        }
    }
    
}
</script>