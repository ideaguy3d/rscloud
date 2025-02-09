angular.module('rsCloudApp', [
    'firebase', 'angular-md5', 'ngRoute', 'ngMaterial', 'ngMdIcons', 'smoothScroll', 'ngAnimate'
]).config(['$routeProvider', '$locationProvider',
    function ($routeProvider) {

        function authRsvCheck($location, rsAuth) {

            console.log("__>> checking if User is authenticated");

            rsAuth.auth().$requireSignIn()
                  .then(function (authUser) {
                      if (authUser.email === 'idea-engine@rs.app') {
                          console.log("__>> User is idea engine");

                          $location.url('/idea-engine');
                      }
                      else {
                          console.log("__>> User is authenticated");

                          $location.url('/redstone');
                      }
                  })
                  // the user is unauthenticated
                  .catch(function (nonAuth) {
                      $location.url('/');
                  })
        }

        $routeProvider
            .when('/', {
                templateUrl: 'states/landing/view.landing.html',
                controller: 'LandingCtrl',
                controllerAs: 'cLanding',
                resolve: {
                    authRsv: function ($location, rsAuth) {
                        authRsvCheck($location, rsAuth);
                    }
                }
            })
            .when('/redstone', {
                templateUrl: 'states/redstone/view.redstone.html',
                controller: 'RedstoneCtrl',
                controllerAs: 'cRedstone'
            })
            .when('/cost-automation', {
                templateUrl: 'states/cost-auto/view.cost-auto.html',
                controller: '',
                controllerAs: ''
            })
            .when('/lightning-preprocessor', {
                templateUrl: 'states/preprocessor/view.lightning.html',
                controller: '',
                controllerAs: ''
            })
            .when('/customer-training', {
                templateUrl: 'states/training/view.customer.html',
                controller: '',
                controllerAs: ''
            })
            .when('/apps', {
                templateUrl: 'states/apps/view.apps.html',
                controller: '',
                controllerAs: ''
            })
            .when('/idea-engine', {
                templateUrl: 'states/idea-engine/view.idea-engine.html',
                controller: 'IdeaEngineCtrl',
                controllerAs: 'cIdeaEngine',
                resolve: {
                    authRsv: function ($location, rsAuth) {
                        return rsAuth.auth().$requireSignIn().then(function (authUser) {
                            console.log(`authUser ${authUser.email}:`);

                            if (authUser.email === 'idea-engine@rs.app') {
                                return {
                                    info: 'Hello ^_^/',
                                    email: authUser.email
                                };
                            }
                            else {
                                $location.url('/redstone')
                            }
                        }).catch(function (notAuthUser) {
                            $location.url('/');
                        });
                    }
                }
            })

            // go to base url
            .otherwise('/');

        /*********************************************
         * Other UI States to use as reference code *
         ********************************************/

        /*
         // Y Combinator states - 8 states:
        .when('/chat', {
            templateUrl: 'states/ycombinator/chat/view.yc-home.html',
            controller: 'ycAuthCtrl',
            controllerAs: 'cycAuth',
            resolve: {
                // the user does not have to be authenticated
                requireNoAuth: function ($location, ycAuthSer) {
                    ycAuthSer.auth.$requireSignIn()
                             .then(function (authUser) {
                                 // if the user is already logged in send them to the channels state
                                 $location.url('/data');
                             })
                             .catch(function (error) {
                                 var errorMessage = '__>> ERROR - error while going to UI state home';
                                 console.log(errorMessage, error);
                                 return errorMessage;
                             });
                }
            }
        })
        .when('/ycombinator/positions', {
            templateUrl: 'states/ycombinator/view.yc-landing.html',
            controller: 'YCombinatorLandingCtrl',
            controllerAs: 'landingCtrl'
        })
        .when('/ycombinator/home', {
            templateUrl: 'states/ycombinator/chat/view.yc-home.html',
            controller: 'YCombinatorLandingCtrl',
            controllerAs: 'landingCtrl',
            resolve: {
                // the user does not have to be authenticated
                requireNoAuth: function ($location, ycAuthSer) {
                    ycAuthSer.auth.$requireSignIn()
                             .then(function (authUser) {
                                 // if the user is already logged in send them to the channels state
                                 $location.url('/ycombinator/channels');
                             })
                             .catch(function (error) {
                                 var errorMessage = '__>> ERROR - error while going to UI state home';
                                 console.log(errorMessage, error);
                                 return errorMessage;
                             });
                }
            }
        })
        .when('/ycombinator/chat/register', {
            templateUrl: 'states/ycombinator/chat/view.yc-register.html',
            controller: 'ycAuthCtrl',
            controllerAs: 'cycAuth',
            resolve: {
                // no authenticated user should go to login/signup view
                requireNoAuthRsv: function (ycAuthSer, $location) {
                    return ycAuthSer.auth.$requireSignIn()
                                    .then(function (authUser) {
                                        console.log('__>> INFO - user is already logged in, authUser: ', authUser);
                                        $location.url('/ycombinator/channels');
                                    })
                                    // the user is not authenticated
                                    .catch(function (error) {
                                        console.log('__>> ERROR = ', error);
                                        return 'ERROR = ' + error;
                                    });
                }
            }
        })
        .when('/ycombinator/chat/login', {
            templateUrl: 'states/ycombinator/chat/view.yc-login.html',
            controller: 'ycAuthCtrl',
            controllerAs: 'cycAuth',
            resolve: {
                // no authenticated user should go to login/signup view
                requireNoAuthRslv: function (ycAuthSer, $location) {
                    return ycAuthSer.auth.$requireSignIn()
                                    .then(function (res) {
                                        console.log('__>> INFO - user is already logged in, authUser: ', authUser);
                                        $location.url('/ycombinator/channels');
                                    })
                                    .catch(function (error) {
                                        console.log('__>> ERROR = ', error);
                                        return 'ERROR = ' + error;
                                    });
                }
            }
        })
        .when('/ycombinator/profile', {
            templateUrl: 'states/ycombinator/chat/view.profile.html',
            controller: 'ycProfileCtrl',
            controllerAs: 'cycProfile',
            resolve: {
                authRsv: function ($location, ycUsersSer, ycAuthSer) {
                    // .$requireSignIn() will have an on success cb if there is an authenticated user
                    return ycAuthSer.auth.$requireSignIn().catch(function (error) {
                        console.log('__>> ERROR - tried to go to profile ui state without being authenticated, err = ', error);
                        $location.url('/ycombinator/home');
                    });
                },
                profileRsv: function (ycUsersSer, ycAuthSer) {
                    return ycAuthSer.auth.$requireSignIn().then(function (authUserObj) {
                        // CRITICAL ! CRITICAL !! CRITICAL !!! This is where to put $loaded()
                        return ycUsersSer.getProfile(authUserObj.uid).$loaded();
                    });
                }
            }
        })
        .when('/ycombinator/channels', {
            templateUrl: 'states/ycombinator/chat/view.channels.html',
            controller: 'ycChannelsCtrl',
            controllerAs: 'cycChannels',
            resolve: {
                channelsRsv: function (ycChannelsSer) {
                    return ycChannelsSer.channels.$loaded()
                                        .catch(function (error) {
                                            console.log('__>> ERROR - There was an error fetching the channels, error: ' + error);
                                        });
                },
                profileRsv: function ($location, ycAuthSer, ycUsersSer) {
                    return ycAuthSer.auth.$requireSignIn()
                                    .then(function (authUser) {
                                        return ycUsersSer.getProfile(authUser.uid).$loaded()
                                                         .then(function (profile) {
                                                             if (profile.displayName) {
                                                                 return profile;
                                                             }
                                                             else {
                                                                 $location.url('/ycombinator/profile');
                                                             }
                                                         })
                                                         .catch(function (error) {
                                                             console.log('__>> ERROR - Unable to get the users profile, error: ', error);
                                                         });
                                    })
                                    .catch(function (error) {
                                        console.log('__>> ERROR - The user is not signed in, error: ', error);
                                        $location.url('/ycombinator/home');
                                    });
                }
            }
        })
        .when('/ycombinator/rooms/:channelId/messages', {
            templateUrl: 'states/ycombinator/chat/view.messages.html',
            controller: 'ycMessagesCtrl',
            controllerAs: 'cycMessages',
            resolve: {
                messagesRsv: function ($route, ycMessagesSer) {
                    return ycMessagesSer.forChannel($route.current.params.channelId).$loaded();
                },
                channelNameRsv: function ($route, ycChannelsSer) {
                    // we're not using $loaded() here... Hmmm. I wonder why.
                    return '#' + ycChannelsSer.channels.$loaded()
                                              .$getRecord($route.current.params.channelId).name;
                },
                profileRsv: function ($location, ycAuthSer, ycUsersSer) {
                    return ycAuthSer.auth.$requireSignIn(
                        // on success callback
                        function (authUser) {
                            return ycUsersSer.getProfile(authUser.uid).$loaded().then(function (profile) {
                                var displayName = profile.displayName;
                                if (displayName) {
                                    return displayName;
                                }
                                else {
                                    $location.url('/ycombinator/profile');
                                }
                            }).catch(function (error) {
                                let info = '__>> ERROR - unable to get the users profile info: ';
                                console.log(info, error);
                            });
                        },
                        // on error callback
                        function (error) {
                            console.log('__>> The user is not authenticated, error: ', error);
                            $location.url('/ycombinator/home');
                        }
                    );
                }
            }
        })
        */

        /*
        // Edhub states - 9 states:
        .when('/edhub/landing', {
            templateUrl: 'states/landing/view.map-landing.html',
            controller: 'LandingCtrl',
            controllerAs: 'landingCtrl'
        })
        .when('/edhub/signup', {
            templateUrl: 'states/auth/view.tab.join.html',
            controller: 'AuthCtrl',
            controllerAs: 'signup',
            resolve: {
                unauthApplyRslv: function ($route) {
                    // sta = Signup To Apply
                    return $route.current.params.status === "sta"
                        ? "Hi ^_^/ Please signup/login before applying"
                        : null;
                }
            }
        })
        .when('/edhub/login', {
            templateUrl: 'states/auth/view.login.html',
            controller: 'AuthCtrl',
            controllerAs: 'login',
            resolve: {
                unauthApplyRslv: function ($route) {
                    // sta = Signup To Apply
                    return $route.current.params.status === "sta"
                        ? "Hi ^_^/ Please signup/login before applying"
                        : null;
                }
            }
        })
        .when('/edhub/profile/:user', {
            templateUrl: 'states/auth/view.profile.html'
        })
        .when('/edhub/apply', {
            templateUrl: 'states/apply/view.apply.html',
            controller: 'ApplyToJobCtrl',
            controllerAs: 'applyToJobCtrl'
        })
        .when('/edhub/apply/:orgId/:orgName', {
            templateUrl: 'states/apply/view.apply.org.html',
            controller: 'ApplyToOrgCtrl',
            controllerAs: 'applyToOrgCtrl',
            resolve: {
                orgJobAppsRslv: function ($route, edhubJobPostService) {
                    return edhubJobPostService.forOrg($route.current.params.orgId).$loaded();
                }
            }
        })
        .when('/edhub/apply-job/:orgName/:jobId', {
            templateUrl: 'states/apply/view.apply.job-org.html',
            controller: 'ApplyToJobCtrl',
            controllerAs: 'applyToJobCtrl'
        })
        .when('/edhub/org/apps', {
            templateUrl: 'states/org-apps/view.org-apps.html',
            controller: 'OrgApplicantsCtrl',
            controllerAs: 'orgApps' // cOrgApplicants
        })
        .when('/edhub/view-job/:orgId/:orgName', {
            templateUrl: 'states/apply/view.view-job.html',
            controller: 'ApplyToOrgCtrl',
            controllerAs: 'cApplyToOrg',
            resolve: {
                orgJobAppsRslv: function ($route, edhubJobPostService) {
                    console.log('__>> JA - Will return .getOrganization()');
                    return edhubJobPostService.getOrganization($route.current.params.orgId).$loaded();
                }
            }
        })
        */

        // Firebase Config
        const firebaseConfig = {
            apiKey: "AIzaSyBiWzqiziBRqAkJzshxK2bALZbsxCsvO8M",
            authDomain: "redstone-auto.firebaseapp.com",
            databaseURL: "https://redstone-auto.firebaseio.com",
            projectId: "redstone-auto",
            storageBucket: "redstone-auto.appspot.com",
            messagingSenderId: "792273302054",
            appId: "1:792273302054:web:f97b23a3d4ed3987906ce7",
            measurementId: "G-XZR8MYEW2R"
        };
        // Init Firebase
        firebase.initializeApp(firebaseConfig);
    }
]);