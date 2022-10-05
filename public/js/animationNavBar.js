function onNavbar(){
	let actionDiv = document.getElementById('divActionNavBar');
	if (actionDiv.style.display != 'flex'){
		document.getElementById('divActionNavBar').style.display = 'flex';
		document.getElementById('mainBody').style.display = 'none';
	} else {
		document.getElementById('divActionNavBar').style.display = 'none';
		document.getElementById('mainBody').style.display = 'flex';
	}
}