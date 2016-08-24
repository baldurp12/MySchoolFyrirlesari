function toggleBox(sItem)
{
	// Get objects
	oDiv = getStyle(getObject('div' + sItem));
	if (oDiv.visibility == 'visible')
	{
		oDiv.visibility = 'hidden';
		oDiv.display = 'none';
	}
	else
	{
		oDiv.visibility = 'visible';
		oDiv.display = 'inline';
	}
}

function getObject(sName)
{
	if (document.layers) {
		return findLayer(sName, null);
	}
	if (document.all) {
		return document.all[sName];
	}
	if (document.getElementById) {
		return document.getElementById(sName);
	}
	if (document[sName]) {
		return document[sName];
	}
}

function getStyle(obj)
{
	if (obj.style) {
		return obj.style;
	}
	else {
		return obj;
	}
}

$(function() {
	var searchlabel = '';
	$('#headersearch').focus(function() { if (searchlabel === '' || $(this).val() === searchlabel) { searchlabel = $(this).val(); $(this).val(''); } });
	$('#headersearch').blur(function() { if ($(this).val().length === 0) { $(this).val(searchlabel); } });
	
	$('#smaller-font').click(function() { $('body').css({fontSize: parseInt($('body').css('font-size')) - 1}); });
	$('#larger-font').click(function() { $('body').css({fontSize: parseInt($('body').css('font-size')) + 1}); });
});
