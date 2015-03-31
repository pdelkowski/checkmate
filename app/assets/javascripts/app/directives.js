// Generated by CoffeeScript 1.9.1
(function() {
  app.directive('ngConfirmClick', [
    function() {
      return {
        priority: -1,
        restrict: 'A',
        link: function(scope, element, attrs) {
          element.bind('click', function(e) {
            var message;
            message = attrs.ngConfirmClick;
            if (message && !confirm(message)) {
              e.stopImmediatePropagation();
              e.preventDefault();
            }
          });
        }
      };
    }
  ]);

}).call(this);
