import Vue from "vue"
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)
import router from "./router"
import App from "./APP.vue"
import "./lib/mui/css/mui.css"

var vm=new Vue({

    el:"#app",
    data:{

    },
    router:router,
    render:c=>c(App)
       
    });

