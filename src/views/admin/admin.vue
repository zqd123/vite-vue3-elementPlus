<script setup lang="ts">
import { ref } from "vue";
const tableData = ref([]);
</script>
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :border="true"
      max-height="80vh"
    >
      <el-table-column type="index" label="序号" width="80" />
      <el-table-column prop="id" label="id" />
      <el-table-column prop="name" label="姓名" width="150" />
      <el-table-column prop="question1" label="年龄" width="150" />
    </el-table>
  </div>
</template>
