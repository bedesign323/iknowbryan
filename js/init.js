
		var bed_feed = new Instafeed({
        get: 'user',
        userId: 879549494,
        limit: 12,
        resolution: 'low_resolution',
        accessToken: '53882668.467ede5.7cf1c0db255e43ccaf6c1e840e95e91f',
        template: '<a href="{{link}}"><img src="{{image}}" /></a>'
    });

    bed_feed.run();


twitterFetcher.fetch('442020153119608832', 'tweet-holder', 5, true, true, true, '', false, handleTweets, false);

function handleTweets(tweets){
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('tweet-holder');
    var html = '<ul>';
    while(n < x) {
      html += '<li>' + tweets[n] + '</li>';
      n++;
    }
    html += '</ul>';
    element.innerHTML = html;
}


$( document ).ready(function() {
	$('#back-to-top').click(function(){
	    $("html, body").animate({ scrollTop: 0 }, 1200);
	    return false;
	 });

});

