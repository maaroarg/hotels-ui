import angular from 'angular';
import uiRouter from 'angular-ui-router';

import common from './common';
import results from './results';

const root = angular
  .module('almundoApp', [
    uiRouter,
    common,
    results
  ]);

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['almundoApp']));

export default root;
