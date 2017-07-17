import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';

import webTemplate from './youtubes.html';
import mobileTemplate from './youtubes.mobile.html';

import {
    Meteor
} from 'meteor/meteor';

import {
    CardObjects
} from '../../../api/cardObjects'


class YouTubes {
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
            allYouTubeCardObjects() {
                return CardObjects.find({
                    'type': 'youtube'
                })
            }
        })
    }
}


const name = 'youtubes';
const template = Meteor.Device.isPhone() || Meteor.Device.isTablet() ? mobileTemplate : webTemplate;

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
        url: '/youtube',
        template: '<youtubes></youtubes>'
    });
}
