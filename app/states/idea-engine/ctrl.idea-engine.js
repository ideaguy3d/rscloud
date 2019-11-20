(function () {
    'use strict';

    angular.module('rsCloudApp').controller('IdeaEngineCtrl', [
        '$location', 'smoothScroll', '$rootScope', '$scope', 'rsAuth',
        IdeaEngineCtrlClass
    ]);

    function IdeaEngineCtrlClass() {

        const vm = this;
        vm.vidOne = "https://firebasestorage.googleapis.com/v0/b/redstone-auto.appspot.com/o/idea-engine_add-field.mp4?alt=media&token=e4923aba-d817-48cc-a6d4-b655e3d9b897";

    }

}());