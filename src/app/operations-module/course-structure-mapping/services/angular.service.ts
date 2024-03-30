import { Injectable } from '@angular/core';
import { ICourse } from "../models/course.interface";
import { Chapter } from '../models/course.model';
import  angulardataset from 'src/assets/courseConfig/angularcourselist.json';

@Injectable({
    providedIn: 'root'
})
export class Angular implements ICourse{
    angularDataForMap:Chapter[]=angulardataset;
    constructor(){}
    loadChapters():Chapter[]{
        return this.angularDataForMap;
    }
}