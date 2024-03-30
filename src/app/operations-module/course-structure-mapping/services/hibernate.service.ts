import { Injectable } from '@angular/core';
import { HibernateMapData } from 'src/app/course-modules/hibernate/map-data';
import { ICourse } from "../models/course.interface";
import { Chapter } from '../models/course.model';
@Injectable({
    providedIn: 'root'
})
export class Hibernate implements ICourse{
    constructor(private hibernateMapData:HibernateMapData){
    }
    loadChapters():Chapter[]{
        return this.hibernateMapData.chapters;
    }
}