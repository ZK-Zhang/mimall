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
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username">注册</a>
          <a href="javascript:;" v-if="username">个人订单</a>
          <a href="javascript:;" class="my-cart" @click="cart"><span class="icon-cart"></span>购物车</a>
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
            <div class="item-children">
              <ul>
                <li class="product" v-for="item of phoneList" :key="item.id">
                  <router-link :to="'/product/'+item.id">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{currency(item.price)}}</div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
           <div class="menu-item">
            <span>RedMi红米</span>
          </div>
          <div class="menu-item">
            <span>电视</span>
            <div class="item-children">
              <ul>
                <li class="product">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">￥6999.00元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;">
                    <div class="pro-img">
                     <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">￥1999.00元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">￥699.00元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">￥1799.00元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">￥2699.00元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt="">
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price" style="font-size:18px">.....</div>
                  </a>
                </li>
              </ul>
            </div>
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
  name: 'NavHeader',
  data () {
    return {
      phoneList: [],
      username: ''
    }
  },
  methods: {
    getPhoneList () {
      this.$axios.get('/products',{
        params:{
          categoryId: '100012',
          pageSize: 6
        }
      }).then((res) => {
        // if(res.list.length > 6){
        //   this.phoneList = res.list.slice(0,6)
        // }
        this.phoneList = res.list
      })
    },
    currency(val) {
      if(!val) return '￥0.00元'
      return '￥'+ val.toFixed(2) +'元'
    },
    login() {
      this.$router.push('/login')
    },
    cart(){
      this.$router.push('/cart')
    }
  },
  mounted () {
    this.getPhoneList()
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
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
      position: relative;
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
            .item-children{
              opacity: 1;
              height: 220px;
              background: #ffffff;
            }
          }
          .item-children{
            opacity: 0;
            overflow: hidden;
            transition: all .5s;
            position: absolute;
            // top: 112px;
            top: 100px;
            left: 0;
            right: 0;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            height: 0;
            .product{
              position: relative;
              float: left;
              width: 16.6%;
              text-align: center;
              font-size: 12px;
              img{
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-name{
                font-weight: bold;
                color: $colorB;
                margin-top: 10px;
              }
              .pro-price{
                color: $colorA;
                margin-top: 8px;
              }
              &::before{
                content: '';
                position: absolute;
                top: 28px;
                right: 0;
                width: 1px;
                height: 100px;
                border-left: 1px solid $colorF;
              }
              &:last-child::before{
                display: none;
              }
            }
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
