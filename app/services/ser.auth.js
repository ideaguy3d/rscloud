/**
 * Created by Julius Alvarado on 9/5/2017.
 */

(function () {
    'use strict';

    angular.module('rsCloudApp').factory('rsAuth', [
        '$q', '$firebaseAuth', '$rootScope', '$firebaseObject', '$location',
        RedstoneAuthClass
    ]);

    function RedstoneAuthClass(
        $q, $firebaseAuth, $rootScope, $firebaseObject, $location
    ) {
        $rootScope.rsmAuthUser = '';
        const orgRef = firebase.database().ref('organizations');
        const auth = $firebaseAuth();
        let authApi = {};
        let facebookProvider = new firebase.auth.FacebookAuthProvider();
        let authAttempts = 0;

        auth.$onAuthStateChanged(function (authUser) {
            if (authUser) {
                //console.log('USER IS authenticated - auth state changed');
                let authUserRef = orgRef.child(authUser.uid);

                $rootScope.rsmAuthUser = $firebaseObject(authUserRef);
                $rootScope.$broadcast("redstone-event-auth-user", {
                    haveAuthUser: true,
                    email: authUser.email
                });
            }
            else {
                //console.log('USER NOT authenticated - auth state changed');
                $location.url('/');
                $rootScope.rsmAuthUser = "";
                authAttempts = 0;
                $rootScope.R_authStatus = {info: '', count: authAttempts};
                $rootScope.$broadcast("redstone-event-auth-user", {
                    haveAuthUser: false
                });
            }
        });

        authApi = {
            login: function (user, info) {
                auth.$signInWithEmailAndPassword(user.email, user.pass)
                    .then(function (authUser) {
                        if (!!info.path) {
                            // SUPER SPECIAL HARD CODED ui-states:
                            if (authUser.email === 'idea-engine@rs.app') {
                                $location.path('/' + info.path);
                            }
                            else {
                                $location.path('/redstone');
                            }
                        }
                        else {
                            $location.path('/redstone');
                        }
                    })
                    .catch(function (error) {
                        $rootScope.R_authStatus = {info: error.message, count: ++authAttempts};
                    });
            },
            auth: function () {
                return auth;
            },
            signUp: function (user, info) {
                // give 'info a default value if nothing got passed in
                info = !!info ? info : {};
                auth.$createUserWithEmailAndPassword(user.email, user.password)
                    .then(function (regUser) {
                        orgRef.child(regUser.uid).set({
                            date: firebase.database.ServerValue.TIMESTAMP,
                            regUser: regUser.uid,
                            orgName: !!user.orgName ? user.orgName : 'blank',
                            email: user.email,
                            repName: !!user.name ? user.name : 'blank'
                        });
                        $rootScope.rootMessage = "Thanks for registering " + user.name;
                        if (info.listOrg) {
                            console.log("broadcasting 'edhub-list-unauth-org-signup'");
                            $rootScope.$broadcast("edhub-list-unauth-org-signup", {
                                orgId: regUser.uid
                            });
                        }

                        authApi.login(user, info);
                    })
                    .catch(function (error) {
                        console.error("edhub - There was an error =");
                        console.error(error.message);
                        $rootScope.rootAuthError = error.message;
                        return null;
                    });
            },
            getAuthUser: function () {
                return $rootScope.rsmAuthUser;
            },
            facebookSignIn: function () {
                firebase.auth().signInWithPopup(facebookProvider)
                        .then(function (res) {
                            let token = res.credential.accessToken;
                            let user = res.user;
                            $scope.$apply(function () {
                                $rootScope.rootEdhubAuthUser = user.email;
                            });


                            // log on success results
                            console.log('__>> SUCCESS - Facebook login ');
                            //console.log(token);
                            console.log(user);
                            console.log(user.email);
                        })
                        .catch(function (error) {
                            let errorCode = error.code;
                            let errorMessage = error.message;
                            let email = error.email;
                            let credential = error.credential;

                            // log error results :(
                            console.log('__>> ERROR - There were Facebook Auth');
                            console.log(errorCode);
                            console.log(errorMessage);
                            console.log(email);
                            console.log(credential);
                        });
            },
            ccRed: function() {
                return '@rs.app';
            }
        };

        // return $firebaseAuth(), we are returning it in as an obj
        // because .signup does a recursive call to .login
        return authApi;
    }
}());