<template>
  <div>
    <nav-header></nav-header>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '../../components/NavHeader'
import NavFooter from '../../components/NavFooter'
import ServiceBar from '../../components/ServiceBar'
export default {
  name: 'Index',
  components: {
    NavHeader,
    ServiceBar,
    NavFooter
  }
}
</script>

<style>

</style>