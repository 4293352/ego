<template>
  <div class="goods">
    <div class="header">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">添加</el-button>
    </div>

    <div class="wrapper">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="商品ID" width="100"></el-table-column>
        <el-table-column
          prop="title"
          label="商品名称"
          width="100"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="price"
          label="价格"
          width="100"
        ></el-table-column>
        <el-table-column prop="num" label="数量" width="100"></el-table-column>
        <el-table-column
          prop="category"
          label="类目"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="image"
          label="图片"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="sellPoint"
          label="卖点"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="descs"
          label="描述"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column label="地址" width="150">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </el-table-column>
      </el-table>
    </div>

    <MyPagination :total="total" :pageSize="pageSize" @changePage='changePage'/>
  </div>
</template>

<script>
import MyPagination from "../../components/MyPagination.vue";
export default {
  components: {
    MyPagination,
  },
  data() {
    return {
      input: "",
      tableData: [],
      total: 10,
      pageSize: 1,
    };
  },
  methods: {
    //分页页码
    changePage(num){
      this.http(num);
    },
    //编辑操作
    handleEdit() {},
    //删除操作
    handleDelete() {},
    //商品列表的获取
    http(page) {
      this.$api
      .getGoodsList({
        page,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          this.tableData = res.data.data; //数据列表
          this.total = res.data.total;
          this.pageSize = res.data.pageSize;
        }
      });
    }
  },
  //生命周期函数
  created() {
    this.http(1);

    //未封装
    // this.$api
    //   .getGoodsList({
    //     page:1
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     if (res.data.status === 200) {
    //       this.tableData = res.data.data; //数据列表
    //       this.total = res.data.total;
    //       this.pageSize = res.data.pageSize;
    //     }
    //   });
  },
};
</script>

<style lang='less' scoped>
.goods {
  margin: 10px;
}
.position {
  // background: #fff;
  padding: 10px;
  // border: 1px solid #eee;
  margin-bottom: 10px;
}
.header {
  display: flex;
  background: #fff;
  padding: 10px;
  border: 1px solid #eee;
  button {
    margin-left: 20px;
  }
  .el-form-item {
    margin-bottom: 0;
  }
}
.wrapper {
  margin: 10px 0;
}
</style>