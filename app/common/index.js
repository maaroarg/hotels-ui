import angular from 'angular'

import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'

const common = angular
  .module('app.common', [])
  .component('amHeader', HeaderComponent)
  .component('amFooter', FooterComponent)
  .name

export default common
