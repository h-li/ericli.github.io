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
			$("#mvideo")
			.attr('style','display:none;');
			$("#mvideo")
			.attr('src','');
			$(".mv-tip-mainland")
			.attr('style','z-index:-3100;');
		});
		$("#mv-tip").on('click',function(){
			$("#mv-container-bg-control")
			.attr('style','display:none');
			$("#mv-container")
			.attr('style','display:none');
			$("#mvideo")
			.attr('style','display:none;');
			$("#mvideo")
			.attr('src','');
		});








		$("#save-demo1").on('click',function(){
			var $form = $('<form method="GET"></form>');
			$form.attr('action', './audio/notbreakinglove.mp3');
			$form.appendTo($('body'));
			$form.submit();
		});
		$("#mv-youtube-demo1").on('click',function(){
			$("#mv-container-bg-control")
			.attr('style','opacity:.8;background-color:black;display:flex');
			$("#mv-container")
			.attr('style','display:flex');
			$("#mvideo")
			.attr('style','display:block;');
			$("#mvideo")
			.attr('src','https://www.youtube.com/embed/vCeBDdctgUA');
			$("#mv-tip-mainland-demo1")
			.attr('style','z-index:3100;');
			$("#mv-tip-mainland-demo5")
			.attr('style','display:none;');
		});
		$("#mv-tip-mainland-demo1").on('click',function(){
			$("#mvideo")
			.attr('src','https://player.bilibili.com/player.html?aid=13518165&cid=22131166&page=1');
		});
		$("#mv-othersource-demo1").on('click',function(){
			$("#mv-container-bg-control")
			.attr('style','opacity:.8;background-color:black;display:flex');
			$("#mv-container")
			.attr('style','display:flex');
			$("#mvideo")
			.attr('style','display:block;');
			$("#mvideo")
			.attr('src','https://player.bilibili.com/player.html?aid=13518165&cid=22131166&page=1');
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
		$("#ed-demo2").on('click',function(){
		window.open("https://node.kg.qq.com/play?s=hzYB0VhFdK-U9hGS&lang=zh_Hans");
		});





		$("#save-demo3").on('click',function(){
			var $form = $('<form method="GET"></form>');
			$form.attr('action', './audio/valderfields.mp3');
			$form.appendTo($('body'));
			$form.submit();
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
		$("#ed-demo4").on('click',function(){
		window.open("https://node.kg.qq.com/play?s=q2wpU-qt7ayhDqmT&lang=zh_Hans");
		});




		$("#save-demo5").on('click',function(){
			var $form = $('<form method="GET"></form>');
			$form.attr('action', './audio/spoiling.mp3');
			$form.appendTo($('body'));
			$form.submit();
		});
		$("#mv-demo5").on('click',function(){
			$("#mv-container-bg-control")
			.attr('style','opacity:.8;background-color:black;display:flex');
			$("#mv-container")
			.attr('style','display:flex');
			$("#mvideo")
			.attr('style','display:block;');
			$("#mvideo")
			.attr('src','https://www.youtube.com/embed/M-pMD4SpKYE');
			$("#mv-tip-mainland-demo1")
			.attr('style','display:none;');
			$("#mv-tip-mainland-demo5")
			.attr('style','z-index:3100;');
		});
		$("#mv-tip-mainland-demo5").on('click',function(){
			$("#mvideo")
			.attr('src','https://player.bilibili.com/player.html?aid=30236455&cid=52734996&page=1');
		});
		$("#mv-othersource-demo5").on('click',function(){
			$("#mv-container-bg-control")
			.attr('style','opacity:.8;background-color:black;display:flex');
			$("#mv-container")
			.attr('style','display:flex');
			$("#mvideo")
			.attr('style','display:block;');
			$("#mvideo")
			.attr('src','https://player.bilibili.com/player.html?aid=30236455&cid=52734996&page=1');
		});
		$("#ed-demo5").on('click',function(){
		window.open("https://node.kg.qq.com/play?s=CYz_KJCbejh9GCjN&lang=zh_Hans");
		});




		$("#save-demo6").on('click',function(){
			var $form = $('<form method="GET"></form>');
			$form.attr('action', './audio/shanyoumuxi.mp3');
			$form.appendTo($('body'));
			$form.submit();
		});
		$("#ed-demo6").on('click',function(){
		window.open("");
		});




	}
);