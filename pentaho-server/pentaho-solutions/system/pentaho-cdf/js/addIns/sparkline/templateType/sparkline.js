/*!
 * Copyright 2002 - 2019 Webdetails, a Hitachi Vantara company. All rights reserved.
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

define([
  '../../../AddIn',
  '../sparklineBase',
  '../../../Dashboard',
  'amd!../../../lib/underscore',
  '../../../lib/jquery',
  'css!./theme/sparkline'
], function(AddIn, sparklineBase, Dashboard, _, $) {

  var sparkline = new AddIn($.extend(true, {}, sparklineBase, {

    defaults: {
      type: 'bar'
    },

    getData: function(st, opt) {
      return _.map(st.value.split(','), function(elem) {
        return elem.trim();
      })
    }
  }));

  Dashboard.registerGlobalAddIn("Template", "templateType", sparkline);

  return sparkline;
});
