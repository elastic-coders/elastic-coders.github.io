angular.module("ECApp", ['ngAnimate', 'angular-inview']);

angular.module("ECApp").directive('initAfterDelay', function($timeout) {
	return function initAfterDelayLink(scope, element, attrs) {
		$timeout(function() {
			scope.$eval(attrs.initAfterDelay);
		}, parseInt(attrs.delay) || 1000);
	}
});