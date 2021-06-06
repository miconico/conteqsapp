import { Component, OnInit } from '@angular/core';

import { TrafficSensor } from './../traffic-sensor';
import { TrafficService } from '../traffic.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css'],
})
export class TrafficComponent implements OnInit {
  selectedSensor?: TrafficSensor;

  trafficSensors: TrafficSensor[] = [];

  constructor(
    private trafficService: TrafficService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getSensors();
  }

  onSelect(trafficSensor: TrafficSensor): void {
    this.selectedSensor = trafficSensor;
  }

  getSensors(): void {
    this.trafficService
      .getTraffic()
      .subscribe((trafficSensors) => (this.trafficSensors = trafficSensors));
  }
}
