import { Injectable } from '@angular/core';
import { LowLevelDesignMapData } from 'src/app/course-modules/lowl-level-design/map-data';
import { ICourse } from "../models/course.interface";
import { Chapter } from '../models/course.model';
@Injectable({
    providedIn: 'root'
})
export class LowLevelDesign implements ICourse{
    constructor(private lowLevelDesignMapData:LowLevelDesignMapData){
    }
    loadChapters():Chapter[]{
        return this.lowLevelDesignMapData.chapters;
    }
}