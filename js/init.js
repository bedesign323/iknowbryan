
$( document ).ready(function() {
    
    // MENU TWEAKS!!!
 			//===================================
 			$('.menu-toggle').click(function(){
				$('body').toggleClass('nav-open');
				return false;
			});



 			// LIST BOX
 			//===================================
 			// var list_box_items = $('.list-box .item');

 			// $('.list-box .item h2.trigger').click(function(event) {
 			// 	$(this).next().slideToggle();
 			// 	$('.list-box .item .body').not($(this).next()).slideUp();
 			// });

 			// CYCLE GALLERY
 			//===================================
 			// var	cycle_items = $('.cycle-gallery li'),
 			// 		cycle_total = cycle_items.length,
 			// 		cycle_current = 0, 
 			// 		cycle_last = 0;

 			// cycle_items.each(function(index, el) {
 			// 	$(this).addClass('index-'+ index).hide();
 			// });
 			// $('.cycle-gallery .index-0').show();

 			// function nextCycle(){
 				
 			// 	cycle_last = cycle_current;
 			// 	if(cycle_current == cycle_total - 1){
 			// 		cycle_current = 0;
 			// 	}else{
 			// 		cycle_current++;
 			// 	}

 			// 	fadeCycle();
 			// }

 			// function fadeCycle(){
 			// 	$('.cycle-gallery .index-' + cycle_current).fadeIn(200);
 			// 	$('.cycle-gallery .index-' + cycle_last).fadeOut(200);
 			// }

 			//	setInterval(nextCycle, 1000);




 			// MASONRY!!!
 			//===================================
			// var masonry_container = $('.node-image-gallery .field-name-field-other-images');
			
			// masonry_container.imagesLoaded(function(){
			// 	masonry_container.masonry({
			// 	  itemSelector: '.field-item'
			// 	});
			// });


			// SCROLL MAGIC
 			//===================================
			//	var onCenterController = new ScrollMagic.Controller();
			//	var onEnterController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});
			//	var onLeaveController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave"}});

			//	var logo_main = new ScrollMagic.Scene({triggerElement: "#intro", duration: "40%"})
			// .setTween("#intro .logo", {'opacity': 0, ease: Linear.easeNone})
			// .addTo(onLeaveController);

});

