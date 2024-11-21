import{tooltip_styles_default}from"./chunk.QYWEKP2N.js";import{SlPopup}from"./chunk.UDZLGDWZ.js";import{getAnimation,setDefaultAnimation}from"./chunk.EJDHS3MU.js";import{waitForEvent}from"./chunk.B4BZKR24.js";import{animateTo,parseDuration,stopAnimations}from"./chunk.RV6ECJES.js";import{LocalizeController}from"./chunk.NH3SRVOC.js";import{e}from"./chunk.UZVKBFXH.js";import{watch}from"./chunk.SJGTYGCD.js";import{component_styles_default}from"./chunk.K23QWHWK.js";import{ShoelaceElement,e as e2,n}from"./chunk.QAHCGRIS.js";import{x}from"./chunk.CXZZ2LVK.js";import{__decorateClass}from"./chunk.625AWUY7.js";var SlTooltip=class extends ShoelaceElement{constructor(){super();this.localize=new LocalizeController(this);this.content="";this.placement="top";this.disabled=false;this.distance=8;this.open=false;this.skidding=0;this.trigger="hover focus";this.hoist=false;this.handleBlur=()=>{if(this.hasTrigger("focus")){this.hide();}};this.handleClick=()=>{if(this.hasTrigger("click")){if(this.open){this.hide();}else{this.show();}}};this.handleFocus=()=>{if(this.hasTrigger("focus")){this.show();}};this.handleDocumentKeyDown=(event)=>{if(event.key==="Escape"){event.stopPropagation();this.hide();}};this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const delay=parseDuration(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout);this.hoverTimeout=window.setTimeout(()=>this.show(),delay);}};this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const delay=parseDuration(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout);this.hoverTimeout=window.setTimeout(()=>this.hide(),delay);}};this.addEventListener("blur",this.handleBlur,true);this.addEventListener("focus",this.handleFocus,true);this.addEventListener("click",this.handleClick);this.addEventListener("mouseover",this.handleMouseOver);this.addEventListener("mouseout",this.handleMouseOut);}
disconnectedCallback(){var _a;super.disconnectedCallback();(_a=this.closeWatcher)==null?void 0:_a.destroy();document.removeEventListener("keydown",this.handleDocumentKeyDown);}
firstUpdated(){this.body.hidden=!this.open;if(this.open){this.popup.active=true;this.popup.reposition();}}
hasTrigger(triggerType){const triggers=this.trigger.split(" ");return triggers.includes(triggerType);}
async handleOpenChange(){var _a,_b;if(this.open){if(this.disabled){return;}
this.emit("sl-show");if("CloseWatcher"in window){(_a=this.closeWatcher)==null?void 0:_a.destroy();this.closeWatcher=new CloseWatcher();this.closeWatcher.onclose=()=>{this.hide();};}else{document.addEventListener("keydown",this.handleDocumentKeyDown);}
await stopAnimations(this.body);this.body.hidden=false;this.popup.active=true;const{keyframes,options}=getAnimation(this,"tooltip.show",{dir:this.localize.dir()});await animateTo(this.popup.popup,keyframes,options);this.popup.reposition();this.emit("sl-after-show");}else{this.emit("sl-hide");(_b=this.closeWatcher)==null?void 0:_b.destroy();document.removeEventListener("keydown",this.handleDocumentKeyDown);await stopAnimations(this.body);const{keyframes,options}=getAnimation(this,"tooltip.hide",{dir:this.localize.dir()});await animateTo(this.popup.popup,keyframes,options);this.popup.active=false;this.body.hidden=true;this.emit("sl-after-hide");}}
async handleOptionsChange(){if(this.hasUpdated){await this.updateComplete;this.popup.reposition();}}
handleDisabledChange(){if(this.disabled&&this.open){this.hide();}}
async show(){if(this.open){return void 0;}
this.open=true;return waitForEvent(this,"sl-after-show");}
async hide(){if(!this.open){return void 0;}
this.open=false;return waitForEvent(this,"sl-after-hide");}
render(){return x`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${e({
      tooltip: true,
      "tooltip--open": this.open
    })}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open ? "polite" : "off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `;}};SlTooltip.styles=[component_styles_default,tooltip_styles_default];SlTooltip.dependencies={"sl-popup":SlPopup};__decorateClass([e2("slot:not([name])")],SlTooltip.prototype,"defaultSlot",2);__decorateClass([e2(".tooltip__body")],SlTooltip.prototype,"body",2);__decorateClass([e2("sl-popup")],SlTooltip.prototype,"popup",2);__decorateClass([n()],SlTooltip.prototype,"content",2);__decorateClass([n()],SlTooltip.prototype,"placement",2);__decorateClass([n({type:Boolean,reflect:true})],SlTooltip.prototype,"disabled",2);__decorateClass([n({type:Number})],SlTooltip.prototype,"distance",2);__decorateClass([n({type:Boolean,reflect:true})],SlTooltip.prototype,"open",2);__decorateClass([n({type:Number})],SlTooltip.prototype,"skidding",2);__decorateClass([n()],SlTooltip.prototype,"trigger",2);__decorateClass([n({type:Boolean})],SlTooltip.prototype,"hoist",2);__decorateClass([watch("open",{waitUntilFirstUpdate:true})],SlTooltip.prototype,"handleOpenChange",1);__decorateClass([watch(["content","distance","hoist","placement","skidding"])],SlTooltip.prototype,"handleOptionsChange",1);__decorateClass([watch("disabled")],SlTooltip.prototype,"handleDisabledChange",1);setDefaultAnimation("tooltip.show",{keyframes:[{opacity:0,scale:0.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});setDefaultAnimation("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:0.8}],options:{duration:150,easing:"ease"}});export{SlTooltip};