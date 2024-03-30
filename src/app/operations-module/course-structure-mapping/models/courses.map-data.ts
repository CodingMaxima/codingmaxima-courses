import { CoursesList } from "./courses-list.enum";
import { CoreJava } from '../services/core-java.service';
import { Hibernate } from "../services/hibernate.service";
import { LowLevelDesign } from "../services/low-level-design.service";
import { MySql } from '../services/my-sql.service';
import { SpringBoot } from "../services/spring-boot.service";
import { WebDesign } from "../services/webdesign.service";
import { Python } from "../services/python.service";
import { React } from "../services/react.service";
import { Angular } from "../services/angular.service";
import { FreeVersion } from "../services/free-version.service";
import { Javascript } from "../services/javascrit.service";
import { Github } from "../services/github.service"
import { BUTTON_NAME_MAP } from "./button-name.map";
import { DSAndAlgo } from "../services/ds-algo.services";
export const COURSES_MAP: { [courseName: string]: any } = {
    [BUTTON_NAME_MAP[CoursesList.CoreJava]]: CoreJava,
    [BUTTON_NAME_MAP[CoursesList.MySql]]: MySql,
    [BUTTON_NAME_MAP[CoursesList.Hibernate]]: Hibernate,
    [BUTTON_NAME_MAP[CoursesList.LowlevelDesign]]: LowLevelDesign,
    [BUTTON_NAME_MAP[CoursesList.SpringBoot]]: SpringBoot,
    [BUTTON_NAME_MAP[CoursesList.WebDesign]]: WebDesign,
    [BUTTON_NAME_MAP[CoursesList.Python]]: Python,
    [BUTTON_NAME_MAP[CoursesList.React]]: React,
    [BUTTON_NAME_MAP[CoursesList.Angular]]: Angular,
    [BUTTON_NAME_MAP[CoursesList.FreeVersion]]:FreeVersion,
    [BUTTON_NAME_MAP[CoursesList.Javascript]]:Javascript,
    [BUTTON_NAME_MAP[CoursesList.DataStructuresAlgorithms]]: DSAndAlgo,
    [BUTTON_NAME_MAP[CoursesList.Github]]: Github

}