(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["new"],{"0854":function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"deleteItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteItem"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:76}};i.loc.source={body:"mutation deleteItem($id: Int!) {\n    deleteItem(id: $id) {\n      id\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){t(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){t(e,n)}),e.definitions&&e.definitions.forEach(function(e){t(e,n)})}var a={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function l(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,l=new Set,s=new Set(t);while(s.size>0){var r=s;s=new Set,r.forEach(function(e){if(!l.has(e)){l.add(e);var n=a[e]||new Set;n.forEach(function(e){s.add(e)})}})}return l.forEach(function(n){var t=o(e,n);t&&i.definitions.push(t)}),i}(function(){i.definitions.forEach(function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})})(),e.exports=i,e.exports["deleteItem"]=l(i,"deleteItem")},"1a33":function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("layout-main",{attrs:{alignCenter:"","justify-center":""}},[t("apollo-query",{attrs:{query:i("aa63"),variables:{filter:{pagination:e.pagination,search:e.search}},fetchPolicy:"no-cache"},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.query,o=n.result,l=o.loading,s=(o.error,o.data);n.refetch;return[t("list-search",{on:{search:e.onSearch}}),t("v-toolbar",{attrs:{flat:"",color:"white"}},[t("v-spacer"),t("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:e.newItem}},[e._v("Neuer Eintrag")]),t("list-form",{attrs:{show:e.showDialog,item:e.editedItem},on:{"update:show":function(n){e.showDialog=n},saved:function(n){e.onSave(a)}}})],1),t("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:s&&s.list?s.list.rows:[],loading:l,pagination:e.pagination,"total-items":s&&s.list?s.list.count:0},on:{"update:pagination":function(n){e.pagination=n}},scopedSlots:e._u([{key:"items",fn:function(n){return[t("td",[e._v(e._s(n.item.id))]),t("td",[e._v(e._s(n.item.lesson))]),t("td",[e._v(e._s(n.item.type))]),t("td",{domProps:{innerHTML:e._s(e.transformText(n.item.de))}}),t("td",{domProps:{innerHTML:e._s(e.transformText(n.item.es))}}),t("td",{domProps:{innerHTML:e._s(e.transformText(n.item.info))}}),t("td",{domProps:{innerHTML:e._s(e.transformCheck(n.item.check))}}),t("td",{staticClass:"text-xs-right"},[0!==n.item.check?t("apollo-mutation",{attrs:{tag:"",mutation:i("a054"),variables:{id:n.item.id,check:0}},on:{done:function(n){e.reloadTable(a)}},scopedSlots:e._u([{key:"default",fn:function(n){var i=n.mutate;n.loading,n.error;return[t("v-icon",{on:{click:i}},[e._v("done_all")])]}}])}):e._e(),t("v-icon",{staticClass:"mr-2",on:{click:function(i){e.editItem(n.item)}}},[e._v("edit")]),t("apollo-mutation",{attrs:{tag:"",mutation:i("0854"),variables:{id:n.item.id}},on:{done:function(n){e.reloadTable(a)}},scopedSlots:e._u([{key:"default",fn:function(n){var i=n.mutate;n.loading,n.error;return[t("v-icon",{on:{click:function(n){e.doDelete(i)}}},[e._v("delete")])]}}])})],1)]}}])},[t("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"})],1)]}}])})],1)},a=[],o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-dialog",{attrs:{value:e.show,"max-width":"600px"},on:{input:e.close}},[t("apollo-mutation",{attrs:{mutation:i("dd48"),variables:{item:e.model}},on:{done:e.onDone},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.mutate,o=(n.loading,n.error);return t("v-card",{},[t("v-card-title",[t("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),t("v-card-text",[o?t("v-alert",{attrs:{value:!0,color:"error"}},[e._v("\n                    Es ist ein Fehler aufgetreten:"),t("br"),e._v("\n                    "+e._s(o.message)+"\n                ")]):e._e(),t("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(n){e.valid=n},expression:"valid"}},[t("apollo-query",{attrs:{query:i("49bd")},scopedSlots:e._u([{key:"default",fn:function(n){var i=n.result.data;return[t("v-combobox",{attrs:{"item-value":"name","item-text":"name",items:i?i.lessons:[],label:"Lektion","return-object":!1,required:"",rules:[e.requiredRules]},model:{value:e.model.lesson,callback:function(n){e.$set(e.model,"lesson",n)},expression:"model.lesson"}})]}}])}),t("v-select",{attrs:{items:e.types,label:"Typ",rules:[e.requiredRules],required:""},model:{value:e.model.type,callback:function(n){e.$set(e.model,"type",n)},expression:"model.type"}}),t("v-textarea",{attrs:{label:"Deutsch",rules:[e.requiredRules],required:""},model:{value:e.model.de,callback:function(n){e.$set(e.model,"de",n)},expression:"model.de"}}),t("v-textarea",{attrs:{label:"Spanisch",rules:[e.requiredRules],required:""},model:{value:e.model.es,callback:function(n){e.$set(e.model,"es",n)},expression:"model.es"}}),t("v-textarea",{attrs:{label:"Info"},model:{value:e.model.info,callback:function(n){e.$set(e.model,"info",n)},expression:"model.info"}})],1)],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"secondary",large:""},on:{click:e.close}},[e._v("Schließen")]),t("v-btn",{attrs:{color:"primary",large:""},on:{click:function(n){e.save(a,!0)}}},[e._v("Speichern")]),t("v-btn",{attrs:{color:"info",large:""},on:{click:function(n){e.save(a,!1)}}},[e._v("Speichern und Nächster")])],1)],1)}}])})],1)},l=[],s={props:{show:{type:Boolean,default:!1},item:{type:Object}},data:function(){return{closeOnDone:!0,valid:!0,model:{id:null,lesson:"",type:"word",de:"",es:"",info:""},types:[{text:"Vokabel",value:"word"},{text:"Zahl",value:"number"},{text:"Text",value:"text"}],created:!1,requiredRules:function(e){return!!e||"Pflichtfeld"}}},computed:{formTitle:function(){return null===this.item?"Neuer Eintrag":"Eintrag bearbeiten"}},methods:{close:function(){this.closeOnDone=!0,this.reset(),this.$emit("update:show",!1)},reset:function(){var e=this,n=this.model.lesson,i=this.model.type;this.$refs.form.reset(),this.model.id=null,this.$nextTick(function(){e.closeOnDone?e.model.type="word":(e.model.lesson=n,e.model.type=i)})},save:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.closeOnDone=n,this.$refs.form.validate()&&e()},onDone:function(){this.$emit("saved"),this.closeOnDone?this.close():this.reset()}},watch:{item:function(e){null!==e&&(this.model.id=e.id,this.model.lesson=e.lesson,this.model.type=e.type,this.model.de=e.de,this.model.es=e.es,this.model.info=e.info)}}},r=s,d=i("2877"),c=Object(d["a"])(r,o,l,!1,null,null,null);c.options.__file="Form.vue";var u=c.exports,m=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("v-form",[i("v-layout",{attrs:{"align-start":"",row:"","fill-height":""}},[i("v-flex",[i("v-container",{staticClass:"pa-0 ma-0",attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{"align-center":"",wrap:"","fill-height":""}},[i("v-flex",[i("v-text-field",{attrs:{label:"Id"},on:{keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13,n.key,"Enter")?e.search(n):null}},model:{value:e.model.id,callback:function(n){e.$set(e.model,"id",e._n(n))},expression:"model.id"}})],1),i("v-flex",[i("v-text-field",{attrs:{label:"Lektion"},on:{keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13,n.key,"Enter")?e.search(n):null}},model:{value:e.model.lesson,callback:function(n){e.$set(e.model,"lesson",n)},expression:"model.lesson"}})],1),i("v-flex",[i("v-text-field",{attrs:{label:"Typ"},on:{keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13,n.key,"Enter")?e.search(n):null}},model:{value:e.model.type,callback:function(n){e.$set(e.model,"type",n)},expression:"model.type"}})],1),i("v-flex",[i("v-text-field",{attrs:{label:"Deutsch"},on:{keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13,n.key,"Enter")?e.search(n):null}},model:{value:e.model.de,callback:function(n){e.$set(e.model,"de",n)},expression:"model.de"}})],1),i("v-flex",[i("v-text-field",{attrs:{label:"Spanisch"},on:{keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13,n.key,"Enter")?e.search(n):null}},model:{value:e.model.es,callback:function(n){e.$set(e.model,"es",n)},expression:"model.es"}})],1),i("v-flex",[i("v-checkbox",{attrs:{label:"Zu prüfen?",value:"1,2"},model:{value:e.model.check,callback:function(n){e.$set(e.model,"check",n)},expression:"model.check"}})],1)],1)],1)],1),i("div",{staticClass:"text-xs-center pl-4"},[i("v-btn",{attrs:{color:"secondary",large:""},on:{click:e.reset}},[i("v-icon",[e._v("cancel")])],1),i("v-btn",{attrs:{color:"primary",large:""},on:{click:e.search}},[i("v-icon",[e._v("search")])],1)],1)],1)],1)},f=[],v={data:function(){return{model:{id:"",type:"",lesson:"",de:"",es:"",check:""}}},methods:{reset:function(){this.model.id="",this.model.type="",this.model.lesson="",this.model.de="",this.model.es="",this.model.check="",this.$emit("search",{})},search:function(){var e=this,n={};Object.keys(this.model).forEach(function(i){""!==e.model[i]&&(n[i]=e.model[i])}),this.$emit("search",n)}}},k=v,h=Object(d["a"])(k,m,f,!1,null,null,null);h.options.__file="Search.vue";var p=h.exports,b={components:{ListForm:u,ListSearch:p},data:function(){return{pagination:{rowsPerPage:25},search:{},headers:[{text:"Id",value:"id"},{text:"Lektion",value:"lesson"},{text:"Typ",value:"type"},{text:"Deutsch",value:"de"},{text:"Spanisch",value:"es"},{text:"Info",value:"info"},{text:"Prüfen",value:"check"},{text:"Aktionen",value:"id",sortable:!1}],showDialog:!1,editedItem:null}},methods:{transformText:function(e){return null===e?"":e.replace(/\n/g,"<br>")},transformCheck:function(e){switch(e){case 1:return"Doppelt?";case 2:return"Fehler?";default:return""}},newItem:function(){this.editedItem=null,this.showDialog=!0},editItem:function(e){this.editedItem=Object.assign({},e),this.showDialog=!0},onSave:function(e){this.reloadTable(e),this.editedItem=null},onSearch:function(e){this.pagination.page=1,this.search=e},doDelete:function(e){this.$vuetifyConfirmDialog.open("Eintrag löschen","Wollen Sie den Eintrag wirklich löschen?","Abbrechen","Löschen").then(function(n){n&&e()}).catch(function(){})},reloadTable:function(e){e.refetch()}}},y=b,S=Object(d["a"])(y,t,a,!1,null,null,null);S.options.__file="List.vue";n["default"]=S.exports},"49bd":function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Lessons"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"lessons"},name:{kind:"Name",value:"getLessons"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:63}};i.loc.source={body:"query Lessons {\n    lessons: getLessons {\n        name\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){t(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){t(e,n)}),e.definitions&&e.definitions.forEach(function(e){t(e,n)})}var a={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function l(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,l=new Set,s=new Set(t);while(s.size>0){var r=s;s=new Set,r.forEach(function(e){if(!l.has(e)){l.add(e);var n=a[e]||new Set;n.forEach(function(e){s.add(e)})}})}return l.forEach(function(n){var t=o(e,n);t&&i.definitions.push(t)}),i}(function(){i.definitions.forEach(function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})})(),e.exports=i,e.exports["Lessons"]=l(i,"Lessons")},a054:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"deleteItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"check"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"checkItem"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"check"},value:{kind:"Variable",name:{kind:"Name",value:"check"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:104}};i.loc.source={body:"mutation deleteItem($id: Int!, $check: Int!) {\n    checkItem(id: $id, check: $check) {\n      id\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){t(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){t(e,n)}),e.definitions&&e.definitions.forEach(function(e){t(e,n)})}var a={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function l(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,l=new Set,s=new Set(t);while(s.size>0){var r=s;s=new Set,r.forEach(function(e){if(!l.has(e)){l.add(e);var n=a[e]||new Set;n.forEach(function(e){s.add(e)})}})}return l.forEach(function(n){var t=o(e,n);t&&i.definitions.push(t)}),i}(function(){i.definitions.forEach(function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})})(),e.exports=i,e.exports["deleteItem"]=l(i,"deleteItem")},aa63:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Items"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filter"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ListInput"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"list"},name:{kind:"Name",value:"list"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filter"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"rows"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lesson"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"de"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"es"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"info"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"check"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:197}};i.loc.source={body:"query Items ($filter: ListInput!) {\n    list: list(filter: $filter) {\n      rows {\n        id\n        lesson\n        type\n        de\n        es\n        info\n        check\n      }\n      count\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){t(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){t(e,n)}),e.definitions&&e.definitions.forEach(function(e){t(e,n)})}var a={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function l(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,l=new Set,s=new Set(t);while(s.size>0){var r=s;s=new Set,r.forEach(function(e){if(!l.has(e)){l.add(e);var n=a[e]||new Set;n.forEach(function(e){s.add(e)})}})}return l.forEach(function(n){var t=o(e,n);t&&i.definitions.push(t)}),i}(function(){i.definitions.forEach(function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})})(),e.exports=i,e.exports["Items"]=l(i,"Items")},dd48:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"saveItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"item"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ItemInput"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"saveItem"},arguments:[{kind:"Argument",name:{kind:"Name",value:"item"},value:{kind:"Variable",name:{kind:"Name",value:"item"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:84}};i.loc.source={body:"mutation saveItem($item: ItemInput!) {\n    saveItem(item: $item) {\n      id\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){t(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){t(e,n)}),e.definitions&&e.definitions.forEach(function(e){t(e,n)})}var a={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function l(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,l=new Set,s=new Set(t);while(s.size>0){var r=s;s=new Set,r.forEach(function(e){if(!l.has(e)){l.add(e);var n=a[e]||new Set;n.forEach(function(e){s.add(e)})}})}return l.forEach(function(n){var t=o(e,n);t&&i.definitions.push(t)}),i}(function(){i.definitions.forEach(function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})})(),e.exports=i,e.exports["saveItem"]=l(i,"saveItem")}}]);
//# sourceMappingURL=new.91e464e6.js.map