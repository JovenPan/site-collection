
function initSearchBox()
{
	var emptyCss = {'color':'#888'};
	var nonEmptyCss = {'color':'#333'};
	var $input = $('nav .search-box');
	$input.click(function() {
		if ($input.val() == '那些感动你的歌...')
		{
			$input.val('');
			$input.css(nonEmptyCss);
		}
	});
	$input.blur(function() {
		if ($input.val() == '')
		{
			$input.val('那些感动你的歌...');
			$input.css(emptyCss);
		}
	});
}