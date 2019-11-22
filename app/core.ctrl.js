/**
 * Created by Julius Alvarado on 9/10/2017.
 */

(function () {
    'use strict';

    angular.module('rsCloudApp').controller('CoreCtrl', [
        '$rootScope', '$scope', '$mdSidenav', '$mdDialog', '$timeout', '$location', 'rsAuth',
        CoreClass
    ]);

    function CoreClass(
        $rootScope, $scope, $mdSidenav, $mdDialog, $timeout, $location, rsAuth
    ) {
        $scope.ccCurrentUser = "";
        $scope.coreRedstoneHorizontalState = true;
        $scope.ccAuthBoxHidden = false;
        $scope.ccAuthBoxIsOpen = false;
        $scope.ccAuthBoxHover = true;
        $scope.coreRedstoneToggleSideNav = coreRedstoneToggleSideNav('core-sidenav');

        const enumAuthBox = {
            loginSignup: "Login/Signup",
            logout: "Logout",
            settings: "Settings",
            editProfile: "Edit Profile",
            applications: "Favorite Clubs"
        };

        $scope.ccSetCurrentUser = function (userEmail) {
            $scope.ccCurrentUser = userEmail;
        };

        function coreRedstoneToggleSideNav(componentId) {
            $rootScope.ccRed = '@rs.app';
            console.log("redstone cloud app - coreRedstoneToggleSideNav() wired up");
            return function () {
                $mdSidenav(componentId).toggle();
            }
        }

        // On opening, add a delayed property which shows tooltips after the speed dial has opened
        // so that they have the proper position; if closing, immediately hide the tooltips
        $scope.$watch('ccAuthBoxIsOpen', function (isOpen) {
            if (isOpen) {
                $timeout(function () {
                    $scope.tooltipVisible = $scope.ccAuthBoxIsOpen;
                }, 400);
            }
            else {
                $scope.tooltipVisible = $scope.ccAuthBoxIsOpen;
            }
        });

        // for ng-md-icon, This is what is being used.
        $scope.ccItems = [
            {name: _determineAuthState(), icon: "login", direction: "left"},
            {name: enumAuthBox.editProfile, icon: "edit", direction: "left"},
            //{name: enumAuthBox.settings, icon: "settings", direction: "bottom"},
            {name: enumAuthBox.applications, icon: "view_list", direction: "left"}
        ];

        // for md-icon, NOT Currently Being Used!!
        $scope.ccCustomIcons = [
            {name: "Login", icon: "img/icons/twitter.svg", direction: "bottom"},
            {name: "Edit Profile", icon: "img/icons/facebook.svg", direction: "top"},
            {name: "Settings", icon: "img/icons/hangout.svg", direction: "bottom"}
        ];

        $scope.ccAuthBoxAction = function ($event, item) {
            switch (item.name) {
                case enumAuthBox.loginSignup:
                    _loginSignup();
                    break;
                case enumAuthBox.logout:
                    _logout();
                    break;
                case enumAuthBox.settings:
                    _settings();
                    break;
                case enumAuthBox.editProfile:
                    _editProfile();
                    break;
                case enumAuthBox.applications:
                    _orgApplicants();
                    break;
                default:
                    console.error("Something went wront w/the AuthBox actions");
            }
        };

        // TODO: eventually get this modal dialog to work because it's really REALLY cool!
        $scope.ccOpenDialog = function ($event, item) {
            // Show the dialog
            $mdDialog.show({
                clickOutsideToClose: true,
                controller: function ($mdDialog) {
                    // Save the clicked item
                    this.item = item;

                    // Setup some handlers
                    this.close = function () {
                        $mdDialog.cancel();
                    };
                    this.submit = function () {
                        $mdDialog.hide();
                    };
                },
                controllerAs: 'modalAuth',
                templateUrl: 'states/auth/modal.auth.html',
                targetEvent: $event
            });
        };

        $rootScope.$on("redstone-event-auth-user", function (e, args) {
            $rootScope.R_authUser = args;
        });

        function _determineAuthState() {
            let authUser = '';
            return authUser === '' ? enumAuthBox.loginSignup : enumAuthBox.logout;
        }

        function _loginSignup() {$location.path("/");}

        function _logout() {
            rsAuth.auth().$signOut();
            $location.path("/");
        }

        function _settings() {console.log("in _settings()");}

        function _editProfile() {$location.url('/post');}

        function _orgApplicants() {$location.path('/apps');}
    }
}());