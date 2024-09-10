<script lang="ts" setup>
import { reactive, ref } from "vue";
import router from "../../router";
import type { FormInstance } from "element-plus";
const labelPosition = ref("right");
const formLabelAlign = reactive({
  studyName: "",
});
const submitForm = async (formEl: FormInstance | undefined) => {
  router.push({
    name: "admin",
    params: { globDirection: "row", type: "type1" },
  });
};
</script>
<template>
  <div class="w-full flex justify-center items-center">
    <el-card
      class="w-96 h-72 flex justify-center items-center"
      body-class="flex"
      shadow="always"
      body-style="display: flex; flex-direction:column; justify-content: center; align-items: center"
    >
      <el-icon color="#409EFC" :size="50" class="mb-8"><Opportunity /></el-icon>
      <el-form
        :label-position="labelPosition"
        :model="formLabelAlign"
        @submit.prevent
        class="flex flex-col justify-center items-center"
      >
        <el-form-item label="姓名" prop="studyName">
          <el-input v-model="formLabelAlign.studyName" />
        </el-form-item>
        <el-button type="primary" size="default" @click="submitForm"
          ><el-icon style="margin-right: 8px"><CaretRight /></el-icon>
          确认</el-button
        >
      </el-form>
    </el-card>
  </div>
</template>
