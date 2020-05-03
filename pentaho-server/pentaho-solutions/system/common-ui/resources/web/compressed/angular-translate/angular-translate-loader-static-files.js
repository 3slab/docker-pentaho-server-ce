/*!
 * angular-translate - v2.1.0 - 2014-09-04
 * http://github.com/PascalPrecht/angular-translate
 * Copyright (c) 2014 ; Licensed MIT
 */

angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader",["$q","$http",function(r,t){return function(e){if(!e||!angular.isString(e.prefix)||!angular.isString(e.suffix))throw new Error("Couldn't load static files, no prefix or suffix specified!");var i=e.fileFormatAdapter;if(void 0!==i&&!angular.isFunction(i))throw new Error("Couldn't load static files, fileFormatAdapter is not a function!");var a=r.defer();return t({url:[e.prefix,e.key,e.suffix].join(""),method:"GET",params:""}).success(function(r){a.resolve(i?i(r):r)}).error(function(r){a.reject(e.key)}),a.promise}}]);