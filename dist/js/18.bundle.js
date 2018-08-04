(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{333:function(e,t,a){"use strict";t.__esModule=!0;var n=function(e){return e&&e.__esModule?e:{default:e}}(a(793));t.default=n.default},380:function(e,t,a){"use strict";t.__esModule=!0,t.ErrorLogger=t.Input=t.deleteBtn=t.Button=t.Footer=t.subItem=t.item=t.dropdown=t.title=t.row=t.heading=t.Header=t.HeaderWrapper=t.card=void 0;var n=a(347),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.card=(0,n.css)("width:100%;max-width:980px;margin:25px auto;background-color:#fff;border-radius:3px;box-shadow:0 3px 5px 0 rgba(0,0,0,0.05);box-sizing:border-box;i{margin:3px 3px 0px 8px;}"),t.HeaderWrapper=(0,r.default)("div",{target:"e1tvtz600"})("display:flex;flex-direction:column;align-items:flex-start;justify-content:center;p{font-size:13px;margin:6px 0 0;color:#999;}"),t.Header=(0,r.default)("header",{target:"e1tvtz601"})("display:flex;flex-direction:row;justify-content:space-between;font-weight:600;padding-top:20px;.col{min-width:150px;display:inline-flex;margin:0 0 0 12px;text-align:center;&:first-child{margin:0;}&.col--grow{flex-grow:1;}}"),t.heading=(0,n.css)("font-size:16px;letter-spacing:0.015rem;font-weight:600;margin:0;padding:0;"),t.row=(0,n.css)("box-sizing:border-box;background-color:rgba(0,0,0,0.02);padding:15px 0 15px 15px;margin:15px 0;border:1px solid rgba(0,0,0,0.05);"),t.title=(0,n.css)("font-size:15px;letter-spacing:0.015rem;font-weight:600;margin:0 0 12px 0;padding:0;"),t.dropdown=(0,n.css)("width:auto;min-width:150px;height:34px;border:1px solid #f8f8f8;box-shadow:0 3px 5px 0 rgba(0,0,0,0.05);background-color:#fff;border-radius:2px;outline-color:#c7f4ff;margin-left:12px;padding:6px 15px 6px 6px;text-transform:capitalize;"),t.item=(0,n.css)("display:flex;flex-direction:row;justify-content:space-between;padding:10px;margin-bottom:2px;align-items:center;background-color:rgba(255,255,255,0.8);"),t.subItem=(0,n.css)("display:flex;flex-direction:row;align-items:center;"),t.Footer=(0,r.default)("footer",{target:"e1tvtz602"})("position:sticky;bottom:0;width:100%;height:66px;box-shadow:0 -3px 5px 0 rgba(0,0,0,0.02);background-color:#fff;transition:all .3s ease;border-bottom-left-radius:3px;border-bottom-right-radius:3px;padding:0 20px;display:flex;flex-direction:row-reverse;align-items:center;"),t.Button=(0,r.default)("a",{target:"e1tvtz603"})("display:inline-flex;height:42px;padding:0 20px;justify-content:center;align-items:center;color:#53683b;font-weight:600;background-color:",function(e){return e.ghost?"#efefef":"#b6ef7e"},";;text-transform:uppercase;box-shadow:0 3px 3px 0 rgba(0,0,0,0.1);cursor:pointer;margin-left:12px;&:hover,&:focus{background-color:",function(e){return e.ghost?"#fafafa":"#c3f295"},";box-shadow:0 5px 5px 0 rgba(0,0,0,0.1);text-decoration:none;}"),t.deleteBtn=(0,n.css)("display:flex;flex-grow:1;alignItems:center;flex-direction:row;cursor:pointer;span{max-width:calc(100% - 40px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}a{display:none;cursor:pointer;color:#444;margin-left:15px;transition:all .3s ease;}&:hover a,&:focus a{display:inline;&:hover,&:focus{color:#222;}}"),t.Input=(0,r.default)("input",{target:"e1tvtz604"})("diplay:flex;flex-grow:1;min-width:150px;height:34px;border:1px solid #f8f8f8;box-shadow:0 3px 5px 0 rgba(0,0,0,0.05);background-color:#fff;border-radius:2px;outline-color:#c7f4ff;padding:5px;"),t.ErrorLogger=(0,r.default)("pre",{target:"e1tvtz605"})("height:auto;max-height:200px;overflow-y:scroll;width:100%;background-color:#eee;padding:10px;font-family:monospace;font-size:14px;")},411:function(e,t,a){"use strict";t.__esModule=!0,t.getCredentials=function(e){return new Promise(function(t,a){fetch(n+"/app/"+e+"/permissions",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){var a=e.body.find(function(e){return e.read&&e.write&&e.referers.includes("*")&&e.include_fields.includes("*")});a||(a=e.body.find(function(e){return e.read&&e.write&&e.referers.includes("*")})),a||(a=e.body.find(function(e){return e.read&&e.write})),a||(a=e.body.find(function(e){return e.read})),t(a)}).catch(function(e){a(e)})})},t.checkUserStatus=function(){return new Promise(function(e,t){fetch(n+"/user",{method:"GET",credentials:"include",headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return e.body.c_id?e.body.c_id:(t(),null)}).then(o).then(function(e){return e.json()}).then(function(t){t.message&&"free"!==t.plan||e({isPaidUser:!1,plan:"free"}),e({isPaidUser:!0,plan:t.plan})}).catch(function(){t()})})};var n=t.ACC_API="https://accapi.appbase.io",r=(t.SCALR_API="https://scalr.api.appbase.io",t.BILLING_API="https://transactions.appbase.io");function o(e){return fetch(r+"/api/me",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({c_id:e})})}},458:function(e,t,a){"use strict";t.__esModule=!0;var n=function(e){return e&&e.__esModule?e:{default:e}}(a(524));t.default=n.default},476:function(e,t,a){"use strict";t.__esModule=!0;var n=i(a(1)),r=i(a(458)),o=a(380);function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return n.default.createElement(r.default,{show:e.show,onClose:e.onClose},n.default.createElement("h3",null,e.errorLength?e.errorLength+" records failed to index":"An error occured"),e.message?n.default.createElement("p",null,e.message):n.default.createElement("p",null,"To prevent data loss, we have restored your original mappings. You can fix"," ",e.errorLength?"these":"this"," and retry."),e.error?n.default.createElement(o.ErrorLogger,null,e.error):null,n.default.createElement("div",{style:{display:"flex",flexDirection:"row-reverse",margin:"10px 0"}},n.default.createElement(o.Button,{ghost:!0,onClick:e.onClose},"Close")))};l.displayName="ErrorModal",t.default=l},500:function(e,t,a){"use strict";t.__esModule=!0,t.default={aggs:{fields:{keyword:{type:"keyword"}},analyzer:"standard",search_analyzer:"standard"},search:{fields:{search:{type:"text",index:"analyzed",analyzer:"ngram_analyzer",search_analyzer:"simple"},autosuggest:{type:"text",index:"analyzed",analyzer:"autosuggest_analyzer",search_analyzer:"simple"}},analyzer:"standard",search_analyzer:"standard"},searchaggs:{fields:{keyword:{type:"keyword",index:"not_analyzed"},search:{type:"text",index:"analyzed",analyzer:"ngram_analyzer",search_analyzer:"simple"},autosuggest:{type:"text",index:"analyzed",analyzer:"autosuggest_analyzer",search_analyzer:"simple"}},analyzer:"standard",search_analyzer:"standard"},none:{}}},501:function(e,t,a){"use strict";t.__esModule=!0,t.REMOVED_KEYS=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.getMappings=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.SCALR_API;return new Promise(function(n,o){fetch(a+"/"+e+"/_mapping",{method:"GET",credentials:"include",headers:r({},function(e){if(e)return{Authorization:"Basic "+btoa(e)};return{}}(t),{"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(t){var a=Object.keys(t[e].mappings).filter(function(e){return!u.includes(e)}),o={};a.forEach(function(a){var n;o=r({},o,((n={})[a]=t[e].mappings[a],n))}),n(o)}).catch(function(e){o(e)})})},t.reIndex=function(e,t,a){var n={mappings:e,settings:i.default,exclude_fields:a,es_version:"5"};return new Promise(function(e,a){fetch("https://accapi-staging.bottleneck.io/app/"+t+"/reindex",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(t){t.error&&a(t.error),t.body&&t.body.response_info.failures.length&&a(t.body.response_info.failures),e(t.body.response_info.took)}).catch(function(e){a(e)})})},t.hasAggs=c,t.transformToES5=function e(t){var a=r({},t);Object.keys(a).every(function(t){if(d.includes(t))return!1;if("string"===a[t].type){var i,l=!!a[t].fields,s=r({},a[t]);l&&(a[t].fields.search?s=o.default.search:c(a[t].field)&&(s=o.default.aggs)),a=r({},a,((i={})[t]=r({},s,{type:"text"}),i))}else if("object"===n(a[t])&&!Array.isArray(a[t])){var u;a=r({},a,((u={})[t]=r({},a[t],e(a[t])),u))}return!0});return a},t.updateMapping=function e(t,a,i,l){var s=r({},t);Object.keys(s).every(function(t){if(d.includes(t))return!1;if(t===a){var u,c={};l&&(c=o.default[l]),s=r({},s,((u={})[t]=r({},c,{type:i}),u))}else if("object"===n(s[t])&&!Array.isArray(s[t])){var p;s=r({},s,((p={})[t]=r({},s[t],e(s[t],a,i,l)),p))}return!0});return s},t.traverseMapping=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return Object.keys(e).forEach(function(a){return function(e,a){t[a]=[],function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n.properties&&Object.keys(n.properties).forEach(function(o){t[a].push(""+r+o);var i=n.properties[o];i&&i.properties&&e(i,""+r+o+".")})}(e)}(e[a],a)}),t},t.getMappingsTree=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return Object.keys(e).forEach(function(a){e[a].properties&&(t=r({},t,function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n={};return Object.keys(t).forEach(function(o){if(t[o].properties)n=r({},n,e(t[o].properties,o));else{var i,l=t[o].fields;n=r({},n,((i={})[(a?a+".":"")+o]={type:t[o].type,fields:t[o].fields?Object.keys(t[o].fields):[],originalFields:l||{}},i))}}),n}(e[a].properties,null)))}),t};var o=s(a(500)),i=s(a(568)),l=a(411);function s(e){return e&&e.__esModule?e:{default:e}}var d=["meta"],u=t.REMOVED_KEYS=["~logs","~percolator",".logs",".percolator","_default_"];function c(e){if(!e)return!1;var t=!1;return Object.keys(e).forEach(function(a){("keyword"===e[a].type||"string"===e[a].type&&"not_analyzed"===e[a].index)&&(t=!0)}),t}},523:function(e,t,a){"use strict";t.__esModule=!0,t.Overlay=t.Wrapper=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(a(347));t.Wrapper=(0,n.default)("div",{target:"ef1aeaw0"})("display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:999;position:fixed;top:0;left:0;width:100%;height:100%;.modal-wrapper{width:100%;max-width:800px;height:auto;background-color:#fff;border-radius:3px;padding:25px 30px;position:relative;z-index:1;h3{font-size:20px;font-weight:600;margin:12px 0 20px;}}"),t.Overlay=(0,n.default)("div",{target:"ef1aeaw1"})("position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.7);")},524:function(e,t,a){"use strict";t.__esModule=!0;var n=function(e){return e&&e.__esModule?e:{default:e}}(a(1)),r=a(523);t.default=function(e){return e.show?n.default.createElement(r.Wrapper,null,n.default.createElement(r.Overlay,{onClick:e.onClose}),n.default.createElement("div",{className:"modal-wrapper"},e.children)):null}},568:function(e,t,a){"use strict";t.__esModule=!0,t.default={analysis:{analyzer:{autosuggest_analyzer:{filter:["lowercase","asciifolding","autosuggest_filter"],tokenizer:"standard",type:"custom"},ngram_analyzer:{filter:["lowercase","asciifolding","ngram_filter"],tokenizer:"standard",type:"custom"}},filter:{autosuggest_filter:{max_gram:"20",min_gram:"1",token_chars:["letter","digit","punctuation","symbol"],type:"edge_ngram"},ngram_filter:{max_gram:"9",min_gram:"2",token_chars:["letter","digit","punctuation","symbol"],type:"ngram"}}}}},609:function(e,t,a){"use strict";t.__esModule=!0,t.default={text:[],object:[],integer:["float","long","text"],long:["integer","text"],float:["integer","double","text"],double:["integer","float","text"],date:["text"],geo_point:["text"],geo_shape:["text"],boolean:["text"]}},610:function(e,t,a){"use strict";t.__esModule=!0,t.default={search:"Search",aggs:"Aggs",searchaggs:"Search & Aggs",none:"None"}},790:function(e,t,a){"use strict";t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(1),o=p(r),i=p(a(141)),l=a(526);a(525);var s=p(a(458)),d=a(380),u=p(a(609)),c=p(a(610));function p(e){return e&&e.__esModule?e:{default:e}}var f=function(){return o.default.createElement("div",{style:{maxWidth:250}},"Add a nested field by using the dot (.) notation, e.g. foo.bar will create a mapping like:",o.default.createElement("pre",{style:{marginTop:5,padding:10,backgroundColor:"#eee"}},"foo: {\n    bar: { ... }\n}"))},g=function(){return o.default.createElement("div",{style:{maxWidth:250}},"Based on the primary use case, whether search or aggregations, we will add the appropriate analyzers, mappings to ensure best results when performing the action")},h=function(e){function t(a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,a));return r.getInitialState=function(){return{esType:r.props.types[0]||"",name:"",usecase:"search",type:"text",error:""}},r.handleEsTypeChange=function(e){var t=e.label;r.setState({esType:t})},r.handleNewFieldChange=function(e){var t,a=e.target,o=a.name,i=a.value;r.setState(n({},r.state.new,((t={})[o]=i,t)))},r.addField=function(){var e=r.state,t=e.esType,a=e.name,n=e.usecase,o=e.type,i=r.props.deletedPaths.map(function(e){return e.split(".properties.").join(".")}),l=t+"."+a;a&&i.includes(l)?r.setState({error:"You're trying to add a field which you just deleted. This will result in loss of data."}):a?(r.props.addField({name:l,type:o,usecase:"text"===o?n:null}),r.setState(function(){return r.getInitialState()}),r.props.onClose()):(r.input.focus(),r.setState({error:"Please enter a valid field name"}))},r.usecases=c.default,r.state=r.getInitialState(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this;return o.default.createElement(s.default,{show:this.props.show,onClose:this.props.onClose},o.default.createElement("h3",null,"Add New Field"),o.default.createElement("section",null,o.default.createElement(d.Header,null,o.default.createElement("span",{className:"col"},"Type"),o.default.createElement("span",{className:"col col--grow"},"Field Name",o.default.createElement(i.default,{overlay:f,mouseLeaveDelay:0},o.default.createElement("i",{className:"fas fa-info-circle"}))),"text"===this.state.type?o.default.createElement("span",{className:"col"},"Use case",o.default.createElement(i.default,{overlay:g,mouseLeaveDelay:0},o.default.createElement("i",{className:"fas fa-info-circle"}))):null,o.default.createElement("span",{className:"col"},"Data Type")),o.default.createElement("div",{style:{padding:"10px 0",display:"flex"}},o.default.createElement("span",{style:{width:150,marginRight:12}},o.default.createElement(l.Creatable,{value:{label:this.state.esType,value:this.state.esType},placeholder:"Select or Create Type",promptTextCreator:function(e){return'Create type "'+e+'"'},onChange:this.handleEsTypeChange,options:this.props.types.map(function(e){return{value:e,label:e}}),clearable:!1})),o.default.createElement(d.Input,{innerRef:function(t){e.input=t},type:"text",name:"name",placeholder:"Enter field name",value:this.state.name,onChange:this.handleNewFieldChange}),"text"===this.state.type?o.default.createElement("select",{className:d.dropdown,name:"usecase",defaultValue:this.state.usecase,onChange:this.handleNewFieldChange},Object.entries(this.usecases).map(function(e){return o.default.createElement("option",{key:e[0],value:e[0]},e[1])})):null,o.default.createElement("select",{className:d.dropdown,name:"type",defaultValue:this.state.type,onChange:this.handleNewFieldChange},Object.keys(u.default).filter(function(e){return"object"!==e}).map(function(e){return o.default.createElement("option",{key:e,value:e},e.split("_").join(" "))}))),this.state.error?o.default.createElement("p",{style:{color:"tomato"}},this.state.error):null,o.default.createElement("div",{style:{display:"flex",flexDirection:"row-reverse",margin:"10px 0"}},o.default.createElement(d.Button,{onClick:this.addField},"Add Field"))))},t}(r.Component);t.default=h},791:function(e,t,a){"use strict";t.__esModule=!0;var n=r(a(1));function r(e){return e&&e.__esModule?e:{default:e}}var o=(0,r(a(347)).default)("div",{target:"eermln60"})("position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.7);z-index:999;color:#fff;display:flex;padding:20px;flex-direction:column;align-items:center;justify-content:center;font-size:16px;letter-spacing:0.04rem;font-weight:300;");t.default=function(e){return e.show?n.default.createElement(o,null,n.default.createElement("p",null,e.message||"Loading...")):null}},792:function(e,t,a){"use strict";t.__esModule=!0;var n=function(e){return e&&e.__esModule?e:{default:e}}(a(791));t.default=n.default},793:function(e,t,a){"use strict";t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(1),o=x(r),i=a(0),l=x(a(141)),s=x(a(792)),d=x(a(610)),u=a(411),c=a(501),p=x(a(609)),f=x(a(500)),g=a(380),h=x(a(458)),m=x(a(790)),y=x(a(476));function x(e){return e&&e.__esModule?e:{default:e}}var b=function(){return o.default.createElement("div",{style:{maxWidth:220}},"Names of the fields and nested-fields are represented with relative indentation.")},w=function(){return o.default.createElement("div",{style:{maxWidth:220}},"We detect the appropriate analyzers and mappings here representing the usecase - search or aggregations.")},v=function(){return o.default.createElement("div",{style:{maxWidth:220}},"Editing mappings isn","'","t a native feature in Elasticsearch. All appbase.io paid plans offer editable mappings by performing a lossless re-indexing of your data whenever you edit them from this UI.")},E=function(e){return o.default.createElement(h.default,{show:e.show,onClose:e.onClose},o.default.createElement("h3",null,"Re-index successful"),o.default.createElement("p",null,"The mappings have been updated and the data has been successfully re-indexed in ",e.timeTaken,"ms."),o.default.createElement("div",{style:{display:"flex",flexDirection:"row-reverse",margin:"10px 0"}},o.default.createElement(g.Button,{ghost:!0,onClick:e.onClose},"Done")))},_=function(e){function t(a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,a));return r.getType=function(e){return"string"===e?"text":e},r.getUsecase=function(e){var t=(0,c.hasAggs)(e),a=0;return e.search&&(a=1),t&&a?"searchaggs":!t&&a?"search":t&&!a?"aggs":"none"},r.setMapping=function(e,t,a){var n=(0,c.updateMapping)(r.state.mapping,e,t,a);r.setState({mapping:n,dirty:!0})},r.handleMapping=function(e){r.originalMapping=e,r.setState({isLoading:!1,mapping:e?(0,c.transformToES5)(e):e})},r.deletePath=function(e){var t=JSON.parse(JSON.stringify(r.state.mapping)),a=e.split(".");"properties"===a[a.length-1]&&(a=a.slice(0,-1)),a.reduce(function(e,t,n){return n===a.length-1?(delete e[t],!0):e[t]},t),r.setState({dirty:!0,mapping:t,deletedPaths:[].concat(r.state.deletedPaths,[e])})},r.cancelChanges=function(){r.setState({mapping:r.originalMapping,dirty:!1})},r.toggleModal=function(){r.setState({showModal:!r.state.showModal})},r.hideErrorModal=function(){r.setState({showError:!1,errorMessage:""})},r.addField=function(e){var t=e.name,a=e.type,o=e.usecase,i=JSON.parse(JSON.stringify(r.state.mapping)),l=t.split("."),s={};o&&(s=f.default[o]),l.reduce(function(e,t,r){return r===l.length-1?(e[t]=n({type:a},s),!0):(e[t]&&e[t].properties||(e[t]={properties:{}}),e[t].properties)},i),r.setState({dirty:!0,mapping:i})},r.reIndex=function(){r.setState({isLoading:!0});var e=r.state.deletedPaths.map(function(e){return e.split(".properties.").join(".")}).map(function(e){var t=e.indexOf(".")+1;return e.substring(t)});(0,c.reIndex)(r.state.mapping,r.props.appId,e).then(function(e){r.setState({showFeedback:!0,timeTaken:e})}).catch(function(e){r.setState({isLoading:!1,showError:!0,errorLength:Array.isArray(e)&&e.length,errorMessage:JSON.stringify(e,null,4)})})},r.renderUsecase=function(e,t){if("text"===e.type){var a=e.fields?r.getUsecase(e.fields,r.usecases):"none";return r.state.editable?o.default.createElement("select",{name:"field-usecase",defaultValue:a,className:g.dropdown,onChange:function(e){r.setMapping(t,"text",e.target.value)}},Object.entries(r.usecases).map(function(e){return o.default.createElement("option",{key:e[0],value:e[0]},e[1])})):o.default.createElement("span",{style:{boxShadow:"none",border:0},className:g.dropdown},r.usecases[a])}return null},r.renderMapping=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return t?o.default.createElement("section",{key:e,className:g.row},o.default.createElement("h4",{className:g.title+" "+g.deleteBtn},o.default.createElement("span",{title:e},e),r.state.editable?o.default.createElement("a",{onClick:function(){r.deletePath(n)}},o.default.createElement("i",{className:"fas fa-trash-alt"})):null),Object.keys(t).map(function(e){return t[e].properties?r.renderMapping(e,t[e].properties,a[e].properties,(n?n+".":"")+e+".properties"):o.default.createElement("div",{key:e,className:g.item},o.default.createElement("div",{className:g.deleteBtn},o.default.createElement("span",{title:e},e),r.state.editable?o.default.createElement("a",{onClick:function(){r.deletePath(n+"."+e)}},o.default.createElement("i",{className:"fas fa-trash-alt"})):null),o.default.createElement("div",{className:g.subItem},r.renderUsecase(t[e],e),r.state.editable?o.default.createElement("select",{className:g.dropdown,name:e+"-mapping",defaultValue:t[e].type,onChange:function(t){r.setMapping(e,t.target.value)}},a[e]?o.default.createElement("option",{value:r.getType(a[e].type)},r.getType(a[e].type)):o.default.createElement("option",{value:r.getType(t[e].type)},r.getType(t[e].type)),a[e]?p.default[r.getType(a[e].type)].map(function(e){return o.default.createElement("option",{key:e,value:r.getType(e)},r.getType(e).split("_").join(" "))}):p.default[r.getType(t[e].type)].map(function(e){return o.default.createElement("option",{key:e,value:r.getType(e)},r.getType(e).split("_").join(" "))})):o.default.createElement("span",{style:{boxShadow:"none",border:0},className:g.dropdown},t[e].type)))})):null},r.renderPromotionalButtons=function(){return r.props.url?o.default.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},o.default.createElement("p",{style:{margin:"0 8px 0 0",color:"#888"}},"Get an appbase.io account to edit mappings",o.default.createElement(l.default,{overlay:v,mouseLeaveDelay:0},o.default.createElement("i",{className:"fas fa-info-circle"}))),o.default.createElement(g.Button,{href:"https://appbase.io",target:"_blank"},"Signup Now")):o.default.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},o.default.createElement("p",{style:{margin:"0 8px 0 0",color:"#888"}},"Upgrade your plan to edit mappings",o.default.createElement(l.default,{overlay:v,mouseLeaveDelay:0},o.default.createElement("i",{className:"fas fa-info-circle"}))),o.default.createElement(g.Button,{href:"/billing",target:"_blank"},"Upgrade Now"))},r.state={mapping:null,dirty:!1,showModal:!1,isLoading:!0,errorMessage:"",showError:!1,errorLength:0,deletedPaths:[],editable:!1,showFeedback:!1,timeTaken:"0"},r.usecases=d.default,r.originalMapping=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.url?(0,c.getMappings)(this.props.appName,this.props.credentials,this.props.url).then(this.handleMapping).catch(function(t){e.setState({error:t,isLoading:!1})}):((0,u.checkUserStatus)().then(function(t){t.isPaidUser&&e.setState({editable:!0})}).catch(function(){e.setState({editable:!1})}),(0,u.getCredentials)(this.props.appId).then(function(t){var a=t.username,n=t.password;return(0,c.getMappings)(e.props.appName,a+":"+n)}).then(this.handleMapping).catch(function(t){console.error(t),e.setState({mappingsError:t,showError:!0,isLoading:!1})}))},t.prototype.render=function(){var e=this;return this.state.isLoading&&!this.state.mapping?o.default.createElement(s.default,{show:!0,message:"Fetching mappings... Please wait!"}):this.state.mappingsError?o.default.createElement(y.default,{show:this.state.showError,message:"Some error occured while fetching the mappings",error:JSON.stringify(this.state.mappingsError,null,2),onClose:this.hideErrorModal}):o.default.createElement("div",{className:g.card},o.default.createElement("div",{style:{borderBottom:"1px solid #eee",padding:20,display:"flex",alignItems:"center",justifyContent:"space-between"}},o.default.createElement(g.HeaderWrapper,null,o.default.createElement("h2",{className:g.heading},"Manage Mappings"),o.default.createElement("p",null,"Add new fields or change the types of existing ones.")),this.state.editable?o.default.createElement(g.Button,{ghost:!0,onClick:this.toggleModal},"Add New Field"):this.renderPromotionalButtons()),o.default.createElement("div",{style:{padding:"5px 20px"}},o.default.createElement(g.Header,null,o.default.createElement("span",null,"Field Name",o.default.createElement(l.default,{overlay:b,mouseLeaveDelay:0},o.default.createElement("i",{className:"fas fa-info-circle"}))),o.default.createElement("div",null,o.default.createElement("span",{className:"col"},"Use case",o.default.createElement(l.default,{overlay:w,mouseLeaveDelay:0},o.default.createElement("i",{className:"fas fa-info-circle"}))),o.default.createElement("span",{className:"col"},"Data Type"))),Object.keys(this.state.mapping).map(function(t){if(e.state.mapping[t]){var a=e.state.mapping[t].properties,n=e.originalMapping[t]?e.originalMapping[t].properties:e.state.mapping[t].properties;return e.renderMapping(t,a,n,t+".properties")}return null})),this.state.dirty&&this.state.editable?o.default.createElement(g.Footer,null,o.default.createElement(g.Button,{onClick:this.reIndex},"Confirm Mapping Changes"),o.default.createElement(g.Button,{ghost:!0,onClick:this.cancelChanges},"Cancel")):null,o.default.createElement(m.default,{types:Object.keys(this.state.mapping).filter(function(e){return!c.REMOVED_KEYS.includes(e)}),show:this.state.showModal,addField:this.addField,onClose:this.toggleModal,deletedPaths:this.state.deletedPaths}),o.default.createElement(s.default,{show:this.state.isLoading,message:"Re-indexing your data... Please wait!"}),o.default.createElement(y.default,{show:this.state.showError,errorLength:this.state.errorLength,error:this.state.errorMessage,onClose:this.hideErrorModal}),o.default.createElement(E,{show:this.state.showFeedback,timeTaken:this.state.timeTaken,onClose:function(){return window.location.reload()}}))},t}(r.Component);t.default=_,_.propTypes={appId:i.string,appName:i.string.isRequired,credentials:i.string,url:i.string}}}]);