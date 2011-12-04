var wilco = {};

/*$( '#checklist' ).live( 'pageinit',function(event,data){
    var theList = doT.template($("#checklist-list").html());
  $.get("someurl",function(res){
      $("#checklist-list").html(theList(res));
  })
});*/

$("#checklist").live("pageinit", function() {
	var lists = $("ul.prepare-checks");
	lists.find("div.ui-checkbox").hide();
	$("span.ui-icon-shadow").removeClass("ui-icon-check ui-icon");
	if (localStorage && localStorage.checklistItems) {
		var checkedItems = localStorage.checklistItems.split(","),
			i = 0,
			chk;
		for ( ; i < checkedItems.length; i++ ) {
			console.log(checkedItems[i]);
			chk = $("input[value=" + checkedItems[i] + "]");
			chk.attr("checked","true");
			chk.closest("li").find("span.ui-icon-shadow").addClass("ui-icon-check ui-icon");
		}
	}
});

$("ul.prepare-checks li").live("click", function() {
	var iconSpan = $(this).find("span.ui-icon-shadow"),
		chk = $(this).find("input")[0];
	if (wilco.saveTimer) clearTimeout(wilco.saveTimer);
	if (chk.checked) {
		$(chk).removeAttr("checked");
		iconSpan.removeClass("ui-icon-check ui-icon");
	} else {
		chk.checked = "true";
		iconSpan.addClass("ui-icon-check ui-icon");
	}
	wilco.saveTimer = setTimeout(function() {
		wilco.saveChecklist();
	}, 1000);
});

wilco.saveChecklist = function() {
	var chks = $("input:checked"),
		items = [],
		i = 0;
	for ( ; i < chks.length; i++ ) {
		items.push(chks[i].value);
	}
	localStorage.checklistItems = items;
}

