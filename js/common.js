$(document).ready(function(){



 var topPos = $('.floating').offset().top; //topPos - это значение от верха блока до окна браузера
 $(window).scroll(function() { 
  var top = $(document).scrollTop();
  if (top > topPos) $('.floating').addClass('fixed'); 
  else $('.floating').removeClass('fixed');
 });


		

	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 1,
		margin:130,
		//autoplay:true,
	    //autoplayTimeout:6000,
	    //autoplayHoverPause:true,
		stagePadding: 130,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		navContainer: '#customNav',
		responsive: {
	    // > 0
	    0 : {
	      dots: false,
	      margin:30,
	      stagePadding: 30,
	    },
	    // > 768
	    768 : {
	    	margin:130,
	    	stagePadding: 130,
        dots: true,
	    }
		}
	});
var austDay=new Date($(".countdown").attr("date-time"));$(".countdown").countdown({until:austDay,format:'yowdHMS'});$(".fancybox").fancybox();$(".top_mnu").navigation();$(".block").waypoint(function(direction){if(direction==="down"){$(".class").addClass("active");}else if(direction==="up"){$(".class").removeClass("deactive");};},{offset:100});$(".scroll").click(function(){$.scrollTo($("#stats_goto"),800,{offset:-90});});$("a.scroll").click(function(){$.scrollTo($(".div"),800,{offset:-90});});$("#top").click(function(){$("body, html").animate({scrollTop:0},800);return false;});$("form").submit(function(){$.ajax({type:"GET",url:"mail.php",data:$("form").serialize()}).done(function(){alert("Спасибо за заявку!");setTimeout(function(){$.fancybox.close();},1000);});return false;});$(".owl-carousel_2").owlCarousel({loop:true,items:1,autoplayTimeout:6000,autoplayHoverPause:true,dots:false,nav:true,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],navContainer:'#customNav2',responsive:{0:{dots:false,margin:30,stagePadding:30,},768:{margin:100,stagePadding:100,}}});$("#slider").owlCarousel({items:1,loop:true,autoplay:true,autoplayTimeout:4000,autoplayHoverPause:true,animateOut:'fadeOut',dots:false,nav:false,});$("#form").submit(function(){$.ajax({type:"GET",url:"mail.php",data:$("#form").serialize()}).done(function(){alert("Спасибо за заявку!");setTimeout(function(){$.magnificPopup.close();},1000);});return false;});$(".popap").magnificPopup();jQuery(function($){$("#phone").mask("+7(999) 999-99-99");});$(window).on('load',function(){var $preloader=$('#page-preloader'),$spinner=$preloader.find('.spinner');$spinner.fadeOut();$preloader.delay(350).fadeOut('slow');});});