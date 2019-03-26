import Adds from './add.vue'
const comment = {
  install: function(Vue) {
    Vue.component('Adds', Adds)
  }
}
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(comment) 
}
export default comment