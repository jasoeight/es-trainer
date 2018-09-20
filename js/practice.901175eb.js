(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["practice"],{"086c":function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Practice"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filter"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ItemsFilter"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"practice"},name:{kind:"Name",value:"randomItems"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filter"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"de"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"es"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:119}};t.loc.source={body:"query Practice ($filter: ItemsFilter!) {\n    practice: randomItems(filter: $filter) {\n      id\n      de\n      es\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){i(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){i(e,n)}),e.definitions&&e.definitions.forEach(function(e){i(e,n)})}var a={};function l(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}function r(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var i=a[n]||new Set,r=new Set,o=new Set(i);while(o.size>0){var s=o;o=new Set,s.forEach(function(e){if(!r.has(e)){r.add(e);var n=a[e]||new Set;n.forEach(function(e){o.add(e)})}})}return r.forEach(function(n){var i=l(e,n);i&&t.definitions.push(i)}),t}(function(){t.definitions.forEach(function(e){if(e.name){var n=new Set;i(e,n),a[e.name.value]=n}})})(),e.exports=t,e.exports["Practice"]=r(t,"Practice")},"3b32":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("layout-main",{attrs:{alignCenter:"","justify-center":""}},[e.showForm?i("practice-form",{on:{practice:e.startPractice}}):i("apollo-query",{attrs:{query:t("086c"),variables:{filter:e.practiceFilter}},scopedSlots:e._u([{key:"default",fn:function(n){var t=n.result,a=t.loading,l=(t.error,t.data);return[i("v-flex",{attrs:{xs12:""}},[a?i("v-progress-circular",{attrs:{size:70,width:7,color:"purple",indeterminate:""}}):l&&l.practice?i("practice-cards",{attrs:{language:e.language,items:l.practice}}):e._e()],1)]}}])})],1)},a=[],l=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("v-card",[i("v-card-text",[i("v-form",[i("apollo-query",{attrs:{query:t("49bd")},scopedSlots:e._u([{key:"default",fn:function(n){var t=n.result.data;return[i("v-select",{attrs:{"item-value":"name","item-text":"name",items:e.getLessonItems(t),label:"Lektion"},model:{value:e.model.lesson,callback:function(n){e.$set(e.model,"lesson",n)},expression:"model.lesson"}})]}}])}),i("v-select",{attrs:{items:e.types,label:"Typ"},model:{value:e.model.type,callback:function(n){e.$set(e.model,"type",n)},expression:"model.type"}}),i("v-select",{attrs:{items:e.language,label:"Sprache"},model:{value:e.model.language,callback:function(n){e.$set(e.model,"language",n)},expression:"model.language"}}),i("v-select",{attrs:{items:e.limits,label:"Limit"},model:{value:e.model.limit,callback:function(n){e.$set(e.model,"limit",n)},expression:"model.limit"}}),i("v-btn",{attrs:{color:"primary",large:""},on:{click:e.practice}},[e._v("Übung starten")])],1)],1)],1)},r=[],o={data:function(){return{model:{lesson:"Alle",type:"all",language:"de",limit:25},types:[{text:"Alle",value:"all"},{text:"Vokabel",value:"word"},{text:"Text",value:"text"}],language:[{text:"DE -> ES",value:"de"},{text:"ES -> DE",value:"es"}],limits:[{text:"Alle",value:-1},{text:"25",value:25},{text:"50",value:50},{text:"75",value:75},{text:"100",value:100}]}},methods:{getLessonItems:function(e){var n=[{name:"Alle"}];return e&&(n=n.concat(e.lessons)),n},practice:function(){this.$emit("practice",Object.assign({},this.model))}}},s=o,c=t("2877"),d=Object(c["a"])(s,l,r,!1,null,null,null);d.options.__file="Form.vue";var u=d.exports,m={components:{PracticeForm:u,PracticeCards:function(){return t.e("chunk-2d2160d1").then(t.bind(null,"c18e"))}},data:function(){return{showForm:!0,practiceFilter:{},language:""}},methods:{startPractice:function(e){this.language=e.language,delete e.language,this.practiceFilter=e,this.showForm=!1}}},f=m,v=Object(c["a"])(f,i,a,!1,null,null,null);v.options.__file="Practice.vue";n["default"]=v.exports},"49bd":function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Lessons"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"lessons"},name:{kind:"Name",value:"getLessons"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:63}};t.loc.source={body:"query Lessons {\n    lessons: getLessons {\n        name\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){i(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){i(e,n)}),e.definitions&&e.definitions.forEach(function(e){i(e,n)})}var a={};function l(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}function r(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var i=a[n]||new Set,r=new Set,o=new Set(i);while(o.size>0){var s=o;o=new Set,s.forEach(function(e){if(!r.has(e)){r.add(e);var n=a[e]||new Set;n.forEach(function(e){o.add(e)})}})}return r.forEach(function(n){var i=l(e,n);i&&t.definitions.push(i)}),t}(function(){t.definitions.forEach(function(e){if(e.name){var n=new Set;i(e,n),a[e.name.value]=n}})})(),e.exports=t,e.exports["Lessons"]=r(t,"Lessons")}}]);
//# sourceMappingURL=practice.901175eb.js.map