<template>
  <div class="fp-next">
    <img :src="flag" class="g1" alt="next">
    <img :src="flag" class="g2" alt="next">
    <img :src="flag" class="g3" alt="next">
    <img :src="flag" class="g4" alt="next">
  </div>
</template>

<script>
import flag from '@/assets/index_files/flag.png'
export default {
  name: 'GoNext',
  data () {
    return {
      flag: flag
    }
  }
}
</script>

<style scoped>
  .fp-next{
    width: 100%;
    height: 100%;
  }
  .g1 {
    position: absolute;
    left: 0;
    top: 0px;
    opacity: 1;
    -webkit-animation: gogogo 0.5s infinite linear;
    -webkit-animation-delay: 0.4s;
  }
  .g2 {
    position: absolute;
    left: 0;
    top: 10px;
    opacity: 0.8;
    -webkit-animation: gogogo 0.5s infinite linear;
    -webkit-animation-delay: 0.3s;
  }
  .g3 {
    position: absolute;
    left: 0;
    top: 20px;
    opacity: 0.6;
    -webkit-animation: gogogo 0.5s infinite linear;
    -webkit-animation-delay: 0.2s;
  }
  .g4 {
    position: absolute;
    left: 0;
    top: 30px;
    opacity: 0.4;
    -webkit-animation: gogogo 0.5s infinite linear;
    -webkit-animation-delay: 0.1s;
  }
  @-webkit-keyframes gogogo {
    0%{opacity:0;}
    100%{opacity:1;}
  }
</style>
