import{checkbox_styles_default}from"./chunk.DNDYQTWS.js";import{l}from"./chunk.IRURSJVI.js";import{defaultValue}from"./chunk.RQ7JZ4R7.js";import{form_control_styles_default}from"./chunk.2VV6AF6A.js";import{FormControlController}from"./chunk.37HAGFEA.js";import{o}from"./chunk.2URMUHDY.js";import{HasSlotController}from"./chunk.NYIIDP5N.js";import{SlIcon}from"./chunk.F24SGBDC.js";import{e}from"./chunk.UZVKBFXH.js";import{watch}from"./chunk.SJGTYGCD.js";import{component_styles_default}from"./chunk.K23QWHWK.js";import{ShoelaceElement,e as e2,n,r}from"./chunk.QAHCGRIS.js";import{x}from"./chunk.CXZZ2LVK.js";import{__decorateClass}from"./chunk.625AWUY7.js";var SlCheckbox=class extends ShoelaceElement{constructor(){super(...arguments);this.formControlController=new FormControlController(this,{value:(control)=>control.checked?control.value||"on":void 0,defaultValue:(control)=>control.defaultChecked,setValue:(control,checked)=>control.checked=checked});this.hasSlotController=new HasSlotController(this,"help-text");this.hasFocus=false;this.title="";this.name="";this.size="medium";this.disabled=false;this.checked=false;this.indeterminate=false;this.defaultChecked=false;this.form="";this.required=false;this.helpText="";}
get validity(){return this.input.validity;}
get validationMessage(){return this.input.validationMessage;}
firstUpdated(){this.formControlController.updateValidity();}
handleClick(){this.checked=!this.checked;this.indeterminate=false;this.emit("sl-change");}
handleBlur(){this.hasFocus=false;this.emit("sl-blur");}
handleInput(){this.emit("sl-input");}
handleInvalid(event){this.formControlController.setValidity(false);this.formControlController.emitInvalidEvent(event);}
handleFocus(){this.hasFocus=true;this.emit("sl-focus");}
handleDisabledChange(){this.formControlController.setValidity(this.disabled);}
handleStateChange(){this.input.checked=this.checked;this.input.indeterminate=this.indeterminate;this.formControlController.updateValidity();}
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
      checkbox: true,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate,
      "checkbox--small": this.size === "small",
      "checkbox--medium": this.size === "medium",
      "checkbox--large": this.size === "large"
    })}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${o(this.value)}
            .indeterminate=${l(this.indeterminate)}
            .checked=${l(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked ? " control--checked" : ""}${this.indeterminate ? " control--indeterminate" : ""}"
            class="checkbox__control"
          >
            ${this.checked ? x`<sl-icon part="checked-icon"class="checkbox__checked-icon"library="system"name="check"></sl-icon>` : ""}
            ${!this.checked && this.indeterminate ? x`<sl-icon
part="indeterminate-icon"
class="checkbox__indeterminate-icon"
library="system"
name="indeterminate"></sl-icon>` : ""}
          </span>

          <div part="label" class="checkbox__label">
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
    `;}};SlCheckbox.styles=[component_styles_default,form_control_styles_default,checkbox_styles_default];SlCheckbox.dependencies={"sl-icon":SlIcon};__decorateClass([e2('input[type="checkbox"]')],SlCheckbox.prototype,"input",2);__decorateClass([r()],SlCheckbox.prototype,"hasFocus",2);__decorateClass([n()],SlCheckbox.prototype,"title",2);__decorateClass([n()],SlCheckbox.prototype,"name",2);__decorateClass([n()],SlCheckbox.prototype,"value",2);__decorateClass([n({reflect:true})],SlCheckbox.prototype,"size",2);__decorateClass([n({type:Boolean,reflect:true})],SlCheckbox.prototype,"disabled",2);__decorateClass([n({type:Boolean,reflect:true})],SlCheckbox.prototype,"checked",2);__decorateClass([n({type:Boolean,reflect:true})],SlCheckbox.prototype,"indeterminate",2);__decorateClass([defaultValue("checked")],SlCheckbox.prototype,"defaultChecked",2);__decorateClass([n({reflect:true})],SlCheckbox.prototype,"form",2);__decorateClass([n({type:Boolean,reflect:true})],SlCheckbox.prototype,"required",2);__decorateClass([n({attribute:"help-text"})],SlCheckbox.prototype,"helpText",2);__decorateClass([watch("disabled",{waitUntilFirstUpdate:true})],SlCheckbox.prototype,"handleDisabledChange",1);__decorateClass([watch(["checked","indeterminate"],{waitUntilFirstUpdate:true})],SlCheckbox.prototype,"handleStateChange",1);export{SlCheckbox};