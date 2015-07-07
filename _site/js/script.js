
// Initial Script

		var map = L.map('map', {
			scrollWheelZoom: true,
      doubleClickZoom: true,
      dragging: true,
      boxZoom: true,
      zoomControl: true

		}).fitBounds([
              [38.7, -70.979],[41.2, -80.4]
            ]);

		var cloudmade = L.tileLayer("http://a.tiles.mapbox.com/v3/energy.j3enm2ea/{z}/{x}/{y}.png").addTo(map);

