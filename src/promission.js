import router from './router'

router.beforeEach((to, from, next) => {
  console.log(to.name, from.name)
  if (to.name !== from.name) {
    next()
  }
})
