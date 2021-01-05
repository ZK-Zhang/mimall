<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-heder">
      <div class="container">
        <div class="header-logo">
          <a href="/#"></a>
        </div>
        <div class="header-menu">
          <div class="menu-item">
            <span>小米手机</span>
            <div class="item-children"></div>
          </div>
           <div class="menu-item">
            <span>RedMi红米</span>
            <div class="item-children"></div>
          </div>
          <div class="menu-item">
            <span>电视</span>
            <div class="item-children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
  .nav-topbar{
    height: 39px;
    line-height: 39px;
    background: #333333;
    .container{
      @include flex();
      a{
        color: #B0B0B0;
        margin-right: 17px;
      }
      .my-cart{
        display: inline-block;
        width: 110px;
        background: #666666;
        text-align: center;
        .icon-cart{
          @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
          margin-right: 4px;
        }
        &:hover{
          background: #FF6600;
          color: #ffffff;
        }
      }
    }
  }
  .nav-heder{
    .container{
      height: 112px;
      @include flex();
      .header-logo{
        width: 55px;
        height: 55px;
        background: #FF6600;
        a{
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before{
            content: ' ';
            @include bgImg(55px,55px,'/imgs/mi-logo.png',cover);
            transition: margin .2s;
          }
          &:after{
            content: ' ';
            @include bgImg(55px,55px,'/imgs/mi-home.png',cover);
          }
          &:hover:before{
            margin-left: -55px;
            transition: margin .2s;
          }
        }
      }
      .header-menu{
        width: 643px;
        padding-left: 209px;
        .menu-item{
          display: inline-block;
          color: #333333;
          font-size: 16px;
          font-weight: bold;
          margin-right: 20px;
          cursor: pointer;
          &:hover{
            color: #FF6600;
          }
        }
      }
      .header-search{
        width: 319px;
        .wrapper{
          height: 50px;
          border: 1px solid #e0e0e0;
          input{
            border: none;
            width: 264px;
            height: 50px;
            border-right: 1px solid #e0e0e0;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a{
            @include bgImg(18px,18px,'/imgs/icon-search.png');
            margin-left: 17px;
          }
        }
      }
    }
  }
</style>
