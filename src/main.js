import { createApp } from 'vue'
import App from './App.vue'
import VTooltip from 'v-tooltip'
import Router from "./router"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faPlus, faStopwatch, faDonate, faBolt, faDollarSign, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import IconBtn from "./components/IconBtn";
import Btn from "./components/Btn";
import Modal from "./components/Modal";
import Block from "./components/Block";

library.add(faCog, faPlus, faStopwatch, faDonate, faBolt, faDollarSign, faSignOutAlt)

import 'v-tooltip/dist/v-tooltip.css'
import "./assets/css/main.css"

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('IconBtn', IconBtn)
    .component('Btn', Btn)
    .component('Modal', Modal)
    .component('Block', Block)
    .use(Router)
    .use(VTooltip, {
        defaultHtml: false,
    })
    .mount('#app')
