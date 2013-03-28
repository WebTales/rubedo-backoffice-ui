/**
 * @class Ext.ux.GMapManager
 * @author Vincenzo Ferrari <wilk3ert@gmail.com>
 * @singleton
 * 
 * Manager of Google Maps
 * 
 * This singleton provide some useful functions to manage multiple Google Maps with multiple markers each.
 *
 * Google Maps API v3 supported: https://developers.google.com/maps/documentation/javascript/
 */
Ext.define ('Ext.ux.GMapManager', {
	singleton: true ,
	
	/**
	 * @property {Ext.util.HashMap} mapList
	 * @private
	 */
	mapList: Ext.create ('Ext.util.HashMap') ,
	
	/**
	 * @method getMap
	 * Retrieves an added/registered map
	 * @param {String} id Id of the map
	 * @return {google.maps.Map} Requested map
	 */
	getMap: function (id) {
		return this.mapList.get (id);
	} ,
	
	/**
	 * @method getAllMaps
	 * Retrieves every added/registered map
	 * @return {google.maps.Map[]} Every registered maps
	 */
	getAllMaps: function () {
		var mapArr = [];
		
		this.mapList.each (function (idMap, map) {
			mapArr.push (map);
		});
		
		return mapArr;
	} ,
	
	/**
	 * @method each
	 * Executes a function for each registered map
	 * @param {Function} fn Function to execute
	 */
	each: function (fn) {
		this.mapList.each (function (idMap, map) {
			fn (map);
		});
	} ,
	
	/**
	 * @method eachMapMarker
	 * Executes a function for each marker of a registered map
	 * @param {String} id Id of the map
	 * @param {Function} fn Function to execute
	 */
	eachMapMarker: function (id, fn) {
		if (this.mapList.containsKey (id)) {
			this.mapList.get(id).each (function (idMap, map) {
				map.markerList.each (function (idMarker, marker) {
					fn (marker);
				});
			});
		}
	} ,
	
	/**
	 * @method eachMarker
	 * Executes a function for each marker of every registered map
	 * @param {Function} fn Function to execute
	 */
	eachMarker: function (fn) {
		this.mapList.each (function (idMap, map) {
			map.markerList.each (function (idMarker, marker) {
				fn (marker);
			});
		});
	} ,
	
	/**
	 * @method getMarker
	 * Retrieves a marker
	 * @param {String} id Id of the marker
	 * @return {google.maps.Marker} Requested marker
	 */
	getMarker: function (id) {
		var marker = null;
		
		this.mapList.each (function (idMap, map) {
			if (map.markerList.containsKey (id)) marker = map.markerList.get (id);
		});
		
		return marker;
	} ,
	
	/**
	 * @method getMapMarkers
	 * Retrieves markers of a map
	 * @param {String} id Id of the map
	 * @return {google.maps.Marker[]} Markers of the map
	 */
	getMapMarkers: function (id) {
		var markers = [];
		
		if (this.mapList.containsKey (id)) {
			this.mapList.get(id).markerList.each (function (idMarker, marker) {
				markers.push (marker);
			});
		}
		
		return markers;
	} ,
	
	/**
	 * @method attachMarkerEvent
	 * Adds a handler on an event fired by a marker
	 * Example:
	 *     Ext.ux.GMapManager.attachMarkerEvent ('markerId', 'drag', function (event) {
	 *         alert ('Coords of the dragged marker are: ' + event.latLng.lat () + ',' + event.latLng.lng ());
	 *         // will alert something like this: 'Coords of the dragged marker are: 44.29182,13.49302'
	 *     });
	 * @param {String} id Id of the marker
	 * @param {String} event Event to handle 
	 * @param {Function} handler Handler of the event
	 */
	attachMarkerEvent: function (id, event, handler) {
		var marker = this.getMarker (id);
		
		if (marker != null) {
			google.maps.event.addListener (marker, event, handler);
		}
	} ,
	
	/**
	 * @method detachMarkerEvent
	 * Removes all listeners to the given event fired by the given marker
	 * @param {String} id Id of the marker
	 * @param {String} event Event from which to remove listeners
	 */
	detachMarkerEvent: function (id, event) {
		var marker = this.getMarker (id);
		
		if (marker != null) {
			google.maps.event.clearListeners (marker, event);
		}
	} ,
	
	/**
	 * @method createMap
	 * Creates and register a new map
	 * Example:
	 *     Ext.ux.GMapManager.createMap ('idDivMap', {
	 *         center: new google.maps.LatLng (42.605656, 12.010787) ,
	 *         mapTypeId: google.maps.MapTypeId.ROADMAP ,
	 *         zoom: 5
	 *     });
	 * @param {String} id Id of the DOM Element to display the map on
	 * @param {Object} cfg Map initial configuration
	 * @return {google.maps.Map} Created map
	 */
	createMap: function (id, cfg) {
		if (!this.mapList.containsKey (id)) {
			var map = new google.maps.Map (Ext.get(id).dom, cfg);
		
			map.markerList = Ext.create ('Ext.util.HashMap');
			
			this.mapList.add (id, map);
		
			return map;
		}
	} ,
	
	/**
	 * @method register
	 * Registers a map
	 * Example:
	 *     var map = new google.maps.Map ('idDivMap', {
	 *         center: new google.maps.LatLng (42.605656, 12.010787) ,
	 *         mapTypeId: google.maps.MapTypeId.ROADMAP ,
	 *         zoom: 5
	 *     });
	 *     
	 *     Ext.ux.GMapManager.register ('idDivMap', map);
	 * @param {String} id Id of the map
	 * @param {google.maps.Map} map Map to register
	 */
	register: function (id, map) {
		if (!this.mapList.containsKey (id)) {
			map.markerList = Ext.create ('Ext.util.HashMap');
			this.mapList.add (id, map);
		}
	} ,
	
	/**
	 * @method unregister
	 * Unregisters a map
	 * @param {String} id Id of the map
	 */
	unregister: function (id) {
		if (this.mapList.containsKey (id)) this.mapList.removeAtKey (id);
	} ,
	
	/**
	 * @method createMarker
	 * Creates a marker for a map
	 * Example:
	 *     Ext.ux.GMapManager.createMarker ('idDivMap', {
	 *         position: new google.maps.LatLng (44.694887, 11.742616) ,
	 *         title: 'Reggio Emilia'
	 *     });
	 * @param {String} mapId Id of the map to display the marker on
	 * @param {Object} cfg Marker initial configuration
	 * @param {String} [markerId] Id of the marker
	 * @return {google.maps.Marker} Created marker
	 */
	createMarker: function (mapId, cfg, markerId) {
		markerId = markerId || Ext.id ();
		
		var map = this.mapList.get (mapId);
		
		cfg.map = map;
		
		var marker = new google.maps.Marker (cfg);
		
		map.markerList.add (markerId, marker);
		
		return marker;
	} ,
	
	/**
	 * @method addMarker
	 * Adds a marker to a map
	 * Example:
	 *     var marker = new google.maps.Marker ({
	 *         position: new google.maps.LatLng (44.694887, 11.742616) ,
	 *         title: 'Reggio Emilia'
	 *     });
	 *     
	 *     Ext.ux.GMapManager.addMarker ('idDivMap', marker);
	 * @param {String} mapId Id of the map to display the marker on
	 * @param {google.maps.Marker} marker Marker to add
	 * @param {String} [markerId] Id of the marker
	 */
	addMarker: function (mapId, marker, markerId) {
		// TODO: check if markerId and mapId exist and if they are already registered
		markerId = markerId || Ext.id ();
		
		var map = this.mapList.get (mapId);
		marker.map = map;
		
		map.markerList.add (markerId, marker);
	} ,
	
	/**
	 * @method removeMapMarker
	 * Removes a marker of a map
	 * Example:
	 *     Ext.ux.GMapManager.createMarker ('idDivMap', {
	 *         position: new google.maps.LatLng (44.694887, 11.742616) ,
	 *         title: 'Reggio Emilia'
	 *     }, 'reggioEmiliaMarker');
	 *     
	 *     Ext.ux.GMapManager.removeMapMarker ('reggioEmiliaMarker');
	 * @param {String} markerId Id of the marker
	 */
	removeMapMarker: function (markerId) {
		this.mapList.each (function (mapId, map) {
			if (map.markerList.containsKey (markerId)) {
				var marker = map.markerList.get (markerId);
				
				marker.setMap (null);
				
				map.markerList.removeAtKey (markerId);
			}
		});
	} ,
	
	/**
	 * @method removeAllMapMarkers
	 * Removes every marker of a map
	 * @param {String} id Id of the map from which to remove markers
	 */
	removeAllMapMarkers: function (id) {
		if (this.mapList.containsKey (id)) {
			var map = this.mapList.get (id);
			
			map.markerList.each (function (idMarker, marker) {
				marker.setMap (null);
			});
			
			map.markerList = Ext.create ('Ext.util.HashMap');
		}
	} ,
	
	/**
	 * @method removeAllMarkers
	 * Removes every marker
	 */
	removeAllMarkers: function () {
		this.mapList.each (function (idMap, map) {
			map.markerList.each (function (idMarker, marker) {
				marker.setMap (null);
			});
			
			map.markerList = Ext.create ('Ext.util.HashMap');
		});
	}
	
});
