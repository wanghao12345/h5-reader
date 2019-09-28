<template>
  <div class="page page9 swiper-lazy" :data-background="bg">
    <div class="page9_title">
      <h3>2019年11月<font style="float:right">主题起源</font></h3>
      <h2>十一月主题——快乐玩玩玩</h2>
    </div>
    <div class="line"></div>
    <div class="page9_desc">
      <h4>孩子们对话</h4>
      <p>十月份孩子们基本适应了幼儿园的生活，他们开始在这个新建开始探究，这个新家里面他们究竟而以干些什么？他们看见哥哥姐姐在做操时，他们会情不自禁地跟着做；看见哥哥姐姐们在画画，他们也想操……</p>
    </div>
    <div class="page9_desc2">
      <h4>娃幼的思考</h4>
      <p> 起笔和颜料试一下，孩子们开始对自己有要求。 快乐玩玩玩主题下，让孩子在游戏的情境中体验幼儿园的学习，孩子开始唱歌、开始涂鸦，开始锻炼，开始听故事；孩子们也开始交朋友，开始与朋友合作，开始与朋友分享，在游戏的情境中再一次经历幼儿园的生活的美好。……</p>
    </div>
  </div>
</template>

<script>
import bg from '@/assets/img/page13-bg.png'
export default {
  name: 'Page18',
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
