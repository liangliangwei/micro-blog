<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background: #dde0e6;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-menu--horizontal .el-menu--popup-bottom-start {
  margin-top: 0px;
}
ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}
/* 不可复制 */
* {
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早期浏览器*/
  -moz-user-select: none; /*火狐*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
}

*:not(input, textarea) {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
}
/* 没有下划线 */
a {
  text-decoration: none;
  color: #fff;
}
a:hover {
  text-decoration: none;
  color: darkorange;
}
/*IE滚动条颜色设置*/
body {
  scrollbar-arrow-color: #f2f2f3; /*上下箭头*/
  scrollbar-track-color: #1589ce; /*底层背景色*/
  scrollbar-face-color: #27aeff; /*滚动条前景色*/
  scrollbar-shadow-color: #1589ce; /*滚动条边线色*/
}
/*chrome滚动条颜色设置*/
body::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: transparent;
} /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
body::-webkit-scrollbar-track {
  background-color: #ccc;
  -webkit-box-shadow: inset 0 0 6px #dde0e6;
} /*定义滚动条轨道 内阴影+圆角*/
body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #555;
  -webkit-box-shadow: inset 0 0 6px rgba(29, 23, 23, 0.3);
} /*定义滑块 内阴影+圆角*/
div:focus {
  outline: none;
}
</style>
