	function showWindow() {
		setTimeout(function() {
                $("#profile-original").attr('data-active', 'on');
            	}, 0);
		$("#profile-original").attr('style', 'display: block');
	}

	function shutDown() {
		$("#profile-original").attr('data-active', 'off');
            	setTimeout(function() {
                	$("#profile-original").attr('style', 'display:none');
            	}, 800);
	}

	function showCoverWindow() {
		setTimeout(function(){
				$("#cover-original").attr('data-active','on');
		},0);
		$("#cover-original").attr('style','display:block');
	}

	function shutCoverDown() {
		$("#cover-original").attr('data-active','off');
		setTimeout(function(){
			$("#cover-original").attr('style','display:none');
		},800);
	}

function playAudio() {
			document.getElementById("bfsdla").play();
}

	function coverRotating() {
		$(".single img").attr('style','animation: 9.5s linear 0s normal none infinite rotate;');
		$(".single .single-cover-playing-bg").attr('style','display:block;');
	}
	

	function coverStopRotating() {
		$(".single img").attr('style','animation: none 0 ease 0 1 normal none running;');
		$(".single .single-cover-playing-bg").attr('style','display:none;');
	}