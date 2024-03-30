import { Injectable } from '@angular/core';
import { FreeVersionMapData } from 'src/app/course-modules/free-version/map-data';
import { ICourse } from "../models/course.interface";
import { Chapter } from '../models/course.model';
@Injectable({
    providedIn: 'root'
})
export class FreeVersion implements ICourse{
    constructor(private FreeVersionMapData:FreeVersionMapData){
    }
    loadChapters():Chapter[]{
        return this.FreeVersionMapData.chapters;
    }
}