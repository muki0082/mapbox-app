import { Component, OnInit } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ngOnInit(): void {

    mapboxgl.accessToken = 'pk.eyJ1IjoibXVraTAwODIiLCJhIjoiY2o5azBtbzBnMTlpejJ3czI1OWVwdDF3eiJ9.aLjVmnv60GF-uPcdKcVFFw';
    var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/dark-v9', // stylesheet location
      center: [0, 0], // starting position [lng, lat]
      zoom: 2 // starting zoom
    });

    /* Add zoom and rotation controls to the map */
    map.addControl(new mapboxgl.NavigationControl());

    /* Add geolocate control to the map */
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

  }

}
