import { Injectable } from '@angular/core';
import { ICourse } from "../models/course.interface";
import { WebDesignMapData } from 'src/app/course-modules/webdesign/map-data';
import { Chapter } from '../models/course.model';
@Injectable({
    providedIn: 'root'
})
export class WebDesign implements ICourse{
    constructor(private webDesignMapData:WebDesignMapData){
    }
    loadChapters():Chapter[]{
        return this.webDesignMapData.chapters;
    }
}