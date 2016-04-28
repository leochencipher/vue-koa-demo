/*
* @Author: baby
* @Date:   2016-04-16 23:08:00
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-04-28 10:09:41
*/

export function configRouter (router) {
  router.map({

    /*后台首页*/
    '/': {
      component: require('./views/Index.vue')
    },
    /* 404 路由 */
    '*': {
      component: require('./views/Index.vue')
    },
    /*登录*/
    '/sign': {
      component: require('./views/Sign.vue'),
      subRoutes: {
        '/': {
          component: require('./components/sign/_signin.vue'),
        },
        '/signup': {
          component: require('./components/sign/_signup.vue')
        }
      }
    },
    '/user': {
      component: require('./components/User.vue')
    }

/*    '/home': {
      component: require('./views/Home.vue')
    },*/
/*    '/hello': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.

      component: require('./components/Hello.vue')

    },
    '/foo': {
      component: require('./components/Foo.vue'),
      // 在/foo下设置一个子路由
      subRoutes: {
        '/': {
          // 当匹配到 /foo 时,这个组件会被渲染到 Foo 组件的 <router-view> 中。
          // 为了简便，这里使用了一个组件的定义
          component: {
            template: '<p>Default sub view for Foo</p>'
          }
        },
        '/bar': {
          // 当匹配到/foo/bar时,会在 Foo's <router-view>内渲染
          // 一个Bar组件
          component: {
            template: '<p>sub view for Foo/Bar</p>'
          }
        },
        '/baz': {
          // Baz也是一样，不同之处是匹配的路由会是/foo/baz
          component: {
            template: '<p>sub view for Foo/Baz</p>'
          }
        }
      }
    },*/
/*    '/menu': {
      name: 'menu',
      component: require('./components/Menu.vue')
    },*/
/*    '/user/:userId': {
      name: 'user', // 给这条路径加上一个名字
      component: require('./components/User.vue')
    }*/

    // // nested example
    // '/user/:userId': {
    //   component: require('./components/user/index.vue'),
    //   subRoutes: {
    //     // matches "/user/:userId/profile/:something"
    //     'profile/:something': {
    //       component: require('./components/user/profile.vue')
    //     },
    //     // matches "/user/:userId/posts"
    //     'posts': {
    //       component: require('./components/user/posts.vue')
    //     },
    //     // matches "/user/:userId/settings"
    //     'settings': {
    //       component: require('./components/user/settings.vue')
    //     }
    //   }
    // },

    // // not found handler
    // '*': {
    //   component: require('./components/not-found.vue')
    // },

    // // advanced example
    // '/inbox': {
    //   component: require('./components/inbox/index.vue'),
    //   subRoutes: {
    //     '/message/:messageId': {
    //       component: require('./components/inbox/message.vue')
    //     },
    //     '/archived': {
    //       component: require('./components/inbox/archive.vue')
    //     },
    //     // default component to render into the nested outlet
    //     // when the parent route is matched but there's no
    //     // nested segment. In this case, "/inbox".
    //     '/': {
    //       // inline component
    //       component: {
    //         template: 'default yo'
    //       }
    //     }
    //   }
    // }
  // })

  // // redirect
  // router.redirect({
  //   '/info': '/about',
  //   '/hello/:userId': '/user/:userId'
  // })

  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  // router.beforeEach((transition) => {
  //   if (transition.to.path === '/forbidden') {
  //     router.app.authenticating = true
  //     setTimeout(() => {
  //       router.app.authenticating = false
  //       alert('this route is forbidden by a global before hook')
  //       transition.abort()
  //     }, 3000)
  //   } else {
  //     transition.next()
  //   }
  })

  router.afterEach(function (transition) {
    console.log('成功浏览到: ' + transition.to.path)
  })
}
