<?
function showDate($type = '', $dateAdd = 0, $monthAdd = 0, $yearAdd = 0, $hourAdd = 0, $minuteAdd = 0) {
	$timestamp = filemtime(__FILE__);
	date_default_timezone_set('America/New_York'); 
	$Xtime = mktime(date("H")+$hourAdd, date("i")+$minuteAdd, 0, date("m")+$monthAdd, date("d")+$dateAdd, date("Y")+$yearAdd);
	switch($type){
		case 'mdYT':
			$display = date('m/d/Y g:i a', $Xtime);
			break;
		case 'dMonYT':
			$display = date('d M Y h:i A', $Xtime);
			break;
		case 'mdY':
			$display = date("m/d/Y", $Xtime);
			break;
		case 'MondY':
			$display = date('M d, Y', $Xtime);
			break;
		case 'dMonY':
			$display = date('d M Y', $Xtime);
			break;
		case 'dMon':
			$display = date('d M', $Xtime);
			break;
		case 'DAY':
			$display = date('l', $Xtime);
			break;
		case 'T':
			$display = date('h:i A', $Xtime);
			break; 
		case 'jMY':
			$display = date('j-M-Y', $Xtime);
			break;
		case 'DdMY':
			$display = date('D, d M Y', $Xtime);
			break;
		case 'MON':
			$display = date('M Y', $Xtime);
			break;
		case 'M':
			$display = date('M', $Xtime);
			break;
		case 'Y':
			$display = date('Y', $Xtime);
			break;
		case 'md':
			$display = date('M d', $Xtime);
			break;
		case 'ymd':
			$display = date('Y-m-d', $Xtime);
			break;
		case 'DMondY':
			$display = date('D, M d, Y', $Xtime);
			break;	
		default:
			$display = date('M d, Y', $Xtime);
			
	}
	return $display;
}

//Converts 2017-01-15 to Jan 15, 2017
function formatDate($dateToFormat) {
	$timestamp = filemtime(__FILE__);
	date_default_timezone_set('America/New_York');
	
	$today = date("j, n, Y");
	$todayComponents = explode(",", $today); //Format: 10, 3, 2001 for March 10, 2001
	$dateToFormatComponents = explode("-", $dateToFormat);
	
	$dayOffset = $dateToFormatComponents[2] - $todayComponents[0];
	$monthOffset = $dateToFormatComponents[1] - $todayComponents[1];
	$yearOffset = $todayComponentsComponents[0] - $todayComponents[3];
	//return $dateToFormat[3];
	return showDate('', $dayOffset, $monthOffset, $yearOffset, 0, 0);
}

function getAge($birthMonth, $birthDay, $birthYear) {
	$timestamp = filemtime(__FILE__);
	date_default_timezone_set('America/New_York');
	
	$age = (date("md", date("U", mktime(0, 0, 0, $birthMonth+0, $birthDay+0, $birthYear+0))) > date("md") ? ((date("Y")-$birthYear+0)-1):(date("Y")-$birthYear+0));
	return $age;
}

//$age = (date("md", date("U", mktime(0, 0, 0, $birthDate[0], $birthDate[1], $birthDate[2]))) > date("md") ? ((date("Y")-$birthDate[2])-1):(date("Y")-$birthDate[2]));


// Assuming today is: March 10th, 2001, 5:16:18 pm 

//$today = date("F j, Y, g:i a"); // March 10, 2001, 5:16 pm 
//$today = date("m.d.y"); // 03.10.01 
//$today = date("j, n, Y"); // 10, 3, 2001 
//$today = date("Ymd"); // 20010310 
//$today = date('h-i-s, j-m-y, it is w Day z '); // 05-16-17, 10-03-01, 1631 1618 6 Fripm01 
//$today = date('\i\t \i\s \t\h\e jS \d\a\y.'); // It is the 10th day. 
//$today = date("D M j G:i:s T Y"); // Sat Mar 10 15:16:08 MST 2001 
//$today = date('H:m:s \m \i\s\ \m\o\n\t\h'); // 17:03:17 m is month
//$today = date("H:i:s"); // 17:16:17 

//$tomorrow = mktime(0, 0, 0, date("m") , date("d")+1, date("Y")); 
//$lastmonth = mktime(0, 0, 0, date("m")-1, date("d"), date("Y")); 
//$nextyear = mktime(0, 0, 0, date("m"), date("d"), date("Y")+1); 

// set the default timezone to use. Available since PHP 5.1 

// Prints something like: Monday 
//echo date("l"); 

// Prints something like: Monday 15th of August 2005 03:12:46 PM 
//echo date('l dS \of F Y h:i:s A'); 

// Prints: July 1, 2000 is on a Saturday 
//echo "July 1, 2000 is on a " . date("l", mktime(0, 0, 0, 7, 1, 2000)); 

/* use the constants in the format parameter */ 
// prints something like: Mon, 15 Aug 2005 15:12:46 UTC 
//echo date(DATE_RFC822); 

// prints something like: 2000-07-01T00:00:00+00:00 
//echo date(DATE_ATOM, mktime(0, 0, 0, 7, 1, 2000)); 
?>