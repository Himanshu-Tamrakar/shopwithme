import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './jobs.html';
import uiRouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import {
    Meteor
} from 'meteor/meteor';


class Jobs {
  constructor($scope, $reactive, $timeout, $state, $q) {
    'ngInject';

    $reactive(this).attach($scope);

    this.scope = $scope;
    this.timeout = $timeout;
    this.state = $state;

  }


}


const name = 'jobs';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  ngMaterial
]).component(name, {
  template,
  controllerAs: name,
  controller: Jobs
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('jobs', {
    url: '/jobs',
    template: '<jobs></jobs>'
  });
}
