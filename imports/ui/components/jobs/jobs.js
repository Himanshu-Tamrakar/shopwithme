import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './jobs.html';
import uiRouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import {
  Meteor
} from 'meteor/meteor';
import {
  CardObjects
} from '../../../api/cardObjects'


class Jobs {
  constructor($scope, $reactive, $timeout, $state, $q, $sce) {
    'ngInject';

    $reactive(this).attach($scope);

    this.scope = $scope;
    this.timeout = $timeout;
    this.state = $state;

    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }

    this.helpers({
      allOnlineJobsCardObjects() {
        return CardObjects.find({
          'type': 'online-job'
        })
      }
    })

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
