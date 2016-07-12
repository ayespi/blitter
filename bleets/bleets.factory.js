(function() {
  angular
    .module("bleets")
    .factory("bleetsFactory", [
      "$resource",
      bleetsFactoryFunction,
    ]);

    function bleetsFactoryFunction() {
      return $resource("http://localhost:3000/bleets/:id");
    }
})();
