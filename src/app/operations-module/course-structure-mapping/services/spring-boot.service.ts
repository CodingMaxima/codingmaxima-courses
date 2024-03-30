import { Injectable } from '@angular/core';
import { SpringBootMapData } from 'src/app/course-modules/springboot/map-data';
import { ICourse } from "../models/course.interface";
import { Chapter } from '../models/course.model';
@Injectable({
    providedIn: 'root'
})
export class SpringBoot implements ICourse{
    constructor(private springBootMapData:SpringBootMapData){
    }
    loadChapters():Chapter[]{
        return this.springBootMapData.chapters;
    }
}