(function () {
    'use strict';

    angular.module('rsCloudApp').controller('IdeaEngineCtrl', [
        '$location', 'smoothScroll', '$rootScope', '$scope', 'rsAuth', '$sce', 'authRsv',
        IdeaEngineCtrlClass
    ]);

    function IdeaEngineCtrlClass(
        $location, smoothScroll, $rootScope, $scope, rsAuth, $sce, authRsv
    ) {

        const vm = this;
        vm.viewTitle = "Idea Engine Custom Training";
        vm.userEmailRsv = authRsv.email;
        vm.infoRsv = authRsv.info;

        vm.out = function () {
            console.log('...user should be sent to get logged out');
            rsAuth.auth().$signOut();
        };
    }

}());