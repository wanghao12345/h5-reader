<template>
  <div class="page page33 swiper-lazy" :data-background="bg">
    <div class="page22-ct swiper-lazy" :data-background="title_bg">
      <h3>幼儿发展报告表</h3>
    </div>
    <div class="page33-c">
      <p>这一年来，蒋恬小朋友愉快地度过了幼儿园小班生活，各个方面都有很大的发展与进步。现向家长报告如下：</p>
      <dl class="page34-list">
        <dt>
          <img class="swiper-lazy" style="line-height:3rem;" :data-src="img1"/>
        </dt>
        <dd>
          <p>身高：<font>122</font>cm，体重：<font>23</font>千克</p>
          <p>血色素：<font>132</font></p>
        </dd>
        <br class="clear">
      </dl>
      <dl class="page34-list">
        <dt>
          <img class="swiper-lazy" style="line-height:3rem;" :data-src="img2"/>
        </dt>
        <dd>
          <p> 情绪：<font>非常开心和稳定</font>，卫生习惯：<font>特别爱讲卫生</font></p>
          <p>体育活动：<font>爱好</font></p>
        </dd>
        <br class="clear">
      </dl>
      <dl class="page34-list">
        <dt>
          <img class="swiper-lazy" style="line-height:3rem;" :data-src="img3"/>
        </dt>
        <dd>
          <p>
            与人交谈的态度：<font>乐意</font>
          </p>
          <p>语言能力：<font>能够理解他人的话语，语言理解能力强</font>,语言表达能力：<font>表达能力非常好</font></p>
          <p>倾听对方讲话：<font>能够安静倾听一段时间，但会走神</font>听故事：<font>喜欢听故事</font></p>
          <p>讲故事：<font>不太喜欢把故事讲给别人</font>，看图书：<font>偶尔看一点书</font></p>
          <p>说普通话：<font>一直说普通话，很标准</font></p>
        </dd>
        <br class="clear">
      </dl>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/index_files/33_tc1.png'
import img2 from '@/assets/index_files/33_tc2.png'
import img3 from '@/assets/index_files/33_tc3.png'
import titleBg from '@/assets/img/page33-t.png'
import bg from '@/assets/img/page35.jpg'
export default {
  name: 'Page33',
  data () {
    return {
      img1: img1,
      img2: img2,
      img3: img3,
      title_bg: titleBg,
      bg: bg
    }
  }
}
</script>

<style scoped>
.page22-ct{
  background-position: left center;
  background-repeat: no-repeat;
  padding-left: 20%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 4rem;
  line-height: 3.2rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-size: 50% 100%;
}
.page33-c {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
}
.page33-c p{
  font-size: 1rem;
  line-height: 1.2rem;
  text-indent: 2em;
  color: #566b68;
  line-height: 1.5em;
}
dl.page34-list dt {
  width: 22%;
  padding: 0.6rem 2% 0.6rem 2%;
  box-sizing: border-box;
  height: 4rem;
  float: left;
  display: inline;
  background-size: 100% 100%;
}
dl.page34-list dd {
  width: 70%;
  padding-left: 7%;
  height: auto;
  float: left;
  display: inline;
}
dl.page34-list {
  width: 95%;
  height: 4rem;
  display: block;
  margin: 0.5rem auto;
}
dl.page34-list dd p{
  text-indent: 0em;
  font-size: 0.8rem;
}
dl.page34-list dd p font{
  color: red;
}

</style>
