"use strict";

(function() {
  angular
    .module("bleets")
    .controller("bleetsShowController", [
      "bleetsFactory",
      "$stateParams",
      bleetsShowControllerFunction
    ]);

    function bleetsShowControllerFunction(bleetsFactory, $stateParams) {
      this.bleets = bleetsFactory.get({id: $stateParams.id});
    }
})();
