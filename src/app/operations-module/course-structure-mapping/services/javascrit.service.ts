import { Injectable } from '@angular/core';
import { JavascriptMapData } from 'src/app/course-modules/javascript/map-data';
import { ICourse } from "../models/course.interface";
import { Chapter } from '../models/course.model';
@Injectable({
    providedIn: 'root'
})
export class Javascript implements ICourse{
    constructor(private javascriptMapData:JavascriptMapData,){
    }
    loadChapters():Chapter[]{
        return this.javascriptMapData.chapters;
    }
}