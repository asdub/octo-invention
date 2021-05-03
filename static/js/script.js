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
                                                  format: "dd mmm, yyyy",});
  });