import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrafficSensor } from './traffic-sensor';
import { SENSORS } from './mock-sensors';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class TrafficService {

  constructor(private messageService: MessageService) { }

  getTraffic(): Observable<TrafficSensor[]> {
    const sensors = of(SENSORS);
    this.messageService.add('TrafficService: fetched traffic');
    return sensors;
  }
}
