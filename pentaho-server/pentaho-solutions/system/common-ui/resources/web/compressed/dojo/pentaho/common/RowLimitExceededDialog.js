/*!
 * This program is free software; you can redistribute it and/or modify it under the
 * terms of the GNU Lesser General Public License, version 2.1 as published by the Free Software
 * Foundation.
 *
 * You should have received a copy of the GNU Lesser General Public License along with this
 * program; if not, you can obtain a copy at http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html
 * or from the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details.
 *
 * Copyright (c) 2002-2017 Hitachi Vantara. All rights reserved.
 */

define(["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dijit/_WidgetBase","dijit/_TemplatedMixin","pentaho/common/button","pentaho/common/Dialog","dojo/dom-style","dojo/dom-attr","dojo/text!pentaho/common/RowLimitExceededDialog.html"],function(t,o,e,i,n,s,a,c,l,m,d){return t("pentaho.common.RowLimitExceededDialog",[pentaho.common.Dialog],{_systemRowLimit:"",hasCloseIcon:!1,buttons:["OK"],_getLocaleString:void 0,templateString:d,cleanseSizeAttr:function(t,o){return void 0===t?o:(/.*px$/.exec(t)||(t+="px"),t)},showDialog:function(){this.show()},postCreate:function(){this.inherited(arguments),this.callbacks=[i.hitch(this,this.onCancel)]},registerLocalizationLookup:function(t){this._getLocaleString=t,this._localize()},_localize:function(){this._getLocaleString&&(this.setTitle(this._getLocaleString("RowLimitExceededDialogTitle")),this.rowLimitExceededDialogMessage.innerHTML=this._getLocaleString("SystemRowLimitExceededDialogMessage",this._systemRowLimit))},setSystemRowLimit:function(t){this._systemRowLimit=""+t,this._localize()}})});