/**
 ** Created by Julius Alvarado on 11-21-2019
 */
(function(){
    'use strict';

    angular.module('rsCloudApp').controller('RedstoneCtrl', [
        '$location', 'smoothScroll', '$rootScope', '$scope', 'rsAuth',
        RedstoneCtrlClass
    ]);

    function RedstoneCtrlClass($location, smoothScroll, $rootScope, $scope, rsAuth) {
        const vm = this;

        vm.out = function () {
            console.log('...user should be sent to get logged out');
            rsAuth.auth().$signOut();
        }
    }

}());