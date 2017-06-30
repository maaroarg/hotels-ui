import template from './sidebar.template.html';
import sidebarController from './sidebar.controller';

/*@ngInject*/
export const SidebarComponent = {
  template: template,
  controller: sidebarController,
  bindings: {'filters': '<', 'hotels': '<', onUpdateFilters : '&'}
};
