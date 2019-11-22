/**
 * Created by Julius Alvarado on 9/4/2017.
 */

(function () {
    'use strict';

    angular.module('rsCloudApp').controller('LandingCtrl', [
        '$location', 'smoothScroll', '$rootScope', '$scope', 'rsAuth',
        LandingClass
    ]);

    function LandingClass($location, smoothScroll, $rootScope, $scope, rsAuth) {
        const vm = this;
        vm.counter = 0;
        vm.user = {email: '', pass: ''};
        vm.error = '';

        $scope.s_login = function () {
            // make the app a bit more difficult to hack, maybe an attacker will
            // give up if they can't figure this out 🤞
            if (
                vm.user.email.includes(rsAuth.ccRed()) === (rsAuth.ccRed() === $rootScope.ccRed)
            ) {
                rsAuth.login(vm.user, {email: vm.user.email, path: vm.user.email.split('@')[0]});
            }
            else {
                rsAuth.login(vm.user, {email: vm.user.email, path: null});
            }
        };

        $scope.s_scroll2recentJobs = function () {
            let elem = document.getElementById("rsm-recent-jobs-landing-title");
            smoothScroll(elem);
        };

        activate();

        function activate() { console.log("__>> LandingCtrl Wired up and ready to rock and roll."); }
    }

}());