<template>
  <div class="home">
    <swiper
      :options="swiperOption"
      ref="mySwiper"
    >
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page1 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page2 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page3 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page4 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page5 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page8 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page9/>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page10 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page11 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
        <Page12 />
      </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page13 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page14 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page15 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page16 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page17 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page18 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page19 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page20 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page21 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page22 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page23 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page24 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page25 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page26 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page27 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page33 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page34 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page35 />
        </div>
      </swiper-slide>
    </swiper>
    <div class="goNext">
      <GoNext />
    </div>
    <div class="loading-box" v-if="loading">
      <img :src="require('@/assets/img/loading.svg')" alt="">
    </div>
  </div>
</template>

<script>
import GoNext from './GoNext'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page8 from './Page8'
import Page9 from './Page9'
import Page10 from './Page10'
import Page11 from './Page11'
import Page12 from './Page12'
import Page13 from './Page13'
import Page14 from './Page14'
import Page15 from './Page15'
import Page16 from './Page16'
import Page17 from './Page17'
import Page18 from './Page18'
import Page19 from './Page19'
import Page20 from './Page20'
import Page21 from './Page21'
import Page22 from './Page22'
import Page23 from './Page23'
import Page24 from './Page24'
import Page25 from './Page25'
import Page26 from './Page26'
import Page27 from './Page27'
import Page33 from './Page33'
import Page34 from './Page34'
import Page35 from './Page35'
export default {
  name: 'Home',
  components: {
    GoNext,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page8,
    Page9,
    Page10,
    Page11,
    Page12,
    Page13,
    Page14,
    Page15,
    Page16,
    Page17,
    Page18,
    Page19,
    Page20,
    Page21,
    Page22,
    Page23,
    Page24,
    Page25,
    Page26,
    Page27,
    Page33,
    Page34,
    Page35
  },
  data () {
    return {
      loading: true,
      swiperOption: {
        direction: 'vertical',
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 3
        }
      }
    }
  },
  computed: {
    // swiper () {
    //   return this.$refs.mySwiper.swiper
    // }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
}
</script>

<style scoped>
  .home{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .loading-box{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 999999;
  }
  .loading-box img{
    width: 4rem;
    height: 4rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -2rem;
    margin-top: -2rem;
    animation: loading 2s linear 0s infinite;
    -webkit-animation: loading 2s linear 0s infinite;
    -o-animation: loading 2s linear 0s infinite;
    -moz-animation: loading 2s linear 0s infinite;
  }
  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes loading {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @-o-keyframes loading {
    from {
      -o-transform: rotate(0deg);
    }
    to {
      -o-transform: rotate(360deg);
    }
  }

  @-moz-keyframes loading {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  /deep/.swiper-container{
    width: 100%;
    height: 100%;
  }
  .goNext{
    position: absolute;
    width: 18px;
    left: 50%;
    height: 50px;
    z-index: 10;
    margin-left: -9px;
    bottom: 10px;
    z-index: 999999;
  }
  .tab-page{
    width: 100%;
    height: 100%;
  }
</style>
