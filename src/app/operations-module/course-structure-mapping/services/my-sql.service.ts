import { Injectable } from '@angular/core';
import { MySqlMapData } from 'src/app/course-modules/my-sql/map-data';
import { ICourse } from "../models/course.interface";
import { Chapter } from '../models/course.model';
@Injectable({
    providedIn: 'root'
})
export class MySql implements ICourse{
    constructor(private mySqlMapData:MySqlMapData,){
    }
    loadChapters():Chapter[]{
        return this.mySqlMapData.chapters;
    }
}