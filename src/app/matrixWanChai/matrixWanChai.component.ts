import { Component } from '@angular/core';

@Component({
  selector: 'matrix-wanchai',
  templateUrl: './matrixWanChai.component.html',
  styleUrls: [ './matrixWanChai.component.scss' ]
})
export class WanChaiComponent  {
  name = 'Angular';
  numberValue = 0;
  numberValue2 = 0;
  numberValue3 = 0;
  numberValue4 = 0;
  textValue = '0';
  textNumberValue = '0';

ll() {
  //console.log(this.numberValue);
}

}