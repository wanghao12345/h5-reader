<template>
  <div class="page page4 swiper-lazy" :data-background="bg">
    <div class="page4_title">
      <h2 class="swiper-lazy" :data-background="title_bg">宝贝档案</h2>
    </div>
    <div class="page3_top">
      <img class="swiper-lazy" :data-src="img3"/>
    </div>
    <div class="page4_c swiper-lazy">
      <table cellpadding="0" cellspacing="0" class="page4_c_table">
        <tbody>
        <tr>
          <td style="width:30%"></td>
          <td rowspan="8" style="border:solid 3px #FFF;">
            <img class="swiper-lazy" :data-src="img1"/>
          </td>
          <td rowspan="8" style="width:5%"></td>
          <td style="width:34%">我的姓名：蒋恬</td>
        </tr>
        <tr>
          <td></td>
          <td>我的小名：红红</td>
        </tr>
        <tr>
          <td></td>
          <td>性别：女</td>
        </tr>
        <tr>
          <td></td>
          <td>我的生日：2015-09-22</td>
        </tr>
        <tr>
          <td></td>
          <td>我的身高：122cm</td>
        </tr>
        <tr>
          <td></td>
          <td>我的体重：23 kg</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="page4_bottom">
      <img class="swiper-lazy" :data-src="img2"/>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/index_files/5d887c7e7de54.jpg'
import img2 from '@/assets/index_files/5d88894107aa6.jpg'
import img3 from '@/assets/index_files/page3-top.png'
import bg from '@/assets/img/page3-bg.png'
import titleBg from '@/assets/img/page3-title.png'

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
  .page4_bottom img {
    border: solid 3px #FFF;
  }

  .page4 {
    width: 100%;
    height: 100%;
    background: #f5e6cf;
    background-size: 100% 100%;
    padding-top: 5%;
  }

  .page4_bottom {
    width: 85%;
    margin-left: auto;
    box-sizing: border-box;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
    padding: 0.65rem 1.2rem 15.5% 1.8rem;
    margin-right: auto;
  }

  .page4_bottom img, table.page4_c_table tr td img {
    width: 100%;
  }

  .page4_c {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    background:left top;
  }

  table.page4_c_table tr td {
    font-size: 0.6rem;
  }
</style>
