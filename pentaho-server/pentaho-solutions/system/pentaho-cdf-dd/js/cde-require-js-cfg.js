/*!
 * Copyright 2002 - 2018 Webdetails, a Hitachi Vantara company. All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

/**
 * Configuration file for cde core
 */

(function() {

  /* globals KARMA_RUN, CONTEXT_PATH, FULL_QUALIFIED_URL, */

  requireCfg.map = requireCfg.map || {};
  requireCfg.map['*'] = requireCfg.map['*'] || {};
  requireCfg.packages = requireCfg.packages || [];

  var isDebug = typeof document === "undefined" || document.location.href.indexOf("debug=true") > 0;

  var componentsPath;
  if (typeof KARMA_RUN !== "undefined") { // unit tests
    requireCfg.paths['cde'] = 'src/main/javascript';
    componentsPath = 'src/main/javascript/components';

  } else {
    var cdeResources = 'plugin/pentaho-cdf-dd/api/resources';
    var cdeRepo = cdeResources + '/public/cde';
    var cdeComponents = cdeResources + '/resources' + (isDebug ? '/components' : '/components-compressed');

    if (typeof CONTEXT_PATH !== "undefined") { // production

      componentsPath = requireCfg.paths['cde/components'] = CONTEXT_PATH + cdeComponents;

      requireCfg.paths['cde/resources'] = CONTEXT_PATH + cdeResources;
      requireCfg.paths['cde/repo'] = CONTEXT_PATH + cdeRepo;

    } else if (typeof FULL_QUALIFIED_URL !== "undefined") { // embedded

      componentsPath = requireCfg.paths['cde/components'] = FULL_QUALIFIED_URL + cdeComponents;

      requireCfg.paths['cde/resources'] = FULL_QUALIFIED_URL + cdeResources;
      requireCfg.paths['cde/repo'] = FULL_QUALIFIED_URL + cdeRepo;

    } else { // build
      requireCfg.paths['cde'] = 'cde';
      componentsPath = 'cde/components';
    }
  }

  [
    'PopupComponent',
    'ExportButtonComponent',
    'AjaxRequestComponent',
    'CggComponent',
    'DuplicateComponent',
    'NewSelectorComponent',
    'RaphaelComponent',
    'RelatedContentComponent',
    'SiteMapComponent',
    'ViewManagerComponent',
    'GoogleAnalyticsComponent',
    'DashboardComponent',
    'NewMapComponent'          // moved from Pentaho
  ].forEach(function(component) {
    requireCfg.packages.push({
      name: 'cde/components/' + component,
      location: componentsPath + '/' + component + '/amd',
      main: component
    })
  });

  // components that share a common package location are mapped to the appropriate subfolder
  requireCfg.map['*']['cde/components/ExportPopupComponent'] = 'cde/components/PopupComponent/ExportPopupComponent';
  requireCfg.map['*']['cde/components/CggDialComponent'] = 'cde/components/CggComponent/CggDialComponent';

})();
/*!
 * Copyright 2002 - 2018 Webdetails, a Hitachi Vantara company. All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

/**
 * Configuration file for cde pentaho
 * Added in [PDB-1555]: Ability to include CDE dashboards in PDB
 */
if(typeof CONTEXT_PATH !== "undefined") { // production
  requireCfg['paths']['cde'] = CONTEXT_PATH + 'content/pentaho-cdf-dd/js';
}

(function() {

  requireCfg.config = requireCfg.config || {};
  requireCfg.packages = requireCfg.packages || [];

  var isDebug = typeof document === "undefined" || document.location.href.indexOf("debug=true") > 0;

  var basePath;
  var componentsPath;

  if(typeof KARMA_RUN !== "undefined") { // unit tests
    requireCfg.paths['cde'] = 'src/main/javascript';
    componentsPath = 'src/main/javascript/components';

  } else if(typeof CONTEXT_PATH !== "undefined") { // production

    requireCfg.paths['cde/components'] = CONTEXT_PATH + 'plugin/pentaho-cdf-dd/api/resources/resources/'
      + (isDebug ? 'components' : 'components-compressed');

    basePath = CONTEXT_PATH;
    componentsPath = basePath + 'plugin/pentaho-cdf-dd/api/resources/resources/' + (isDebug ? 'components' : 'components-compressed');

  } else if(typeof FULL_QUALIFIED_URL !== "undefined") { // embedded

    requireCfg.paths['cde/components'] = FULL_QUALIFIED_URL + 'plugin/pentaho-cdf-dd/api/resources/resources/'
      + (isDebug ? 'components' : 'components-compressed');

    basePath = FULL_QUALIFIED_URL;
    componentsPath = basePath + 'plugin/pentaho-cdf-dd/api/resources/resources/' + (isDebug ? 'components' : 'components-compressed');

  } else { // build
    componentsPath = 'cde/components';
  }

  // configure the CDE endpoint to be used by the dash! loader plugin
  requireCfg.config['dash'] = {
    'endpoint': basePath + 'plugin/pentaho-cdf-dd/api/renderer/getDashboard?path='
  };

  requireCfg.packages.push({
    name: 'cde/components/GMapsOverlayComponent',
    location: componentsPath + '/GMapsOverlayComponent/amd',
    main: 'GMapsOverlayComponent'
  },
  {
    name: 'cde/components/OlapSelectorComponent',
    location: componentsPath + '/OlapSelectorComponent/amd',
    main: 'OlapSelectorComponent'
  },
  {
    name: 'cde/components/TextEditorComponent',
    location: componentsPath + '/TextEditorComponent/amd',
    main: 'TextEditorComponent'
  });

})();
