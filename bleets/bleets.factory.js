(function() {
  angular
    .module("bleets")
    .factory("bleetsFactory", [
      "$resource",
      bleetsFactoryFunction,
    ]);

    function bleetsFactoryFunction($resource) {
      return $resource("http://localhost:3000/bleets/:id", {},
        {
          edit: {method: "PUT"}
        });
    }
})();
