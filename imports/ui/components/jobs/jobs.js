import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';

import webTemplate from './jobs.html';
import mobileTemplate from './jobs.mobile.html';

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
const template = Meteor.Device.isPhone() || Meteor.Device.isTablet() ? mobileTemplate : webTemplate;

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
