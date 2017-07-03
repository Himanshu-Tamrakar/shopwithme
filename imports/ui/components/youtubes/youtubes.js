import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './youtubes.html';
import uiRouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import {
  Meteor
} from 'meteor/meteor';


class YouTubes {
  constructor($scope, $reactive, $timeout, $state, $q) {
    'ngInject';

    $reactive(this).attach($scope);

    this.scope = $scope;
    this.timeout = $timeout;
    this.state = $state;

    $timeout(function() {
      $(document).ready(function() {
        $('ul.tabs').tabs();
      });
    }, 10);

  }


}


const name = 'youtubes';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  ngMaterial
]).component(name, {
  template,
  controllerAs: name,
  controller: YouTubes
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('youtubes', {
    url: '/youtubes',
    template: '<youtubes></youtubes>'
  });
}
