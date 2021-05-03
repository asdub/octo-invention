document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge: "right"});
    var task = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(task);
    var tooltip = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(tooltip, {
                                              position: "top", 
                                              html: "Urgent Task!",
                                              margin: 0.1
                                            });
    var datepicker = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(datepicker, {
                                                  autoClose: "True", 
                                                  format: "dd mmmm, yyyy",
                                                  yearRange: 3,
                                                  showClearBtn: true,
                                                  i18n: {
                                                    done: "Select"
                                                  }
                                                });
    var picker = document.querySelectorAll('select');
    var instances = M.FormSelect.init(picker);
  });

/*
    vanilla JavaScript for MaterializeCSS initialization
*/

document.addEventListener('DOMContentLoaded', function () {
     let sidenavs = document.querySelectorAll(".sidenav");
     let sidenavsInstance = M.Sidenav.init(sidenavs, {edge: "right"});
     let collapsibles = document.querySelectorAll(".collapsible");
     let collapsiblesInstance = M.Collapsible.init(collapsibles);
     let tooltips = document.querySelectorAll(".tooltipped");
     let tooltipsInstance = M.Tooltip.init(tooltips);
     let selects = document.querySelectorAll("select");
     let selectsInstance = M.FormSelect.init(selects);
     let datepickers = document.querySelectorAll(".datepicker");
     let datepickersInstance = M.Datepicker.init(datepickers, {
         format: "dd mmmm, yyyy",
         yearRange: 3,
         showClearBtn: true,
         i18n: {
             done: "Select"
         }
     });
     validateMaterializeSelect();
     function validateMaterializeSelect() {
         let classValid = "border-bottom: 1px solid #84c7c1; box-shadow: 0 1px 0 0 #84c7c1;";
         let classInvalid = "border-bottom: 1px solid #f44336; box-shadow: 0 1px 0 0 #f44336;";
         let selectValidate = document.querySelector("select.validate");
         let selectWrapperInput = document.querySelector(".select-wrapper input.select-dropdown");
         if (selectValidate.hasAttribute("required")) {
             selectValidate.style.cssText = "display: block; height: 0; padding: 0; width: 0; position: absolute;";
         }
         selectWrapperInput.addEventListener("focusin", (e) => {
             e.target.parentNode.addEventListener("change", () => {
                 ulSelectOptions = e.target.parentNode.childNodes[1].childNodes;
                 for (let i = 0; i < ulSelectOptions.length; i++) {
                     if (ulSelectOptions[i].className == "selected" && ulSelectOptions[i].hasAttribute != "disabled") {
                         e.target.style.cssText = classValid;
                     }
                 }
             });
         });
         selectWrapperInput.addEventListener("click", (e) => {
             ulSelectOptions = e.target.parentNode.childNodes[1].childNodes;
             for (let i = 0; i < ulSelectOptions.length; i++) {
                 if (ulSelectOptions[i].className == "selected" && ulSelectOptions[i].hasAttribute != "disabled" && ulSelectOptions[i].style.backgroundColor == "rgba(0, 0, 0, 0.03)") {
                     e.target.style.cssText = classValid;
                 } else {
                     e.target.addEventListener("focusout", () => {
                         if (e.target.parentNode.childNodes[3].hasAttribute("required")) {
                             if (e.target.style.borderBottom != "1px solid rgb(76, 175, 80)") {
                                 e.target.style.cssText = classInvalid;
                             }
                         }
                     });
                 }
             }
         });
     }
 });