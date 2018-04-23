import Vue from 'vue'
import VueRouter from 'vue-router'
import Toolkit from '@luckyorange/toolkit'
import '@luckyorange/toolkit/dist/toolkit.js'

import App from './App.vue'

Vue.use(Toolkit)
Vue.use(VueRouter)

new Vue(App)