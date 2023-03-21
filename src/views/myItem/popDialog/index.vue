<template>
  <div>
      <div class="father">
          <div v-if="numIndex % 2 !== 0">
            <div class="circle">
                <img class="smallAvatar" src="/images/smallAvatar.jpeg" alt="">
            </div>
            <!-- <img src="/images/dialog.jpg" style="width:100px;height:70px;float:left;border-radius:50%;"> -->
            <div class="dialogRow" :style=" `--width:${width}` ">
                <span class="content">{{content}}</span>
            </div>
          </div>


          <div v-else>
                <div class="circle1">
                    <img class="smallAvatar" src="/images/smallAvatar.jpeg" alt="">
                </div>
                <!-- <img src="/images/dialog.jpg" style="width:100px;height:70px;float:left;border-radius:50%;"> -->
                <div class="dialogRow1" :style=" `--width:${width}` ">
                    <span class="content1">{{content}}</span>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['content','numIndex']
    ,mounted() {
        // 隐式类型转换，直接就可以转换成为字符串
        this.width = this.content.length*16 + 60 + 'px'
        console.log(this.width1,'who');
    },
    data(){
        return {
            width:'',
        }
    }
}
</script>

<style>
    

    .father{
        position: relative;
        height: 60px;
    }
    .circle{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        /* background-color: pink; */
        float: left;
        margin-top: 12px;
    }
    .content{
        position: absolute;
        left: 65px;
        top: 23px;
    }
    .smallAvatar{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .dialogRow{
        /* width: 100px; */
        width: var(--width);
        overflow: hidden;
        height: 40px;
        background-color: aliceblue;
        float: left;
        margin-top: 11px;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
    }



    .circle1{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        /* background-color: pink; */
        float: right;
        margin-top: 12px;
    }
    .dialogRow1{
        /* width: 100px; */
        width: var(--width);
        height: 40px;
        background-color: aliceblue;
        float: right;
        margin-top: 11px;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
    }
    .content1{
        position: absolute;
        right: 65px;
        top: 23px;
    }
</style>