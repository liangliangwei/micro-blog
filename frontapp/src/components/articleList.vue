<template>
  <div class="content">
    <div class="article-list">
      <div class="article-content" v-for="(item,index) in list" :key="index">
        <p class="p-1" @click="showArticleDetails(item)">{{item.title}}</p>
        <p class="p-2">
          <el-tag size="small" class="time" color="#777">{{item.time}}</el-tag>
          <el-tag size="small" class="whereCreate" effect="dark" type="warning">{{item.whereCreate}}</el-tag>
          <el-tag size="small" class="type" color="#5bc0de">{{item.type}}</el-tag>
        </p>
        <p class="p-3">{{item.content}}</p>
        <p class="p-4">xxx创建于{{item.time}}
           <el-tag size="small" class="browseNum">浏览({{item.browseNum}})</el-tag>
          <el-tag size="small" class="commentNum">评论({{item.commentNum}})</el-tag>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: function() {
        return []; 
      }
    }
  },
  data() {
    return {};
  },
  methods:{
    //展示文章详情
    showArticleDetails(item){
      this.$emit("showArticleDetails",item);
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  .article-list {
    width: 100%;
    .article-content {
      background: #fff;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #e6e6e6;
      border-radius: 4px;
      p {
        margin: 10px;
        padding: 0;
      }
      .p-1 {
        font-size: 24px;
        color: #23527c;
        cursor: pointer;
      }
      .p-2 {
        font-size: 14px;
        .time {
          color: #fff;
        }
        .whereCreate {
          color: #fff;
        }
        .type {
          color: #fff;
        }
        .browseNum {
          color: #fff;
        }
        .commentNum {
          color: #fff;
        }
      }
      .p-3 {
        font-size: 14px;
      }
    }
    .article-content:hover {
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
      border-color: #d6d6d6;
    }
  }
}
</style>