import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrcRoutingModule } from './orc-routing.module';
import { OrcComponent } from './orc.component';
import { StepsModule } from 'primeng/steps';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';

@NgModule({
    declarations: [
        OrcComponent,
        FirstComponent,
        SecondComponent,
        ThirdComponent,
        FourthComponent,
        FifthComponent,
        SixthComponent,
    ],
    imports: [CommonModule, OrcRoutingModule, StepsModule, CardModule],
})
export class OrcModule {}
