(self.webpackChunkannular=self.webpackChunkannular||[]).push([[9945],{9945:(e,t,o)=>{"use strict";o.r(t),o.d(t,{LoginModule:()=>L,routes:()=>b});var r=o(1116),n=o(2612),s=o(1041),i=o(5346),a=o(3296),l=o(5366),m=o(4538),c=o(5059),u=o(8704),d=o(8418),p=o(5965),h=o(7307),f=o(3070),g=o(6174),S=o(4369);function I(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"mat-error"),l["\u0275\u0275text"](1,"La cuenta de correo es requerida"),l["\u0275\u0275elementEnd"]())}function v(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"mat-error"),l["\u0275\u0275text"](1,"Correo inv\xe1lido"),l["\u0275\u0275elementEnd"]())}function y(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"mat-error"),l["\u0275\u0275text"](1,"La contrase\xf1a es requerida"),l["\u0275\u0275elementEnd"]())}function x(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",19),l["\u0275\u0275elementStart"](1,"mat-label",20),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e.respuesta)}}const b=[{path:"",component:(()=>{class e{constructor(e,t,o,r,n){this.appSettings=e,this.fb=t,this.myStorage=o,this.router=r,this.httpConn=n,this.hide=!0,this.settings=this.appSettings.settings,this.connSvc=n,this.form=this.fb.group({email:[null,s.kI.compose([s.kI.required,a.L])],password:[null,s.kI.compose([s.kI.required,s.kI.minLength(2)])]}),this.error=!1,this.entrando=!1}onSubmit(){this.form.valid&&(this.entrando=!0,this.connSvc.postLogAPI("Seguridad","Login",{correo:this.form.value.email,contrasena:this.form.value.password}).subscribe(e=>{e.success?(this.error=!0,this.entrando=!1,this.LoginCorrect(e.response)):(this.error=!0,this.entrando=!1,this.respuesta=e.message)},e=>{this.entrando=!1,this.error=!0,this.respuesta=e.error.Message}))}ngAfterViewInit(){setTimeout(()=>{this.settings.loadingSpinner=!1})}LoginCorrect(e){this.SetDatosSesion(e),this.CargaCatalogosFrap(),this.router.navigate(["/tableroSocorros"])}SetDatosSesion(e){this.myStorage.setItem("token",e.token),this.myStorage.setItem("id_usuario",e.user.id_usuario),this.myStorage.setItem("nombre_personal",e.user.nombre_personal),this.myStorage.setItem("id_perfil",e.user.id_perfil),this.myStorage.setItem("id_personal",e.user.id_personal),this.myStorage.setItem("id_pais",e.user.id_pais),this.myStorage.setItem("desc_pais",e.user.pais),this.myStorage.setItem("id_estado",e.user.id_estado),this.myStorage.setItem("desc_estado",e.user.estado),this.myStorage.setItem("default_lat",e.user.default_lat),this.myStorage.setItem("default_lon",e.user.default_lon)}CargaCatalogosFrap(){this.ConsultaMunicipios(),this.ConsultaMaterial(),this.ConsultaInstitucionDerechohabiente(),this.ConsultaInstitucionTraslado(),this.ConsultaInstitucionNoTraslado(),this.ConsultaMotivoNoEfectivo(),this.CompaniaSeguro(),this.SocorrosInstitucion(),this.SeguroGastosMedicos()}ConsultaMunicipios(){this.connSvc.postAPI("General","ListGeneralMunicipio",{padreId:19}).subscribe(e=>{this.myStorage.setItem("municipioList",JSON.stringify(e.response))})}ConsultaMaterial(){this.connSvc.postAPI("General","ListAbastecimientoMaterial",{}).subscribe(e=>{this.myStorage.setItem("materialList",JSON.stringify(e.response))})}ConsultaInstitucionDerechohabiente(){this.connSvc.postAPI("General","ListInstitucionDerechohabiente",{}).subscribe(e=>{this.myStorage.setItem("instDerechohabienteList",JSON.stringify(e.response))})}ConsultaInstitucionTraslado(){this.connSvc.postAPI("General","ListInstitucionTraslado",{}).subscribe(e=>{this.myStorage.setItem("instTrasladoList",JSON.stringify(e.response))})}ConsultaInstitucionNoTraslado(){this.connSvc.postAPI("General","ListInstitucionNoTraslado",{}).subscribe(e=>{this.myStorage.setItem("instNoTrasladoList",JSON.stringify(e.response))})}ConsultaMotivoNoEfectivo(){this.connSvc.postAPI("General","ListMotivoNoEfectivo",{}).subscribe(e=>{this.myStorage.setItem("motivoList",JSON.stringify(e.response))})}CompaniaSeguro(){this.connSvc.postAPI("General","ListCompaniaSeguro",{}).subscribe(e=>{this.myStorage.setItem("companiaSeguroList",JSON.stringify(e.response))})}SocorrosInstitucion(){this.connSvc.postAPI("General","ListSocorrosInstitucion",{}).subscribe(e=>{this.myStorage.setItem("socorrosInstitucionList",JSON.stringify(e.response))})}SeguroGastosMedicos(){this.connSvc.postAPI("General","ListSeguroGastosMedicos",{}).subscribe(e=>{this.myStorage.setItem("seguroGastosMedicosList",JSON.stringify(e.response))})}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](m.d),l["\u0275\u0275directiveInject"](s.qu),l["\u0275\u0275directiveInject"](c.X),l["\u0275\u0275directiveInject"](n.F0),l["\u0275\u0275directiveInject"](u.P))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-login"]],decls:29,vars:8,consts:[[1,"h-100"],["fxLayout","row","fxLayoutAlign","center center",1,"h-100"],["fxFlex","90","fxFlex.gt-sm","30","fxFlex.sm","60",1,"mat-elevation-z6",2,"background-color","white",3,"formGroup","ngSubmit"],["fxLayout","column","fxFlex","","fxLayoutGap","15px",1,"p-3","loginGroup"],["fxLayout","column","fxFlex","100","fxLayoutAlign","center center"],["src","assets/img/logo.jpg",2,"max-width","100%"],[1,"userIcon"],["fxLayout","column","fxFlex","","fxLayoutGap","15px"],[1,"firstTitle"],[1,"secondTitle"],[1,"w-100","login-field",2,"margin-top","10px"],["matPrefix","",1,"mat-icon-sm","mb-2","mr-2","secondary-text-color"],["matInput","","placeholder","Correo","formControlName","email"],[4,"ngIf"],[1,"w-100","login-field"],["matInput","","placeholder","Contrase\xf1a","formControlName","password",3,"type"],["matSuffix","",1,"mat-icon-sm","mb-2","mr-2","secondary-text-color",2,"cursor","pointer",3,"click"],["class","divError",4,"ngIf"],["mat-raised-button","","type","submit",1,"mat-elevation-z6","w-100","mt-3",2,"background-color","#d32f2f !important","color","white !important",3,"disabled"],[1,"divError"],[1,"err"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"mat-sidenav-container",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"form",2),l["\u0275\u0275listener"]("ngSubmit",function(){return t.onSubmit()}),l["\u0275\u0275elementStart"](3,"div",3),l["\u0275\u0275elementStart"](4,"div",4),l["\u0275\u0275element"](5,"img",5),l["\u0275\u0275elementStart"](6,"mat-icon",6),l["\u0275\u0275text"](7,"account_circle"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"div",7),l["\u0275\u0275elementStart"](9,"span",8),l["\u0275\u0275text"](10,"Ingresar"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"span",9),l["\u0275\u0275text"](12,"\xa1Hola! Bienvenido de nuevo."),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](13,"mat-form-field",10),l["\u0275\u0275elementStart"](14,"mat-icon",11),l["\u0275\u0275text"](15,"mail"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](16,"input",12),l["\u0275\u0275template"](17,I,2,0,"mat-error",13),l["\u0275\u0275template"](18,v,2,0,"mat-error",13),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](19,"mat-form-field",14),l["\u0275\u0275elementStart"](20,"mat-icon",11),l["\u0275\u0275text"](21,"lock"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](22,"input",15),l["\u0275\u0275elementStart"](23,"mat-icon",16),l["\u0275\u0275listener"]("click",function(){return t.hide=!t.hide}),l["\u0275\u0275text"](24),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](25,y,2,0,"mat-error",13),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](26,x,3,1,"div",17),l["\u0275\u0275elementStart"](27,"button",18),l["\u0275\u0275text"](28,"ENTRAR"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("formGroup",t.form),l["\u0275\u0275advance"](15),l["\u0275\u0275property"]("ngIf",null==t.form.controls.email.errors?null:t.form.controls.email.errors.required),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.form.controls.email.hasError("invalidEmail")),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("type",t.hide?"password":"text"),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](t.hide?"visibility_off":"visibility"),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",null==t.form.controls.password.errors?null:t.form.controls.password.errors.required),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.error),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("disabled",t.entrando))},directives:[d.TM,p.xw,p.Wh,s._Y,s.JL,p.yH,s.sg,p.SQ,h.Hw,f.KE,f.qo,g.Nt,s.Fj,s.JJ,s.u,r.O5,f.R9,S.lW,f.TO,f.hX],styles:["app-login form{border-radius:5px}app-login .divError{color:red}app-login .divError mat-label.err{font-style:bold}app-login .loginGroup{font-family:Quicksand,sans-serif}app-login .loginGroup .userIcon{padding-top:20px;font-size:70px!important;width:70px!important;height:70px!important;color:#a9a9a9}app-login .loginGroup .firstTitle{font-size:25px;font-weight:600}app-login .loginGroup .secondTitle{font-size:15px;color:#9c9d9c}"],encapsulation:2}),e})(),pathMatch:"full"}];let L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({imports:[[r.ez,n.Bz.forChild(b),s.u5,s.UX,i.m]]}),e})()}}]);