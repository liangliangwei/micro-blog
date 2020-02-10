<template>
  <section class="content">
    <div class="layout-left"></div>
    <div class="layout-middle">
      <div class="left">
        <div class="follow">
          <!-- 滚动图片链接 -->
          <el-carousel class="carousel" :interval="5000" arrow="always" height="260px">
            <el-carousel-item v-for="item in imgList" :key="item">
              <img class="carousel-img" :src="item" />
            </el-carousel-item>
          </el-carousel>
          <!-- 两个个人比较关注的东西 -->
          <ul>
            <li>
              <a href>
                <span>个人比较关注的东西个人比较关注的东西</span>
                <img src="@/assets/images/daoxiang.png" alt />
              </a>
            </li>
            <li class="second-img">
              <span>个人比较关注的东西</span>
              <img src="@/assets/images/dianqi.png" alt />
            </li>
          </ul>
        </div>
        <articlelist
          :list="articleList"
          class="article-list"
          @showArticleDetails="showArticleDetails"
        ></articlelist>
      </div>
      <div class="right">
        <!-- 个人简介卡片 -->
        <!-- <businessCard></businessCard> -->
         <Calendar
         class="calendar-date"
         style="margin-left: 10px;"
          v-on:choseDay="clickDay"
          v-on:changeMonth="changeDate" ></Calendar>
        <div class="recent-updates-div">
          <recentUpdates></recentUpdates>
          <topRanking></topRanking>
        </div>
      </div>
    </div>
    <div class="layout-right"></div>
  </section>
</template>
<script>
import daoxiang from "@/assets/images/daoxiang.png";
import dianqi from "@/assets/images/dianqi.png";
import geipaishui from "@/assets/images/geipaishui.png";
import guandao from "@/assets/images/guandao.png";
import jianzhu from "@/assets/images/jianzhu.png";
import articlelist from "@/components/articleList";
import businessCard from "@/components/businessCard";
import recentUpdates from "@/components/recentUpdates";
import topRanking from "@/components/topRanking";
import { getData, postData } from "@/plugins/axios";
import Calendar from 'vue-calendar-component';
export default {
  data() {
    return {
      imgList: [daoxiang, dianqi, geipaishui, guandao, jianzhu], //循环的图片
      value: 3.1, //分值
      articleList: [] //文章数组
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    articlelist,
    businessCard,
    recentUpdates,
    topRanking,
    Calendar
  },
  created() {
    //查询文章数据
    this.queryArticleData();
  },
  methods: {
    //查询文章数据
    queryArticleData() {
      //
      getData("/api/drawingList").then(data => {
        if (data) {
          this.articleList = data.data;
        }
      });
    },
    //展示文章详情
    showArticleDetails(item) {
      this.$router.replace("/article/articleDetails/" + item.id);
    }
  },
  mounted() {},
  watch: {},
  beforeRouteLeave(to, from, next) {
    next();
  }
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
  .layout-left {
    flex: 10%;
  }
  .layout-middle {
    flex: 80%;
    display: flex;
    .left {
      width: 80%;
      height: 100%;
      .follow {
        display: flex;
        .carousel {
          height: 260px;
          width: 65%;
          border-radius: 10px;
          cursor: pointer;
          .carousel-img {
            height: 100%;
            width: 100%;
          }
          .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
          }

          .el-carousel__item:nth-child(2n + 1) {
            background-color: #d3dce6;
          }
        }
        ul {
          height: 260px;
          flex: 1;
          margin-left: 10px;
          .second-img {
            margin-top: 10px;
          }
          li {
            height: 125px;
            cursor: pointer;
            overflow: hidden;
            border-radius: 5px;
            span {
              position: absolute;
              margin-left: 40px;
              margin-top: 30px;
              color: #fff;
              width: 10%;
              z-index: 1;
            }
            img {
              height: 100%;
              width: 100%;
              transition: all 0.6s;
            }
            img:hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }
    .right {
      width: 20%;
      height: 100%;
      .recent-updates-div {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
  .layout-right {
    flex: 10%;
  }
  /deep/.el-card__body {
    padding: 0;
    height: 100%;
  }
}
</style>