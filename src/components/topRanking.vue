<template>
  <div class="top-ranking-div">
    <el-card class="box-card" shadow="hover">
      <p>热门排行</p>
      <ul>
        <li>
          <span class="label label-1">1</span>
          <span class="title" title="Python2爬虫学习系列教程">Python2爬虫学习系列教程</span>
          <!-- <el-rate
                  class="rate"
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
          ></el-rate>-->
        </li>
        <li>
          <span class="label label-2">2</span>
          <span class="title" title="Python2爬虫学习系列教程">Python2爬虫学习系列教程Python2爬虫学习系列教程</span>
        </li>
        <li>
          <span class="label label-3">3</span>
          <span class="title" title="Python2爬虫学习系列教程">Python2爬虫学习系列教程</span>
        </li>
        <li>
          <span class="label label-4">4</span>
          <span class="title" title="Python2爬虫学习系列教程">Python2爬虫学习系列教程</span>
        </li>
        <li>
          <span class="label label-5">5</span>
          <span class="title" title="Python2爬虫学习系列教程">Python2爬虫学习系列教程</span>
        </li>
      </ul>
    </el-card>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
.top-ranking-div {
  .box-card {
    height: 100%;
    margin-left: 10px;
    margin-top: 10px;
    p {
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 0px;
      padding-bottom: 10px;
      color: #da5555;
      font-weight: bold;
      border-bottom: 1px solid #da5555;
    }
    ul {
      margin: 0 20px 10px;
      padding: 15px 0 10px;
      list-style: none;
      overflow: hidden;
      li {
        clear: both;
        margin-bottom: 12px;
        height: 20px;
        cursor: pointer;
        span {
          margin-right: 8px;
          padding: 2px 7px;
          top: -5px;
        }
        .label {
          position: relative;
          display: inline-block;
          padding: 4px 6px 3px;
          line-height: 14px;
          color: #fff;
          vertical-align: baseline;
          white-space: nowrap;
          background-color: #999;
        }
        .label-1 {
          background-color: #fd8c84;
        }
        .label-2 {
          background-color: #6fc299;
        }
        .label-3 {
          background-color: #81c1f2;
        }
        .title {
          color: #00a67c;
          width: 80%;
          display: inline-block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .title:hover {
          color: darkorange;
        }
        .rate {
          display: inline-block;
          float: right;
        }
      }
    }
  }
}
</style>