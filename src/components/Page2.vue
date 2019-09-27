<template>
  <div class="page page2 swiper-lazy" :data-background="bg">
    <div class="page2_title"><span>寄 语</span></div>
    <div class="page2_main">
      <p style="display:-webkit-box; -webkit-line-clamp:6; -webkit-box-orient:vertical;font-size:0.9rem"> 寄语文字：当您翻开宝贝的档案，我们便成为了您的亲密伙伴，求语的教研团队将竭诚为您和您的宝贝服务。本档案记录的是宝贝在园里、家里的欢乐时光。你曾经录音的、拍摄的，你执笔的、老师评价的，无论文字、图片，还是视频，
        这些珍贵的记忆都珍藏在这里。我能想到最浪漫的事情，就是在那一天，你微笑着交给他（她）这本档案，熟悉的画面、声音，还有久违的、儿时的那些匆匆而过的记忆……
      </p>
    </div>
    <div class="page2_bottom"></div>
  </div>
</template>

<script>
import bg from '@/assets/img/page2-bg.png'
export default {
  name: 'Page2',
  data () {
    return {
      bg: bg
    }
  }
}
</script>

<style scoped>
  .page2{
    width: 100%;
    height: 100%;
    background:#f5e6cf  no-repeat left top;
    background-size: 100% 100%;
  }
  .page2_title{
    padding-top:3rem;
    font-size:2.5rem;
    letter-spacing: .67rem;
    text-align: center;
    color: #5879a1;
    text-shadow:#fff 3px 0 0,#fff 0 3px 0,#fff -3px 0 0,#fff 0 -3px 0;
    -webkit-text-shadow:#fff 3px 0 0,#fff 0 3px 0,#fff -3px 0 0,#fff 0 -3px 0;
    -moz-text-shadow:#fff 3px 0 0,#fff 0 3px 0,#fff -3px 0 0,#fff 0 -3px 0;
  }
  .page2_main{ width:95%; margin-left:auto; margin-right:auto;  padding-bottom:2rem;}
  .page2_main p{ width:100%; padding-top:3rem; padding-left:3rem; padding-right:2.4rem; box-sizing:border-box; color:#566b68; text-indent:2rem;line-height: 2rem;letter-spacing: 0.05rem;}
  .page2_bottom{ width:70%; padding-left:16%;}
  .page2_bottom img{ width: 100%;}
</style>
