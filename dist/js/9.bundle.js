(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{312:function(e,t,n){"use strict";t.__esModule=!0;var a=n(1),o=r(a),l=r(n(83)),i=n(20);function r(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return i.appbaseService.userInfo&&i.appbaseService.pushUrl("/apps"),a.config=l.default,a.handleChange=a.handleChange.bind(a),a.handleLogin=a.handleLogin.bind(a),a.state={tos:!1,optIn:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.handleChange=function(e){var t,n=e.target,a=n.checked,o=n.name;this.setState(((t={})[o]=a,t))},t.prototype.handleLogin=function(e){this.state.optIn&&localStorage.setItem("optIn",!0),this.props.login(e)},t.prototype.render=function(){var e=this,t=this.state,n=t.tos,a=t.optIn;return o.default.createElement("section",{id:"login",className:"text-center container"},o.default.createElement("h2",null,this.config.login.description),o.default.createElement("h3",null,"Sign up to create an appbase.io app."),o.default.createElement("p",{style:{textAlign:"left",maxWidth:650,margin:"20px auto"}},o.default.createElement("label",{style:{padding:0,marginBottom:5},htmlFor:"tos",className:"ad-filter-shareapps checkbox-inline"},o.default.createElement("input",{style:{width:16,height:16},type:"checkbox",id:"tos",name:"tos",checked:n,onChange:this.handleChange}),"By creating an account, you agree to our"," ",o.default.createElement("a",{href:"https://appbase.io/tos",target:"_blank"},"Terms of Service")," ","and"," ",o.default.createElement("a",{href:"https://appbase.io/privacy",target:"_blank"},"Privacy Policy"),"."),o.default.createElement("label",{style:{padding:0,margin:0},htmlFor:"optIn",className:"ad-filter-shareapps checkbox-inline"},o.default.createElement("input",{style:{width:16,height:16},type:"checkbox",id:"optIn",name:"optIn",checked:a,onChange:this.handleChange}),"Yes, I would like to receive a monthly e-mail on Appbase products, use-cases and promotions via e-mail.")),o.default.createElement("div",{className:"flex flex-column",id:"login-btn-screen"},o.default.createElement("button",{className:"btn Login-button modal-btn github-btn",onClick:function(){return e.handleLogin("github")},disabled:!n},o.default.createElement("i",{className:"fab fa-github"}),"Sign up with GitHub"),o.default.createElement("button",{className:"btn Login-button modal-btn google-btn",onClick:function(){return e.handleLogin("google")},disabled:!n},o.default.createElement("i",{className:"fab fa-google-plus-g"}),"Sign up with Google")),o.default.createElement("div",{className:"mt25"},"Already have an account? ",o.default.createElement("a",{href:"/login"},"Login here"),".",o.default.createElement("p",{className:"no-margin"},"Having issues signing up? Write to us ",o.default.createElement("a",{className:"contact-link",href:"mailto:info@appbase.io?subject=Login+issues",target:"_blank"},"here"),".")))},t}(a.Component);t.default=s}}]);