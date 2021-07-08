// Core
import { createApp } from 'vue'

// Libs
import VTooltip from 'v-tooltip'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faPlus, faStopwatch, faDonate, faBolt, faDollarSign, faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VeProgress from 'vue-ellipse-progress'
import HighCharts from 'highcharts-vue'

// Apps
import App from './App.vue'
import Router from "./router"
import IconBtn from "./components/IconBtn";
import Btn from "./components/Btn";
import Modal from "./components/Modal";
import ModalTitle from "./components/ModalTitle";
import Block from "./components/Block";
import Loading from "./components/Loading";

library.add(faCog, faPlus, faStopwatch, faDonate, faBolt, faDollarSign, faSignOutAlt, faTimes)

// Assets
import 'v-tooltip/dist/v-tooltip.css'
import "./assets/css/main.css"

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('IconBtn', IconBtn)
    .component('Btn', Btn)
    .component('Modal', Modal)
    .component('ModalTitle', ModalTitle)
    .component('Block', Block)
    .component('Loading', Loading)
    .use(Router)
    .use(VTooltip, {
        defaultHtml: false,
    })
    .use(VeProgress)
    .use(HighCharts)
    .mount('#app')
