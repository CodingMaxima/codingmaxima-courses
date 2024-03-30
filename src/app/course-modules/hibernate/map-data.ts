import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HibernateMapData{

    readonly chapters = [
        {
            name: "Introduction",
            lessons: [

                {name:"Prerequisite for Hibernate",url:"hibernate/introduction/pre"},
                {name:"Hibernate Introduction",url:"hibernate/introduction/into"},
                {name:"Hibernate Configuration(cfg.xml)",url:"hibernate/introduction/cofig"},
                {name:"Hibernate Dilect",url:"hibernate/introduction/dilect"},
                {name:"Introduction Example-1",url:"hibernate/introduction/example1"},
                {name:"Introduction Example-2",url:"hibernate/introduction/example2"}

            ]
        },

        {
            name: "Java Persistence APIs (JPA)",
            lessons: [

                {name:"JPA Introduction",url:"hibernate/jpa/into"},
                {name:"Entity Mapping Relations",url:"hibernate/jpa/relations"},
                {name:"Example - 1",url:"hibernate/jpa/example1"},
                {name:"Example - 2",url:"hibernate/jpa/example2"}
            ]
        },

        {
            name: "Practicals",
            lessons: [

                {name:"One To One Relation Mapping",url:"hibernate/practicals/onetoone"},
                {name:"OneToOne Example-1",url:"hibernate/practicals/otoexample1"},
                {name:"OneToOne Example-2",url:"hibernate/practicals/otoexample2"},
                {name:"One To Many Relation Mapping",url:"hibernate/practicals/onetomany"},
                {name:"OneToMany Example-1",url:"hibernate/practicals/otmexample1"},
                {name:"OneToMany Example-2",url:"hibernate/practicals/otmexample2"},
                {name:"Many To Many Relation Mapping",url:"hibernate/practicals/manytomany"},
                {name:"ManyToMany Example-1",url:"hibernate/practicals/mtmexample1"},
                {name:"ManyToMany Example-2",url:"hibernate/practicals/mtmexample2"}

            ]
        },

        {
            name: "Caching",
            lessons: [

                {name:"Caching Introduction",url:"hibernate/caching/intro"},
                {name:"Level-1 Caching",url:"hibernate/caching/level1"},
                {name:"Level-1 Example-2",url:"hibernate/caching/level1example2"},
                {name:"Level-2 Caching",url:"hibernate/caching/level2"},
                {name:"Level-2 Example-2",url:"hibernate/caching/level2example2"},
                {name:"Level-2 Example-3",url:"hibernate/caching/level2example3"}

            ]
        },

        {
            name: "Others",
            lessons: [

                {name:"Hibernate Persistence Object Life Cycle",url:"hibernate/others/lifecycle"},
                {name:"Fetch (Eager and Lazy)",url:"hibernate/others/fetch"},
                {name:"Get (vs) Load",url:"hibernate/others/getload"},
                {name:"Interceptors",url:"hibernate/others/interceptors"}
            ]
        },

        {
            name: "Hibernate Query Language (HQL)",
            lessons: [

                {name:"HQL Example-1",url:"hibernate/hql/example1"},
                {name:"HQL Example-2",url:"hibernate/hql/example2"},
                {name:"HQL Example-3",url:"hibernate/hql/example3"},
                {name:"HQL Example-4",url:"hibernate/hql/example4"},

            ]
        }
    ];
}