import{tab_group_styles_default}from"./chunk.IRKZDSA4.js";import{SlResizeObserver}from"./chunk.VLCTVMT7.js";import{scrollIntoView}from"./chunk.RWUUFNUL.js";import{SlIconButton}from"./chunk.MXRX25LY.js";import{LocalizeController}from"./chunk.NH3SRVOC.js";import{e}from"./chunk.UZVKBFXH.js";import{watch}from"./chunk.SJGTYGCD.js";import{component_styles_default}from"./chunk.K23QWHWK.js";import{ShoelaceElement,e as e2,n,r,t}from"./chunk.QAHCGRIS.js";import{x}from"./chunk.CXZZ2LVK.js";import{__decorateClass,__spreadValues}from"./chunk.625AWUY7.js";var SlTabGroup=class extends ShoelaceElement{constructor(){super(...arguments);this.tabs=[];this.focusableTabs=[];this.panels=[];this.localize=new LocalizeController(this);this.hasScrollControls=false;this.shouldHideScrollStartButton=false;this.shouldHideScrollEndButton=false;this.placement="top";this.activation="auto";this.noScrollControls=false;this.fixedScrollControls=false;this.scrollOffset=1;}
connectedCallback(){const whenAllDefined=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback();this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator();this.updateScrollControls();});this.mutationObserver=new MutationObserver((mutations)=>{if(mutations.some((m)=>!["aria-labelledby","aria-controls"].includes(m.attributeName))){setTimeout(()=>this.setAriaLabels());}
if(mutations.some((m)=>m.attributeName==="disabled")){this.syncTabsAndPanels();}});this.updateComplete.then(()=>{this.syncTabsAndPanels();this.mutationObserver.observe(this,{attributes:true,childList:true,subtree:true});this.resizeObserver.observe(this.nav);whenAllDefined.then(()=>{const intersectionObserver=new IntersectionObserver((entries,observer)=>{var _a;if(entries[0].intersectionRatio>0){this.setAriaLabels();this.setActiveTab((_a=this.getActiveTab())!=null?_a:this.tabs[0],{emitEvents:false});observer.unobserve(entries[0].target);}});intersectionObserver.observe(this.tabGroup);});});}
disconnectedCallback(){var _a,_b;super.disconnectedCallback();(_a=this.mutationObserver)==null?void 0:_a.disconnect();if(this.nav){(_b=this.resizeObserver)==null?void 0:_b.unobserve(this.nav);}}
getAllTabs(){const slot=this.shadowRoot.querySelector('slot[name="nav"]');return slot.assignedElements();}
getAllPanels(){return[...this.body.assignedElements()].filter((el)=>el.tagName.toLowerCase()==="sl-tab-panel");}
getActiveTab(){return this.tabs.find((el)=>el.active);}
handleClick(event){const target=event.target;const tab=target.closest("sl-tab");const tabGroup=tab==null?void 0:tab.closest("sl-tab-group");if(tabGroup!==this){return;}
if(tab!==null){this.setActiveTab(tab,{scrollBehavior:"smooth"});}}
handleKeyDown(event){const target=event.target;const tab=target.closest("sl-tab");const tabGroup=tab==null?void 0:tab.closest("sl-tab-group");if(tabGroup!==this){return;}
if(["Enter"," "].includes(event.key)){if(tab!==null){this.setActiveTab(tab,{scrollBehavior:"smooth"});event.preventDefault();}}
if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(event.key)){const activeEl=this.tabs.find((t2)=>t2.matches(":focus"));const isRtl=this.localize.dir()==="rtl";let nextTab=null;if((activeEl==null?void 0:activeEl.tagName.toLowerCase())==="sl-tab"){if(event.key==="Home"){nextTab=this.focusableTabs[0];}else if(event.key==="End"){nextTab=this.focusableTabs[this.focusableTabs.length-1];}else if(["top","bottom"].includes(this.placement)&&event.key===(isRtl?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&event.key==="ArrowUp"){const currentIndex=this.tabs.findIndex((el)=>el===activeEl);nextTab=this.findNextFocusableTab(currentIndex,"backward");}else if(["top","bottom"].includes(this.placement)&&event.key===(isRtl?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&event.key==="ArrowDown"){const currentIndex=this.tabs.findIndex((el)=>el===activeEl);nextTab=this.findNextFocusableTab(currentIndex,"forward");}
if(!nextTab){return;}
nextTab.tabIndex=0;nextTab.focus({preventScroll:true});if(this.activation==="auto"){this.setActiveTab(nextTab,{scrollBehavior:"smooth"});}else{this.tabs.forEach((tabEl)=>{tabEl.tabIndex=tabEl===nextTab?0:-1;});}
if(["top","bottom"].includes(this.placement)){scrollIntoView(nextTab,this.nav,"horizontal");}
event.preventDefault();}}}
handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"});}
handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"});}
setActiveTab(tab,options){options=__spreadValues({emitEvents:true,scrollBehavior:"auto"},options);if(tab!==this.activeTab&&!tab.disabled){const previousTab=this.activeTab;this.activeTab=tab;this.tabs.forEach((el)=>{el.active=el===this.activeTab;el.tabIndex=el===this.activeTab?0:-1;});this.panels.forEach((el)=>{var _a;return el.active=el.name===((_a=this.activeTab)==null?void 0:_a.panel);});this.syncIndicator();if(["top","bottom"].includes(this.placement)){scrollIntoView(this.activeTab,this.nav,"horizontal",options.scrollBehavior);}
if(options.emitEvents){if(previousTab){this.emit("sl-tab-hide",{detail:{name:previousTab.panel}});}
this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}});}}}
setAriaLabels(){this.tabs.forEach((tab)=>{const panel=this.panels.find((el)=>el.name===tab.panel);if(panel){tab.setAttribute("aria-controls",panel.getAttribute("id"));panel.setAttribute("aria-labelledby",tab.getAttribute("id"));}});}
repositionIndicator(){const currentTab=this.getActiveTab();if(!currentTab){return;}
const width=currentTab.clientWidth;const height=currentTab.clientHeight;const isRtl=this.localize.dir()==="rtl";const allTabs=this.getAllTabs();const precedingTabs=allTabs.slice(0,allTabs.indexOf(currentTab));const offset=precedingTabs.reduce((previous,current)=>({left:previous.left+current.clientWidth,top:previous.top+current.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${width}px`;this.indicator.style.height="auto";this.indicator.style.translate=isRtl?`${-1 * offset.left}px`:`${offset.left}px`;break;case"start":case"end":this.indicator.style.width="auto";this.indicator.style.height=`${height}px`;this.indicator.style.translate=`0 ${offset.top}px`;break;}}
syncTabsAndPanels(){this.tabs=this.getAllTabs();this.focusableTabs=this.tabs.filter((el)=>!el.disabled);this.panels=this.getAllPanels();this.syncIndicator();this.updateComplete.then(()=>this.updateScrollControls());}
findNextFocusableTab(currentIndex,direction){let nextTab=null;const iterator=direction==="forward"?1:-1;let nextIndex=currentIndex+iterator;while(currentIndex<this.tabs.length){nextTab=this.tabs[nextIndex]||null;if(nextTab===null){if(direction==="forward"){nextTab=this.focusableTabs[0];}else{nextTab=this.focusableTabs[this.focusableTabs.length-1];}
break;}
if(!nextTab.disabled){break;}
nextIndex+=iterator;}
return nextTab;}
updateScrollButtons(){if(this.hasScrollControls&&!this.fixedScrollControls){this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset;this.shouldHideScrollEndButton=this.isScrolledToEnd();}}
isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset;}
scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft;}
updateScrollControls(){if(this.noScrollControls){this.hasScrollControls=false;}else{this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1;}
this.updateScrollButtons();}
syncIndicator(){const tab=this.getActiveTab();if(tab){this.indicator.style.display="block";this.repositionIndicator();}else{this.indicator.style.display="none";}}
show(panel){const tab=this.tabs.find((el)=>el.panel===panel);if(tab){this.setActiveTab(tab,{scrollBehavior:"smooth"});}}
render(){const isRtl=this.localize.dir()==="rtl";return x`
      <div
        part="base"
        class=${e({
      "tab-group": true,
      "tab-group--top": this.placement === "top",
      "tab-group--bottom": this.placement === "bottom",
      "tab-group--start": this.placement === "start",
      "tab-group--end": this.placement === "end",
      "tab-group--rtl": this.localize.dir() === "rtl",
      "tab-group--has-scroll-controls": this.hasScrollControls
    })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls ? x`<sl-icon-button
part="scroll-button scroll-button--start"
exportparts="base:scroll-button__base"
class=${e({"tab-group__scroll-button":true,"tab-group__scroll-button--start":true,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
name=${isRtl?"chevron-right":"chevron-left"}
library="system"
tabindex="-1"
aria-hidden="true"
label=${this.localize.term("scrollToStart")}@click=${this.handleScrollToStart}></sl-icon-button>` : ""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls ? x`<sl-icon-button
part="scroll-button scroll-button--end"
exportparts="base:scroll-button__base"
class=${e({"tab-group__scroll-button":true,"tab-group__scroll-button--end":true,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
name=${isRtl?"chevron-left":"chevron-right"}
library="system"
tabindex="-1"
aria-hidden="true"
label=${this.localize.term("scrollToEnd")}@click=${this.handleScrollToEnd}></sl-icon-button>` : ""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `;}};SlTabGroup.styles=[component_styles_default,tab_group_styles_default];SlTabGroup.dependencies={"sl-icon-button":SlIconButton,"sl-resize-observer":SlResizeObserver};__decorateClass([e2(".tab-group")],SlTabGroup.prototype,"tabGroup",2);__decorateClass([e2(".tab-group__body")],SlTabGroup.prototype,"body",2);__decorateClass([e2(".tab-group__nav")],SlTabGroup.prototype,"nav",2);__decorateClass([e2(".tab-group__indicator")],SlTabGroup.prototype,"indicator",2);__decorateClass([r()],SlTabGroup.prototype,"hasScrollControls",2);__decorateClass([r()],SlTabGroup.prototype,"shouldHideScrollStartButton",2);__decorateClass([r()],SlTabGroup.prototype,"shouldHideScrollEndButton",2);__decorateClass([n()],SlTabGroup.prototype,"placement",2);__decorateClass([n()],SlTabGroup.prototype,"activation",2);__decorateClass([n({attribute:"no-scroll-controls",type:Boolean})],SlTabGroup.prototype,"noScrollControls",2);__decorateClass([n({attribute:"fixed-scroll-controls",type:Boolean})],SlTabGroup.prototype,"fixedScrollControls",2);__decorateClass([t({passive:true})],SlTabGroup.prototype,"updateScrollButtons",1);__decorateClass([watch("noScrollControls",{waitUntilFirstUpdate:true})],SlTabGroup.prototype,"updateScrollControls",1);__decorateClass([watch("placement",{waitUntilFirstUpdate:true})],SlTabGroup.prototype,"syncIndicator",1);export{SlTabGroup};