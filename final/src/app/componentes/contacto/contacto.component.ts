import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Observable } from 'rxjs/Observable';

@Component({
selector: 'app-contacto',
templateUrl: './contacto.component.html',
styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
zoom: number = 8;
INITIAL_MARKER = {
lat: -34.5941604,
lng: -58.4043412,
label: 'Clinica Buena Sonrisa',
draggable: false
}
markers: marker[] = [this.INITIAL_MARKER]
lat: number = -34.5941604;
lng: number = -58.4043412;

ngOnInit(): void {
this.getLocation().subscribe(rep => {
});
}

getLocation(): Observable<any> {
return Observable.create(observer => {
if (window.navigator && window.navigator.geolocation) {
window.navigator.geolocation.getCurrentPosition(
(position) => {
observer.next(position);
const myLocation: marker = {
draggable: false,
lat: position.coords.latitude,
lng: position.coords.longitude,
label: 'Aca estoy yo'
}
this.markers.length = 0;
this.markers = [this.INITIAL_MARKER, myLocation]
observer.complete();
},
(error) => observer.error(error)
);
} else {
observer.error('Unsupported Browser');
}
});
}
}

interface marker {
lat: number;
lng: number;
label?: string;
draggable: boolean;
}