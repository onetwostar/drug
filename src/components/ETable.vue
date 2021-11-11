<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      ref="commontable"
      :header-cell-style="{ padding: '0', background: '#192354' }"
      :cell-style="{ padding: '3px', background: '#13132B' }"
      v-loading="loading"
      element-loading-text="loading..."
      @sort-change="sortChange"
    >
      <!--表格的selection属性，表示是否使用选择框-->
      <el-table-column
        v-if="selection"
        type="selection"
        width="50"
      ></el-table-column>
      <el-table-column
        v-for="(item, index) in tableColumn"
        sortable="custom"
        align="center"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :min-width="item.width > 250 ? 250 : item.width"
        :show-overflow-tooltip="true"
      >
        <template slot-scope="scope">
          <!--表格的editType属性等于editRowInTable时，说明在行内进行编辑-->
          <template v-if="editType == 'editRowInTable'">
            <!--列的edit属性标识该列是否可编辑，同时type标识编辑框是input还是select-->

            <el-select
              style="width: 90%"
              v-if="
                item.edit == true && item.form == 'select' && scope.row.showEdit
              "
              v-model="scope.row[scope.column.property]"
            >
              <el-option
                v-for="option in item.formOptions"
                :label="option.name"
                :value="option.name"
                :key="option.id"
              ></el-option>
            </el-select>
            <el-input
              v-else-if="item.edit == true && scope.row.showEdit"
              v-model="scope.row[scope.column.property]"
            ></el-input>
            <span v-if="item.edit != true || !scope.row.showEdit">{{
              scope.row[scope.column.property]
            }}</span>
          </template>
          <template v-else>
            <span v-if="item.flow">{{
              flow(scope.row[scope.column.property])
            }}</span>
            <span v-else>{{
              numAutoComple(scope.row[scope.column.property])
            }}</span>
          </template>
        </template>
      </el-table-column>
      <el-table-column v-if="edit" label="操作" width="60" fixed="right">
        <template slot-scope="scope">
          <template v-if="editType == 'editRowInTable'">
            <el-button @click="editRow(scope.row)" type="text" size="mini">{{
              scope.row.showEdit ? "保存" : "修改"
            }}</el-button>
          </template>
          <template v-else>
            <el-button @click="editRow(scope.row)" type="text" size="mini"
              >修改</el-button
            >
          </template>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-show="total > 0"
      class="page_class"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="pageNo"
      :page-sizes="[15, 30, 50, 100]"
      :page-size="15"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      pageNo: 1,
      pageSize: 15,
      total: 0,
      tableData: []
    };
  },
  props: {
    edit: Boolean,
    tableColumn: {
      type: Array
    },
    tableUrl: {
      type: String
    },
    formParam: {
      type: Object
    },
    editType: String,
    selection: Boolean,
    noInit: Boolean
  },
  mounted() {
    if (!this.noInit) this.queryByParams();
  },
  methods: {
    numAutoComple(value) {
      if (typeof (value) == 'string' && value.indexOf(".") == 0)
        return 0 + value;
      return value;
    },
    query(param) {
      this.formParam = param;
      this.handleCurrentChange(1);
    },
    sortChange({ prop, order }) {
      this.formParam.orderField = prop;
      this.formParam.orderType = order ? order : "";
      this.handleCurrentChange(1);
    },
    queryByParams() {
      this.formParam.pageNo = this.pageNo;
      this.formParam.pageSize = this.pageSize;
      this.loading = true;
      this.$refs.commontable.bodyWrapper.scrollLeft = 0;
      this.$http
        .post(this.tableUrl, this.formParam)
        .then(res => {
          let data = res.data;
          if (data.success) {
            this.tableData = data.data;
            this.total = data.total;
          } else {
            console.log(data.error);
          }
        })
        .catch(e => console.log(e))
        .finally(() => (this.loading = false));
    },
    handleSizeChange: function (pageSize) {
      this.pageNo = 1;
      this.pageSize = pageSize;
      this.queryByParams();
    },
    handleCurrentChange: function (pageNo) {
      this.pageNo = pageNo;
      this.queryByParams();
    },
    editRow(row) {
      if (this.editType == "editRowInTable") {
        if (row.showEdit) {
          this.$parent.editRow(this.copyToNew(row));
        }
        row.showEdit = !row.showEdit;
      } else {
        this.$parent.editRow(this.copyToNew(row));
      }
    },
    copyToNew: function (object) {
      if (object == null || object == undefined || object == "") return object;
      const newObject = {};
      for (const o in object) {
        if (typeof object[o] == "object") {
          newObject[o] = this.copyToNew(object[o]);
        } else {
          newObject[o] = object[o];
        }
      }
      return newObject;
    },
    round(value) {
      return value.toFixed(2);
    },
    flow(value) {
      if (value) {
        if (value > 1024 * 1024 * 1024)
          return this.round(value / (1024 * 1024 * 1024)) + "Gbps";
        else if (value > 1024 * 1024)
          return this.round(value / (1024 * 1024)) + "Mbps";
        else if (value > 1024)
          return this.round(value / 1024) + "Kbps";
        else
          return this.round(value) + "bps";
      }
      return "";
    }
  }
};
</script>
<style scoped>
.page_class {
  margin: 10px;
  float: right;
}
</style>
