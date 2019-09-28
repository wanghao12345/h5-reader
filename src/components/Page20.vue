<template>
  <div class="page page10 swiper-lazy" :data-background="bg">
    <div class="page10_title">
      <h3>2019年11月<font style="float:right">幼儿园中的我</font></h3>
      <h2>我的成长故事</h2>
    </div>
    <div class="line"></div>
    <h4>老师眼中的我<span>（教师记录）</span></h4>
    <div class="page10_desc">
      <p>你是一个漂亮聪明伶俐的小女孩。你在幼儿园已经学会了自己吃饭，真是棒极了。幼儿园是你的家，幼儿园里有爱你的老师妈妈和小朋友，大家想对你说在新的一年里把身体养得棒棒的每天都来上幼儿园好吗?你是一个漂亮聪明伶俐的小女孩。你在幼儿园已经学会了自己吃饭，真是棒极了。幼儿园是你的家，幼儿园里</p>
    </div>
    <h4>活动中的我<span>（照片）</span></h4>
    <div class="page10_img">
      <img class="swiper-lazy" :data-src="img1"/>
      <img class="swiper-lazy" :data-src="img2"/>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/index_files/img_1_20190923163157492.jpg'
import img2 from '@/assets/index_files/img_2_201909231632045561.jpg'
import bg from '@/assets/img/page10-bg.png'
export default {
  name: 'Page20',
  data () {
    return {
      bg: bg,
      img1: img1,
      img2: img2
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
    width: 70%;
    border: solid 1px #FFF;
    margin: 2rem auto;
    display: flex;
  }
  .page10 img {
    width: 50%;
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
