$(function(){

	var viewPort = $(window).width();

	if( viewPort <= 480) {
		
		$(".swich").remove();
		$(".btn-llamar").append('<a href="tel:+541152765557"><button class="icon-telefono espacio btn-gracias">LLAMANOS!</button></a>');
		recalcular();

	}
	if( viewPort >= 480 && viewPort <= 768) {
		recalcular();
	}
	if (viewPort > 770 && viewPort <= 1400){
		$(".container--formulario").animate({right:"7em"}, 1600);
		$(".container--formulario").animate({right:"5em"}, 800);
		recalculando();

	}
	if (viewPort > 1400) {
		$(".container--formulario").animate({right:"4em"}, 1600);
		$(".container--formulario").animate({right:"1.5em"}, 800);
		recalculando();
	}
	
	$("#btn").on("click", function(){

		$("body,html").animate({scrollTop:0}, 1000 , "easeInOutExpo" );
	});

	$(window).on("scroll", function(){
		var pantalla = $(window).scrollTop();
		if ( pantalla >= 1200 ){

				$(".imagen1").animate({left:"0"} , 1000);
				$(".imagen2").animate({left:"0"} , 1500);
				$(".imagen3").animate({top:"0.2em"} , 1600);
			} 
			if ( pantalla >= 2100 ){

				contador();
			}
	})
	var AnchoPantalla = screen.width;
	var AltoPantalla = screen.height;
	var AnchoVentana = window.innerWidth;
	var AltoVentana = window.innerHeight;
	console.log( 'AnchoPantalla x AltoPantalla = ' + AnchoPantalla + ' x ' + AltoPantalla  )
	console.log( 'AnchoVentana x AltoVentana = '+ AnchoVentana + ' x ' + AltoVentana  )



	function recalcular () {
		var viewport_width = window.innerWidth;
		var viewport_height = window.innerHeight;
		$('.container--img').height((viewport_height)) ;
		$(window).resize(function() {
	  		var viewport_width = window.innerWidth;
	  		var viewport_height = window.innerHeight;
			$('.container--img').height((viewport_height));
		});
	}

	function recalculando () {
		var viewport_width = window.innerWidth;
		var viewport_height = window.innerHeight / 1.15;
		$('.container--img').height((viewport_height)) ;
		$(window).resize(function() {
	  		var viewport_width = window.innerWidth;
	  		var viewport_height = window.innerHeight / 1.15;
			$('.container--img').height((viewport_height));
		});
	}

			
	function contador() {

		$('.contador').each(function() {
	  		var $this = $(this),
	      	countTo = $this.attr('data-count');
	      	
	  		$({ countNum: $this.text()}).animate({
	    		countNum: countTo
	  			},
	  			{
	    		duration: 1000,
	    		easing:'linear',
	    		step: function() {
	      			$this.text(Math.floor(this.countNum));
	    		},
	    		complete: function() {
	      			$this.text(this.countNum);
	      			//alert('finished');
	    		}

	  		});
	  		$(".bar-1").animate({boxShadow: 'inset 500px 0 0 #e01c43'}, 1000 ,"easeInExpo");
	  		$(".bar-2").animate({boxShadow: 'inset 400px 0 0 #696465'}, 1000 ,"easeInExpo");
	  		$(".bar-3").animate({boxShadow: 'inset 300px 0 0 #e01c43'}, 1000 ,"easeInExpo");
	  		$(".bar-4").animate({boxShadow: 'inset 200px 0 0 #696465'}, 1000 ,"easeInExpo");
	  		$(".bar-5").animate({boxShadow: 'inset 100px 0 0 #e01c43'}, 1000 ,"easeInExpo");
	  		$(".bar-6").animate({boxShadow: 'inset 50px 0 0 #696465'}, 1000 ,"easeInExpo");
 
		});
	}

	

	
	
});
