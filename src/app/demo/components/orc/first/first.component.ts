import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { getFromEnd } from 'src/app/@models/getFromEnd';
import { Globals } from 'src/app/@globals/globals';
import { Router } from '@angular/router';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrl: './first.component.scss',
})
export class FirstComponent implements OnInit {
    @ViewChild('fileUpload', { static: true }) fileUpload: ElementRef;
    multiple: boolean = false;
    uploadedFiles: File[] = [];

    constructor(
        private http: HttpClient,
        private messageService: MessageService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    uploadHandler(event) {
        const formFile = new FormData();
        for (let file of event.files) {
            this.uploadedFiles.push(file);
            formFile.append('files', file, file.name);
        }
        this.http
            .post<getFromEnd>(Globals.baseRequestUrl + 'orc/upload/1', formFile)
            .subscribe({
                next: (d) => {
                    if (d.httpcode === 200) {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: `${d.msg}`,
                        });
                        Globals.imagesIdx = d.value;
                        setTimeout(() => {
                            this.router.navigate(['second']);
                        }, 800);
                    } else {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: `${d.msg}`,
                        });
                    }
                },
                error: (d) => {
                    console.log(d);
                },
            });
    }
}
