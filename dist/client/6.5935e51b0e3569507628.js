webpackJsonp([6],{6453:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return{accounts:e.accounts,order_history:e.order_history,business:e.home.business}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,r,n){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var s in i)void 0===o[s]&&(o[s]=i[s]);else o||(o=i||{});if(1===a)o.children=n;else if(a>1){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+3];o.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:o,_owner:null}}}(),l=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),c=o(0),f=r(c),p=o(5),d=(r(p),o(2)),h=(r(d),o(41)),v=o(78),b=o(6633),y=r(b),m=o(6635),_=r(m),w=o(80),O=o(380),g=function(e){function t(e){n(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.viewOrderStatus=function(e,t,r){o.props.dispatch((0,O.get_ordered)(e,o.state.phone,t,r))},o.state={phone:""},o}return a(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.accounts,o=e.dispatch;null!==t.phonenumber&&void 0!==t.phonenumber&&""!==t.phonenumber&&(o((0,w.order_history)(t.phonenumber)),this.setState({phone:t.phonenumber}))}},{key:"componentDidUpdate",value:function(){var e=this.state.phone,t=this.props,o=t.accounts,r=t.dispatch;e!==o.phonenumber&&(r((0,w.order_history)(o.phonenumber)),this.setState({phone:o.phonenumber}))}},{key:"render",value:function(){var e=this,t=this.props,o=t.order_history,r=t.business;return u(c.Fragment,{},void 0,u("p",{className:_.default.stitle},void 0," Order History"),u("div",{style:{overflow:"auto"}},void 0,o&&o.map(function(t,o){if("accept"===t.status||"completed"===t.status){var n="";t.items.forEach(function(e){n+=e.label+", "}),n=n.substr(0,n.length-2);var i=new Date(Date.parse(t.date)),a=i.getFullYear(),s=("0"+(i.getUTCMonth()+1)).slice(-2),l=("0"+i.getUTCDate()).slice(-2),c=i.getUTCHours()%12,f=("0"+(c||12)).slice(-2),p=("0"+i.getUTCMinutes()).slice(-2),d=i.getUTCHours()>=12?"PM":"AM";return u(y.default,{title:t.branch.b_Name,subTitle:n,status:"accept"===t.status?"Active":"Completed",total:"Total  "+r.currency.symbol+" "+(t.totalPaid/100).toFixed(2),date:s+"."+l+"."+a,time:f+"/"+p+" "+d,actionName:"Order Status",action:function(){return e.viewOrderStatus(t.orderID,t.location,t.branch.b_ID)}},o)}})))}}]),t}(f.default.Component);t.default=(0,h.withRouter)((0,v.connect)(s)(g))},6633:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,r,n){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var s in i)void 0===o[s]&&(o[s]=i[s]);else o||(o=i||{});if(1===a)o.children=n;else if(a>1){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+3];o.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:o,_owner:null}}}(),u=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),l=o(0),c=r(l),f=o(5),p=r(f),d=o(2),h=(r(d),o(41),o(6634)),v=r(h),b=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return s("div",{className:v.default["O-container"]},void 0,s("div",{className:v.default["flex-view"]},void 0,s("div",{className:v.default.title},void 0,s("div",{className:v.default.header},void 0,this.props.title),s("div",{className:v.default.subheader},void 0,this.props.subTitle.length>20?this.props.subTitle.substr(0,67)+"...":this.props.subTitle)),s("div",{className:v.default.status},void 0,s("div",{className:v.default.timestamp},void 0,s("div",{},void 0,this.props.date),s("div",{},void 0,this.props.time)),s("div",{className:(0,p.default)(v.default.state,v.default[this.props.status])},void 0,this.props.status))),s("div",{className:(0,p.default)(v.default["flex-view"],v.default.footer)},void 0,s("div",{className:v.default.total},void 0,this.props.total),s("div",{className:(0,p.default)(v.default["flex-view"],v.default.actions)},void 0,s("button",{className:v.default.action,onClick:this.props.action},void 0,this.props.actionName))))}}]),t}(c.default.Component);t.default=b},6634:function(e,t){e.exports={"O-container":"s5B0xSvqNcT50t86-yEQ7","flex-view":"b9ttb_eiO-LCp3BTvF3dK",title:"eYgN0a8Z2B6T7QF4aQGAv",header:"_2VkF0YCXMN_F0rt9mn6Fgv",subheader:"_12G9BiMSBOCIRSmzvBbjSz",status:"_2dHruYYcGZ4oRz6Om-clor",timestamp:"_3i3IBCq4uFpTMau3pW96BC",state:"_3I0y5hBJ32j7j163vU3qny",Completed:"_3wDU1jzbHYZfqnhCjzrXh7",Active:"_1tT5VYg0SQMHcOIoKJ9hwh",footer:"_1R_FN6yhjMv7coEg0odUPr",actions:"_3xGtnfRqBPIZj-pcP6MDT_",total:"_1L8afIitE9A5lh5aaRXiJS",action:"_30b0JLC_fSsKfcplHB3WNi"}},6635:function(e,t){e.exports={stitle:"gkv83hIhLT1ZgBdZgrEkH"}}});