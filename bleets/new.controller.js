"use strict";

(function() {
  angular
    .module("bleets")
    .controller("bleetsNewController", [
      "bleetsFactory",
      "$state",
      bleetsNewControllerFunction
    ]);

    function bleetsNewControllerFunction(bleetsFactory, $state) {
      this.bleets = new bleetsFactory();
      this.create = function() {
        this.bleets.$save().then(function(response) {
          $state.go("bleetsShow",({id: response.id}));
      });
    }
  }
})();
