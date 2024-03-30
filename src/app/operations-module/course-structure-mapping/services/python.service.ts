import { Injectable } from '@angular/core';
import { PythonMapData } from 'src/app/course-modules/python/map-data';
import { ICourse } from "../models/course.interface";
import { Chapter } from '../models/course.model';
@Injectable({
    providedIn: 'root'
})
export class Python implements ICourse{
    constructor(private pythonMapData:PythonMapData,){
    }
    loadChapters():Chapter[]{
        return this.pythonMapData.chapters;
    }
}