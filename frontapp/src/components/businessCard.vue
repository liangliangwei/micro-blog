<template>
  <div class="user-card-div">
    <el-card class="card-user" shadow="hover">
      <span>我的名片</span>
      <p>网名：没有灵魂的蹦迪选手</p>
      <p>职业：前端开发工程师</p>
      <p>现居：北京 海淀区</p>
      <p>邮箱：xxxxxxxxxxxxxx</p>
    </el-card>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.user-card-div {
  .card-user {
    height: 260px;
    margin-left: 10px;
    background: url("~@/assets/images/main/bg.png") no-repeat top right
      rgba(42, 42, 42, 1);
    color: #fff;
    border-radius: 5px;
    span {
      color: #d9e8f9;
      margin-left: 10px;
      display: block;
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
    }
    p {
      margin-left: 15px;
    }
  }
}
</style>