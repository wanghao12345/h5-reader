<template>
  <div class="page page10 swiper-lazy" :data-background="bg">
    <div class="page10_title">
      <h3>2019年10月<font style="float:right">家中的我</font></h3>
      <h2>我的成长故事</h2>
    </div>
    <div class="line"></div>
    <h4>家中趣事<span>（家长记录）</span></h4>
    <div class="page10_desc">
      <p>爱关心别人的小女孩，你的歌声很动听，你的舞姿真优美，你的动手能力也很强，愿升入中班后，你的身上有更多的闪光点出现爱关心别人的小女孩，你的歌声很动听，你的舞姿真优美，你的动手能力也很强，愿升入中班后，你的身上有更多的闪光点出现爱关心别人的小女孩，你的歌声很动听，你的舞姿真优美，你的</p>
    </div>
    <h4>活动中的我<span>（照片）</span></h4>
    <div class="page10_img"><img class="swiper-lazy" :data-src="img1"/></div>
  </div>
</template>

<script>
import img1 from '@/assets/index_files/img_1_201909231635171656.jpg'
import bg from '@/assets/img/page10-bg.png'
export default {
  name: 'Page16',
  data () {
    return {
      bg: bg,
      img1: img1
    }
  }
}
</script>

<style scoped>
  .page10 {
    background: #f5e6cf;
    background-size: 100% 100%;
  }
  .page10 h4 span {
    font-size: 0.875rem
  }
  .page10_img {
    width: 50%;
    margin-left: 10%;
    border: solid 1px #FFF;
    float: left;
  }
  .page10 img {
    width: 100%;
  }
  .page10_desc p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 0.8rem;
    line-height: 1.2rem;
    text-indent: 2em;
  }
</style>
