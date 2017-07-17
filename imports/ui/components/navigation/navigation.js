import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from '@uirouter/angularjs';

import webTemplate from './navigation.html';
import mobileTemplate from './navigation.mobile.html';

import {
    name as Jobs
} from '../jobs/jobs';
import {
    name as Coupons
} from '../coupons/coupons';
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

        $scope.initializeSidebar = function() {
            $('.button-collapse').off('click').sideNav({
                menuWidth: 240,
                edge: 'left',
                closeOnClick: true,
                draggable: true
            });

            $('.drag-target').on('swipeleft', function() {
                $('#sidenav-overlay').trigger('click');
            });
        };
    }
}

const name = 'navigation';
const template = Meteor.Device.isPhone() || Meteor.Device.isTablet() ? mobileTemplate : webTemplate;

// Module
export default angular.module(name, [
    angularMeteor,
    ngMaterial,
    uiRouter,
    Jobs,
    Coupons,
    Leisures,
    YouTubes,
    QuestionAndAnswers
]).component(name, {
    template,
    controllerAs: name,
    controller: Navigation
});
