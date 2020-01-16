import captcha from './captcha/captcha.vue'
const components ={
    install(Vue){
        Vue.component('captcha',captcha)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(components);
  }
  
export  default components;