<template>
  <section class="content">
    <div class="layout-left"></div>
    <div class="layout-middle">
      <div class="left">
        <router-link class="main" tag="p" to="/">首页</router-link>
        <p class="title">此网站为本人日常的学习笔记，便于日后方便查看，希望对您有所帮助-_-</p>
        <article class="article-details"></article>
      </div>
      <div class="right">
        <!-- 个人简介卡片 -->
        <businessCard></businessCard>
        <div class="recent-updates-div">
          <recentUpdates></recentUpdates>
          <topRanking></topRanking>
        </div>
      </div>
    </div>
    <div class="layout-right"></div>
  </section>
</template>
<script  lang="ts">
import businessCard from "@/components/businessCard.vue";
import recentUpdates from "@/components/recentUpdates.vue";
import topRanking from "@/components/topRanking.vue";
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapMutations } from "vuex";
//父组件传过来的
const AppProps = Vue.extend({
  props: {
    propMessage: String
  }
});
@Component({
  components: {
    businessCard,
    recentUpdates,
    topRanking
  },
  // Vuex's component binding helper can use here
  computed: mapState(["count"]),
  methods: mapMutations(["increment"])
})
export default class articleDetails extends AppProps {
  contentId: String = "";
  //注释参照类型
  //   $refs!: {
  //     businessCard: businessCard;
  //   };
  //   count!: number;
  //   increment!: () => void;

  // computed:计算属性改为前面加get关键字
  get computedMsg() {
    return "";
  }
  //初始化时调用
  created() {
    this.contentId = "";
  }
  //dom加载结束调用
  mouted() {}
  // method：方法就不用再写在methods里了，直接以类方法形式书写
  test(str: String) {
    console.log(str);
  }
}
</script>
<style scoped lang="less">
.content {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
  .layout-left {
    flex: 10%;
  }
  .layout-middle {
    flex: 80%;
    display: flex;
    .left {
      width: 80%;
      height: 100%;
      p {
        font-size: 30px;
        color: #337ab7;
      }
      .main {
        cursor: pointer;
        margin-top: 0px;
        margin-bottom: 20px;
      }
      .main:hover {
        color: #2c6597;
      }
      .title {
        font-size: 21px;
        color: #333;
        padding: 0;
        margin: 0;
      }
      .article-details {
        background: #fff;
        padding: 15px;
        margin-bottom: 20px;
        border: 1px solid #e6e6e6;
        border-radius: 4px;
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