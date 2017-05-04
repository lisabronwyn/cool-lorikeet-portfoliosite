$(document).ready(function(){
	$(".scroll").click(function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop:$(this.hash).offset().top}, 1400);
		$('.navbar-default a').removeClass('selected');
		$(this).addClass('selected');
    	});
});

twttr.widgets.createTweet(
  "20",
  document.getElementById("tweet-container"),
  {
    linkColor: "#55acee"
  }
);
