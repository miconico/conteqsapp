import { TrafficSensor } from './../traffic-sensor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-traffic-detail',
  templateUrl: './traffic-detail.component.html',
  styleUrls: ['./traffic-detail.component.css']
})
export class TrafficDetailComponent implements OnInit {
  @Input() trafficSensor?: TrafficSensor;

  constructor() { }

  ngOnInit(): void {
  }

}
