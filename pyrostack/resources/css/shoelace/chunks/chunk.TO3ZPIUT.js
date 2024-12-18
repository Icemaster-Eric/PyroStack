import{menu_styles_default}from"./chunk.JASCFJUS.js";import{component_styles_default}from"./chunk.K23QWHWK.js";import{ShoelaceElement,e}from"./chunk.QAHCGRIS.js";import{x}from"./chunk.CXZZ2LVK.js";import{__decorateClass}from"./chunk.625AWUY7.js";var SlMenu=class extends ShoelaceElement{connectedCallback(){super.connectedCallback();this.setAttribute("role","menu");}
handleClick(event){const menuItemTypes=["menuitem","menuitemcheckbox"];const composedPath=event.composedPath();const target=composedPath.find((el)=>{var _a;return menuItemTypes.includes(((_a=el==null?void 0:el.getAttribute)==null?void 0:_a.call(el,"role"))||"");});if(!target)
return;const closestMenu=composedPath.find((el)=>{var _a;return((_a=el==null?void 0:el.getAttribute)==null?void 0:_a.call(el,"role"))==="menu";});const clickHasSubmenu=closestMenu!==this;if(clickHasSubmenu)
return;const item=target;if(item.type==="checkbox"){item.checked=!item.checked;}
this.emit("sl-select",{detail:{item}});}
handleKeyDown(event){if(event.key==="Enter"||event.key===" "){const item=this.getCurrentItem();event.preventDefault();event.stopPropagation();item==null?void 0:item.click();}else if(["ArrowDown","ArrowUp","Home","End"].includes(event.key)){const items=this.getAllItems();const activeItem=this.getCurrentItem();let index=activeItem?items.indexOf(activeItem):0;if(items.length>0){event.preventDefault();event.stopPropagation();if(event.key==="ArrowDown"){index++;}else if(event.key==="ArrowUp"){index--;}else if(event.key==="Home"){index=0;}else if(event.key==="End"){index=items.length-1;}
if(index<0){index=items.length-1;}
if(index>items.length-1){index=0;}
this.setCurrentItem(items[index]);items[index].focus();}}}
handleMouseDown(event){const target=event.target;if(this.isMenuItem(target)){this.setCurrentItem(target);}}
handleSlotChange(){const items=this.getAllItems();if(items.length>0){this.setCurrentItem(items[0]);}}
isMenuItem(item){var _a;return item.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((_a=item.getAttribute("role"))!=null?_a:"");}
getAllItems(){return[...this.defaultSlot.assignedElements({flatten:true})].filter((el)=>{if(el.inert||!this.isMenuItem(el)){return false;}
return true;});}
getCurrentItem(){return this.getAllItems().find((i)=>i.getAttribute("tabindex")==="0");}
setCurrentItem(item){const items=this.getAllItems();items.forEach((i)=>{i.setAttribute("tabindex",i===item?"0":"-1");});}
render(){return x`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;}};SlMenu.styles=[component_styles_default,menu_styles_default];__decorateClass([e("slot")],SlMenu.prototype,"defaultSlot",2);export{SlMenu};