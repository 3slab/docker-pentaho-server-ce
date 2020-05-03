define(["./UnmanagedComponent","../Logger","../dashboard/Utils","../dashboard/Sprintf","amd!../lib/underscore","../lib/jquery","amd!../lib/datatables","../addIns/colTypes","css!./theme/TableComponent"],function(UnmanagedComponent,Logger,Utils,sprintf,_,$){void 0!=$.fn.dataTableExt&&($.fn.dataTableExt.oApi.fnLengthChange=function(a,t){a._iDisplayLength=t,a.oApi._fnCalculateEnd(a),a._iDisplayEnd==a.aiDisplay.length&&(a._iDisplayStart=a._iDisplayEnd-a._iDisplayLength,a._iDisplayStart<0&&(a._iDisplayStart=0)),-1==a._iDisplayLength&&(a._iDisplayStart=0),a.oApi._fnDraw(a),$("select",a.oFeatures.l).val(t)},$.extend($.fn.dataTableExt.oSort,{"html-asc":function(a,t){var e=a.replace(/<.*?>/g,"").toLowerCase(),n=t.replace(/<.*?>/g,"").toLowerCase();return e<n?-1:e>n?1:0},"html-desc":function(a,t){var e=a.replace(/<.*?>/g,"").toLowerCase(),n=t.replace(/<.*?>/g,"").toLowerCase();return e<n?1:e>n?-1:0},"date-asc":function(a,t){var e=Date.parse(a),n=Date.parse(t);return(isNaN(e)||""===e)&&(e=Date.parse("01/01/1970 00:00:00")),(isNaN(n)||""===n)&&(n=Date.parse("01/01/1970 00:00:00")),e-n},"date-desc":function(a,t){var e=Date.parse(a),n=Date.parse(t);return(isNaN(e)||""===e)&&(e=Date.parse("01/01/1970 00:00:00")),(isNaN(n)||""===n)&&(n=Date.parse("01/01/1970 00:00:00")),n-e},"numeric-asc":function(a,t){return a="-"==a||""==a?0:$.isNumeric(a)?1*a:0,t="-"==t||""==t?0:$.isNumeric(t)?1*t:0,a<t?-1:a>t?1:0},"numeric-desc":function(a,t){return a="-"==a||""==a?0:$.isNumeric(a)?1*a:0,t="-"==t||""==t?0:$.isNumeric(t)?1*t:0,a<t?1:a>t?-1:0}})),void 0!=$.fn.DataTable&&void 0!=$.fn.DataTable.ext&&($.extend($.fn.DataTable.ext.classes,{sNoFooter:"",sPagePrevEnabled:"paginate_enabled_previous",sPagePrevDisabled:"paginate_disabled_previous",sPageNextEnabled:"paginate_enabled_next",sPageNextDisabled:"paginate_disabled_next"}),$.extend($.fn.DataTable.ext.oJUIClasses,{sNoFooter:"",sSortable:"",sSortAsc:"",sSortDesc:"",sSortColumn:"",sPagePrevEnabled:"fg-button ui-button ui-state-default ui-corner-left",sPagePrevDisabled:"fg-button ui-button ui-state-default ui-corner-left ui-state-disabled",sPageNextEnabled:"fg-button ui-button ui-state-default ui-corner-right",sPageNextDisabled:"fg-button ui-button ui-state-default ui-corner-right ui-state-disabled",sPageJUINext:"ui-icon ui-icon-circle-arrow-e",sPageJUIPrev:"ui-icon ui-icon-circle-arrow-w"}),$.extend($.fn.DataTable.ext.pager,{two_button:{fnInit:function(a,t,e){var n=(a.oLanguage.oPaginate,a.oClasses,function(t){a.oApi._fnPageChange(a,t.data.action)&&e(a)}),i=a.bJUI?'<a class="'+a.oClasses.sPagePrevDisabled+'" tabindex="'+a.iTabIndex+'" role="button"><span class="'+a.oClasses.sPageJUIPrev+'"></span></a><a class="'+a.oClasses.sPageNextDisabled+'" tabindex="'+a.iTabIndex+'" role="button"><span class="'+a.oClasses.sPageJUINext+'"></span></a>':'<a class="'+a.oClasses.sPagePrevDisabled+'" tabindex="'+a.iTabIndex+'" role="button"></a><a class="'+a.oClasses.sPageNextDisabled+'" tabindex="'+a.iTabIndex+'" role="button"></a>';$(t).append(i);var s=$("a",t),o=s[0],l=s[1];a.oApi._fnBindAction(o,{action:"previous"},n),a.oApi._fnBindAction(l,{action:"next"},n),a.aanFeatures.p||(t.id=a.sTableId+"_paginate",o.id=a.sTableId+"_previous",l.id=a.sTableId+"_next",o.setAttribute("aria-controls",a.sTableId),l.setAttribute("aria-controls",a.sTableId))},fnUpdate:function(a,t){if(a.aanFeatures.p)for(var e,n=a.oClasses,i=a.aanFeatures.p,s=0,o=i.length;s<o;s++)(e=i[s].firstChild)&&(e.className=0===a._iDisplayStart?n.sPagePrevDisabled:n.sPagePrevEnabled,e=e.nextSibling,e.className=a.fnDisplayEnd()==a.fnRecordsDisplay()?n.sPageNextDisabled:n.sPageNextEnabled)}}}));var TableComponent=UnmanagedComponent.extend({ph:void 0,update:function(){if(this.isDataPush=!1,this._throwIfDisposed(),this.preExec()){if(!this.htmlObject)return this.error("TableComponent requires an htmlObject");try{if(this.isSilent()||this.block(),this.setup(),this.chartDefinition.paginateServerside)return this.paginatingUpdate();var a=_.bind(function(a){this.rawData=a,this.processTableComponentResponse(a)},this),t=this.__getParameterValues(),e=this.getSuccessHandler(a);this.queryState.setAjaxOptions({async:!0});var n=this;this.queryState.fetchData(t,e,function(){n.failureCallback&&n.failureCallback(),n.isDataPush=!1,n._maybeUnblock(),n.trigger("cdf cdf:error",n,"",null)})}catch(a){Logger.exception(a),this.isSilent()||this.unblock()}}},__getParameterValues:function(){var a=[];return null!=this.parameters&&(a=$.extend(!0,[],this.parameters),a=_.map(a,function(a){return a[1]=this.dashboard.getParameterValue(a[1]),a},this)),a},paginatingUpdate:function(){this.extraOptions=this.extraOptions||[],this.extraOptions.push(["bServerSide",!0]),this.extraOptions.push(["bProcessing",!0]);var a=parseInt(this.chartDefinition.displayLength||10);this.queryState.setPageSize(a);var t=_.bind(function(a){var t;"function"==typeof this.postFetch&&(t=this.postFetch(a)),null!=t&&(a=t),this.processTableComponentResponse(a)},this);this.queryState.setCallback(t),this.parameters&&this.queryState.setParameters(this.parameters),this.queryState.setAjaxOptions({async:!0});var e=this;this.queryState.fetchData(this.parameters,t,function(){e.failureCallback&&e.failureCallback(),e.isDataPush=!1})},setup:function(){var a=this.chartDefinition;if(null==a)return void Logger.log("Fatal - No chart definition passed","error");if(void 0===a.tableStyle){var t=this.dashboard.getWcdfSettings().rendererType;a.tableStyle="bootstrap"===t?"bootstrap":"classic"}a.tableId=this.htmlObject+"Table";var e=this;$(this.expandParameters).each(function(a,t){e.dashboard.setParameter(t[1],"")});var n=$("#"+this.htmlObject);this.ph=this.clearsBeforePreExecution?n.empty():n;var i=$.extend({},a);i.drawCallback=void 0,this.queryState=this.dashboard.getQuery(i),this.query&&this.query.dispose(),this.query=this.queryState;for(var s=a.sortBy||[],o=[],l=0;l<s.length;l++){var r=s[l][0],d=s[l][1];o.push(r+("asc"===d?"A":"D"))}this.queryState.setSortBy(o)},pagingCallback:function(a,t,e,n,i,s){function o(a){for(var e=0,n=t.length;e<n;e++)if(t[e].name==a)return t[e].value;return null}var l=o("order"),r=[];if(l&&l.length>0)for(var d=0;d<l.length;d++){var c=l[d].column,p=l[d].dir;r.push(c+("asc"===p?"A":"D"))}var u=this.queryState;u.setSortBy(r.join(",")),u.setPageSize(parseInt(o("length"))),u.setPageStartingAt(o("start")),u.setSearchPattern(o("search")?o("search").value:"");var h=this,b=function(a){if(h.postFetch){var t=h.postFetch(a,n);void 0!==t&&(a=t)}var i;i=a.queryInfo?{iTotalRecords:a.queryInfo.totalRows,iTotalDisplayRecords:a.queryInfo.totalRows}:{iTotalRecords:a.resultset.length,iTotalDisplayRecords:a.resultset.length},i.aaData=a.resultset,i.sEcho=o("sEcho"),h.rawData=a,e(i)};s?(u.setCallback(b),b(i)):u.fetchData(b,function(){h.failureCallback&&h.failureCallback(),h.isDataPush=!1})},fnDrawCallback:function(dataTableSettings){for(var dataTable=dataTableSettings.oInstance,chartDefinition=this.chartDefinition,tableRows=this.ph.find("tbody tr"),k=0;k<tableRows.length;k++){if(null==dataTable.fnGetPosition(tableRows[k]))return!0;for(var tableData=$(tableRows[k]).children("td"),i=0;i<tableData.length;i++){var td=tableData[i],$td=$(td),position=dataTable.fnGetPosition(td);if(position&&"number"==typeof position[0]){var rowIdx=position[0],colIdx=position[2],foundAddIn=this.handleAddIns(dataTable,td,$td,rowIdx,colIdx);if(!foundAddIn&&chartDefinition.colFormats){var format=chartDefinition.colFormats[colIdx],value=this.rawData.resultset[rowIdx][colIdx];format&&null!=value&&$td.text(sprintf(format,value))}}}}if(void 0!=chartDefinition.urlTemplate){var td=$("#"+this.htmlObject+" td:nth-child(1)");td.addClass("cdfClickable"),td.bind("click",function(){var regex=new RegExp("{"+chartDefinition.parameterName+"}","g"),f=chartDefinition.urlTemplate.replace(regex,$(this).text());eval(f)})}"function"==typeof chartDefinition.drawCallback&&chartDefinition.drawCallback.apply(this,arguments)},fnInitComplete:function(){this.postExec(),this.isSilent()||this.unblock()},handleAddIns:function(a,t,e,n,i){var s=this.chartDefinition,o=s.colTypes[i],l={},r=e,d=this.rawData,c=this.getAddIn("colType",o);if(!c)return!1;try{if(!r.parents("tbody").length)return;return"TD"!==r.get(0).tagName&&(r=r.closest("td")),l.rawData=d,l.tableData=a.fnGetData(),l.colIdx=i,l.rowIdx=n,l.series=d.resultset[l.rowIdx][0],l.category=d.metadata[l.colIdx].colName,l.value=d.resultset[l.rowIdx][l.colIdx],s.colFormats&&(l.colFormat=s.colFormats[l.colIdx]),l.target=r,c.call(t,l,this.getAddInOptions("colType",c.getName())),!0}catch(a){return Logger.exception(a),!1}},processTableComponentResponse:function(a){var t=this,e=this.chartDefinition,n=this.ph;n.trigger("cdfTableComponentProcessResponse"),null!=this.dataTable&&this.__removePreviousDataTable(),void 0!==e.colHeaders&&e.colHeaders.length>0||(e.colHeaders=a.metadata.map(function(a){return a.colName})),void 0!==e.colTypes&&e.colTypes.length>0||(e.colTypes=a.metadata.map(function(a){return a.colType.toLowerCase()}));var i=this.__getDataTableOptions(e);if(i.fnDrawCallback=_.bind(this.fnDrawCallback,this),i.fnInitComplete=_.bind(this.fnInitComplete,this),i.bServerSide){var s=!0;i.fnServerData=function(e,n,i){t.pagingCallback(e,n,i,this,a,s),s=!1},a.queryInfo||(i.iDisplayLength=a.resultset.length,i.bLengthChange=!1,Logger.warn("Please use CDA queries to enable server-side pagination."))}a&&(i.aaData=a.resultset);var o=this.htmlObject+"Table",l="bootstrap"===i.tableStyle?"table table-striped table-bordered form-inline table-responsive":"tableComponent compact";n.html("<table id='"+o+"' class='"+l+"' width='100%'></table>"),this.dataTable=$("#"+o).dataTable(i),this.dataTable.anOpen=[],n.find("table").bind("click",function(a){if("function"==typeof e.clickAction||t.expandOnClick){var n={},i=$(a.target),s=t.rawData;if(!i.parents("tbody").length)return;if("TD"!==i.get(0).tagName&&(i=i.closest("td")),!t.dataTable.api(!0).cell(i.get(0)).index())return void Logger.warn("Click on invalid data detected.");n.rawData=t.rawData,n.tableData=t.dataTable.fnGetData();var o=t.dataTable.fnGetPosition(i.get(0));n.colIdx=o[2],n.rowIdx=o[0],n.series=s.resultset[n.rowIdx][0],n.category=s.metadata[n.colIdx].colName,n.value=s.resultset[n.rowIdx][n.colIdx],n.colFormat=e.colFormats[n.colIdx],n.target=i,t.expandOnClick&&t.handleExpandOnClick(n),e.clickAction&&e.clickAction.call(t,n)}}),n.trigger("cdfTableComponentFinishRendering")},__getDataTableOptions:function(a){var t=TableComponent.getDataTableOptions(a),e={};return $.each(null!=this.extraOptions?this.extraOptions:{},function(a,t){e[t[0]]=t[1]}),$.extend(a.dataTableOptions,t,e)},__removePreviousDataTable:function(){if(null!=this.dataTable){this.ph.find("table").unbind("click");this.dataTable.DataTable().clear().destroy(!0),this.dataTable=null}},handleExpandOnClick:function(a){var t="expandingClass";void 0===t&&(t="activeRow");var e=a.target.closest("tr");if(!a.target.closest("a").hasClass("info")){var n=this,i=e.get(0),s=this.dataTable.anOpen,o=$.inArray(i,s);if(e.hasClass(t))this.detachFromRow(i,o,t),$(this.expandParameters).each(function(a,t){n.dashboard.setParameter(t[1],"")});else{for(var l=0;l<s.length;l++)this.detachFromRow(s[l],l,t);e.addClass(t),this.attachToRow(i,t);var r=this.queryState.lastResults(),d=null;$(this.expandParameters).each(function(t,e){d||n.dashboard.getParameterValue(e[1])===r.resultset[a.rowIdx][parseInt(e[0],10)]?n.dashboard.setParameter(e[1],r.resultset[a.rowIdx][parseInt(e[0],10)]):d=e}),null!==d&&this.dashboard.fireChange(d[1],r.resultset[a.rowIdx][parseInt(d[0],10)])}$("td.expandingClass").click(function(a){a.stopPropagation()})}},attachToRow:function(a,t){this.dataTable.anOpen.push(a),this.dataTable.fnOpen(a,"",t);var e,n=$(a).next().children().empty();if(this.expandClone)e=this.expandClone;else{var i="#"+this.expandContainerObject;e=$(i),this.expandClone=e.clone(!0)}e.appendTo(n).show()},detachFromRow:function(a,t,e){$(a).next().find("td."+e+" > *").remove(),$(a).removeClass(e),this.dataTable.fnClose(a),this.dataTable.anOpen.splice(t,1),$(".dataTables_wrapper div.dataTables_paginate").off("click")}},{getDataTableOptions:function(options){var dataTableOptions={};if("themeroller"===options.tableStyle&&(dataTableOptions.bJQueryUI=!0),dataTableOptions.bInfo=options.info,dataTableOptions.iDisplayLength=options.displayLength,dataTableOptions.bLengthChange=options.lengthChange,dataTableOptions.bPaginate=options.paginate,dataTableOptions.bSort=options.sort,dataTableOptions.bFilter=options.filter,dataTableOptions.sPaginationType=options.paginationType,dataTableOptions.sDom=options.sDom,dataTableOptions.aaSorting=options.sortBy,dataTableOptions.tableStyle=options.tableStyle,"string"==typeof options.oLanguage?dataTableOptions.oLanguage=eval("("+options.oLanguage+")"):dataTableOptions.oLanguage=options.oLanguage,"string"==typeof options.language?dataTableOptions.language=eval("("+options.language+")"):dataTableOptions.language=options.language,void 0!=options.colHeaders){dataTableOptions.aoColumns=new Array(options.colHeaders.length);for(var i=0;i<options.colHeaders.length;i++)dataTableOptions.aoColumns[i]={},dataTableOptions.aoColumns[i].sClass="column"+i;$.each(options.colHeaders,function(a,t){dataTableOptions.aoColumns[a].sTitle=Utils.escapeHtml(t),""===t&&(dataTableOptions.aoColumns[a].bVisible=!1)}),0!==dataTableOptions.aoColumns.length&&void 0!=options.colTypes&&$.each(options.colTypes,function(a,t){if(a>=dataTableOptions.aoColumns.length)return!1;var e=dataTableOptions.aoColumns[a];"hidden"===t&&(e.bVisible=!1),e.sClass+=" "+t,e.sType=t}),options.colFormats;var bAutoWidth=!0;0!==dataTableOptions.aoColumns.length&&void 0!=options.colWidths&&$.each(options.colWidths,function(a,t){if(a>=dataTableOptions.aoColumns.length)return!1;null!=t&&(dataTableOptions.aoColumns[a].sWidth=t,bAutoWidth=!1)}),dataTableOptions.bAutoWidth=bAutoWidth,0!=dataTableOptions.aoColumns.length&&void 0!=options.colSortable&&$.each(options.colSortable,function(a,t){if(a>=dataTableOptions.aoColumns.length)return!1;null==t||t&&"false"!=t||(dataTableOptions.aoColumns[a].bSortable=!1)}),0!=dataTableOptions.aoColumns.length&&void 0!=options.colSearchable&&$.each(options.colSearchable,function(a,t){if(a>=dataTableOptions.aoColumns.length)return!1;null==t||t&&"false"!=t||(dataTableOptions.aoColumns[a].bSearchable=!1)})}return dataTableOptions}});return TableComponent});