import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'first',
        pathMatch: 'full',
    },
    {
        path: 'first',
        component: FirstComponent,
    },
    {
        path: 'second',
        component: SecondComponent,
    },
    {
        path: 'third',
        component: ThirdComponent,
    },
    {
        path: 'fourth',
        component: FourthComponent,
    },
    {
        path: 'fifth',
        component: FifthComponent,
    },
    {
        path: 'sixth',
        component: SixthComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrcRoutingModule {}
