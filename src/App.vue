<template>
  <router-view/>
</template>

<script>
// import storage from './storage'
// import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      data: {}
    }
  },
  mounted () {
    // storage.setItem('a',1)
    // storage.setItem('user',{'phone':'13246348180'})
    // storage.setItem('abc',{c:1},'user')
    // storage.clear("abc","user")
    // storage.getItem()
    // let url = '/api/rand.tbimg.php'
    // let url = '/mock/user/login.json'
    let url = '/user/login'
    this.$axios.get(url).then((res) => {
      this.data = res
      console.log(this.data)
    })
  }
}

</script>

<style>

</style>
