<template>
  <div class="page page1 swiper-lazy" :data-background="bg">
    <div class="page1_top">
      <div class="page1_top_img">
        <img class="swiper-lazy" :data-src="img1">
      </div>
    </div>
    <div class="page1_title">宝贝成长档案</div>
    <div class="page1_main">
      <div class="page1_main1">
        <span class="b68">蒋恬</span><br><br>
        <span class="a06e4b">小二班</span><br>
        <span class="a06e4b">娃哈哈1</span>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/index_files/5d887c7e7de54.jpg'
import bg from '@/assets/img/page1-bg.png'
export default {
  name: 'Page1',
  data () {
    return {
      img1: img1,
      bg: bg
    }
  }
}
</script>

<style scoped>
  .page1 {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
  }
  .page1_top {
    height: 15rem;
    padding-top: 3rem;
    padding-bottom: 2rem;
    box-sizing: border-box;
  }
  .page1_top_img {
    width: 30%;
    margin-left: auto;
    margin-right: auto;
  }
  .page1_top img {
    width: 8.8rem;
    height: 8.8rem;
    border: solid 3px #566b68;
    box-sizing: border-box;
    box-shadow: -2px 0px 8px rgba(0, 0, 0, .22), 0px -2px 8px rgba(0, 0, 0, .22), 0px 2px 8px rgba(0, 0, 0, .22), 2px 0px 8px rgba(0, 0, 0, .22);
    background-color: #566b68;
    border-radius: 50%;
    -webkit-border-radius: 50%;
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
    width: 50%;
    margin: 0 auto;
    text-align: center;
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
