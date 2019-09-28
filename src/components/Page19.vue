<template>
  <div class="page page9 swiper-lazy" :data-background="bg">
    <div class="page9_title">
      <h3>2019年11月</h3>
      <h2>十一月主题——快乐玩玩玩</h2>
    </div>
    <div class="line"></div>
    <div class="page9_desc">
      <h4>主题价值</h4>
      <p>在说说、玩玩中，熟悉自己的同伴，激发与同伴交往的主动性，体验幼儿园的快乐；学会与同伴愉快相处交往的方法和技巧；通过动动、玩玩体验与同伴游戏的乐趣，进一步适应幼儿园生活。……</p>
    </div>
    <div class="page9_desc2">
      <h4>活动预设</h4>
      <p>猫和老鼠、蛋宝宝在哪里、小兔采蘑菇、快乐的小刺猬；语言活动：早晨多美好、快乐的一天、小朋友爱上幼儿园（一、二），科学活动：气球飞呀飞、谁的力气大、大家滚起来、吸住大嘴巴……</p>
    </div>
  </div>
</template>

<script>
import bg from '@/assets/img/page13-bg.png'
export default {
  name: 'Page19',
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
