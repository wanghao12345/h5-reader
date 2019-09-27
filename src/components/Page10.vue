<template>
  <div class="page page10 swiper-lazy" :data-background="bg">
    <div class="page10_title">
      <h3>2019年9月<font style="float:right">幼儿园中的我</font></h3>
      <h2>我的成长故事</h2>
    </div>
    <div class="line"></div>
    <h4>老师眼中的我<span>（教师记录）</span></h4>
    <div class="page10_desc">
      <p>  你是个乖巧能干的女孩，上课时，老师总能看到你那专注的目光，在每次的活动中，你的表现都很出色，相信你升入中班后，表现会好。 你是个乖巧能干的女孩，上课时，老师总能看到你那专注的目光，在每次的活动中，你的表现都很出色，相信你升入中班后，表现会好。 你是个乖巧能干的女孩，上课时，老师<font></font></p>
    </div>
    <h4>活动中的我<span>（照片）</span></h4>
    <div class="page10_img"><img class="swiper-lazy" :data-src="img1"/></div>
  </div>
</template>

<script>
import img1 from '@/assets/index_files/img_1_201909231631026578.jpg'
import bg from '@/assets/img/page10-bg.png'
export default {
  name: 'Page10',
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
