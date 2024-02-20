import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Globals } from 'src/app/@globals/globals';
import { getFromEnd } from 'src/app/@models/getFromEnd';

@Component({
    selector: 'app-sixth',
    templateUrl: './sixth.component.html',
    styleUrl: './sixth.component.scss',
})
export class SixthComponent {
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
            .post<getFromEnd>(Globals.baseRequestUrl + 'orc/upload/6', formFile)
            .subscribe({
                next: (d) => {
                    if (d.httpcode === 200) {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: `${d.msg}`,
                        });
                        Globals.imagesIdx = d.value;
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
