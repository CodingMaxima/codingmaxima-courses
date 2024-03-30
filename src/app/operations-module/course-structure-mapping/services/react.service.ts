import { Injectable } from '@angular/core';
import { ReactMapData } from 'src/app/course-modules/react/map-data';
import { ICourse } from "../models/course.interface";
import { Chapter } from '../models/course.model';
@Injectable({
    providedIn: 'root'
})
export class React implements ICourse{
    constructor(private reactMapData:ReactMapData,){
    }
    loadChapters():Chapter[]{
        return this.reactMapData.chapters;
    }
}