import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'angular8-yandex-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ScriptService]
})
export class MapComponent implements OnInit {

  constructor(private scriptService: ScriptService) {
    this.scriptService.initScript()
      .subscribe(ymaps => console.log(ymaps));
  }

  ngOnInit() {
  }

}
