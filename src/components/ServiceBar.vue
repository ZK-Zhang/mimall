<template>
  <div class="service">
    <ul class="container">
      <li><span class="icon-setting"></span>预约维修服务</li>
      <li><span class="icon-7day"></span>7天无理由退货</li>
      <li><span class="icon-15day"></span>15天免费换货</li>
      <li><span class="icon-post"></span>满150元包邮</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ServiceBar'
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/config.scss';
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/base.scss';
  .service{
    padding: 33px 0;
    color: $colorC;
    font-size: $fontI;
    li{
      display: inline-block;
      width: 24.9%;
      text-align: center;
      border-right: 1px solid $colorH;
      span{
        vertical-align: middle;
        margin-right: 5px;
      }
      .icon-setting{
        @include bgImg(20px,20px,'/imgs/icon-setting.png')
      }
      .icon-7day{
        @include bgImg(20px,20px,'/imgs/icon-7day.png')
      }
      .icon-15day{
        @include bgImg(20px,20px,'/imgs/icon-15day.png')
      }
      .icon-post{
        @include bgImg(20px,20px,'/imgs/icon-post.png')
      }
    }
    li:last-child{
      border-right: none;
    }
  }
</style>
