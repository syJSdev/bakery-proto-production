webpackJsonp([10],{6452:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{userinfo:e.accounts}}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,a,n,o){var r=t&&t.defaultProps,i=arguments.length-3;if(a||0===i||(a={}),a&&r)for(var s in r)void 0===a[s]&&(a[s]=r[s]);else a||(a=r||{});if(1===i)a.children=o;else if(i>1){for(var l=Array(i),d=0;d<i;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:a,_owner:null}}}(),u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p=a(0),c=n(p),h=a(47),m=a(378),f=n(m),b=a(6632),v=n(b),w=a(78),y=a(37),g=a(106),_=a(377),C=n(_),S=a(171),x=n(S),N=a(80),P=a(41),k=(0,y.withStyles)(function(e){return{root:{fontSize:"17px",backgroundColor:"#00cabed4  !important",color:"white",borderRadius:"26px",marginLeft:"20px",textTransform:"none !important",marginTop:"20px",padding:"14px 19px",transition:"all 0.3s ease 0s",flexGrow:"1"}}})(y.Button),M=(0,y.withStyles)(function(e){return{root:{fontSize:"17px",flexGrow:"1",backgroundColor:"#4e4e4e !important",color:"white",borderRadius:"26px",marginLeft:"20px",textTransform:"none !important",marginTop:"20px",padding:"14px 29px",transition:"all 0.3s ease 0s"}}})(y.Button),O=["Old Password doesn't match","New confirm Password doesn't match"],j=d("br",{}),T=d(M,{type:"submit"},void 0,"Save"),D=function(e){function t(e){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));A.call(a);var n=(0,C.default)("token");return a.state={channel:!1,showModal:!1,name:"",birthday:"",email:"",phonenumber:"",oname:"",obirthday:"",oemail:"",ophonenumber:"",opassword:"",npassword:"",copassword:"",err_psw1:!1,err_psw2:!1,token:n},a.mount=!1,a}return s(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.props.userinfo,t=(0,C.default)("password"),a=void 0;a=void 0===e.birthday||null===e.birthday?"":new Date(e.birthday).toISOString().substr(0,10),this.setState({name:e.firstname+" "+e.lastname,email:e.email,phonenumber:e.phonenumber,rpassword:t,birthday:a}),this.mount=!0}},{key:"componentWillReceiveProps",value:function(e){if(!0===this.mount){var t=e.userinfo,a=void 0;a=void 0===t.birthday||null===t.birthday?"":new Date(t.birthday).toISOString().substr(0,10),this.setState({name:t.firstname+" "+t.lastname,email:t.email,phonenumber:t.phonenumber,birthday:a})}}},{key:"render",value:function(){var e=this.state,t=e.channel,a=e.name,n=e.birthday,o=e.email,r=e.phonenumber,i=e.showModal,s=e.copassword,l=e.opassword,u=e.npassword,m=e.err_psw1,b=e.err_psw2;return d(p.Fragment,{},void 0,d("div",{className:"d-flex"},void 0,d("div",{className:v.default.avatar},void 0,(0,h.account_xl)(),d("p",{className:v.default.changeimage},void 0,"Change",j,"Image")),d("div",{className:v.default.nameinput},void 0,d(f.default,{id:"profile_name",label:"Name",value:a,disabled:!t,inverted:!0,onChange:this.handleChange,name:"name"}))),d(f.default,{fullWidth:!0,className:"mb-4",id:"profile_birthday",label:"Birthday",disabled:!t,value:n,inverted:!0,onChange:this.handleChange,name:"birthday",type:"text",onFocus:this._onFocus,onBlur:this._onBlur}),d(f.default,{className:"mb-4",fullWidth:!0,id:"profile_email",label:"Email",value:o,type:"email",disabled:!t,inverted:!0,onChange:this.handleChange,name:"email"}),d(f.default,{className:"mb-4",fullWidth:!0,id:"profile_phoneNumber",label:"Phone Number",value:r,type:"text",disabled:!0,inverted:!0,onChange:this.handleChange,name:"phonenumber"}),d("div",{className:v.default["button-group"]},void 0,!1===t?d(c.default.Fragment,{},void 0,d(k,{onClick:this.onEditProfile},void 0,"Edit Profile"),d(k,{onClick:this.onChangePSW},void 0,"Change Password")):d(c.default.Fragment,{},void 0,d(k,{onClick:this.onSave},void 0,"Save"),d(k,{onClick:this.onDiscard},void 0,"Discard"))),d(y.Modal,{open:i,onClose:this.onHideModal,"aria-labelledby":"modal-password"},void 0,d("form",{className:v.default["body-container"],onSubmit:this.changePassword},void 0,d("div",{onClick:this.onHideModal,className:v.default["btn-close"]},void 0,(0,h.close_dlg)()),d("p",{className:v.default.mTitle},void 0,"Change Password"),d("div",{className:v.default["form-container"]},void 0,d(f.default,{className:"mb-3",id:"password1",label:"Old Password",value:l,inverted:!0,type:"password",name:"opassword",required:!0,onChange:this.handleChange}),!0===m&&d("p",{className:v.default["err-pswMsg"]},void 0,O[0]),d(f.default,{className:"mb-3",id:"password2",label:"New Password",value:u,inverted:!0,type:"password",name:"npassword",required:!0,onChange:this.handleChange}),d(f.default,{className:"mb-3",id:"password3",label:"Confirm Password",value:s,inverted:!0,type:"password",name:"copassword",required:!0,onChange:this.handleChange}),!0===b&&d("p",{className:v.default["err-pswMsg"]},void 0,O[1]),d("div",{className:v.default["button-group"]},void 0,T,d(M,{onClick:this.onHideModal},void 0,"Cancel"))))))}}]),t}(c.default.Component),A=function(){var e=this;this.onEditProfile=function(){var t=e.state,a=t.name,n=t.birthday,o=t.email,r=t.phonenumber;e.setState({channel:!0,oname:a,obirthday:n,oemail:o,ophonenumber:r})},this.onChangePSW=function(){e.setState({showModal:!0,opassword:"",npassword:"",copassword:""})},this.onHideModal=function(){e.setState({showModal:!1})},this.onSave=function(t){t.preventDefault();var a=e.state,n=a.rpassword,o=a.name,r=a.email,i=a.token,s=a.birthday,l=o.split(" ")[0],d=o.split(" ")[1];(0,g.callApi)("user/update-user-profile","post",{token:i,firstname:l,lastname:d,email:r,password:n,birthday:s}).then(function(t){(0,x.default)("firstname",l),e.props.dispatch((0,N.GetUserInfo)(i)),e.setState({channel:!1})})},this.onDiscard=function(){var t=e.state,a=t.oname,n=t.obirthday,o=t.oemail,r=t.ophonenumber;e.setState({channel:!1,name:a,birthday:n,email:o,phonenumber:r})},this.changePassword=function(t){t.preventDefault();var a=e.state,n=a.opassword,o=a.npassword,r=a.copassword,i=a.rpassword,s=a.name,l=a.email,d=a.token,u=!1;if(i!==n?(e.setState({err_psw1:!0}),u=!0):e.setState({err_psw1:!1}),o!==r?(e.setState({err_psw2:!0}),u=!0):e.setState({err_psw2:!1}),!u){var p=s.split(" ")[0],c=s.split(" ")[1];(0,g.callApi)("user/update-user-profile","post",{token:d,firstname:p,lastname:c,email:l,password:o}).then(function(t){e.setState({rpassword:o}),(0,x.default)("password",o),e.onHideModal()})}},this.handleChange=function(t){e.setState(o({},t.target.name,t.target.value))},this._onFocus=function(e){e.currentTarget.type="date"},this._onBlur=function(e){e.currentTarget.type="text",e.currentTarget.placeholder="Enter a Date"}};t.default=(0,P.withRouter)((0,w.connect)(l)(D))},6632:function(e,t){e.exports={avatar:"WQcktGI7siRwDnea93l8w",nameinput:"_16NBXAAYemCrX__n0sCVOV","body-container":"_34bfK6cFxp7xwjYQAC7tx6","err-pswMsg":"_2jU9Abs3z_Eq7z9Jlz80jC","btn-close":"_2YLgTZ4i6F1CLIXdMQOku7",mTitle:"_1NjYmYv9P7YiKBLt-TPLcr","form-container":"eB7YewO8y3ouRmA1_jG0M","button-group":"_2dRRz_wXpNGXAd746YWhvC"}}});