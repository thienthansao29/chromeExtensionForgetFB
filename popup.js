function remove(){
	var adsArrayID = [
			'MarketGidScriptRootC52222',
			'MarketGidScriptRootC52205',
			'MarketGidComposite53160',
			'imobile_adspotdiv1',
			'MarketGidScriptRootC52205',
			'MarketGidScriptRootC52205',
			'topgooglead',
			'MarketGidComposite53158',
			'google_image_div',
			'dvDigitalice492',
			'google_ads_frame4',
			'google_ads_frame3',
			'google_ads_frame2',
			'google_ads_frame1',
			'google_ads_frame',
			'watch7-sidebar-ads',
			'google_ads_iframe_/16833175/BottomMediumRectangle_0__container__',
			'google_ads_iframe_/16833175/RightBottomMediumRectangle_0__container__',
			'sidesection',
			'google_ads_iframe_/16833175/WideSkyScraper_0__container__',
			'google_ads_iframe_/16833175/MainLeaderboard_0__container__',
			'adsbygoogle',
			'mainLeaderboard',
			'skyscraper',
			'rightCol'
		];
	var adsArrayClass = [
			'mgbox',
			'ng-scope',
		];

	for (i = 0; i < adsArrayID.length; i++) {
		try
		{
			// document.getElementById(adsArrayID[i]).innerHTML = '';
			x = document.getElementById(adsArrayID[i]);
			x.remove(x.selectedIndex);
		}
		catch(err)
		{
			text = 'Not found class id=' + adsArrayID[i]
			console.log(text);
		}
	}

	for (i = 0; i < adsArrayClass.length; i++) {
		try
		{
			// document.getElementsByClassName(adsArrayClass[i]).innerHTML = '';
			x = document.getElementsByClassName(adsArrayClass[i]);
			console.log(x);
			x[i].parentNode.removeChild(x[i]);
		}
		catch(err)
		{
			text = 'Not found class name=' + adsArrayClass[i]
			console.log(text);
		}
	}
	console.log('All ads have been removed.');
    setTimeout(function(){remove();},100000);
}
remove();