<template>
    <div>
        <item-container fatherComponent="item"></item-container>
         <img src="/images/ewm.png" alt="">
    </div>
   
</template>
<script>
import ItemContainer from '@/components/itemcontainer'
    export default{
        data(){
            return{
               
            }
        },
        components:{
            ItemContainer
        },
        created(){
            //进入题目页面，开始计时
            this.$store.commit('REMBER_TIME');
        }
    }
</script>
<style scoped>

</style>
