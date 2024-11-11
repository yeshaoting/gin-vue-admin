
import service from '@/utils/request'
// @Tags Config
// @Summary 创建config表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Config true "创建config表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /config/createConfig [post]
export const createConfig = (data) => {
    return service({
        url: '/config/createConfig',
        method: 'post',
        data
    })
}

// @Tags Config
// @Summary 删除config表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Config true "删除config表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /config/deleteConfig [delete]
export const deleteConfig = (params) => {
    return service({
        url: '/config/deleteConfig',
        method: 'delete',
        params
    })
}

// @Tags Config
// @Summary 批量删除config表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除config表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /config/deleteConfig [delete]
export const deleteConfigByIds = (params) => {
    return service({
        url: '/config/deleteConfigByIds',
        method: 'delete',
        params
    })
}

// @Tags Config
// @Summary 更新config表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Config true "更新config表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /config/updateConfig [put]
export const updateConfig = (data) => {
    return service({
        url: '/config/updateConfig',
        method: 'put',
        data
    })
}

// @Tags Config
// @Summary 用id查询config表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Config true "用id查询config表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /config/findConfig [get]
export const findConfig = (params) => {
    return service({
        url: '/config/findConfig',
        method: 'get',
        params
    })
}

// @Tags Config
// @Summary 分页获取config表列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取config表列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /config/getConfigList [get]
export const getConfigList = (params) => {
    return service({
        url: '/config/getConfigList',
        method: 'get',
        params
    })
}

// @Tags Config
// @Summary 不需要鉴权的config表接口
// @accept application/json
// @Produce application/json
// @Param data query bizReq.ConfigSearch true "分页获取config表列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /config/getConfigPublic [get]
export const getConfigPublic = () => {
    return service({
        url: '/config/getConfigPublic',
        method: 'get',
    })
}
