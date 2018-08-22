
	function stopDemo() {
		var demo = document.getElementsByClassName("demo")[0];
		demo.pause();
		demo.load();
		$(".album").removeClass("album-playing");
	}

	function playDemo1() {
		var demo1 = document.getElementById("demo1");
		demo1.play();
		$("#demo-1").addClass("album-playing");
	}
	function playDemo2() {
		var demo2 = document.getElementById("demo2");
		demo2.play();
		$("#demo-2").addClass("album-playing");
	}
	function playDemo3() {
		var demo3 = document.getElementById("demo3");
		demo3.play();
		$("#demo-3").addClass("album-playing");
	}
	function playDemo4() {
		var demo4 = document.getElementById("demo4");
		demo1.play();
		$("#demo-4").addClass("album-playing");
	}
	function playDemo5() {
		var demo5 = document.getElementById("demo5");
		demo1.play();
		$("#demo-5").addClass("album-playing");
	}
	function playDemo6() {
		var demo6 = document.getElementById("demo6");
		demo1.play();
		$("#demo-6").addClass("album-playing");
	}

