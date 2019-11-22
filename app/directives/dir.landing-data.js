"use strict";

(function () {
  'use strict';

  angular.module('rsCloudApp').directive('landingData', [LandingDataDirectiveClass]);

  function LandingDataDirectiveClass() {
    return {
      templateUrl: 'directives/temps/temp.landing-data.html'
    };
  }
})();