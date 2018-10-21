(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["practice"],{"086c":function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Practice"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filter"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ItemsFilter"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"practice"},name:{kind:"Name",value:"randomItems"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filter"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lesson"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"de"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"es"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"info"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:143}};t.loc.source={body:"query Practice ($filter: ItemsFilter!) {\n    practice: randomItems(filter: $filter) {\n      id\n      lesson\n      de\n      es\n      info\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){i(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){i(e,n)}),e.definitions&&e.definitions.forEach(function(e){i(e,n)})}var a={};function l(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}function s(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var i=a[n]||new Set,s=new Set,r=new Set(i);while(r.size>0){var o=r;r=new Set,o.forEach(function(e){if(!s.has(e)){s.add(e);var n=a[e]||new Set;n.forEach(function(e){r.add(e)})}})}return s.forEach(function(n){var i=l(e,n);i&&t.definitions.push(i)}),t}(function(){t.definitions.forEach(function(e){if(e.name){var n=new Set;i(e,n),a[e.name.value]=n}})})(),e.exports=t,e.exports["Practice"]=s(t,"Practice")},"3b32":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("layout-main",{attrs:{alignCenter:"","justify-center":""}},[e.showForm?i("practice-form",{on:{practice:e.startPractice}}):i("apollo-query",{attrs:{query:t("086c"),variables:{filter:e.practiceFilter}},scopedSlots:e._u([{key:"default",fn:function(n){var t=n.result,a=t.loading,l=(t.error,t.data);return[i("v-flex",{attrs:{xs12:""}},[a?i("v-progress-circular",{attrs:{size:70,width:7,color:"purple",indeterminate:""}}):l&&l.practice?i("practice-cards",{attrs:{language:e.language,items:l.practice}}):e._e()],1)]}}])})],1)},a=[],l=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("v-card",[i("v-card-text",[i("v-form",[i("apollo-query",{attrs:{query:t("49bd")},scopedSlots:e._u([{key:"default",fn:function(n){var t=n.result.data;return[i("v-select",{staticClass:"mb-4",attrs:{multiple:"",clearable:"","item-value":"name","item-text":"name",items:t?t.lessons:[],label:"Lektion",hint:"Für alle Lektion leer lassen","persistent-hint":""},model:{value:e.model.lessons,callback:function(n){e.$set(e.model,"lessons",n)},expression:"model.lessons"}})]}}])}),i("v-select",{staticClass:"mb-4",attrs:{items:e.types,label:"Typ",clearable:"",hint:"Für alle Typen leer lassen","persistent-hint":""},model:{value:e.model.type,callback:function(n){e.$set(e.model,"type",n)},expression:"model.type"}}),i("v-select",{staticClass:"mb-4",attrs:{items:e.language,label:"Sprache",hint:"Lege die Ausgangssprache fest","persistent-hint":""},model:{value:e.model.language,callback:function(n){e.$set(e.model,"language",n)},expression:"model.language"}}),i("v-select",{staticClass:"mb-4",attrs:{items:e.limits,label:"Limit"},model:{value:e.model.limit,callback:function(n){e.$set(e.model,"limit",n)},expression:"model.limit"}}),i("v-btn",{attrs:{color:"primary",large:""},on:{click:e.practice}},[e._v("Übung starten")])],1)],1)],1)},s=[],r={data:function(){return{model:{lessons:[],type:"",language:"de",limit:-1},types:[{text:"Vokabel",value:"word"},{text:"Zahl",value:"number"},{text:"Text",value:"text"}],language:[{text:"DE -> ES",value:"de"},{text:"ES -> DE",value:"es"}],limits:[{text:"Alle",value:-1},{text:"10",value:10},{text:"25",value:25},{text:"50",value:50},{text:"75",value:75},{text:"100",value:100}]}},methods:{practice:function(){this.$emit("practice",Object.assign({},this.model))}}},o=r,c=t("2877"),d=Object(c["a"])(o,l,s,!1,null,null,null);d.options.__file="Form.vue";var u=d.exports,m={components:{PracticeForm:u,PracticeCards:function(){return t.e("chunk-cfe48114").then(t.bind(null,"c18e"))}},data:function(){return{showForm:!0,practiceFilter:{},language:""}},methods:{startPractice:function(e){this.language=e.language,delete e.language,this.practiceFilter=e,this.showForm=!1}}},f=m,v=Object(c["a"])(f,i,a,!1,null,null,null);v.options.__file="Practice.vue";n["default"]=v.exports},"49bd":function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Lessons"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"lessons"},name:{kind:"Name",value:"getLessons"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:63}};t.loc.source={body:"query Lessons {\n    lessons: getLessons {\n        name\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){i(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){i(e,n)}),e.definitions&&e.definitions.forEach(function(e){i(e,n)})}var a={};function l(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}function s(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var i=a[n]||new Set,s=new Set,r=new Set(i);while(r.size>0){var o=r;r=new Set,o.forEach(function(e){if(!s.has(e)){s.add(e);var n=a[e]||new Set;n.forEach(function(e){r.add(e)})}})}return s.forEach(function(n){var i=l(e,n);i&&t.definitions.push(i)}),t}(function(){t.definitions.forEach(function(e){if(e.name){var n=new Set;i(e,n),a[e.name.value]=n}})})(),e.exports=t,e.exports["Lessons"]=s(t,"Lessons")}}]);
//# sourceMappingURL=practice.34a605c1.js.map