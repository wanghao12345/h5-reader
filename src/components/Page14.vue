<template>
  <div class="page page9 swiper-lazy" :data-background="bg">
    <div class="page9_title">
      <h3>2019年10月<font style="float:right">主题起源</font></h3>
      <h2>十月主题——小鬼显身手</h2>
    </div>
    <div class="line"></div>
    <div class="page9_desc">
      <h4>主题价值</h4>
      <p>  知道每样物品都包含着各行各业人们的劳动，懂得珍惜物品，学会感激辛勤劳动的人们。体验各种劳动的快乐。萌发了解不同行业的愿望，指导部分行业的职业特点。</p>
    </div>
    <div class="page9_desc2">
      <h4>家园建议</h4>
      <p>协助孩子收集不同行业的工作内容以及工具的图片。有意识地与孩子一起讨论不同职业工作所需的设施与物品。向孩子进行爱惜物品和尊重成人劳动的教育。家长有意识地带孩子观察成人的劳动场所，协助孩子将代表家长工作特点的一件物品带到幼儿园来。与孩子交流“长大想干什么”的话题。</p>
    </div>
    <div class="page9_desc2">
      <h4>活动预设</h4>
      <p>在为期四周的主题活动中，我们将与孩子们一起经历，美工活动：我来做糕点师傅、我是建筑师、我长大以后、花园里；语言活动：百人糕、会有谁来住、小象的心愿、辛劳的快递员；音乐活动：勤快人和懒惰人、愉快劳动歌、小小按摩师、唱给树的歌、我的小花园；健康活动：学做消防员、快递员送货忙；数学活动</p>
    </div>
  </div>
</template>

<script>
import bg from '@/assets/img/page13-bg.png'
export default {
  name: 'Page14',
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
  p{
    border: dashed 1px #FFF;
    padding: 1rem;
    height: 5rem !important;
    overflow: hidden;
  }
</style>
