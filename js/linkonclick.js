$(document).ready(
	function(){
		$(".wesing").on('click',function(){
			window.open("http://www.qq.com");
		});
		$("#mv-container").on('click',function(){
			$("#mv-container-bg-control")
			.attr('style','display:none');
			$("#mv-container")
			.attr('style','display:none');
			$("#mvideo-demo1")
			.attr('style','display:none;');
		});




		$("#save-demo1").on('click',function(){
			var $form = $('<form method="GET"></form>');
			$form.attr('action', './audio/notbreakinglove.mp3');
			$form.appendTo($('body'));
			$form.submit();
		});
		$("#mv-demo1").on('click',function(){
			$("#mv-container-bg-control")
			.attr('style','opacity:.5;background-color:black;display:flex');
			$("#mv-container")
			.attr('style','display:flex');
			$("#mvideo-demo1")
			.attr('style','display:block;');
		});
		$("#save-demo2").on('click',function(){
		});
		$("#mv-demo2").on('click',function(){
		});
		$("#save-demo3").on('click',function(){
		});
		$("#mv-demo3").on('click',function(){
			window.open("http://www.qq.com");
		});
	}
);