import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';

import webTemplate from './coupons.html';
import mobileTemplate from './coupons.mobile.html';

import {
    Meteor
} from 'meteor/meteor';

import {
    CardObjects
} from '../../../api/cardObjects'

class Coupons {
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
                    'type': 'coupon'
                })
            }
        })
    }
}


const name = 'coupons';
const template = Meteor.Device.isPhone() || Meteor.Device.isTablet() ? mobileTemplate : webTemplate;

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ngMaterial
]).component(name, {
    template,
    controllerAs: name,
    controller: Coupons
}).config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider.state('coupons', {
        url: '/coupons',
        template: '<coupons></coupons>'
    });
}
