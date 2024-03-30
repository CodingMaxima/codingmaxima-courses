export interface Course{
    name:string,
    chapters:Chapter[],
}
export interface Chapter{
    name:string,
    lessons:Lesson[]
}
export interface Lesson{
    name:string,
    url:string
}