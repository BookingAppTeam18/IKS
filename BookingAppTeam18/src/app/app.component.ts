import {Component, ViewChild} from '@angular/core';
import {AccommodationsComponent} from "./accommodation/accommodations/accommodations.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'BookingApp';
  @ViewChild('accommodationsComponent', { static: true }) accommodationsComponent: AccommodationsComponent;
}
