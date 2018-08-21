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
			$(".single #img-bfsdla").attr('style','animation: 9.5s linear 0s normal none infinite rotate;');
}

function showBlackBgBfsdla(){
		$(".single #bfsdla-bg").attr('style','display:block;');
}
function hideBlackBgBfsdla() {
			$(".single .single-cover-playing-bg").attr('style','display:none;');
			$(".single #img-bfsdla").attr('style','animation: none 0 ease 0 1 normal none running;');
			document.getElementById("bfsdla").pause();
}




function showBlackBgBzlx(){
	$(".single #bzlx-bg").attr('style','display:block;');
}
function playBzlx() {
document.getElementById("bzlx").play();
$(".single #img-bzlx").attr('style','animation: 9.5s linear 0s normal none infinite rotate;');
}
function hideBlackBgBzlx() {
			$(".single #bzlx-bg").attr('style','display:none;');
			$(".single #img-bzlx").attr('style','animation: none 0 ease 0 1 normal none running;');
			document.getElementById("bzlx").pause();
}



function showBlackBgVf(){
	$(".single #vf-bg").attr('style','display:block;');
}
function playVf() {
document.getElementById("vf").play();
$(".single #img-vf").attr('style','animation: 9.5s linear 0s normal none infinite rotate;');
}
function hideBlackBgVf() {
			$(".single #vf-bg").attr('style','display:none;');
			$(".single #img-vf").attr('style','animation: none 0 ease 0 1 normal none running;');
			document.getElementById("vf").pause();
}








function showBlackBgYh(){
	$(".single #yh-bg").attr('style','display:block;');
}
function playYh() {
document.getElementById("yh").play();
$(".single #img-yh").attr('style','animation: 9.5s linear 0s normal none infinite rotate;');
}
function hideBlackBgYh() {
			$(".single #yh-bg").attr('style','display:none;');
			$(".single #img-yh").attr('style','animation: none 0 ease 0 1 normal none running;');
			document.getElementById("yh").pause();
}














