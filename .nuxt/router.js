import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f82d9692 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _80aba4a8 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _35d3d03c = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _2d70fc88 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _5e2e7320 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _781a5afa = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _5fdc75ee = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _f82d9692,
    children: [{
      path: "",
      component: _80aba4a8,
      name: "home"
    }, {
      path: "login",
      component: _35d3d03c,
      name: "login"
    }, {
      path: "register",
      component: _35d3d03c,
      name: "register"
    }, {
      path: "profile/:username",
      component: _2d70fc88,
      name: "profile"
    }, {
      path: "settings",
      component: _5e2e7320,
      name: "settings"
    }, {
      path: "editor/:slug?",
      component: _781a5afa,
      name: "editor"
    }, {
      path: "article/:slug",
      component: _5fdc75ee,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
