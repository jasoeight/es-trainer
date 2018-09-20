(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["new"],{"0854":function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"deleteItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteItem"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:76}};t.loc.source={body:"mutation deleteItem($id: Int!) {\n    deleteItem(id: $id) {\n      id\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){i(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){i(e,n)}),e.definitions&&e.definitions.forEach(function(e){i(e,n)})}var a={};function o(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}function s(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var i=a[n]||new Set,s=new Set,l=new Set(i);while(l.size>0){var r=l;l=new Set,r.forEach(function(e){if(!s.has(e)){s.add(e);var n=a[e]||new Set;n.forEach(function(e){l.add(e)})}})}return s.forEach(function(n){var i=o(e,n);i&&t.definitions.push(i)}),t}(function(){t.definitions.forEach(function(e){if(e.name){var n=new Set;i(e,n),a[e.name.value]=n}})})(),e.exports=t,e.exports["deleteItem"]=s(t,"deleteItem")},"1a33":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("layout-main",{attrs:{alignCenter:"","justify-center":""}},[i("apollo-query",{attrs:{query:t("aa63"),variables:{filter:{pagination:e.pagination,search:e.search}}},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.query,o=n.result,s=o.loading,l=(o.error,o.data);return[i("list-search",{on:{search:e.onSearch}}),i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-spacer"),i("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:e.newItem}},[e._v("Neuer Eintrag")]),i("list-form",{attrs:{show:e.showDialog,item:e.editedItem},on:{"update:show":function(n){e.showDialog=n},saved:function(n){e.onSave(a)}}})],1),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:l?l.list.rows:[],loading:s,pagination:e.pagination,"total-items":l?l.list.count:0},on:{"update:pagination":function(n){e.pagination=n}},scopedSlots:e._u([{key:"items",fn:function(n){return[i("td",[e._v(e._s(n.item.id))]),i("td",[e._v(e._s(n.item.lesson))]),i("td",[e._v(e._s(n.item.type))]),i("td",[e._v(e._s(n.item.de))]),i("td",[e._v(e._s(n.item.es))]),i("td",[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){e.editItem(n.item)}}},[e._v("edit")]),i("apollo-mutation",{attrs:{tag:"",mutation:t("0854"),variables:{id:n.item.id}},on:{done:function(n){e.reloadTable(a)}},scopedSlots:e._u([{key:"default",fn:function(n){var t=n.mutate;n.loading,n.error;return[i("v-icon",{attrs:{small:""},on:{click:function(n){e.doDelete(t)}}},[e._v("delete")])]}}])})],1)]}}])},[i("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"})],1)]}}])})],1)},a=[],o=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("v-dialog",{attrs:{value:e.show,"max-width":"600px"}},[i("apollo-mutation",{attrs:{mutation:t("dd48"),variables:{item:{id:e.model.id,lesson:e.model.lesson,type:e.model.type,de:e.model.de,es:e.model.es}}},on:{done:e.onDone},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.mutate,o=(n.loading,n.error);return i("v-card",{},[i("v-card-title",[i("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),i("v-card-text",[o?i("v-alert",{attrs:{value:!0,color:"error"}},[e._v("\n                    Es ist ein Fehler aufgetreten:"),i("br"),e._v("\n                    "+e._s(o.message)+"\n                ")]):e._e(),i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(n){e.valid=n},expression:"valid"}},[i("apollo-query",{attrs:{query:t("49bd")},scopedSlots:e._u([{key:"default",fn:function(n){var t=n.result.data;return[i("v-combobox",{attrs:{"item-value":"name","item-text":"name",items:t?t.lessons:[],label:"Lektion","return-object":!1,required:"",rules:[e.requiredRules]},model:{value:e.model.lesson,callback:function(n){e.$set(e.model,"lesson",n)},expression:"model.lesson"}})]}}])}),i("v-select",{attrs:{items:e.types,label:"Typ",rules:[e.requiredRules],required:""},model:{value:e.model.type,callback:function(n){e.$set(e.model,"type",n)},expression:"model.type"}}),i("v-textarea",{attrs:{label:"Deutsch",rules:[e.requiredRules],required:""},model:{value:e.model.de,callback:function(n){e.$set(e.model,"de",n)},expression:"model.de"}}),i("v-textarea",{attrs:{label:"Spanisch",rules:[e.requiredRules],required:""},model:{value:e.model.es,callback:function(n){e.$set(e.model,"es",n)},expression:"model.es"}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"secondary",large:""},on:{click:e.close}},[e._v("Schließen")]),i("v-btn",{attrs:{color:"primary",large:""},on:{click:function(n){e.save(a,!0)}}},[e._v("Speichern")]),i("v-btn",{attrs:{color:"info",large:""},on:{click:function(n){e.save(a,!1)}}},[e._v("Speichern und Nächster")])],1)],1)}}])})],1)},s=[],l={props:{show:{type:Boolean,default:!1},item:{type:Object}},data:function(){return{closeOnDone:!0,valid:!0,model:{id:null,lesson:"",type:"word",de:"",es:""},types:[{text:"Vokabel",value:"word"},{text:"Text",value:"text"}],created:!1,requiredRules:function(e){return!!e||"Pflichtfeld"}}},computed:{formTitle:function(){return null===this.item?"Neuer Eintrag":"Eintrag bearbeiten"}},methods:{close:function(){this.reset(),this.$emit("update:show",!1)},reset:function(){this.model.id=null,this.model.lesson="",this.model.type="word",this.model.de="",this.model.es="",this.$refs.form.reset()},save:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.closeOnDone=n,this.$refs.form.validate()&&e()},onDone:function(){this.$emit("saved"),this.closeOnDone?this.close():this.reset()}},watch:{item:function(e){null!==e&&(this.model.id=e.id,this.model.lesson=e.lesson,this.model.type=e.type,this.model.de=e.de,this.model.es=e.es)}}},r=l,d=t("2877"),c=Object(d["a"])(r,o,s,!1,null,null,null);c.options.__file="Form.vue";var u=c.exports,m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-form",[t("v-container",[t("v-layout",{attrs:{row:"","no-wrap":""}},[t("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[t("v-text-field",{attrs:{label:"Id"},model:{value:e.model.id,callback:function(n){e.$set(e.model,"id",n)},expression:"model.id"}})],1),t("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[t("v-text-field",{attrs:{label:"Lektion"},model:{value:e.model.lesson,callback:function(n){e.$set(e.model,"lesson",n)},expression:"model.lesson"}})],1),t("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[t("v-text-field",{attrs:{label:"Typ"},model:{value:e.model.type,callback:function(n){e.$set(e.model,"type",n)},expression:"model.type"}})],1),t("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[t("v-text-field",{attrs:{label:"Deutsch"},model:{value:e.model.de,callback:function(n){e.$set(e.model,"de",n)},expression:"model.de"}})],1),t("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[t("v-text-field",{attrs:{label:"Spanisch"},model:{value:e.model.es,callback:function(n){e.$set(e.model,"es",n)},expression:"model.es"}})],1),t("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[t("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.reset}},[e._v("Reset")]),t("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.search}},[e._v("Suchen")])],1)],1)],1)],1)},f=[],v={data:function(){return{model:{id:"",type:"",lesson:"",de:"",es:""}}},methods:{reset:function(){this.model.id="",this.model.type="",this.model.lesson="",this.model.de="",this.model.es="",this.$emit("search",{})},search:function(){var e=this,n={};Object.keys(this.model).forEach(function(t){""!==e.model[t]&&(n[t]=e.model[t])}),this.$emit("search",n)}}},h=v,p=Object(d["a"])(h,m,f,!1,null,null,null);p.options.__file="Search.vue";var k=p.exports,b={components:{ListForm:u,ListSearch:k},data:function(){return{pagination:{rowsPerPage:25},search:{},headers:[{text:"Id",value:"id"},{text:"Lektion",value:"lesson"},{text:"Typ",value:"type"},{text:"Deutsch",value:"de"},{text:"Spanisch",value:"es"},{text:"Aktionen",value:"id",sortable:!1}],showDialog:!1,editedItem:null}},methods:{newItem:function(){this.editedItem=null,this.showDialog=!0},editItem:function(e){this.editedItem=Object.assign({},e),this.showDialog=!0},onSave:function(e){this.reloadTable(e),this.editedItem=null},onSearch:function(e){this.pagination.page=1,this.search=e},doDelete:function(e){this.$vuetifyConfirmDialog.open("Eintrag löschen","Wollen Sie den Eintrag wirklich löschen?","Abbrechen","Löschen").then(function(n){n&&e()}).catch(function(){})},reloadTable:function(e){e.refetch()}}},S=b,y=Object(d["a"])(S,i,a,!1,null,null,null);y.options.__file="List.vue";n["default"]=y.exports},"49bd":function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Lessons"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"lessons"},name:{kind:"Name",value:"getLessons"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:63}};t.loc.source={body:"query Lessons {\n    lessons: getLessons {\n        name\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){i(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){i(e,n)}),e.definitions&&e.definitions.forEach(function(e){i(e,n)})}var a={};function o(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}function s(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var i=a[n]||new Set,s=new Set,l=new Set(i);while(l.size>0){var r=l;l=new Set,r.forEach(function(e){if(!s.has(e)){s.add(e);var n=a[e]||new Set;n.forEach(function(e){l.add(e)})}})}return s.forEach(function(n){var i=o(e,n);i&&t.definitions.push(i)}),t}(function(){t.definitions.forEach(function(e){if(e.name){var n=new Set;i(e,n),a[e.name.value]=n}})})(),e.exports=t,e.exports["Lessons"]=s(t,"Lessons")},aa63:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Items"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filter"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ListInput"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"list"},name:{kind:"Name",value:"list"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filter"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"rows"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lesson"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"de"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"es"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:170}};t.loc.source={body:"query Items ($filter: ListInput!) {\n    list: list(filter: $filter) {\n      rows {\n        id\n        lesson\n        type\n        de\n        es\n      }\n      count\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){i(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){i(e,n)}),e.definitions&&e.definitions.forEach(function(e){i(e,n)})}var a={};function o(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}function s(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var i=a[n]||new Set,s=new Set,l=new Set(i);while(l.size>0){var r=l;l=new Set,r.forEach(function(e){if(!s.has(e)){s.add(e);var n=a[e]||new Set;n.forEach(function(e){l.add(e)})}})}return s.forEach(function(n){var i=o(e,n);i&&t.definitions.push(i)}),t}(function(){t.definitions.forEach(function(e){if(e.name){var n=new Set;i(e,n),a[e.name.value]=n}})})(),e.exports=t,e.exports["Items"]=s(t,"Items")},dd48:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"saveItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"item"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ItemInput"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"saveItem"},arguments:[{kind:"Argument",name:{kind:"Name",value:"item"},value:{kind:"Variable",name:{kind:"Name",value:"item"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:84}};t.loc.source={body:"mutation saveItem($item: ItemInput!) {\n    saveItem(item: $item) {\n      id\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){i(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){i(e,n)}),e.definitions&&e.definitions.forEach(function(e){i(e,n)})}var a={};function o(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}function s(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var i=a[n]||new Set,s=new Set,l=new Set(i);while(l.size>0){var r=l;l=new Set,r.forEach(function(e){if(!s.has(e)){s.add(e);var n=a[e]||new Set;n.forEach(function(e){l.add(e)})}})}return s.forEach(function(n){var i=o(e,n);i&&t.definitions.push(i)}),t}(function(){t.definitions.forEach(function(e){if(e.name){var n=new Set;i(e,n),a[e.name.value]=n}})})(),e.exports=t,e.exports["saveItem"]=s(t,"saveItem")}}]);
//# sourceMappingURL=new.b83644cc.js.map