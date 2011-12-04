$( '#checklist' ).live( 'pageinit',function(event,data){
    var theList = doT.template($("#checklist-list").html());
  $.get("someurl",function(res){
      $("#checklist-list").html(theList(res));
  })
});

$( '#home' ).live( 'pageinit',function(event,data){
    var theList = doT.template($("#random-fact").html());
  $.get("someurl",function(res){
      $("#random-fact").html(theList(res));
  })
});

$( '#ready' ).live( 'pageinit',function(event,data){
    var theList = doT.template($("#ready-list").html());
  $.get("someurl",function(res){
      $("#ready-list").html(theList(res));
  })
});

