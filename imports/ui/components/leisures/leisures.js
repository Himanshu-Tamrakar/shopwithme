import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './leisures.html';
import uiRouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import {
  Meteor
} from 'meteor/meteor';
import {
  CardObjects
} from '../../../api/cardObjects'



class Leisures {
  constructor($scope, $reactive, $timeout, $state, $q, $sce) {
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

    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }

    // $scope.filter = function(object, query) {
    //   var result = object.filter(function(obj) {
    //     return obj.type == query;
    //   });
    //   return result
    // }

    this.helpers({
      allLeisuresCardObjects() {
        return CardObjects.find({
          'type': {
            $nin: ['youtube','online-job']
          }
        })
      }
    })

  }


}


const name = 'leisures';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  ngMaterial
]).component(name, {
  template,
  controllerAs: name,
  controller: Leisures
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('leisures', {
    url: '/leisures',
    template: '<leisures></leisures>'
  });
}
