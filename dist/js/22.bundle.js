(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1535:function(e,t,n){"use strict";t.__esModule=!0;var a=r(n(0)),o=n(1),i=r(o),s=r(n(454));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.setConfirmBoxInfo=function(){return{title:this.props.title,description:this.props.description,buttons:{confirm:this.props.closeBtn}}},t.prototype.render=function(){return i.default.createElement(s.default,{info:this.setConfirmBoxInfo(),type:this.props.type,showModal:!0})},t}(o.Component);t.default=l,l.propTypes={title:a.default.oneOfType([a.default.string,a.default.element]),description:a.default.oneOfType([a.default.string,a.default.element]),closeBtn:a.default.oneOfType([a.default.string,a.default.element]),type:a.default.string},l.defaultProps={}},1536:function(e,t,n){"use strict";t.__esModule=!0;var a=i(n(1)),o=i(n(1535));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t={title:a.default.createElement("span",null,"Missing Credentials"),description:a.default.createElement("div",null,a.default.createElement("p",null,"We can't find an admin type credentials key for this app, this might affect the browsing experience in the current view."),a.default.createElement("p",null,"You can create new credentials ",a.default.createElement("a",{href:"/credentials"},"here"),".")),type:"danger"};return a.default.createElement(o.default,t)}},332:function(e,t,n){"use strict";t.__esModule=!0;var a=n(1),o=p(a),i=n(16),s=p(n(431)),r=p(n(1536)),l=n(39);function p(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return a.state={loadActive:!0},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){this.initialize(this.props)},t.prototype.componentDidMount=function(){this.setPageHeight()},t.prototype.componentWillReceiveProps=function(e){e.params.appId!=this.appName&&this.initialize(e)},t.prototype.componentWillUnmount=function(){$(window).unbind("resize")},t.prototype.setPageHeight=function(){var e=this,t=function(){var t=$(".ad-detail").height()-$(".ad-detail-page-header").outerHeight();$(e.pageRef).css("height",t)};setTimeout(t,1e3),$(window).resize(function(){setTimeout(t,1e3)})},t.prototype.getPermission=function(){var e=this;i.appbaseService.getPermission(this.appId).then(function(t){e.setState({permission:t,loadActive:!0,showAlert:!1,adminPermission:l.common.getPermission(t.body,"admin")},e.createUrl)})},t.prototype.initialize=function(e){var t;this.appName=e.params.appId,this.appId=i.appbaseService.userInfo.body.apps[this.appName],this.plugin="dejavu",this.setState(((t={})[this.plugin]=null,t.loadActive=!0,t),this.getPermission)},t.prototype.createUrl=function(){if(this.state.adminPermission){var e={url:"https://"+this.state.adminPermission.username+":"+this.state.adminPermission.password+"@scalr.api.appbase.io",appname:this.appName},t=JSON.stringify(e);this.applyUrl(t)}else if(this.state.permission&&this.state.permission.body.length){var n=this.state.permission.body[0],a={url:"https://"+n.username+":"+n.password+"@scalr.api.appbase.io",appname:this.appName},o=JSON.stringify(a);this.applyUrl(o)}else null===this.state.adminPermission&&this.setState({showAlert:!0,loadActive:!1})},t.prototype.applyUrl=function(e){this.setState({dejavu:"https://opensource.appbase.io/dejavu/live/#?app="+e+"&hf=false&subscribe=false"})},t.prototype.onIfreamLoad=function(){this.setState({loadActive:!1})},t.prototype.render=function(){var e=this;return this.pageInfo={currentView:"browser",appName:this.appName,appId:this.appId},o.default.createElement(s.default,{pageInfo:this.pageInfo},o.default.createElement("div",{className:"ad-detail-page ad-dashboard row"},o.default.createElement("header",{className:"ad-detail-page-header header-inline-summary header-align-end col-xs-12 hidden"}),o.default.createElement("div",{className:"ad-detail-page-body col-xs-12",ref:function(t){e.pageRef=t}},o.default.createElement("div",{className:"plugin-container"},this.state.loadActive?o.default.createElement("div",{className:"loadingBar"}):null,this.state[this.plugin]?o.default.createElement("iframe",{onLoad:function(){return e.onIfreamLoad()},src:this.state[this.plugin],height:"100%",width:"100%",frameBorder:"0",title:"dejavu"}):null,this.state.showAlert?o.default.createElement(r.default,this.pageInfo):null))))},t}(a.Component);t.default=c},381:function(e,t,n){"use strict";function a(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function i(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,s=null,r=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?r="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==n||null!==s||null!==r){var l=e.displayName||e.name,p="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+p+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==s?"\n  "+s:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=a,t.componentWillReceiveProps=o),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var a=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,e,t,a)}}return e}n.r(t),n.d(t,"polyfill",function(){return s}),a.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},430:function(e,t,n){"use strict";t.__esModule=!0;var a=n(1),o=u(a),i=n(42),s=u(n(37)),r=u(n(141)),l=n(39),p=u(n(91)),c=n(16);function u(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return a.config=p.default,a.contextPath=c.appbaseService.getContextPath(),a.state={activeApp:a.props.appName},a.stopUpdate=!1,a.links=[{label:"Dashboard",link:a.contextPath+"dashboard/",type:"internal",name:"dashboard",tooltip:"View app usage stats",img:o.default.createElement("img",{className:"img-responsive",alt:"dashboard",src:"../../../assets/images/"+a.config.name+"/sidebar/dashboard.svg"})},{label:"Mappings",link:a.contextPath+"mappings/",type:"internal",name:"mappings",tooltip:"View or update mappings",img:o.default.createElement("img",{className:"img-responsive",alt:"mappings",src:"../../../assets/images/"+a.config.name+"/sidebar/mapping.svg"})},{label:"Browser",link:a.contextPath+"browser/",type:"internal",name:"browser",tooltip:"Create, view and manage app data",img:o.default.createElement("img",{className:"img-responsive",alt:"browser",src:"../../../assets/images/"+a.config.name+"/sidebar/browser.svg"})},{label:"Search Sandbox",link:a.contextPath+"search-sandbox/",type:"internal",name:"search-sandbox",tooltip:"Update search preferences",img:o.default.createElement("img",{className:"img-responsive",alt:"search-sandbox",src:"../../../assets/images/"+a.config.name+"/sidebar/sandbox.svg"})},{label:"Analytics",link:a.contextPath+"analytics/",type:"internal",name:"analytics",tooltip:"View app analytics",img:o.default.createElement("img",{className:"img-responsive",alt:"analytics",src:"../../../assets/images/"+a.config.name+"/sidebar/dashboard.svg"})},{label:"Credentials",link:a.contextPath+"credentials/",type:"internal",name:"credentials",tooltip:"View and manage API access credentials",img:o.default.createElement("img",{className:"img-responsive",alt:"credentials",src:"../../../assets/images/"+a.config.name+"/sidebar/credentials.svg"})},{label:"Team",link:a.contextPath+"team/",type:"internal",name:"team",tooltip:"Manage who can access your app data",img:o.default.createElement("img",{className:"img-responsive",alt:"team",src:"../../../assets/images/"+a.config.name+"/sidebar/team.svg"})}],a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.changeView=function(e){this.props.changeView(e)},t.prototype.componentWillMount=function(){var e=this;this.listenEvent=l.eventEmitter.addListener("activeApp",function(t){e.stopUpdate||e.setState(t)})},t.prototype.componentDidMount=function(){var e=this,t=function(){$(".ad-detail").css({"min-height":$(e.sidebarRef).height()+30})};setTimeout(t.bind(this),1e3),$(window).resize(t.bind(this))},t.prototype.componentWillUnmount=function(){this.stopUpdate=!0,this.listenEvent&&this.listenEvent.remove(),$(window).unbind("resize")},t.prototype.renderElement=function(e){var t=this,n=null;switch(e){case"links":n=this.links.filter(function(e){return t.config.appDashboard.indexOf(e.name)>-1}).map(function(e,n){var a=(0,s.default)({active:t.props.currentView===e.name}),l=o.default.createElement("div",{className:"img-container"},e.img),p=o.default.createElement(i.Link,{className:a,to:e.link+t.state.activeApp},l,o.default.createElement("span",{className:"ad-detail-sidebar-item-label"},e.label));return o.default.createElement(r.default,{overlay:o.default.createElement("div",null,e.tooltip),mouseLeaveDelay:0,key:e.name+"-"+(n+1)},o.default.createElement("li",{className:"ad-detail-sidebar-item",key:e.name+"-item-"+(n+1)},p))})}return n},t.prototype.render=function(){var e=this;return o.default.createElement("aside",{className:"ad-detail-sidebar"},o.default.createElement("ul",{className:"ad-detail-sidebar-container",ref:function(t){e.sidebarRef=t}},this.renderElement("links")))},t}(a.Component);t.default=f},431:function(e,t,n){"use strict";t.__esModule=!0;var a=p(n(0)),o=n(1),i=p(o),s=p(n(430)),r=p(n(91)),l=n(16);function p(e){return e&&e.__esModule?e:{default:e}}var c=function(){return i.default.createElement("div",{className:"page404"},i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col s12"},i.default.createElement("i",{className:"fa fa-exclamation-triangle"}),"  Seems like this app view doesn","'","t exist or you don","'","t have access to it.")),i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col s12"},"Go to"," ",i.default.createElement("a",{href:"/apps"},"/apps",i.default.createElement("i",{className:"fa fa-cursor"})))))},u=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return a.state={showChild:!1},a.selectedApp=a.props.pageInfo.appName,a.config=r.default,a.getAllApps(),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillReceiveProps=function(){this.props.pageInfo.appName!==this.selectedApp&&(this.selectedApp=this.props.pageInfo.appName,this.getAllApps())},t.prototype.isAllowed=function(){this.config.appDashboard.indexOf(this.props.pageInfo.currentView)<0&&l.appbaseService.pushUrl("./apps")},t.prototype.getAllApps=function(){var e=this;l.appbaseService.allApps(!0).then(function(t){var n=t.body.filter(function(t){return e.props.pageInfo.appName===t.appname});e.setState({showChild:!(!n||!n.length)||null})})},t.prototype.render=function(){this.isAllowed();var e=i.default.Children.map(this.props.children,function(e){return i.default.cloneElement(e,{})});return i.default.createElement("div",{className:"ad-detail row"},i.default.createElement(s.default,{currentView:this.props.pageInfo.currentView,appName:this.props.pageInfo.appName,appId:this.props.pageInfo.appId}),i.default.createElement("div",{className:"ad-detail-view-container"},i.default.createElement("div",{className:"ad-detail-view"},this.state.showChild?e:null,null===this.state.showChild?i.default.createElement(c,null):null)))},t}(o.Component);t.default=u,u.propTypes={pageInfo:a.default.shape({currentView:a.default.string.isRequired,appName:a.default.string.isRequired,appId:a.default.oneOfType([a.default.number.isRequired,a.default.string.isRequired])})},u.defaultProps={}},454:function(e,t,n){"use strict";t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(1),i=function(e){return e&&e.__esModule?e:{default:e}}(o),s=n(500),r=n(39);var l=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return a.state={showModal:!!a.props.showModal&&a.props.showModal,validate:!1,inputValue:null},a.open=a.open.bind(a),a.onConfirm=a.onConfirm.bind(a),a.onCancel=a.onCancel.bind(a),a.handleInputChange=a.handleInputChange.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.close=function(){this.props.onClose&&this.props.onClose(),this.setState({showModal:!1})},t.prototype.open=function(){this.props.onOpen&&this.props.onOpen(),this.setState({showModal:!0})},t.prototype.onConfirm=function(){this.props.onConfirm&&this.props.onConfirm(),this.close()},t.prototype.onCancel=function(){this.props.onCancel&&this.props.onCancel(),this.close()},t.prototype.getType=function(){return"modal-"+(this.props.type?this.props.type:"info")},t.prototype.handleInputChange=function(e){this.setState({inputValue:e.target.value,validate:e.target.value===this.props.info.validate.value})},t.prototype.render=function(){var e=this,t=i.default.Children.map(this.props.children,function(t){return i.default.cloneElement(t,{onClick:e.open})});return i.default.createElement("div",null,t,i.default.createElement(s.Modal,{className:this.getType(),show:this.state.showModal,onHide:function(){return e.close()}},i.default.createElement(s.Modal.Header,{closeButton:!0},this.props.info&&this.props.info.title?i.default.createElement(s.Modal.Title,null,this.props.info.title):null),i.default.createElement(s.Modal.Body,{className:"clearfix"},i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-xs-12"},this.props.info.description),this.props.info&&this.props.info.validate?i.default.createElement("div",{className:"col-xs-12 form-group"},i.default.createElement("input",{placeholder:this.props.info.validate.placeholder,type:"text",className:"form-control",defaultValue:this.state.inputValue,onChange:this.handleInputChange})):null),i.default.createElement("div",{className:"col-xs-12 p-0"},this.props.info.buttons.confirm?i.default.createElement("button",a({className:"ad-theme-btn ad-confirm-btn"},r.common.isDisabled(this.props.info.validate&&!this.state.validate),{onClick:this.onConfirm}),this.props.info.buttons.confirm):null,this.props.info.buttons.cancel?i.default.createElement("button",{className:"ad-theme-btn ad-cancel-btn",onClick:this.onCancel},this.props.info.buttons.cancel):null))))},t}(o.Component);t.default=l,l.propTypes={},l.defaultProps={}}}]);