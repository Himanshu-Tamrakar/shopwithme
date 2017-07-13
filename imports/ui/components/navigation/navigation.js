import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from '@uirouter/angularjs';
import template from './navigation.html';
import {
    name as Jobs
} from '../jobs/jobs';
import {
    name as Leisures
} from '../leisures/leisures';
import {
    name as YouTubes
} from '../youtubes/youtubes';
import {
    name as QuestionAndAnswers
} from '../questionAndAnswers/questionAndAnswers';


class Navigation {
    constructor($scope, $reactive, $state, $timeout) {
        'ngInject';
        $reactive(this).attach($scope);

        $scope.activeMenu = $state.current.name;

        $scope.isActive = function(menu) {
            $scope.activeMenu = $state.current.name;

            if ($scope.activeMenu == menu) {
                return true;
            } else {
                return false;
            }
        }

        this.scope = $scope;
        this.state = $state;

        $timeout(function() {
            $(".dropdown-button").dropdown();
        }, 10);
    }
}

const name = 'navigation';

// Module
export default angular.module(name, [
    angularMeteor,
    ngMaterial,
    uiRouter,
    Jobs,
    Leisures,
    YouTubes,
    QuestionAndAnswers
]).component(name, {
    template,
    controllerAs: name,
    controller: Navigation
});
