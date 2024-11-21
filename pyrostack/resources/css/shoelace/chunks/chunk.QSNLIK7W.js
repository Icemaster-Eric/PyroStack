import{textarea_styles_default}from"./chunk.7YWPK5VC.js";import{l}from"./chunk.IRURSJVI.js";import{defaultValue}from"./chunk.RQ7JZ4R7.js";import{form_control_styles_default}from"./chunk.2VV6AF6A.js";import{FormControlController}from"./chunk.37HAGFEA.js";import{o}from"./chunk.2URMUHDY.js";import{HasSlotController}from"./chunk.NYIIDP5N.js";import{e}from"./chunk.UZVKBFXH.js";import{watch}from"./chunk.SJGTYGCD.js";import{component_styles_default}from"./chunk.K23QWHWK.js";import{ShoelaceElement,e as e2,n,r}from"./chunk.QAHCGRIS.js";import{x}from"./chunk.CXZZ2LVK.js";import{__decorateClass}from"./chunk.625AWUY7.js";var SlTextarea=class extends ShoelaceElement{constructor(){super(...arguments);this.formControlController=new FormControlController(this,{assumeInteractionOn:["sl-blur","sl-input"]});this.hasSlotController=new HasSlotController(this,"help-text","label");this.hasFocus=false;this.title="";this.name="";this.value="";this.size="medium";this.filled=false;this.label="";this.helpText="";this.placeholder="";this.rows=4;this.resize="vertical";this.disabled=false;this.readonly=false;this.form="";this.required=false;this.spellcheck=true;this.defaultValue="";}
get validity(){return this.input.validity;}
get validationMessage(){return this.input.validationMessage;}
connectedCallback(){super.connectedCallback();this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight());this.updateComplete.then(()=>{this.setTextareaHeight();this.resizeObserver.observe(this.input);});}
firstUpdated(){this.formControlController.updateValidity();}
disconnectedCallback(){var _a;super.disconnectedCallback();if(this.input){(_a=this.resizeObserver)==null?void 0:_a.unobserve(this.input);}}
handleBlur(){this.hasFocus=false;this.emit("sl-blur");}
handleChange(){this.value=this.input.value;this.setTextareaHeight();this.emit("sl-change");}
handleFocus(){this.hasFocus=true;this.emit("sl-focus");}
handleInput(){this.value=this.input.value;this.emit("sl-input");}
handleInvalid(event){this.formControlController.setValidity(false);this.formControlController.emitInvalidEvent(event);}
setTextareaHeight(){if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`;this.input.style.height="auto";this.input.style.height=`${this.input.scrollHeight}px`;}else{this.input.style.height=void 0;}}
handleDisabledChange(){this.formControlController.setValidity(this.disabled);}
handleRowsChange(){this.setTextareaHeight();}
async handleValueChange(){await this.updateComplete;this.formControlController.updateValidity();this.setTextareaHeight();}
focus(options){this.input.focus(options);}
blur(){this.input.blur();}
select(){this.input.select();}
scrollPosition(position){if(position){if(typeof position.top==="number")
this.input.scrollTop=position.top;if(typeof position.left==="number")
this.input.scrollLeft=position.left;return void 0;}
return{top:this.input.scrollTop,left:this.input.scrollTop};}
setSelectionRange(selectionStart,selectionEnd,selectionDirection="none"){this.input.setSelectionRange(selectionStart,selectionEnd,selectionDirection);}
setRangeText(replacement,start,end,selectMode="preserve"){const selectionStart=start!=null?start:this.input.selectionStart;const selectionEnd=end!=null?end:this.input.selectionEnd;this.input.setRangeText(replacement,selectionStart,selectionEnd,selectMode);if(this.value!==this.input.value){this.value=this.input.value;this.setTextareaHeight();}}
checkValidity(){return this.input.checkValidity();}
getForm(){return this.formControlController.getForm();}
reportValidity(){return this.input.reportValidity();}
setCustomValidity(message){this.input.setCustomValidity(message);this.formControlController.updateValidity();}
render(){const hasLabelSlot=this.hasSlotController.test("label");const hasHelpTextSlot=this.hasSlotController.test("help-text");const hasLabel=this.label?true:!!hasLabelSlot;const hasHelpText=this.helpText?true:!!hasHelpTextSlot;return x`
      <div
        part="form-control"
        class=${e({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${e({
      textarea: true,
      "textarea--small": this.size === "small",
      "textarea--medium": this.size === "medium",
      "textarea--large": this.size === "large",
      "textarea--standard": !this.filled,
      "textarea--filled": this.filled,
      "textarea--disabled": this.disabled,
      "textarea--focused": this.hasFocus,
      "textarea--empty": !this.value,
      "textarea--resize-none": this.resize === "none",
      "textarea--resize-vertical": this.resize === "vertical",
      "textarea--resize-auto": this.resize === "auto"
    })}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${o(this.name)}
              .value=${l(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${o(this.placeholder)}
              rows=${o(this.rows)}
              minlength=${o(this.minlength)}
              maxlength=${o(this.maxlength)}
              autocapitalize=${o(this.autocapitalize)}
              autocorrect=${o(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${o(this.spellcheck)}
              enterkeyhint=${o(this.enterkeyhint)}
              inputmode=${o(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize !== "auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;}};SlTextarea.styles=[component_styles_default,form_control_styles_default,textarea_styles_default];__decorateClass([e2(".textarea__control")],SlTextarea.prototype,"input",2);__decorateClass([e2(".textarea__size-adjuster")],SlTextarea.prototype,"sizeAdjuster",2);__decorateClass([r()],SlTextarea.prototype,"hasFocus",2);__decorateClass([n()],SlTextarea.prototype,"title",2);__decorateClass([n()],SlTextarea.prototype,"name",2);__decorateClass([n()],SlTextarea.prototype,"value",2);__decorateClass([n({reflect:true})],SlTextarea.prototype,"size",2);__decorateClass([n({type:Boolean,reflect:true})],SlTextarea.prototype,"filled",2);__decorateClass([n()],SlTextarea.prototype,"label",2);__decorateClass([n({attribute:"help-text"})],SlTextarea.prototype,"helpText",2);__decorateClass([n()],SlTextarea.prototype,"placeholder",2);__decorateClass([n({type:Number})],SlTextarea.prototype,"rows",2);__decorateClass([n()],SlTextarea.prototype,"resize",2);__decorateClass([n({type:Boolean,reflect:true})],SlTextarea.prototype,"disabled",2);__decorateClass([n({type:Boolean,reflect:true})],SlTextarea.prototype,"readonly",2);__decorateClass([n({reflect:true})],SlTextarea.prototype,"form",2);__decorateClass([n({type:Boolean,reflect:true})],SlTextarea.prototype,"required",2);__decorateClass([n({type:Number})],SlTextarea.prototype,"minlength",2);__decorateClass([n({type:Number})],SlTextarea.prototype,"maxlength",2);__decorateClass([n()],SlTextarea.prototype,"autocapitalize",2);__decorateClass([n()],SlTextarea.prototype,"autocorrect",2);__decorateClass([n()],SlTextarea.prototype,"autocomplete",2);__decorateClass([n({type:Boolean})],SlTextarea.prototype,"autofocus",2);__decorateClass([n()],SlTextarea.prototype,"enterkeyhint",2);__decorateClass([n({type:Boolean,converter:{fromAttribute:(value)=>!value||value==="false"?false:true,toAttribute:(value)=>value?"true":"false"}})],SlTextarea.prototype,"spellcheck",2);__decorateClass([n()],SlTextarea.prototype,"inputmode",2);__decorateClass([defaultValue()],SlTextarea.prototype,"defaultValue",2);__decorateClass([watch("disabled",{waitUntilFirstUpdate:true})],SlTextarea.prototype,"handleDisabledChange",1);__decorateClass([watch("rows",{waitUntilFirstUpdate:true})],SlTextarea.prototype,"handleRowsChange",1);__decorateClass([watch("value",{waitUntilFirstUpdate:true})],SlTextarea.prototype,"handleValueChange",1);export{SlTextarea};