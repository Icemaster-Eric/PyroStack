import{radio_group_styles_default}from"./chunk.ZDBZWNPG.js";import{form_control_styles_default}from"./chunk.2VV6AF6A.js";import{FormControlController,customErrorValidityState,validValidityState,valueMissingValidityState}from"./chunk.37HAGFEA.js";import{SlButtonGroup}from"./chunk.C7FT6ZJA.js";import{HasSlotController}from"./chunk.NYIIDP5N.js";import{e}from"./chunk.UZVKBFXH.js";import{watch}from"./chunk.SJGTYGCD.js";import{component_styles_default}from"./chunk.K23QWHWK.js";import{ShoelaceElement,e as e2,n,r}from"./chunk.QAHCGRIS.js";import{x}from"./chunk.CXZZ2LVK.js";import{__decorateClass}from"./chunk.625AWUY7.js";var SlRadioGroup=class extends ShoelaceElement{constructor(){super(...arguments);this.formControlController=new FormControlController(this);this.hasSlotController=new HasSlotController(this,"help-text","label");this.customValidityMessage="";this.hasButtonGroup=false;this.errorMessage="";this.defaultValue="";this.label="";this.helpText="";this.name="option";this.value="";this.size="medium";this.form="";this.required=false;}
get validity(){const isRequiredAndEmpty=this.required&&!this.value;const hasCustomValidityMessage=this.customValidityMessage!=="";if(hasCustomValidityMessage){return customErrorValidityState;}else if(isRequiredAndEmpty){return valueMissingValidityState;}
return validValidityState;}
get validationMessage(){const isRequiredAndEmpty=this.required&&!this.value;const hasCustomValidityMessage=this.customValidityMessage!=="";if(hasCustomValidityMessage){return this.customValidityMessage;}else if(isRequiredAndEmpty){return this.validationInput.validationMessage;}
return"";}
connectedCallback(){super.connectedCallback();this.defaultValue=this.value;}
firstUpdated(){this.formControlController.updateValidity();}
getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")];}
handleRadioClick(event){const target=event.target.closest("sl-radio, sl-radio-button");const radios=this.getAllRadios();const oldValue=this.value;if(!target||target.disabled){return;}
this.value=target.value;radios.forEach((radio)=>radio.checked=radio===target);if(this.value!==oldValue){this.emit("sl-change");this.emit("sl-input");}}
handleKeyDown(event){var _a;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(event.key)){return;}
const radios=this.getAllRadios().filter((radio)=>!radio.disabled);const checkedRadio=(_a=radios.find((radio)=>radio.checked))!=null?_a:radios[0];const incr=event.key===" "?0:["ArrowUp","ArrowLeft"].includes(event.key)?-1:1;const oldValue=this.value;let index=radios.indexOf(checkedRadio)+incr;if(index<0){index=radios.length-1;}
if(index>radios.length-1){index=0;}
this.getAllRadios().forEach((radio)=>{radio.checked=false;if(!this.hasButtonGroup){radio.setAttribute("tabindex","-1");}});this.value=radios[index].value;radios[index].checked=true;if(!this.hasButtonGroup){radios[index].setAttribute("tabindex","0");radios[index].focus();}else{radios[index].shadowRoot.querySelector("button").focus();}
if(this.value!==oldValue){this.emit("sl-change");this.emit("sl-input");}
event.preventDefault();}
handleLabelClick(){this.focus();}
handleInvalid(event){this.formControlController.setValidity(false);this.formControlController.emitInvalidEvent(event);}
async syncRadioElements(){var _a,_b;const radios=this.getAllRadios();await Promise.all(radios.map(async(radio)=>{await radio.updateComplete;radio.checked=radio.value===this.value;radio.size=this.size;}));this.hasButtonGroup=radios.some((radio)=>radio.tagName.toLowerCase()==="sl-radio-button");if(radios.length>0&&!radios.some((radio)=>radio.checked)){if(this.hasButtonGroup){const buttonRadio=(_a=radios[0].shadowRoot)==null?void 0:_a.querySelector("button");if(buttonRadio){buttonRadio.setAttribute("tabindex","0");}}else{radios[0].setAttribute("tabindex","0");}}
if(this.hasButtonGroup){const buttonGroup=(_b=this.shadowRoot)==null?void 0:_b.querySelector("sl-button-group");if(buttonGroup){buttonGroup.disableRole=true;}}}
syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return;}
if(customElements.get("sl-radio")){this.syncRadioElements();}else{customElements.whenDefined("sl-radio").then(()=>this.syncRadios());}
if(customElements.get("sl-radio-button")){this.syncRadioElements();}else{customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios());}}
updateCheckedRadio(){const radios=this.getAllRadios();radios.forEach((radio)=>radio.checked=radio.value===this.value);this.formControlController.setValidity(this.validity.valid);}
handleSizeChange(){this.syncRadios();}
handleValueChange(){if(this.hasUpdated){this.updateCheckedRadio();}}
checkValidity(){const isRequiredAndEmpty=this.required&&!this.value;const hasCustomValidityMessage=this.customValidityMessage!=="";if(isRequiredAndEmpty||hasCustomValidityMessage){this.formControlController.emitInvalidEvent();return false;}
return true;}
getForm(){return this.formControlController.getForm();}
reportValidity(){const isValid=this.validity.valid;this.errorMessage=this.customValidityMessage||isValid?"":this.validationInput.validationMessage;this.formControlController.setValidity(isValid);this.validationInput.hidden=true;clearTimeout(this.validationTimeout);if(!isValid){this.validationInput.hidden=false;this.validationInput.reportValidity();this.validationTimeout=setTimeout(()=>this.validationInput.hidden=true,1e4);}
return isValid;}
setCustomValidity(message=""){this.customValidityMessage=message;this.errorMessage=message;this.validationInput.setCustomValidity(message);this.formControlController.updateValidity();}
focus(options){const radios=this.getAllRadios();const checked=radios.find((radio)=>radio.checked);const firstEnabledRadio=radios.find((radio)=>!radio.disabled);const radioToFocus=checked||firstEnabledRadio;if(radioToFocus){radioToFocus.focus(options);}}
render(){const hasLabelSlot=this.hasSlotController.test("label");const hasHelpTextSlot=this.hasSlotController.test("help-text");const hasLabel=this.label?true:!!hasLabelSlot;const hasHelpText=this.helpText?true:!!hasHelpTextSlot;const defaultSlot=x`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return x`
      <fieldset
        part="form-control"
        class=${e({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--radio-group": true,
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup ? x`<sl-button-group part="button-group"exportparts="base:button-group__base"role="presentation">${defaultSlot}</sl-button-group>` : defaultSlot}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `;}};SlRadioGroup.styles=[component_styles_default,form_control_styles_default,radio_group_styles_default];SlRadioGroup.dependencies={"sl-button-group":SlButtonGroup};__decorateClass([e2("slot:not([name])")],SlRadioGroup.prototype,"defaultSlot",2);__decorateClass([e2(".radio-group__validation-input")],SlRadioGroup.prototype,"validationInput",2);__decorateClass([r()],SlRadioGroup.prototype,"hasButtonGroup",2);__decorateClass([r()],SlRadioGroup.prototype,"errorMessage",2);__decorateClass([r()],SlRadioGroup.prototype,"defaultValue",2);__decorateClass([n()],SlRadioGroup.prototype,"label",2);__decorateClass([n({attribute:"help-text"})],SlRadioGroup.prototype,"helpText",2);__decorateClass([n()],SlRadioGroup.prototype,"name",2);__decorateClass([n({reflect:true})],SlRadioGroup.prototype,"value",2);__decorateClass([n({reflect:true})],SlRadioGroup.prototype,"size",2);__decorateClass([n({reflect:true})],SlRadioGroup.prototype,"form",2);__decorateClass([n({type:Boolean,reflect:true})],SlRadioGroup.prototype,"required",2);__decorateClass([watch("size",{waitUntilFirstUpdate:true})],SlRadioGroup.prototype,"handleSizeChange",1);__decorateClass([watch("value")],SlRadioGroup.prototype,"handleValueChange",1);export{SlRadioGroup};