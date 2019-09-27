<template>
  <div class="page page5 swiper-lazy" :data-background="bg">
    <div class="page5-ct swiper-lazy" :data-background="title_bg">
      <h3 class="swiper-lazy">我的家</h3>
    </div>
    <div class="page5_desc swiper-lazy">
      <dl class="page5_desc_img">
        <dt><img class="swiper-lazy" :data-src="img1"/>
        </dt>
        <dd style="padding-right:12%; box-sizing:border-box;font-size:0.8rem">
          <h3>称谓:爸爸</h3>
          <h3>姓名：蒋正</h3>
        </dd>
        <br class="clear">
      </dl>
      <dl class="page5_desc_img page5_desc_img2">
        <dt><img class="swiper-lazy" :data-src="img2"/>
        </dt>
        <dd style="font-size:0.8rem">
          <h3>称谓:妈妈</h3>
          <h3>姓名：任甜甜</h3>
        </dd>
        <br class="clear">
      </dl>
    </div>
    <div class="page5_img"><img class="swiper-lazy" :data-src="img3"/></div>
  </div>
</template>

<script>
import img1 from '@/assets/index_files/5d887cf212fb4.jpg'
import img2 from '@/assets/index_files/5d887d2e7480d.jpg'
import img3 from '@/assets/index_files/5d887d5c00bb9.jpg'
import bg from '@/assets/img/page35.jpg'
import titleBg from '@/assets/img/page33-t.png'

export default {
  name: 'Page4',
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
  .page{
    width: 100%;
    height: 100%;
  }
  .page5_desc {
    width: 82%;
    margin-left: auto;
    margin-right: auto;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  .page5_desc dl.page5_desc_img {
    width: 100%;
    margin-top: 1rem;
    display: block;
    height: 6rem;
  }

  dl.page5_desc_img dt {
    width: 25%;
    height: 6rem;
    float: left;
    display: inline;
  }

  dl.page5_desc_img dt img {
    width: 100%;
    border-radius: 50%;
    -webkit-border-radius: 50%;
  }

  dl.page5_desc_img dd {
    width: 75%;
    padding-left: 2%;
    box-sizing: border-box;
    float: left;
    display: inline;
    padding-left: 3%;
    padding-top: 0;
  }

  dl.page5_desc_img dd h3 {
    color: #566b68;
    font-weight: normal;
    margin-bottom: 0.4rem;
  }

  dl.page5_desc_img dd p {
    color: #6d4423;
  }

  dl.page5_desc_img dd p font {
    color: #f11e1e;
  }

  .page5_img {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    border: solid 3px #FFF;
  }

  .page5_img img {
    width: 100%;
  }

  dl.page5_desc_img2 {
    padding-left: 12%;
    box-sizing: border-box;
  }
</style>
