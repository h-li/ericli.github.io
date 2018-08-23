$(document).ready(
	function(){
		$(".wesing").on('click',function(){
			window.open("https://kg.qq.com/node/personal?uid=63999e8425243f8f30");
		});
		$("#mv-container").on('click',function(){
			$("#mv-container-bg-control")
			.attr('style','display:none');
			$("#mv-container")
			.attr('style','display:none');
			$(".mvideo-all")
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
			.attr('style','opacity:.8;background-color:black;display:block');
			$("#mv-container")
			.attr('style','display:flex');
			$("#mvideo-demo1")
			.attr('style','display:block;');
		});
		$("#ed-demo1").on('click',function(){
		window.open("https://node.kg.qq.com/play?s=q2wpU-qtdz4xvq1Z&lang=zh_Hans");
		});






		$("#save-demo2").on('click',function(){
			var $form = $('<form method="GET"></form>');
			$form.attr('action', './audio/buzailianxi.mp3');
			$form.appendTo($('body'));
			$form.submit();
		});
		$("#mv-demo2").on('click',function(){
			$("#mv-container-bg-control")
			.attr('style','opacity:.8;background-color:black;display:block');
			$("#mv-container")
			.attr('style','display:flex');
			$("#mvideo-demo2")
			.attr('style','display:block;');
		});
		$("#ed-demo2").on('click',function(){
		window.open("https://node.kg.qq.com/play?s=hzYB0VhFdK-U9hGS&lang=zh_Hans");
		});





		$("#save-demo3").on('click',function(){
			var $form = $('<form method="GET"></form>');
			$form.attr('action', './audio/valderfields.mp3');
			$form.appendTo($('body'));
			$form.submit();
		});
		$("#mv-demo3").on('click',function(){
			$("#mv-container-bg-control")
			.attr('style','opacity:.8;background-color:black;display:block');
			$("#mv-container")
			.attr('style','display:flex');
			$("#mvideo-demo3")
			.attr('style','display:block;');
		});
		$("#ed-demo3").on('click',function(){
		window.open("https://node.kg.qq.com/play?s=uENJ6_uR5SU8-uOk&lang=zh_Hans");
		});







		$("#save-demo4").on('click',function(){
			var $form = $('<form method="GET"></form>');
			$form.attr('action', './audio/fireworks.mp3');
			$form.appendTo($('body'));
			$form.submit();
		});
		$("#mv-demo4").on('click',function(){
			$("#mv-container-bg-control")
			.attr('style','opacity:.8;background-color:black;display:block');
			$("#mv-container")
			.attr('style','display:flex');
			$("#mvideo-demo4")
			.attr('style','display:block;');
		});
		$("#ed-demo4").on('click',function(){
		window.open("https://node.kg.qq.com/play?s=q2wpU-qt7ayhDqmT&lang=zh_Hans");
		});
	}
);