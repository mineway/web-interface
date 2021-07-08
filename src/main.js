import { createApp } from 'vue'
import App from './App.vue'
import VTooltip from 'v-tooltip'
import Router from "./router"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faPlus, faStopwatch, faDonate, faBolt, faDollarSign, faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import IconBtn from "./components/IconBtn";
import Btn from "./components/Btn";
import Modal from "./components/Modal";
import ModalTitle from "./components/ModalTitle";
import Block from "./components/Block";
import Loading from "./components/Loading";

library.add(faCog, faPlus, faStopwatch, faDonate, faBolt, faDollarSign, faSignOutAlt, faTimes)

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
    .mount('#app')
