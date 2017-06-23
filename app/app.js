import angular from 'angular'
import uiRouter from 'angular-ui-router'

import common from './common/common'
import components from './components/components'
import { AppComponent } from './app.component'

const root = angular
  .module('angularCamp', [
    uiRouter,
    common,
    components
  ])
  .component('acApp', AppComponent)

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['angularCamp']))

export default root
