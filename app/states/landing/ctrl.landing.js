/**
 ** Created by Julius Alvarado on 9/4/2017.
 */

(function () {
    'use strict';

    angular.module('rsCloudApp').controller('LandingCtrl', [
        '$location', 'smoothScroll', '$rootScope', '$scope',
        LandingClass
    ]);

    function LandingClass($location, smoothScroll, $rootScope, $scope) {
        const vm = this;
        vm.counter = 0;
        vm.user = {
            email: '',
            pass: ''
        };
        vm.error = '';

        $scope.s_login = function () {
            console.log('Will use firebase');
        };

        $scope.s_mockLogin = function () {
            let user = 'julius@rsmail.com';
            let pass = 'abc123';
            if (vm.user.email === user && vm.user.pass === pass) {
                vm.error = '';
                $location.url('cart');
            }
            else {
                vm.error = 'username or email incorrect - ' + ++vm.counter;
            }
        };

        $scope.s_scroll2recentJobs = function () {
            let elem = document.getElementById("edhub-recent-jobs-landing-title");
            smoothScroll(elem);
        };

        activate();

        function activate() {
            console.log("__>> Wired up and ready to rock and roll.");
        }
    }

}());