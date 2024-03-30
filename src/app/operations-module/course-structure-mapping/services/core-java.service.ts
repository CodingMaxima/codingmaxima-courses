import { Injectable } from '@angular/core';
import { ICourse } from "../models/course.interface";
// import { CoreJavaMapData } from 'src/app/course-modules/core-java/map-data';
import javaDataSet from 'src/assets/courseConfig/javacourselist1.json';

// import { CoreJavaMapData } from '../../../../src/app/course-module/core-java/map-data';
import { Chapter } from '../models/course.model';
@Injectable({
    providedIn: 'root'
})
export class CoreJava implements ICourse{

    javaMapData:Chapter[] = javaDataSet;
    constructor(){
    }
    loadChapters():Chapter[]{
        return this.javaMapData;
    }
}