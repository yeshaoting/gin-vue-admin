<template>
    <div>
        <div class="gva-form-box">
            <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
            <el-form-item label="命名空间:" prop="namespace">
                <el-input v-model="formData.namespace" :clearable="true"  placeholder="请输入命名空间" />
            </el-form-item>
            <el-form-item label="配置键:" prop="key">
                <el-input v-model="formData.key" :clearable="true"  placeholder="请输入配置键" />
            </el-form-item>
            <el-form-item label="配置内容:" prop="value">
                // 此字段为json结构，可以前端自行控制展示和数据绑定模式 需绑定json的key为 formData.value 后端会按照json的类型进行存取
                {{ formData.value }}
            </el-form-item>
            <el-form-item label="状态:" prop="status">
                <el-select v-model="formData.status" placeholder="请选择状态" style="width:100%" :clearable="true" >
                <el-option v-for="(item,key) in statusOptions" :key="key" :label="item.label" :value="item.value" />
            </el-select>
        </el-form-item>
        <el-form-item label="创建者:" prop="createdBy">
            <el-input v-model.number="formData.createdBy" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="更新者:" prop="updatedBy">
            <el-input v-model.number="formData.updatedBy" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="删除者:" prop="deletedBy">
            <el-input v-model.number="formData.deletedBy" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="save">保存</el-button>
        <el-button type="primary" @click="back">返回</el-button>
</el-form-item>
</el-form>
</div>
</div>
</template>

<script setup>
    import {
    createConfig,
    updateConfig,
    findConfig
} from '@/api/biz/config'

    defineOptions({
    name: 'ConfigForm'
})

    // 自动获取字典
    import { getDictFunc } from '@/utils/format'
    import { useRoute, useRouter } from "vue-router"
    import { ElMessage } from 'element-plus'
    import { ref, reactive } from 'vue'


    const route = useRoute()
    const router = useRouter()

    const type = ref('')
    const statusOptions = ref([])
    const formData = ref({
    namespace: '',
    key: '',
    value: {},
    status: '',
    createdBy: undefined,
    updatedBy: undefined,
    deletedBy: undefined,
})
    // 验证规则
    const rule = reactive({
    namespace : [{
    required: true,
    message: '',
    trigger: ['input','blur'],
}],
    key : [{
    required: true,
    message: '',
    trigger: ['input','blur'],
}],
    value : [{
    required: true,
    message: '',
    trigger: ['input','blur'],
}],
    status : [{
    required: true,
    message: '',
    trigger: ['input','blur'],
}],
    createdBy : [{
    required: true,
    message: '',
    trigger: ['input','blur'],
}],
    updatedBy : [{
    required: true,
    message: '',
    trigger: ['input','blur'],
}],
    deletedBy : [{
    required: true,
    message: '',
    trigger: ['input','blur'],
}],
})

    const elFormRef = ref()

    // 初始化方法
    const init = async () => {
    // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
    const res = await findConfig({ ID: route.query.id })
    if (res.code === 0) {
    formData.value = res.data
    type.value = 'update'
}
} else {
    type.value = 'create'
}
    statusOptions.value = await getDictFunc('status')
}

    init()
    // 保存按钮
    const save = async() => {
    elFormRef.value?.validate( async (valid) => {
        if (!valid) return
        let res
        switch (type.value) {
            case 'create':
                res = await createConfig(formData.value)
                break
            case 'update':
                res = await updateConfig(formData.value)
                break
            default:
                res = await createConfig(formData.value)
                break
        }
        if (res.code === 0) {
            ElMessage({
                type: 'success',
                message: '创建/更改成功'
            })
        }
    })
}

    // 返回按钮
    const back = () => {
    router.go(-1)
}

</script>

<style>
</style>