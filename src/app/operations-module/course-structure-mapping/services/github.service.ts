import { Injectable } from '@angular/core';
import { ICourse } from "../models/course.interface";
import { Chapter } from '../models/course.model';
import { GithubMapData } from 'src/app/course-modules/github/map-data';
@Injectable({
    providedIn: 'root'
})
export class Github implements ICourse {
    constructor(private githubMapData: GithubMapData,) {
    }
    loadChapters(): Chapter[] {
        return this.githubMapData.chapters;
    }
}