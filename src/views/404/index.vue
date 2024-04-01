<template>
    <div class="box">
       <img src="../../assets/images/error_images/404.png" alt="">
       <el-button @click="goHome">回到首页</el-button>
    </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
let $router = useRouter();
const goHome = ()=>{
   $router.push('/home')
}
</script>

<style scoped lang="scss">
.box{
  width: 100vw;
  height: 100vh;
  //background: yellowgreen;
  display: flex;
  flex-flow: column;
  justify-content: center;
 
  img{
    width: 800px;
    height: 400px;
    margin-left:350px;
  }
  button{
    width: 200px;
    height: 50px;
    margin:auto;
  }
}
</style>