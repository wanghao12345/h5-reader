<template>
  <div class="page page3 swiper-lazy" :data-background="bg">
    <div class="page3_title">
      <h2 class="swiper-lazy" :data-background="title_bg">开学通知</h2>
    </div>
    <div class="page3_top"><img class="swiper-lazy" :data-src="img3"></div>
    <div class="page3_main">
      <p>蒋恬家长：</p>
      <p style="text-indent: 2rem;">
        您好！您的孩子这学期进入<span>娃哈哈1</span>幼儿园<span>小二班</span>班学习生活，班主任<span>黄叶</span>、<span>徐嘉</span>老师和保育员<span></span>老师全面负责教育、保育工作。下面详细介绍下三位老师！
      </p>
    </div>
    <div class="page3_teacher">
      <dl>
        <dt>
          <img class="swiper-lazy" :data-src="img1"/>
        </dt>
        <dd>
          <p><span>黄叶</span>老师，班主任,愿你是风，鼓起白色的帆；愿你是船，剪开蓝色的波澜。生活正在你的前方微笑，勇敢的走上前去，将彩色的人生拥抱</p>
        </dd>
        <br class="clear">
      </dl>
      <dl>
        <dt>
          <img class="swiper-lazy" :data-src="img2"/>
        </dt>
        <dd>
          <p><span>徐嘉</span>老师，班主任，愿你是风，鼓起白色的帆；愿你是船，剪开蓝色的波澜。生活正在你的前方微笑，勇敢的走上前去，将彩色的人生拥抱</p>
        </dd>
        <br class="clear">
      </dl>
    </div>
    <div class="page3_bottom"></div>
  </div>
</template>

<script>
import img1 from '@/assets/index_files/5d888957ee1b6.jpg'
import img2 from '@/assets/index_files/5d887a6af00c6.jpg'
import img3 from '@/assets/index_files/page3-top.png'
import bg from '@/assets/img/page3-bg.png'
import titleBg from '@/assets/img/page3-title.png'

export default {
  name: 'Page3',
  data () {
    return {
      bg: bg,
      img1: img1,
      img2: img2,
      img3: img3,
      title_bg: titleBg
    }
  }
}
</script>

<style scoped>
  .page4_title h2, .page3_title h2, .page12_title h2 {
    color: #566b68;
    background-size: 20% 100%;
    background-repeat: no-repeat;
    padding-top: 1rem;
    padding-left: 5rem;
    padding-bottom: 0.5rem;
    margin: 0 0 0 5%;
    font-size: 1rem
  }
  .page3 {
    width: 100%;
    height: 100%;
    background: #f5e6cf;
    background-size: 100% 100%;
    padding-top: 5%;
  }

  .page3_top {
    width: 100%;
    margin-left: 2rem;
  }

  .page3_top img, .page3_bottom img {
    width: 100%;
  }

  .page3_main {
    width: 81%;
    margin: 0 auto;
  }

  .page3_main p {
    font-size: .91rem;
    color: #10365e;
    line-height: 1.5rem;
  }

  .page3_main span, .page3_teacher span {
    color: #f11e1e;
  }

  .page3_teacher {
    width: 84%;
    height: 20rem;
    margin-left: 15%;
  }
  .page3_teacher dl{
    display: block;
    height: 6.2rem;
    margin-top: 1rem;
  }
  .page3_teacher dl dt {
    float: left;
    width: 6.2rem;
    border: 5px solid #fff;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -o-border-radius: 5px;
    box-sizing: border-box;
    background-color: #fddcb1;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, .15);
    -moz-box-shadow: 3px 3px 3px rgba(0, 0, 0, .15);
    -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, .15);
  }

  .page3_teacher dl dt img {
    width: 100%;
    height: 100%;
  }

  .page3_teacher dl dd {
    float: left;
    width: 11rem;
    height: 6.67rem;
    height: 4.67rem;
    padding: 1rem 2rem 0;
  }

  .page3_teacher dl dd p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 0.8rem;
    line-height: 1.2rem;
    text-indent: 2em;
  }

  .page3_bottom {
    width: 66%;
    float: right;
    margin-right: 6%;
  }
</style>
