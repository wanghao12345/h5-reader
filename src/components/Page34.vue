<template>
  <div class="page page33 swiper-lazy" :data-background="bg">
    <div class="page33-c">
      <dl class="page34-list">
        <dt>
          <img class="swiper-lazy" style="line-height:3rem;" :data-src="img1"/>
        </dt>
        <dd>
          <p>有良好的自我意识，有自信心：<font>强 </font></p>
          <p>能与他人互助、合作、分享：<font>一般 </font></p>
          <p>遵守规则：<font>遵守 </font></p>
          <p>爱集体：<font>爱幼儿园、爱集体、爱同伴、爱老师</font></p><p> 爱祖国：<font>爱祖国、爱国旗</font></p>
        </dd>
        <br class="clear">
      </dl>
      <dl class="page34-list">
        <dt>
          <img class="swiper-lazy" style="line-height:3rem;" :data-src="img2"/>
        </dt>
        <dd>
          <p>对周围事物的探索兴趣：<font>很感兴趣</font></p>
          <p>动手动脑能力：<font>一般</font></p>
          <p>对数、量、形、时间、空间概念的认知能力：<font>一般 </font></p>
          <p>爱自然、爱护动、植物：<font>爱护</font></p>
        </dd>
        <br class="clear">
      </dl>
      <dl class="page34-list">
        <dt>
          <img class="swiper-lazy" style="line-height:3rem;" :data-src="img3"/>
        </dt>
        <dd>
          <p>热爱美好的事物：<font>热爱</font></p>
          <p>热爱<font>能 </font></p>
          <p>绘画能力：<font>绘画能力强</font></p>
          <p>音乐舞蹈能力：<font>音乐舞蹈还不错</font></p>
          <p>手工能力：<font></font></p>
        </dd>
      </dl>
        <dl class="page34-list">
          <dt>
            <img class="swiper-lazy" style="line-height:3rem;" :data-src="img4"/>
          </dt>
          <dd>
            <div style="height: 14rem; width: 16.5rem; -webkit-tap-highlight-color: transparent; user-select: none; position: relative; background-color: transparent;" id="chartTest" _echarts_instance_="ec_1569240356647">
              <div style="position: relative; overflow: hidden; width: 232px; height: 200px;">
                <canvas width="232" height="200" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 232px; height: 200px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas>
              </div>
              <div>
              </div>
            </div>
          </dd>
          <br class="clear">
        </dl>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/index_files/34_tc1.png'
import img2 from '@/assets/index_files/34_tc2.png'
import img3 from '@/assets/index_files/34_tc3.png'
import img4 from '@/assets/index_files/34_tc4.png'
import titleBg from '@/assets/img/page33-t.png'
import bg from '@/assets/img/page10-bg.png'
export default {
  name: 'Page34',
  data () {
    return {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
      title_bg: titleBg,
      bg: bg
    }
  },
  mounted () {
    const myChart = this.$echarts.init(document.getElementById('chartTest'))
    const option = {
      tooltip: {
        trigger: 'axis'
      },
      radar: {
        indicator: [
          {name: '健康', max: 5},
          {name: '社会', max: 5},
          {name: '艺术', max: 5},
          {name: '科学', max: 5},
          {name: '语言', max: 5}
        ],
        center: ['50%', '50%'],
        radius: '68%',
        startAngle: 90,
        splitNumber: 5,
        name: {
          formatter: '{value}',
          textStyle: {
            fontSize: 5,
            color: '#59534C'
          }
        },
        splitArea: {
          areaStyle: {
            color: ['rgba(114, 172, 209, 0.5)',
              'rgba(114, 172, 209, 0.6)', 'rgba(114, 172, 209, 0.8)',
              'rgba(114, 172, 209, 0.9)', 'rgba(114, 172, 209, 1)']
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.8)'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.8)'
          }
        }
      },
      series: [{
        type: 'radar',
        tooltip: {
          trigger: 'item'
        },
        itemStyle: {
          normal: {
            color: '#CC9B52'
          }
        },
        data: [
          {
            value: [3.8333333333333, 4.0625, 3.8333333333333, 4.25, 4],
            name: '综合评价'
          }
        ]
      }]
    }
    myChart.setOption(option)
  }
}
</script>

<style scoped>
.page{
  background: #f5e6cf;
  background-size: 100% 100%;
}
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
  box-sizing: border-box;
  padding-top: 2rem;
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
  margin: 0rem auto;
  margin-bottom: 3rem;
}
dl.page34-list dd p{
  text-indent: 0em;
  font-size: 0.8rem;
}
dl.page34-list dd p font{
  color: red;
}

</style>
