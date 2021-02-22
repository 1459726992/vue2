'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.validateURL = validateURL
exports.validateEmail = validateEmail
exports.validateMobile = validateMobile
exports.validateNumber = validateNumber
exports.validateCN = validateCN
exports.validateNumberAndEN = validateNumberAndEN
exports.validateMoney = validateMoney
exports.validateTrain = validateTrain
exports.validateMobileCode = validateMobileCode
exports.validateIp = validateIp
exports.validateSociology = validateSociology
exports.validateThunderx = validateThunderx
exports.validateEd2k = validateEd2k
exports.validateMagnet = validateMagnet
exports.validateScore = validateScore
exports.validateMd5 = validateMd5
exports.validateVersion = validateVersion
exports.validateVideo = validateVideo
exports.validateImage = validateImage
exports.validateDay24 = validateDay24
exports.validateDay12 = validateDay12
exports.validateBase64 = validateBase64
exports.validateBankCode = validateBankCode
exports.validateChName = validateChName
exports.validateENName = validateENName
exports.validateCarCodeNew = validateCarCodeNew
exports.validateCarCodeOld = validateCarCodeOld
exports.validateCarCode = validateCarCode
exports.validateUserId1 = validateUserId1
exports.validateUserId2 = validateUserId2
exports.validateUserId = validateUserId
exports.validatePassport = validatePassport
exports.validatePwd = validatePwd
exports.validatePostOffice = validatePostOffice
exports.validateNumAndCh = validateNumAndCh

/* 合法uri */
function validateURL (textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}
/* 邮箱 */

function validateEmail (value) {
  const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
  return reg.test(value)
}
/* 手机号码 */

function validateMobile (value) {
  const mobileReg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
  return mobileReg.test(value)
}
/* 数字类型 */

function validateNumber (value) {
  const numberReg = /^[0-9]+$/
  return numberReg.test(value)
}
/* 中文类型 */

function validateCN (value) {
  const cnReg = /^[\u4e00-\u9fa5],{0,}$ /
  return cnReg.test(value)
}
/* 支持英文和数字 */

function validateNumberAndEN (value) {
  const NumberAndENReg = /^[A-Za-z0-9]+$/
  return NumberAndENReg.test(value)
}
/* 金钱限制 */

function validateMoney (value) {
  const NumberAndENReg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
  return NumberAndENReg.test(value)
}
/* 火车车次 */

function validateTrain (value) {
  const Train = /^[GCDZTSPKXLY1-9]\d{1,4}$/
  return Train.test(value)
}
/* 手机机身码 */

function validateMobileCode (value) {
  const Mobile = /^\d{15,17}$/
  return Mobile.test(value)
}
/* 带端口号的网址或ip */

function validateIp (value) {
  const Ip = /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/
  return Ip.test(value)
}
/* 统一社会信用代码 */

function validateSociology (value) {
  const Sociology = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/
  return Sociology.test(value)
}
/* 迅雷链接 */

function validateThunderx (value) {
  const Thunderx = /^thunderx?:\/\/[a-zA-Z\d]+=$/
  return Thunderx.test(value)
}
/* ed2k链接 */

function validateEd2k (value) {
  const Ed2k = /^ed2k:\/\/\|file\|.+\|\/$/
  return Ed2k.test(value)
}
/* 磁力链接 */

function validateMagnet (value) {
  const Magnet = /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/
  return Magnet.test(value)
}
/* 分数 150分制 */

function validateScore (value) {
  const Score = /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:.5)?$/
  return Score.test(value)
}
/* md5格式 */

function validateMd5 (value) {
  const Md5 = /^([a-f\d]{32}|[A-F\d]{32})$/
  return Md5.test(value)
}
/* 版本号 */

function validateVersion (value) {
  const Version = /^\d+(?:\.\d+){2}$/
  return Version.test(value)
}
/* 视频链接 */

function validateVideo (value) {
  const Video = /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i
  return Video.test(value)
}
/* 图片链接 */

function validateImage (value) {
  const Image = /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i
  return Image.test(value)
}
/* 24小时制时间 */

function validateDay24 (value) {
  const Day24 = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/
  return Day24.test(value)
}
/* 12小时制时间 */

function validateDay12 (value) {
  const Day12 = /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/
  return Day12.test(value)
}
/* base64格式 */

function validateBase64 (value) {
  const Base64 = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i
  return Base64.test(value)
}
/* 银行卡号 */

function validateBankCode (value) {
  const BankCode = /^[1-9]\d{9,29}$/
  return BankCode.test(value)
}
/* 中文姓名 */

function validateChName (value) {
  const ChName = /^(?:[\u4e00-\u9fa5·]{2,16})$/
  return ChName.test(value)
}
/* 英文姓名 */

function validateENName (value) {
  const ENName = /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/
  return ENName.test(value)
}
/* 车牌号 新能源 */

function validateCarCodeNew (value) {
  const CarCodeNew = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/
  return CarCodeNew.test(value)
}
/* 车牌号 非新能源 */

function validateCarCodeOld (value) {
  const CarCodeOld = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
  return CarCodeOld.test(value)
}
/* 车牌号 全部 */

function validateCarCode (value) {
  const CarCode = /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/
  return CarCode.test(value)
}
/* 身份证 1代 */

function validateUserId1 (value) {
  const UserId1 = /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/
  return UserId1.test(value)
}
/* 身份证 2代 */

function validateUserId2 (value) {
  const UserId2 = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/
  return UserId2.test(value)
}
/* 身份证 */

function validateUserId (value) {
  const UserId = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/
  return UserId.test(value)
}
/* 护照 */

function validatePassport (value) {
  const Passport = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/
  return Passport.test(value)
}
/* 密码强度 1大写1小写1数字1特殊符号 */

function validatePwd (value) {
  const Pwd = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
  return Pwd.test(value)
}
/* 邮政编码 */

function validatePostOffice (value) {
  const PostOffice = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/
  return PostOffice.test(value)
}
/* 中文和数字 */

function validateNumAndCh (value) {
  const NumAndCh = /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/
  return NumAndCh.test(value)
}
