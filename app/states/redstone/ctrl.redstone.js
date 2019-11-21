/**
 ** Created by Julius Alvarado on 11-21-2019
 */
(function(){
    'use strict';

    angular.module('rsCloudApp').controller('RedstoneCtrl', [
        '$location', 'smoothScroll', '$rootScope', '$scope', 'rsAuth',
        RedstoneCtrlClass
    ]);

    function RedstoneCtrlClass($location, smoothScroll, $rootScope, $scope) {
        const vm = this;

        vm.out = function () {
            $location.url('/logout');
        }
    }

}());