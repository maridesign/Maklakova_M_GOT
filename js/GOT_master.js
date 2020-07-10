(() => {
	console.log('fired');

	let lightBox =document.quarrySelector(".lightbox"),
	    lbclose =lightbox.quarrySelector("span"),
	    sigils = document.quarrySelector(".sigilContainer");

	    function showLightbox() {
	    	lightBox.classlist.add('show-lightbox');

	    }

	    function hideLightbox() {
	    	lightBox.classlist.remove('show-lightbox');
	    	
	    }

	    sigils.forEach(sigil => sigil.addEventListener)



})()