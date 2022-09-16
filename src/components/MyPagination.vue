<template>
  <div style="text-align: center; margin: 20px">
    <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      :total="total"
      :page-size="pageSize"
      
      @current-change="changePage"
    >
    </el-pagination>
  </div>
  
</template>
<!-- :current-page.sync="currentPage" -->
<script>
export default {
  props: {
    total: {
      type: Number,
      default: 100,
    },
    pageSize: {
      type: Number,
      default: 10,
    }
    // currentPage: {
    //   type: Number,
    //   default: 1,
    // },
  },
  // watch: {
  //   currentPage(val) {
  //     console.log("---val--", val);
  //   },
  // },
  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
  created() {},
};
</script>

<style>
</style>