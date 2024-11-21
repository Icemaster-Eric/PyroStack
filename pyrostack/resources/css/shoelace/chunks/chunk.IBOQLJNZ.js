import{switch_styles_default}from"./chunk.ROHOK2AY.js";import{l}from"./chunk.IRURSJVI.js";import{defaultValue}from"./chunk.RQ7JZ4R7.js";import{form_control_styles_default}from"./chunk.2VV6AF6A.js";import{FormControlController}from"./chunk.37HAGFEA.js";import{o}from"./chunk.2URMUHDY.js";import{HasSlotController}from"./chunk.NYIIDP5N.js";import{e}from"./chunk.UZVKBFXH.js";import{watch}from"./chunk.SJGTYGCD.js";import{component_styles_default}from"./chunk.K23QWHWK.js";import{ShoelaceElement,e as e2,n,r}from"./chunk.QAHCGRIS.js";import{x}from"./chunk.CXZZ2LVK.js";import{__decorateClass}from"./chunk.625AWUY7.js";var SlSwitch=class extends ShoelaceElement{constructor(){super(...arguments);this.formControlController=new FormControlController(this,{value:(control)=>control.checked?control.value||"on":void 0,defaultValue:(control)=>control.defaultChecked,setValue:(control,checked)=>control.checked=checked});this.hasSlotController=new HasSlotController(this,"help-text");this.hasFocus=false;this.title="";this.name="";this.size="medium";this.disabled=false;this.checked=false;this.defaultChecked=false;this.form="";this.required=false;this.helpText="";}
get validity(){return this.input.validity;}
get validationMessage(){return this.input.validationMessage;}
firstUpdated(){this.formControlController.updateValidity();}
handleBlur(){this.hasFocus=false;this.emit("sl-blur");}
handleInput(){this.emit("sl-input");}
handleInvalid(event){this.formControlController.setValidity(false);this.formControlController.emitInvalidEvent(event);}
handleClick(){this.checked=!this.checked;this.emit("sl-change");}
handleFocus(){this.hasFocus=true;this.emit("sl-focus");}
handleKeyDown(event){if(event.key==="ArrowLeft"){event.preventDefault();this.checked=false;this.emit("sl-change");this.emit("sl-input");}
if(event.key==="ArrowRight"){event.preventDefault();this.checked=true;this.emit("sl-change");this.emit("sl-input");}}
handleCheckedChange(){this.input.checked=this.checked;this.formControlController.updateValidity();}
handleDisabledChange(){this.formControlController.setValidity(true);}
click(){this.input.click();}
focus(options){this.input.focus(options);}
blur(){this.input.blur();}
checkValidity(){return this.input.checkValidity();}
getForm(){return this.formControlController.getForm();}
reportValidity(){return this.input.reportValidity();}
setCustomValidity(message){this.input.setCustomValidity(message);this.formControlController.updateValidity();}
render(){const hasHelpTextSlot=this.hasSlotController.test("help-text");const hasHelpText=this.helpText?true:!!hasHelpTextSlot;return x`
      <div
        class=${e({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="base"
          class=${e({
      switch: true,
      "switch--checked": this.checked,
      "switch--disabled": this.disabled,
      "switch--focused": this.hasFocus,
      "switch--small": this.size === "small",
      "switch--medium": this.size === "medium",
      "switch--large": this.size === "large"
    })}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${o(this.value)}
            .checked=${l(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${hasHelpText ? "false" : "true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;}};SlSwitch.styles=[component_styles_default,form_control_styles_default,switch_styles_default];__decorateClass([e2('input[type="checkbox"]')],SlSwitch.prototype,"input",2);__decorateClass([r()],SlSwitch.prototype,"hasFocus",2);__decorateClass([n()],SlSwitch.prototype,"title",2);__decorateClass([n()],SlSwitch.prototype,"name",2);__decorateClass([n()],SlSwitch.prototype,"value",2);__decorateClass([n({reflect:true})],SlSwitch.prototype,"size",2);__decorateClass([n({type:Boolean,reflect:true})],SlSwitch.prototype,"disabled",2);__decorateClass([n({type:Boolean,reflect:true})],SlSwitch.prototype,"checked",2);__decorateClass([defaultValue("checked")],SlSwitch.prototype,"defaultChecked",2);__decorateClass([n({reflect:true})],SlSwitch.prototype,"form",2);__decorateClass([n({type:Boolean,reflect:true})],SlSwitch.prototype,"required",2);__decorateClass([n({attribute:"help-text"})],SlSwitch.prototype,"helpText",2);__decorateClass([watch("checked",{waitUntilFirstUpdate:true})],SlSwitch.prototype,"handleCheckedChange",1);__decorateClass([watch("disabled",{waitUntilFirstUpdate:true})],SlSwitch.prototype,"handleDisabledChange",1);export{SlSwitch};