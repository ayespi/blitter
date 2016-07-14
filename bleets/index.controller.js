"use strict";

(function() {
  angular
    .module("bleets")
    .controller("bleetsIndexController", [
      "bleetsFactory",
      bleetsIndexControllerFunction
    ]);

    function bleetsIndexControllerFunction(bleetsFactory) {
      this.bleets = bleetsFactory.query();
    }
})();
