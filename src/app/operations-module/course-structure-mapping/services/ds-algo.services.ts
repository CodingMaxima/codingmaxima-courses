import { Injectable } from '@angular/core';
import { ICourse } from "../models/course.interface";
import { Chapter } from '../models/course.model';
import { DsAlgoMapData } from 'src/app/course-modules/ds-algo/map-data';
@Injectable({
    providedIn: 'root'
})
export class DSAndAlgo implements ICourse{
    constructor(private dsAlgoMapData:DsAlgoMapData,){
    }
    loadChapters():Chapter[]{
        return this.dsAlgoMapData.chapters;
    }
}