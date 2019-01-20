import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Internships from './components/Internships.vue'
import DesignThinking from './components/DesignThinking.vue'
import FreelanceCAD from './components/FreelanceCAD.vue'
import Coursework from './components/Coursework.vue'
import Research from './components/Research.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {
              path: '/',
              name: 'Home',
              component: Home
      },
      {
              path: '/Internships',
              name: 'Internships',
              component: Internships
      },
      {
              path: '/DesignThinking',
              name: 'Design Thinking',
              component: DesignThinking
      },
      {
              path: '/FreelanceCAD',
              name: 'Freelance CAD',
              component: FreelanceCAD
      },
      {
              path: '/Coursework',
              name: 'Coursework',
              component: Coursework
      },
      {
              path: '/Research',
              name: 'Research',
              component: Research
      }
  ]
})
