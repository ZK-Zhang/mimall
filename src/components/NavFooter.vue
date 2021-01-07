<template>
  <div class="footer">
    <div class="footer-login">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="friend-chain">
      <a href="javascript:;">小米商城</a>
      <a href="javascript:;">MIUI</a>
      <a href="javascript:;">米家</a>
      <a href="javascript:;">米聊</a>
      <a href="javascript:;">小米商城隐私政策</a>
      <a href="javascript:;">小米商城用户协议</a>
    </div>
    <div class="property-right">Copyright ©2021 <span>mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'NavFooter'
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/config.scss';
  .footer{
    height: 234px;
    font-size: $fontI;
    color: $colorD;
    border-top: 4px solid $colorA;
    background: $colorB;
    text-align: center;
    .footer-login{
      margin-top: 46px;
      margin-bottom: 31px;
      img{
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .friend-chain a{
      position: relative;
      margin: 0 10px;
      color: $colorD;
      &::before{
        content: '';
        position: absolute;
        top: 0;
        right: -11px;
        display: inline-block;
        border-right: 2px solid $colorD;
        width: 1px;
        height: 16px;
      }
      &:last-child::before{
        display: none;
      }
    }
    .property-right{
      margin-top: 13px;
      span{
        color: $colorA;
      }
    }
  }
</style>
