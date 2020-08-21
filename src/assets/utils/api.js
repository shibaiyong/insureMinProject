import { filters,directives } from "./index.js"

export default{  
  install (Vue, options) {
    Object.keys( directives ).forEach(key => {
      Vue.directive(key, directives[key])
    });
    Object.keys( filters ).forEach(key => {
      Vue.filter(key, filters[key])
    })
  }
}  