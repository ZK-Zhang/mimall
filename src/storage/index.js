/* Storage存储方法封装 */
const STORAGE_KEY = 'mall'
export default{
  //存储值
  setItem(key,value,modules_name){
    if(modules_name){
      let val = this.getItem(modules_name)
      val[key] = value
      this.setItem(modules_name,val)
    }else{
      let val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
    }
  },
  //获取值
  getItem(key,modules_name){
    if(modules_name){
      let val = this.getItem(modules_name)
      if(val) return val[key]
    }
    return this.getStorage()[key]
  },
  //获取整个Storage值
  getStorage(){
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  //删除
  clear(key,modules_name){
    let val = this.getStorage()
    if(modules_name){
      delete val[modules_name][key]
    }else{
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
  }
}