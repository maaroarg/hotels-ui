import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './config/routes';
import ResultsService from './services/results.service';
import ResultsController from './controllers/results.controller';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ClusterComponent } from './components/cluster/cluster.component';

export default angular.module('results', [uirouter])
  .config(routes)
  .service('ResultsService', ResultsService)
  .controller('ResultsController', ResultsController)
  .component('cluster', ClusterComponent)
  .component('sidebar', SidebarComponent)
  .component('topbar', TopbarComponent)
  .name;
