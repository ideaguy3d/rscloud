"use strict";

/**
 * Created by Julius Alvarado on 9/5/2017.
 */
(function () {
  'use strict';

  angular.module('rsCloudApp').factory('rsAuth', ['$firebaseAuth', '$rootScope', '$firebaseObject', '$location', '$q', RedstoneAuthClass]);

  function RedstoneAuthClass($firebaseAuth, $rootScope, $firebaseObject, $location, $q) {
    $rootScope.rsmAuthUser = '';
    var orgRef = firebase.database().ref('organizations');
    var auth = $firebaseAuth();
    var authApi = {};
    var facebookProvider = new firebase.auth.FacebookAuthProvider();
    auth.$onAuthStateChanged(function (authUser) {
      if (authUser) {
        var authUserRef = orgRef.child(authUser.uid);
        $rootScope.rsmAuthUser = $firebaseObject(authUserRef);
        $rootScope.$broadcast("edhub-event-auth-user", {
          haveAuthUser: true
        });
      } else {
        $rootScope.rsmAuthUser = "";
        $rootScope.$broadcast("edhub-event-auth-user", {
          haveAuthUser: false
        });
      }
    });
    authApi = {
      login: function login(user, info) {
        auth.$signInWithEmailAndPassword(user.email, user.password).then(function (authUser) {
          // console.log("edhub - user successfully signed in");
          // console.log(authUser);
          if (!!info.path) {
            $location.path('/' + info.path);
          } else {
            $location.path('/');
          }
        })["catch"](function (error) {
          console.error("edhub - There was an error =");
          console.log(error.message);
          $rootScope.rootAuthError = error.message;
        });
      },
      logout: function logout() {
        return auth.$signOut();
      },
      requireAuth: function requireAuth() {
        return auth.requireSignIn();
      },
      signup: function signup(user, info) {
        // give 'info a default value if nothing got passed in
        info = !!info ? info : {};
        auth.$createUserWithEmailAndPassword(user.email, user.password).then(function (regUser) {
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
        })["catch"](function (error) {
          console.error("edhub - There was an error =");
          console.error(error.message);
          $rootScope.rootAuthError = error.message;
          return null;
        });
      },
      getAuthUser: function getAuthUser() {
        return $rootScope.rsmAuthUser;
      },
      facebookSignIn: function facebookSignIn() {
        firebase.auth().signInWithPopup(facebookProvider).then(function (res) {
          var token = res.credential.accessToken;
          var user = res.user;
          $scope.$apply(function () {
            $rootScope.rootEdhubAuthUser = user.email;
          }); // log on success results

          console.log('__>> SUCCESS - Facebook login '); //console.log(token);

          console.log(user);
          console.log(user.email);
        })["catch"](function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential; // log error results :(

          console.log('__>> ERROR - There were Facebook Auth');
          console.log(errorCode);
          console.log(errorMessage);
          console.log(email);
          console.log(credential);
        });
      }
    }; // return $firebaseAuth(), we are returning it in as an obj
    // because .signup does a recursive call to .login

    return authApi;
  }
})();