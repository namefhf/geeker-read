import dayjs from 'dayjs'
const relativeTime = require('dayjs/plugin/relativeTime')
require('dayjs/locale/zh-cn')
const updateLocale = require('dayjs/plugin/updateLocale')
dayjs.locale('zh-cn') // 全局使用中文
dayjs.extend(relativeTime)
dayjs.extend(updateLocale)
const date = dayjs('2021-01-20T09:37:16.000Z').fromNow()
// console.log(date)
