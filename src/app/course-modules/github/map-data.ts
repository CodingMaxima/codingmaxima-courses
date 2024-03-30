import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GithubMapData {

    readonly chapters = [
        {
            name: "Introduction",
            lessons:[
                { name: "Git Introduction", url: "github/gitintro/gitintroduction"},
                { name: "Git Commands", url: "github/gitintro/commands" },
                { name: "Working with Github", url: "github/gitintro/workingwithgithub" }
            ]
        }
    ];
}