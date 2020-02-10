<template>
  <header class="content">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#1C2327"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <div class="user-title"><span>   ❤爱的人正在路上❤</span></div>
      <el-menu-item index="/mian">博客首页</el-menu-item>
      <el-menu-item index="/personal/notes">个人笔记</el-menu-item>
      <el-submenu index="/technology">
        <template slot="title">技术杂谈</template>
        <el-menu-item index="/technology/vueSpecial">vue</el-menu-item>
        <el-menu-item index="/technology/nodejsSpecial">nodejs</el-menu-item>
        <el-menu-item index="/technology/pythonSpecial">Python</el-menu-item>
      </el-submenu>
      <el-menu-item index="/aboutMe">关于我</el-menu-item>
      <el-menu-item index="/leaveWord">留言</el-menu-item>
      <div class="user-login"><a href="">登录</a>/<a href="">注册</a></div>
    </el-menu>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/mian"
    };
  },
  created() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log("切换标签页");
    }
  },
  mounted() {},
  watch: {}
};
</script>

<style lang="less" scoped>
.content {
  height: 100%;
  width: 100%;
  .user-title {
    margin-right: 100px;
    height: 60px;
    line-height: 60px;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    span{
      font-size: 15px;
      color: cadetblue;
    }
  }
  .user-login{
    margin-left: 240px;
    height: 60px;
    line-height: 60px;
    color: #fff;
    font-size: 13px;
    font-weight: bold;
    a{

    }
  }
  ul.el-menu-demo.el-menu--horizontal.el-menu {
    display: flex;
    justify-content: center;
  }
}
</style>