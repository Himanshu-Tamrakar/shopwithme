import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './home.html';
import uiRouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import {
  Meteor
} from 'meteor/meteor';
import {
  Products
} from '../../../api/products'
import {
  Images
} from '../../../api/images'


class Home {
  constructor($scope, $reactive, $timeout, $state, $q) {
    'ngInject';

    $reactive(this).attach($scope);

    this.scope = $scope;
    this.timeout = $timeout;
    this.state = $state;


    $scope.test = ["https://lorempixel.com/800/400/food/1","https://lorempixel.com/800/400/food/2","https://lorempixel.com/800/400/food/3"]

    this.helpers({
        header() {
          Images.find({'type': 'discount-image'}).forEach(function(object) {
            $scope.test.push(object.imageUrl)
          })
          return Images.find({})
        },
        allProducts() {
          return Products.find({})
        }
      })
      //
      // $scope.filter = function(object, filerParam) {
      //   var result = object.filter(function(obj) {
      //     return obj.type == filerParam;
      //   });
      //   return result
      // }


    // $scope.headerImages = [
    //   'https://lorempixel.com/800/400/food/1',
    //   'https://lorempixel.com/800/400/food/2',
    //   'https://lorempixel.com/800/400/food/3',
    //   'https://lorempixel.com/800/400/food/4'
    // ]

  }


}


const name = 'home';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  ngMaterial
]).component(name, {
  template,
  controllerAs: name,
  controller: Home
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('home', {
    url: '/home',
    template: '<home></home>'
  });
}
