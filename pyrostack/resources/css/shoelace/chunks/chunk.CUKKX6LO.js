import{getTabbableElements}from"./chunk.LXDTFLWU.js";import{__yieldStar}from"./chunk.625AWUY7.js";function*activeElements(activeElement=document.activeElement){if(activeElement===null||activeElement===void 0)
return;yield activeElement;if("shadowRoot"in activeElement&&activeElement.shadowRoot&&activeElement.shadowRoot.mode!=="closed"){yield*__yieldStar(activeElements(activeElement.shadowRoot.activeElement));}}
function getDeepestActiveElement(){return[...activeElements()].pop();}
var activeModals=[];var Modal=class{constructor(element){this.tabDirection="forward";this.handleFocusIn=()=>{if(!this.isActive())
return;this.checkFocus();};this.handleKeyDown=(event)=>{var _a;if(event.key!=="Tab"||this.isExternalActivated)
return;if(!this.isActive())
return;const currentActiveElement=getDeepestActiveElement();this.previousFocus=currentActiveElement;if(this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)){return;}
if(event.shiftKey){this.tabDirection="backward";}else{this.tabDirection="forward";}
const tabbableElements=getTabbableElements(this.element);let currentFocusIndex=tabbableElements.findIndex((el)=>el===currentActiveElement);this.previousFocus=this.currentFocus;const addition=this.tabDirection==="forward"?1:-1;while(true){if(currentFocusIndex+addition>=tabbableElements.length){currentFocusIndex=0;}else if(currentFocusIndex+addition<0){currentFocusIndex=tabbableElements.length-1;}else{currentFocusIndex+=addition;}
this.previousFocus=this.currentFocus;const nextFocus=(tabbableElements[currentFocusIndex]);if(this.tabDirection==="backward"){if(this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)){return;}}
if(nextFocus&&this.possiblyHasTabbableChildren(nextFocus)){return;}
event.preventDefault();this.currentFocus=nextFocus;(_a=this.currentFocus)==null?void 0:_a.focus({preventScroll:false});const allActiveElements=[...activeElements()];if(allActiveElements.includes(this.currentFocus)||!allActiveElements.includes(this.previousFocus)){break;}}
setTimeout(()=>this.checkFocus());};this.handleKeyUp=()=>{this.tabDirection="forward";};this.element=element;this.elementsWithTabbableControls=["iframe"];}
activate(){activeModals.push(this.element);document.addEventListener("focusin",this.handleFocusIn);document.addEventListener("keydown",this.handleKeyDown);document.addEventListener("keyup",this.handleKeyUp);}
deactivate(){activeModals=activeModals.filter((modal)=>modal!==this.element);this.currentFocus=null;document.removeEventListener("focusin",this.handleFocusIn);document.removeEventListener("keydown",this.handleKeyDown);document.removeEventListener("keyup",this.handleKeyUp);}
isActive(){return activeModals[activeModals.length-1]===this.element;}
activateExternal(){this.isExternalActivated=true;}
deactivateExternal(){this.isExternalActivated=false;}
checkFocus(){if(this.isActive()&&!this.isExternalActivated){const tabbableElements=getTabbableElements(this.element);if(!this.element.matches(":focus-within")){const start=tabbableElements[0];const end=tabbableElements[tabbableElements.length-1];const target=this.tabDirection==="forward"?start:end;if(typeof(target==null?void 0:target.focus)==="function"){this.currentFocus=target;target.focus({preventScroll:false});}}}}
possiblyHasTabbableChildren(element){return this.elementsWithTabbableControls.includes(element.tagName.toLowerCase())||element.hasAttribute("controls");}};export{Modal};