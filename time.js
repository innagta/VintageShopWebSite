function getCurrentDate() {
				var currentDate = new Date();
				var year = currentDate.getFullYear();
				var month = currentDate.getMonth();
				var day = currentDate.getDay();
				
				var theDay = currentDate.getDate();
				if (theDay<10){
				theDay = "0" + theDay;
				}
				var weekDays=new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
				var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
				
				return(weekDays[day]+", "+ months[month]+" "+theDay+", "+year+"</b>");
				
		}
		
		var interval = setInterval(timer, 1000);
		function timer() {
				var d = new Date();
				document.getElementById("time").innerHTML = d.toLocaleTimeString();
		}
	