<template>
  <div>
      <!-- 我的直播界面 -->
      <div>
          <div class="father">
              <div>
                <div class="leftTop-width"></div>
                <div class="leftTop-height"></div>
              </div>

              <div>
                <div class="rightTop-width"></div>
                <div class="rightTop-height"></div>
              </div>

              <div>
                <div class="leftBottom-width"></div>
                <div class="leftBottom-height"></div>
              </div>

              <div>
                <div class="rightBottom-width"></div>
                <div class="rightBottom-height"></div>
              </div>

              <div class="panel">
                  <div class="userAvatar">
                      <img class="imgStyle" src="https://img1.baidu.com/it/u=2558323927,451003297&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400" alt="">
                  </div>
                  <div class="banner">
                      <div>
                        <div class="el-icon-s-custom"></div>
                        <div class="el-icon-camera-solid center"></div>
                        <div class="el-icon-s-operation"></div>
                      </div>

                      <div class="bannerChild">
                        <div class="el-icon-microphone"></div>
                        <div class="el-icon-chat-round center"></div>
                        <div class="el-icon-link"></div>
                      </div>
                  </div>
              </div>

          </div>



      </div>

      <div>
          <el-card>
              <div class="banner-content">
                  <el-button type="primary">开始直播</el-button>
                  <el-button type="danger">结束直播</el-button>
              </div>
          </el-card>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .father{
        /* 子绝父亲相 */
        position:relative ;
        height: 500px;
        /* 溢出浮动 */
        overflow: hidden;
    }
    .leftTop-width{
        background-color: green;
        width: 100px;
        height: 10px;
        position:absolute;
        left: 0;
        top: 0;
    }
    .leftTop-height{
        background-color: green;
        width: 10px;
        height: 90px;
        position:absolute;
        left: 0;
        top: 0;
    }
    .rightTop-width{
        background-color: green;
        width: 100px;
        height: 10px;
        position:absolute;
        right: 0;
        top: 0;
    }
    .rightTop-height{
        background-color: green;
        width: 10px;
        height: 90px;
        position:absolute;
        right: 0;
        top: 0;
    }
    .leftBottom-width{
        background-color: green;
        width: 100px;
        height: 10px;
        position:absolute;
        left: 0;
        bottom: 0;
    }
    .leftBottom-height{
        background-color: green;
        width: 10px;
        height: 90px;
        position:absolute;
        left: 0;
        bottom: 0;
    }
    .rightBottom-width{
        background-color: green;
        width: 100px;
        height: 10px;
        position:absolute;
        right: 0;
        bottom: 0;
    }
    .rightBottom-height{
        background-color: green;
        width: 10px;
        height: 90px;
        position:absolute;
        right: 0;
        bottom: 0;
    }
    .panel{
        width: 95%;
        height: 450px;
        background-color: #ccc;
        margin: auto;
        margin-top: 25px;
        overflow: hidden;
        position: relative;
    }
    .userAvatar{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin: auto;
        margin-top: 130px;
        /* background-color: pink; */
    }
    .imgStyle{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 4px solid green;
    }
    .banner{
        position: absolute;
        width: 100%;
        height: 20px;
        left: 20px;
        top: 20px;
    }
    .banner-content{
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
    }
    .center{
        margin: 10px;
    }
    .bannerChild{
        position: absolute;
        height: 20px;
        right: 50px;
        top: 0px;
    }
</style>