import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globals } from 'src/app/@globals/globals';
import { getFromEnd } from 'src/app/@models/getFromEnd';

@Injectable()
export class OrcService {
    constructor(private http: HttpClient) {}

    Reset() {
        while (Globals.imagesIdx.length) {
            Globals.imagesIdx.pop();
        }
        return this.http.get<getFromEnd>(Globals.baseRequestUrl + 'orc/reset');
    }

    Process() {
        return this.http.get<getFromEnd>(
            Globals.baseRequestUrl + 'orc/process'
        );
    }
}
