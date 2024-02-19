import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'app-orc',
    templateUrl: './orc.component.html',
    styleUrl: './orc.component.scss',
    providers: [MessageService],
})
export class OrcComponent implements OnInit {
    pictures: MenuItem[];
    constructor(public messageService: MessageService) {}
    ngOnInit(): void {
        this.pictures = [
            {
                label: 'First Picture',
                routerLink: 'first',
            },
            {
                label: 'Second Picture',
                routerLink: 'second',
            },
            {
                label: 'Third Picture',
                routerLink: 'third',
            },
            {
                label: 'Fourth Picture',
                routerLink: 'fourth',
            },
            {
                label: 'Fifth Picture',
                routerLink: 'fifth',
            },
            {
                label: 'Sixth Picture',
                routerLink: 'sixth',
            },
        ];
    }
}
