(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{331:function(e,t,a){"use strict";t.__esModule=!0;var n=r(a(1)),s=r(a(431)),i=a(16);function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.params.appId,a=i.appbaseService.userInfo.body.apps[t],r={currentView:"mappings",appName:t,appId:a};return n.default.createElement(s.default,{pageInfo:r,key:a},n.default.createElement("div",{className:"ad-detail-page ad-dashboard row",style:{padding:"40px 0"}},n.default.Children.map(e.children,function(e){return n.default.cloneElement(e,{appId:a,appName:t})})))}},430:function(e,t,a){"use strict";t.__esModule=!0;var n=a(1),s=d(n),i=a(42),r=d(a(37)),l=d(a(141)),o=a(39),p=d(a(91)),c=a(16);function d(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,a));return n.config=p.default,n.contextPath=c.appbaseService.getContextPath(),n.state={activeApp:n.props.appName},n.stopUpdate=!1,n.links=[{label:"Dashboard",link:n.contextPath+"dashboard/",type:"internal",name:"dashboard",tooltip:"View app usage stats",img:s.default.createElement("img",{className:"img-responsive",alt:"dashboard",src:"../../../assets/images/"+n.config.name+"/sidebar/dashboard.svg"})},{label:"Mappings",link:n.contextPath+"mappings/",type:"internal",name:"mappings",tooltip:"View or update mappings",img:s.default.createElement("img",{className:"img-responsive",alt:"mappings",src:"../../../assets/images/"+n.config.name+"/sidebar/mapping.svg"})},{label:"Browser",link:n.contextPath+"browser/",type:"internal",name:"browser",tooltip:"Create, view and manage app data",img:s.default.createElement("img",{className:"img-responsive",alt:"browser",src:"../../../assets/images/"+n.config.name+"/sidebar/browser.svg"})},{label:"Search Sandbox",link:n.contextPath+"search-sandbox/",type:"internal",name:"search-sandbox",tooltip:"Update search preferences",img:s.default.createElement("img",{className:"img-responsive",alt:"search-sandbox",src:"../../../assets/images/"+n.config.name+"/sidebar/sandbox.svg"})},{label:"Analytics",link:n.contextPath+"analytics/",type:"internal",name:"analytics",tooltip:"View app analytics",img:s.default.createElement("img",{className:"img-responsive",alt:"analytics",src:"../../../assets/images/"+n.config.name+"/sidebar/dashboard.svg"})},{label:"Credentials",link:n.contextPath+"credentials/",type:"internal",name:"credentials",tooltip:"View and manage API access credentials",img:s.default.createElement("img",{className:"img-responsive",alt:"credentials",src:"../../../assets/images/"+n.config.name+"/sidebar/credentials.svg"})},{label:"Team",link:n.contextPath+"team/",type:"internal",name:"team",tooltip:"Manage who can access your app data",img:s.default.createElement("img",{className:"img-responsive",alt:"team",src:"../../../assets/images/"+n.config.name+"/sidebar/team.svg"})}],n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.changeView=function(e){this.props.changeView(e)},t.prototype.componentWillMount=function(){var e=this;this.listenEvent=o.eventEmitter.addListener("activeApp",function(t){e.stopUpdate||e.setState(t)})},t.prototype.componentDidMount=function(){var e=this,t=function(){$(".ad-detail").css({"min-height":$(e.sidebarRef).height()+30})};setTimeout(t.bind(this),1e3),$(window).resize(t.bind(this))},t.prototype.componentWillUnmount=function(){this.stopUpdate=!0,this.listenEvent&&this.listenEvent.remove(),$(window).unbind("resize")},t.prototype.renderElement=function(e){var t=this,a=null;switch(e){case"links":a=this.links.filter(function(e){return t.config.appDashboard.indexOf(e.name)>-1}).map(function(e,a){var n=(0,r.default)({active:t.props.currentView===e.name}),o=s.default.createElement("div",{className:"img-container"},e.img),p=s.default.createElement(i.Link,{className:n,to:e.link+t.state.activeApp},o,s.default.createElement("span",{className:"ad-detail-sidebar-item-label"},e.label));return s.default.createElement(l.default,{overlay:s.default.createElement("div",null,e.tooltip),mouseLeaveDelay:0,key:e.name+"-"+(a+1)},s.default.createElement("li",{className:"ad-detail-sidebar-item",key:e.name+"-item-"+(a+1)},p))})}return a},t.prototype.render=function(){var e=this;return s.default.createElement("aside",{className:"ad-detail-sidebar"},s.default.createElement("ul",{className:"ad-detail-sidebar-container",ref:function(t){e.sidebarRef=t}},this.renderElement("links")))},t}(n.Component);t.default=u},431:function(e,t,a){"use strict";t.__esModule=!0;var n=p(a(0)),s=a(1),i=p(s),r=p(a(430)),l=p(a(91)),o=a(16);function p(e){return e&&e.__esModule?e:{default:e}}var c=function(){return i.default.createElement("div",{className:"page404"},i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col s12"},i.default.createElement("i",{className:"fa fa-exclamation-triangle"}),"  Seems like this app view doesn","'","t exist or you don","'","t have access to it.")),i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col s12"},"Go to"," ",i.default.createElement("a",{href:"/apps"},"/apps",i.default.createElement("i",{className:"fa fa-cursor"})))))},d=function(e){function t(a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,a));return n.state={showChild:!1},n.selectedApp=n.props.pageInfo.appName,n.config=l.default,n.getAllApps(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillReceiveProps=function(){this.props.pageInfo.appName!==this.selectedApp&&(this.selectedApp=this.props.pageInfo.appName,this.getAllApps())},t.prototype.isAllowed=function(){this.config.appDashboard.indexOf(this.props.pageInfo.currentView)<0&&o.appbaseService.pushUrl("./apps")},t.prototype.getAllApps=function(){var e=this;o.appbaseService.allApps(!0).then(function(t){var a=t.body.filter(function(t){return e.props.pageInfo.appName===t.appname});e.setState({showChild:!(!a||!a.length)||null})})},t.prototype.render=function(){this.isAllowed();var e=i.default.Children.map(this.props.children,function(e){return i.default.cloneElement(e,{})});return i.default.createElement("div",{className:"ad-detail row"},i.default.createElement(r.default,{currentView:this.props.pageInfo.currentView,appName:this.props.pageInfo.appName,appId:this.props.pageInfo.appId}),i.default.createElement("div",{className:"ad-detail-view-container"},i.default.createElement("div",{className:"ad-detail-view"},this.state.showChild?e:null,null===this.state.showChild?i.default.createElement(c,null):null)))},t}(s.Component);t.default=d,d.propTypes={pageInfo:n.default.shape({currentView:n.default.string.isRequired,appName:n.default.string.isRequired,appId:n.default.oneOfType([n.default.number.isRequired,n.default.string.isRequired])})},d.defaultProps={}}}]);