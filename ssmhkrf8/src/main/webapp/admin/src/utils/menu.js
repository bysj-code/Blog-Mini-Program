const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["查看","删除"],"menu":"博文信息","menuJump":"列表","tableName":"bowenxinxi"}],"menu":"博文信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"博文类型","menuJump":"列表","tableName":"bowenleixing"}],"menu":"博文类型管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的博文","menuJump":"列表","tableName":"wodebowen"}],"menu":"我的博文管理"},{"child":[{"buttons":["删除","查看"],"menu":"个人名片分享","menuJump":"列表","tableName":"gerenmingpianfenxiang"}],"menu":"个人名片分享管理"},{"child":[{"buttons":["删除","查看"],"menu":"签到","menuJump":"列表","tableName":"qiandao"}],"menu":"签到管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"联系客服","tableName":"chat"},{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"博文信息列表","menuJump":"列表","tableName":"bowenxinxi"}],"menu":"博文信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"博文信息","menuJump":"列表","tableName":"bowenxinxi"}],"menu":"博文信息管理"},{"child":[{"buttons":["查看","修改","查看评论","新增"],"menu":"我的博文","menuJump":"列表","tableName":"wodebowen"}],"menu":"我的博文管理"},{"child":[{"buttons":["查看","新增"],"menu":"个人名片分享","menuJump":"列表","tableName":"gerenmingpianfenxiang"}],"menu":"个人名片分享管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"签到","menuJump":"列表","tableName":"qiandao"}],"menu":"签到管理"},{"child":[{"buttons":["查看"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"博文信息列表","menuJump":"列表","tableName":"bowenxinxi"}],"menu":"博文信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;
