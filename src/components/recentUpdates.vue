<template>
  <div class="recent-updates-div">
    <el-card class="recent-updates" shadow="hover">
      <p>最近更新</p>
      <ul>
        <li>
          <el-card class="recent-updates-card" shadow="hover">
            <span>1、dasdsd</span>
          </el-card>
        </li>
        <li>
          <el-card class="recent-updates-card" shadow="hover">
            <span>2、dasdsd</span>
          </el-card>
        </li>
        <li>
          <el-card class="recent-updates-card" shadow="hover">
            <span>3、dasdsd</span>
          </el-card>
        </li>
        <li>
          <el-card class="recent-updates-card" shadow="hover">
            <span>4、dasdsd</span>
          </el-card>
        </li>
      </ul>
    </el-card>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.recent-updates-div {
  .recent-updates {
    margin-left: 10px;
    height: 226px;
    p {
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 0px;
      padding-bottom: 10px;
      color: #a7a2a2;
      font-weight: bold;
      border-bottom: 1px solid #a7a2a2;
    }
    ul {
      margin: 0 20px 10px;
      list-style: none;
      overflow: hidden;
      height: 100%;
      li {
        clear: both;
        margin-top: 8px;
        height: 30px;
        cursor: pointer;
        .recent-updates-card {
          height: 30px;
          line-height: 30px;
          padding-left: 10px;
          background: #f2f2f2;
          span {
            font-size: 14px;
            color: #a7a2a2;
          }
        }
      }
    }
  }
}
</style>