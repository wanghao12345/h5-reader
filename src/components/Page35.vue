<template>
  <div class="page page1 swiper-lazy" :data-background="bg">
    <div class="top">
      <div class="page-code">
        <img class="swiper-lazy" :data-src="img1">
      </div>
    </div>
    <div class="page1_main">
      <div class="page1_main1">
        <div class="page1-main1-left">
          <img style="width: 4rem" class="swiper-lazy" :data-src="img2">
        </div>
        <div class="page1-main1-right">
          <h3 style="font-size:1.2rem; line-height:2rem;">杭州求语教育科技有限公司</h3>
          <h3 style="font-size:1.2rem; line-height:2rem;">微信公众号：qyedu2011</h3>
          <h3 style="font-size:1.1rem; text-align:center; line-height:1.6rem;">TEL:0571-86538255</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/index_files/page35_code.png'
import img2 from '@/assets/index_files/page35_tel.png'
import bg from '@/assets/img/page1-bg.png'
export default {
  name: 'Page35',
  data () {
    return {
      img1: img1,
      img2: img2,
      bg: bg
    }
  }
}
</script>

<style scoped>
  .page1 {
    width: 100%;
    height: 100%;
    background: #f5e6cf;
    background-size: 100% 100%;
  }
  .page-code{
    padding-top: 3rem;
    padding-left: 3rem;
  }
  .page-code img{
    width: 75%;
  }
  .page1 .page1_title {
    text-align: center;
    width: 70%;
    margin: 0 auto 2.1rem;
    color: #566b68;
    font-size: 2.35rem;
  }
  .page1 .page1_title span {
    text-align: center;
    text-shadow: #fff 2px 0 0, #fff 0 2px 0, #fff -2px 0 0, #fff 0 -2px 0;
    -webkit-text-shadow: #fff 2px 0 0, #fff 0 2px 0, #fff -2px 0 0, #fff 0 -2px 0;
    -moz-text-shadow: #fff 2px 0 0, #fff 0 2px 0, #fff -2px 0 0, #fff 0 -2px 0;
  }
  .page1_main {
    margin-top: 1rem;
    height: 13rem;
  }
  .page1_main1 {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    margin-top: 2rem;
  }
  .page1-main1-left{
    width: 4rem;
    margin-right: 0.5rem;
  }
  .page1_main1 h3{
    font-size: 1.2rem;
    line-height: 2rem;
    color: #566b68;
    font-weight: bold;
  }
  .b68 {
    color: #566b68;
    font-size: 1.55rem;
    line-height: 1.55rem;
  }
  .a06e4b {
    color: #566b68;
    font-size: 1.25rem;
    line-height: 2rem
  }
</style>
