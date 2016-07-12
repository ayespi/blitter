"use strict";

(function() {
  angular
    .module("blitter", [
      "ui-router",
      "bleets"
    ]);
    .config(["$stateProvider", Router]);

    function Router() {
      $stateProvider
      .state("bleetsIndex", {
        url: "/bleets",
        templateUrl: "bleets/index.html",
        controller: "bleetsIndexController",
        controllerAs: "bleetsIndexViewModel"
      })
      .state("bleetsNew", {
        url: "/bleets/new",
        templateUrl: "bleets/new.html",
        controller: "bleetsNewController",
        controllerAs: "bleetsNewViewModel"
      })
      .state("bleetsEdit", {
        url: "/bleets/:id/edit",
        templateUrl: "bleets/edit.html",
        controller: "bleetsEditController",
        controllerAs: "bleetsEditViewModel"
      })
      .state("bleetsShow", {
        url: "/bleets/:id",
        templateUrl: "bleets/show.html",
        controller: "bleetsShowController",
        controllerAs: "bleetsShowViewModel"
      });
    }
})();
