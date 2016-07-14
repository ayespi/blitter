"use strict";

(function() {
  angular
    .module("bleets")
    .controller("bleetsEditController", [
      "bleetsFactory",
      "$state",
      "$stateParams",
      bleetsEditControllerFunction
    ]);

    function bleetsEditControllerFunction(bleetsFactory, $state, $stateParams) {
      this.bleets = bleetsFactory.get({id: $stateParams.id})
      this.edit = function() {
        this.bleets.$edit({id: $stateParams.id}).then(function(response) {
          $state.go("bleetsShow",({id: response.id}));
        });
      }
      this.destroy = function() {
        this.bleets.$delete({id: $stateParams.id});
        $state.go("bleetsIndex");
      }
    }
})();
