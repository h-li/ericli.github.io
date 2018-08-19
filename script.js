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

function playBfsdla() {
			document.getElementById("bfsdla").play();
			$(".single img").attr('style','animation: 9.5s linear 0s normal none infinite rotate;');
}

function showBlackBg(){
			$(".single .single-cover-playing-bg").attr('style','display:block;');
}
function hideBlackBg() {
			$(".single .single-cover-playing-bg").attr('style','display:none;');
			$(".single img").attr('style','animation: none 0 ease 0 1 normal none running;');
			document.getElementsByClassName("audio")[0].pause();
}