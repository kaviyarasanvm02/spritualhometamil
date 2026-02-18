import { Course } from "./courses/types";
import { freeCourse1 } from "./courses/free-course-1";
import { freeCourse2 } from "./courses/free-course-2";
import { moneyManifestation } from "./courses/money-manifestation";
import { relationshipManifestation } from "./courses/relationship-manifestation";
import { jobManifestation } from "./courses/job-manifestation";
import { healthManifestation } from "./courses/health-manifestation";
import { findYourPassion } from "./courses/find-your-passion";
import { thirtyDaysLoa } from "./courses/30-days-loa";
import { twentyOneDaysConsciousness } from "./courses/21-days-consciousness";
import { all5CoursesCombo, transformationSpiritualCombo } from "./courses/bundles";

export type { Course, Episode, CourseContent, PricingOption } from "./courses/types";

export const courses: Course[] = [
    freeCourse1,
    freeCourse2,
    moneyManifestation,
    relationshipManifestation,
    jobManifestation,
    healthManifestation,
    findYourPassion,
    thirtyDaysLoa,
    twentyOneDaysConsciousness,
    all5CoursesCombo,
    transformationSpiritualCombo
];
