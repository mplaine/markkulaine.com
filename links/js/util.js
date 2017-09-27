<!-- Begin hiding JavaScript
function jumpMenu( selectedObject, restore ) {
	var url	= selectedObject.options[ selectedObject.selectedIndex ].value;
	if ( selectedObject.selectedIndex != 0 ) {
		if ( url ) {
			window.open( url, "_top" );
			// window.location				= url;
		}
		if ( restore ) {
			selectedObject.selectedIndex	= 0;
		}
	}
}
// End hiding JavaScript -->