import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoadingIndicatorComponent {
  constructor(public loader: LoaderService) { }
}
