import{SlIconButton}from"./chunk.MXRX25LY.js";import{getAnimation,setDefaultAnimation}from"./chunk.EJDHS3MU.js";import{waitForEvent}from"./chunk.B4BZKR24.js";import{animateTo,stopAnimations}from"./chunk.RV6ECJES.js";import{LocalizeController}from"./chunk.NH3SRVOC.js";import{HasSlotController}from"./chunk.NYIIDP5N.js";import{e}from"./chunk.UZVKBFXH.js";import{alert_styles_default}from"./chunk.JMUOJ3NB.js";import{watch}from"./chunk.SJGTYGCD.js";import{component_styles_default}from"./chunk.K23QWHWK.js";import{ShoelaceElement,e as e2,n,r}from"./chunk.QAHCGRIS.js";import{x}from"./chunk.CXZZ2LVK.js";import{__decorateClass}from"./chunk.625AWUY7.js";var toastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"});var SlAlert=class extends ShoelaceElement{constructor(){super(...arguments);this.hasSlotController=new HasSlotController(this,"icon","suffix");this.localize=new LocalizeController(this);this.open=false;this.closable=false;this.variant="primary";this.duration=Infinity;this.remainingTime=this.duration;}
firstUpdated(){this.base.hidden=!this.open;}
restartAutoHide(){this.handleCountdownChange();clearTimeout(this.autoHideTimeout);clearInterval(this.remainingTimeInterval);if(this.open&&this.duration<Infinity){this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration);this.remainingTime=this.duration;this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100;},100);}}
pauseAutoHide(){var _a;(_a=this.countdownAnimation)==null?void 0:_a.pause();clearTimeout(this.autoHideTimeout);clearInterval(this.remainingTimeInterval);}
resumeAutoHide(){var _a;if(this.duration<Infinity){this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime);this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100;},100);(_a=this.countdownAnimation)==null?void 0:_a.play();}}
handleCountdownChange(){if(this.open&&this.duration<Infinity&&this.countdown){const{countdownElement}=this;const start="100%";const end="0";this.countdownAnimation=countdownElement.animate([{width:start},{width:end}],{duration:this.duration,easing:"linear"});}}
handleCloseClick(){this.hide();}
async handleOpenChange(){if(this.open){this.emit("sl-show");if(this.duration<Infinity){this.restartAutoHide();}
await stopAnimations(this.base);this.base.hidden=false;const{keyframes,options}=getAnimation(this,"alert.show",{dir:this.localize.dir()});await animateTo(this.base,keyframes,options);this.emit("sl-after-show");}else{this.emit("sl-hide");clearTimeout(this.autoHideTimeout);clearInterval(this.remainingTimeInterval);await stopAnimations(this.base);const{keyframes,options}=getAnimation(this,"alert.hide",{dir:this.localize.dir()});await animateTo(this.base,keyframes,options);this.base.hidden=true;this.emit("sl-after-hide");}}
handleDurationChange(){this.restartAutoHide();}
async show(){if(this.open){return void 0;}
this.open=true;return waitForEvent(this,"sl-after-show");}
async hide(){if(!this.open){return void 0;}
this.open=false;return waitForEvent(this,"sl-after-hide");}
async toast(){return new Promise((resolve)=>{this.handleCountdownChange();if(toastStack.parentElement===null){document.body.append(toastStack);}
toastStack.appendChild(this);requestAnimationFrame(()=>{this.clientWidth;this.show();});this.addEventListener("sl-after-hide",()=>{toastStack.removeChild(this);resolve();if(toastStack.querySelector("sl-alert")===null){toastStack.remove();}},{once:true});});}
render(){return x`
      <div
        part="base"
        class=${e({
      alert: true,
      "alert--open": this.open,
      "alert--closable": this.closable,
      "alert--has-countdown": !!this.countdown,
      "alert--has-icon": this.hasSlotController.test("icon"),
      "alert--primary": this.variant === "primary",
      "alert--success": this.variant === "success",
      "alert--neutral": this.variant === "neutral",
      "alert--warning": this.variant === "warning",
      "alert--danger": this.variant === "danger"
    })}
        role="alert"
        aria-hidden=${this.open ? "false" : "true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable ? x`<sl-icon-button
part="close-button"
exportparts="base:close-button__base"
class="alert__close-button"
name="x-lg"
library="system"
label=${this.localize.term("close")}@click=${this.handleCloseClick}></sl-icon-button>` : ""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown ? x`<div
class=${e({alert__countdown:true,"alert__countdown--ltr":this.countdown==="ltr"})}><div class="alert__countdown-elapsed"></div></div>` : ""}
      </div>
    `;}};SlAlert.styles=[component_styles_default,alert_styles_default];SlAlert.dependencies={"sl-icon-button":SlIconButton};__decorateClass([e2('[part~="base"]')],SlAlert.prototype,"base",2);__decorateClass([e2(".alert__countdown-elapsed")],SlAlert.prototype,"countdownElement",2);__decorateClass([n({type:Boolean,reflect:true})],SlAlert.prototype,"open",2);__decorateClass([n({type:Boolean,reflect:true})],SlAlert.prototype,"closable",2);__decorateClass([n({reflect:true})],SlAlert.prototype,"variant",2);__decorateClass([n({type:Number})],SlAlert.prototype,"duration",2);__decorateClass([n({type:String,reflect:true})],SlAlert.prototype,"countdown",2);__decorateClass([r()],SlAlert.prototype,"remainingTime",2);__decorateClass([watch("open",{waitUntilFirstUpdate:true})],SlAlert.prototype,"handleOpenChange",1);__decorateClass([watch("duration")],SlAlert.prototype,"handleDurationChange",1);setDefaultAnimation("alert.show",{keyframes:[{opacity:0,scale:0.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});setDefaultAnimation("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:0.8}],options:{duration:250,easing:"ease"}});export{SlAlert};