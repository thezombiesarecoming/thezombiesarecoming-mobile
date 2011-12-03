$( '#checklist' ).live( 'pageinit',function(event,data){
    var theList = doT.template($("#checklist-list").html());
  $.get("someurl",function(res){
      $("#checklist-list").html(theList(res));
  })
});

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


