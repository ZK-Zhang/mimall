<template>
  <router-view/>
</template>

<script>
// import storage from './storage'
import axios from 'axios'
export default {
  name: 'App',
  mounted () {
    // storage.setItem('a',1)
    // storage.setItem('user',{'phone':'13246348180'})
    // storage.setItem('abc',{c:1},'user')
    // storage.clear("abc","user")
    // storage.getItem()
    let url = 'https://api.66mz8.com/api/rand.tbimg.php'
    axios.get(url).then((res) => {
      console.log(res)
    })
  }
}

</script>

<style>

</style>
