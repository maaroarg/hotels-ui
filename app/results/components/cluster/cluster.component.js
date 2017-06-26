import template from './cluster.template.html';
import controller from './cluster.controller';

export const ClusterComponent = {
  template : template,
  bindings : {'hotel': '<'},
  controller : controller
};
