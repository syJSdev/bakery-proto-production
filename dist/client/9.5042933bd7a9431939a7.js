webpackJsonp([9],{6451:function(e,o,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function r(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function a(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}function d(e,o){return{branch:e.app.branch,business:e.home.business,accounts:e.accounts}}Object.defineProperty(o,"__esModule",{value:!0});var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,t,i,n){var r=o&&o.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&r)for(var d in r)void 0===t[d]&&(t[d]=r[d]);else t||(t=r||{});if(1===a)t.children=n;else if(a>1){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+3];t.children=s}return{$$typeof:e,type:o,key:void 0===i?null:""+i,ref:null,props:t,_owner:null}}}(),l=function(){function e(e,o){for(var t=0;t<o.length;t++){var i=o[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(o,t,i){return t&&e(o.prototype,t),i&&e(o,i),o}}(),u=t(0),c=(i(u),t(5)),f=i(c),p=t(2),v=(i(p),t(41)),h=t(376),m=i(h),y=t(77),k=t(37),w=t(79),N=t(47),b=t(6631),D=i(b),L=t(377),_=i(L),g=s(m.default,{title:"Profile"}),R=s("path",{d:"M1.36951 1.63049L8.83862 9.63049L16.6305 1.63049",stroke:"#3A3A3A",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),I=function(e){function o(e){n(this,o);var t=r(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return t.activeRoute=function(e){var o=t.props.location.pathname;if(void 0===o)return"";if(o===e){var i=1;"/profile/order"===e&&(i=2),"/profile/payment"===e&&(i=3),"/profile/setting"===e&&(i=4),"/profile/address"===e&&(i=5),t.state.dropId!==i&&t.setState({dropId:i})}return o===e?D.default.activeLink:""},t.handleDropDown=function(e){e?(!1===t.state.show&&t.setState({show:!0}),!0===t.state.show&&t.setState({show:!1})):t.setState({show:!1})},t.handleSignout=function(){t.props.dispatch((0,w.signOut)())},t.renderDrop=function(){return 1===t.state.dropId?s("div",{className:D.default["render-drop"]},void 0,s("div",{className:D.default.icon},void 0,(0,N.accountIcon)())," Profile"):2===t.state.dropId?s("div",{className:D.default["render-drop"]},void 0,s("div",{className:D.default.icon},void 0,(0,N.order)())," Order History"):3===t.state.dropId?s("div",{className:D.default["render-drop"]},void 0,s("div",{className:D.default.icon},void 0,(0,N.payment)()),"Payment Methods"):4===t.state.dropId?s("div",{className:D.default["render-drop"]},void 0,s("div",{className:D.default.icon},void 0,(0,N.settings)()),"Settings"):5===t.state.dropId?s("div",{className:D.default["render-drop"]},void 0,s("div",{className:D.default.icon},void 0,(0,N.accountIcon)()),"Address"):void 0},t.state={show:!1,dropId:1},t}return a(o,e),l(o,[{key:"componentDidMount",value:function(){var e=(0,_.default)("token");this.props.dispatch((0,w.GetUserInfo)(e))}},{key:"render",value:function(){var e=this;return this.props.accounts||this.props.accounts.token?s("div",{className:D.default["profile-container"]},void 0,s("div",{className:D.default.container},void 0,g,s("div",{className:(0,f.default)(D.default["responsive-menu"])},void 0,s("div",{className:D.default["drop-click"],onClick:function(){return e.handleDropDown(!0)}},void 0,this.renderDrop(),s("svg",{className:D.default["down-icon"],width:"18",height:"11",viewBox:"0 0 18 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},void 0,R)),s("ul",{className:(0,f.default)(D.default.menu,this.state.show?D.default.show:D.default.hide)},void 0,s("li",{onClick:function(){return e.handleDropDown(!1)}},void 0,s(v.Link,{to:"/profile"},void 0,s("div",{className:(0,f.default)(D.default.RLink,this.activeRoute("/profile"))},void 0,s("div",{className:D.default.icon},void 0,(0,N.accountIcon)()),"Profile"))),s("li",{onClick:function(){return e.handleDropDown(!1)}},void 0,s(v.Link,{to:"/profile/order"},void 0,s("div",{className:(0,f.default)(D.default.RLink,this.activeRoute("/profile/order"))},void 0,s("div",{className:D.default.icon},void 0,(0,N.order)()),"Order History"))),s("li",{onClick:function(){return e.handleDropDown(!1)}},void 0,s(v.Link,{to:"/profile/payment"},void 0,s("div",{className:(0,f.default)(D.default.RLink,this.activeRoute("/profile/payment"))},void 0,s("div",{className:D.default.icon},void 0,(0,N.payment)()),"Payment Methods"))),s("li",{onClick:function(){return e.handleDropDown(!1)}},void 0,s(v.Link,{to:"/profile/setting"},void 0,s("div",{className:(0,f.default)(D.default.RLink,this.activeRoute("/profile/setting"))},void 0,s("div",{className:D.default.icon},void 0,(0,N.settings)()),"Settings"))),s("li",{onClick:function(){return e.handleDropDown(!1)}},void 0,s(v.Link,{to:"/profile/address"},void 0,s("div",{className:(0,f.default)(D.default.RLink,this.activeRoute("/profile/address"))},void 0,s("div",{className:D.default.icon},void 0,(0,N.accountIcon)()),"Address"))),s("li",{onClick:function(){return e.handleDropDown(!1)}},void 0,s(v.Link,{to:"/",onClick:function(){return e.handleSignout()}},void 0,s("div",{className:(0,f.default)(D.default.RLink)},void 0,s("div",{className:D.default.icon},void 0,(0,N.logout)()),"Log Out"))))),s(k.Card,{className:(0,f.default)(D.default.card)},void 0,this.props.children))):void this.props.router.push("/")}}]),o}(u.Component);o.default=(0,v.withRouter)((0,y.connect)(d)(I))},6631:function(e,o){e.exports={"profile-container":"_1-u3tpqzVta5DfRJZKZQH_",container:"G5NZrRXpy-LiFC6oAoUe1",card:"j-eizfL1xwJz5xWli_6jr","responsive-menu":"C7566G-ao7nDIUg2uAiHE","drop-click":"RR-NLAiDKqIEyLRGvpyT6",menu:"_3flNADpEHDW8T6yjHDvuTf",RLink:"_1j9IrBsMtQUkAcu5Bnhb8x",icon:"_34flBlEKSZu-VoZ5YeeH7a",activeLink:"lILF_aHAXboe_LSa7-p1e","down-icon":"_3y1k6x8jFy1KN0vdD5JXbF","drop-border":"D7_aD4oTjrKuNkTqWTSR6","render-drop":"itg-R9m9rcW_aBqyOYmOe",show:"_2MOcxdlez8fv3woqCr8HR-",hide:"_1bPyu_DgBQR2vsoWy-ScL0"}}});