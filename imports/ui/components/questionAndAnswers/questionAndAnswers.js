import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './questionAndAnswers.html';
import uiRouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import {
  Meteor
} from 'meteor/meteor';
import {
  QAS
} from '../../../api/qas'



class QuestionAndAnswers {
  constructor($scope, $reactive, $timeout, $state, $q) {
    'ngInject';

    $reactive(this).attach($scope);

    this.scope = $scope;
    this.timeout = $timeout;
    this.state = $state;

    $timeout(function() {
      $(document).ready(function() {
        $('.collapsible').collapsible();
      });
    }, 10);

    $scope.initialize = function() {
      $('.collapsible').collapsible('open', 0);
    }
    this.helpers({
      allQAndA() {
        return QAS.find();
      }
    })
  }

}

const name = 'questionAndAnswers';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  ngMaterial
]).component(name, {
  template,
  controllerAs: name,
  controller: QuestionAndAnswers
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('questionAndAnswers', {
    url: '/questionAndAnswers',
    template: '<question-and-answers></question-and-answers>'
  });
}
