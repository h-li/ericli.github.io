	function rdmDisp() {
		var x = Math.round(Math.random()*2)+1;
		if(
			x == 1
		){
			$("#single1").addClass("na");
			$("#single4").addClass("na");
		};

		if(
			x == 2
		){
			$("#single2").addClass("na");
			$("#single6").addClass("na");
		};

		if(
			x == 3
		){
			$("#single3").addClass("na");
			$("#single5").addClass("na");
		};
	}