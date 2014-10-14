'use strict';

define(

	[
		'app/components/test'
	],

	function(test) {

		function initialize() {
			test.attachTo(document);
		}

		return initialize;
	}
);