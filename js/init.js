skel.init({
	prefix: 'css/style',
	resetCSS: true,
	boxModel: 'border',
	grid: {
		gutters: 50
	},
	breakpoints: {
		'mobile': {
			range: '-480',
			lockViewport: true,
			containers: 'fluid',
			grid: {
				collapse: true,
				gutters: 10
			}
		},
		'desktop': {
			range: '481-',
			containers: 1200
		},
		'1000px': {
			range: '481-1200',
			containers: 960
		}
	}
}, {
	panels: {
		panels: {
			navPanel: {
				breakpoints: 'mobile',
				position: 'left',
				style: 'reveal',
				size: '80%',
				html: '<div data-action="navList" data-args="nav"></div>'
			}
		},
		overlays: {
			titleBar: {
				breakpoints: 'mobile',
				position: 'top-left',
				height: 44,
				width: '100%',
				html: '<span class="toggle" data-action="togglePanel" data-args="navPanel"></span><span class="title" data-action="copyHTML" data-args="logo"></span>'
			}
		}
	}


});

$(document).ready(function() {
    $.ajax({
        url : "default.html",
        dataType: "text",
        success : function (data) {
            $("#content").html(data);
            $('.flexslider').flexslider({
            	controlNav: true,
            	directionNav: true,
            	animation: "slide",
				slideshowSpeed: 2000
            });
        }
    });

    $(".inicio").click(function() {
    	$.ajax({
	        url : "default.html",
	        dataType: "text",
	        success : function (data) {
	            $("#content").html(data);
	            $('.flexslider').flexslider({
	            	controlNav: true,
	            	directionNav: true,
	            	animation: "slide",
					slideshowSpeed: 2000
	            });
	        }
	    });
    });

     $("#habitaciones").click(function() {
     	$('li').removeClass('active');
     	$(this).addClass('active');
    	$.ajax({
	        url : "habitaciones.html",
	        dataType: "text",
	        success : function (data) {
	            $("#content").html(data);
	        }
	    });
    });

    $("#ubicacion").click(function() {
    	$(this).addClass('active');
    	$.ajax({
	        url : "ubicacion.html",
	        dataType: "text",
	        success : function (ubicacion) {
	            $("#content").html(ubicacion);
	        }
	    });
    });

    

     $("#contacto").click(function() {
    	$(this).addClass('active');
    	$.ajax({
	        url : "contacto.html",
	        dataType: "text",
	        success : function (data) {
	            $("#content").html(data);
	        }
	    });
    });

});
