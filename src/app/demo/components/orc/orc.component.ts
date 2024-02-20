import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { OrcService } from '../../service/Orc.service';
import { Globals } from 'src/app/@globals/globals';
import { Route, RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
    selector: 'app-orc',
    templateUrl: './orc.component.html',
    styleUrl: './orc.component.scss',
    providers: [MessageService, OrcService],
})
export class OrcComponent implements OnInit {
    pictures: MenuItem[];
    buttonItems: MenuItem[];
    downloadable: boolean = false;

    constructor(
        private messageService: MessageService,
        private orcService: OrcService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.router.navigate(['first']);
        this.pictures = [
            {
                label: '',
                routerLink: 'first',
            },
            {
                label: '',
                routerLink: 'second',
            },
            {
                label: '',
                routerLink: 'third',
            },
            {
                label: '',
                routerLink: 'fourth',
            },
            {
                label: '',
                routerLink: 'fifth',
            },
            {
                label: '',
                routerLink: 'sixth',
            },
        ];

        this.buttonItems = [
            {
                label: 'Reset',
                icon: 'pi pi-refresh',
                command: () => {
                    this.orcService.Reset().subscribe({
                        next: (d) => {
                            if (d.httpcode === 200) {
                                this.messageService.add({
                                    severity: 'success',
                                    summary: 'Success',
                                    detail: `${d.msg}`,
                                });
                            }
                        },
                    });
                },
            },
            {
                label: 'DownLoad',
                icon: 'pi pi-download',
                command: () => {},
                id: 'downloadbtn',
            },
        ];
    }

    process() {
        if (this.checkProcessable()) {
            this.orcService.Process().subscribe({
                next: (d) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: `${d.msg}`,
                    });
                },
            });
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: `No ${this.findOutstandingImageIdx} pictures outstanding`,
            });
        }
    }

    get findOutstandingImageIdx() {
        let a = Globals.imagesIdxGT.filter(
            (item) => !Globals.imagesIdx.includes(item)
        );
        console.log(a);
        return a;
    }

    setDownloadable(flag: boolean) {
        if (flag) {
            this.downloadable = true;
        } else {
            this.downloadable = false;
        }
    }

    checkProcessable() {
        return Globals.imagesIdx.length === Globals.imagesIdxGT.length;
    }
}
