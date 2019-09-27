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
      <swiper-slide><div class="tab-page tab-page2">I'm Slide 2</div></swiper-slide>
      <swiper-slide><div class="tab-page tab-page3">I'm Slide 3</div></swiper-slide>
      <swiper-slide><div class="tab-page tab-page4">I'm Slide 4</div></swiper-slide>
      <swiper-slide><div class="tab-page tab-page5">I'm Slide 5</div></swiper-slide>
      <swiper-slide><div class="tab-page tab-page6">I'm Slide 6</div></swiper-slide>
      <swiper-slide><div class="tab-page tab-page7">I'm Slide 7</div></swiper-slide>
    </swiper>
    <div class="goNext">
      <GoNext />
    </div>
  </div>
</template>

<script>
import GoNext from './GoNext'
import Page1 from './Page1'
export default {
  name: 'Home',
  components: {
    GoNext,
    Page1
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
