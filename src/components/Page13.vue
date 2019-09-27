<template>
  <div class="page page9 swiper-lazy" :data-background="bg">
    <div class="page9_title">
      <h3>2019年10月<font style="float:right">主题起源</font></h3>
      <h2>十月主题——小鬼显身手</h2>
    </div>
    <div class="line"></div>
    <div class="page9_desc">
      <h4>孩子们对话</h4>
      <p>孩子们对话： “我的小手可以画画，做手工，吃饼干，喝牛奶，梳头发……” “我最想用我的手吃东西！” “我长大了想跟我妈妈一样做警察” “我觉得我已经长大了，可以自己的事情自己做了”</p>
    </div>
    <div class="page9_desc2">
      <h4>娃幼的思考</h4>
      <p>“我小时候吃饭要妈妈喂的，但是现在不需要了” “我的爸爸是一名厨师，我觉得他很厉害” “我的爸爸是主持人，他很能说，所以我叫他话唠” ………………</p>
    </div>
  </div>
</template>

<script>
import bg from '@/assets/img/page13-bg.png'
export default {
  name: 'Page13',
  data () {
    return {
      bg: bg
    }
  }
}
</script>

<style scoped>
  .page9 {
    background: #f5e6cf;
    background-size: 100% 100%
  }
  .page9_title {
    padding: 1.5rem;
    font-size: 1rem;
    padding-bottom: 0rem;
    padding-top: 1rem
  }
</style>
