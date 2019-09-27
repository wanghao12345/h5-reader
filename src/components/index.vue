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
          <Page1 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page1 />
        </div>
      </swiper-slide>
      <swiper-slide>
      <div class="tab-page tab-page1">
        <Page1 />
      </div>
    </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page1 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page1 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page1 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page1 />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="tab-page tab-page1">
          <Page1 />
        </div>
      </swiper-slide>
    </swiper>
    <div class="goNext">
      <GoNext />
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
    Page9
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 1
        }
      }
    }
  },
  computed: {
    // swiper () {
    //   return this.$refs.mySwiper.swiper
    // }
  },
  mounted () {}
}
</script>

<style scoped>
  .home{
    width: 100%;
    height: 100%;
    position: relative;
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
