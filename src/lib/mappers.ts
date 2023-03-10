import { Department, Course } from "../types";
import { QueryResult } from "pg";

export function departmentMapper(input: unknown): Department | null {
    const potentialDepartment = input as Partial<Department> | null;
  
    if (
      !potentialDepartment ||
      !potentialDepartment.id ||
      !potentialDepartment.title ||
      !potentialDepartment.slug ||
      !potentialDepartment.description ||
      !potentialDepartment.courses ||
      !potentialDepartment.created ||
      !potentialDepartment.updated 
    ) {
      return null;
    }
  
    const department: Department = {
      id: potentialDepartment.id,
      title: potentialDepartment.title,
      slug: potentialDepartment.slug,
      description: potentialDepartment.description,
      courses: potentialDepartment.courses,
      created: new Date(potentialDepartment.created),
      updated: new Date(potentialDepartment.updated),
      
    };
  
    return department;
  }

  export function mapDbDepartmentToDepartment(
    input: QueryResult<any> | null,
  ): Department | null {
    if (!input) {
      return null;
    }
  
    return departmentMapper(input.rows[0]);
  }
  export function courseMapper(input: unknown): Course | null {
    const potentialCourse = input as Partial<Course> | null;
  
    if (
      !potentialCourse ||
      !potentialCourse.id ||
      !potentialCourse.title ||
      !potentialCourse.units ||
      !potentialCourse.semester ||
      !potentialCourse.level ||
      !potentialCourse.url ||
      !potentialCourse.course_id ||
      !potentialCourse.created ||
      !potentialCourse.updated
    ) {
      return null;
    }
  
    const course: Course = {
      id: potentialCourse.id,
      title: potentialCourse.title,
      units: potentialCourse.units,
      semester: potentialCourse.semester,
      level: potentialCourse.level,
      url: potentialCourse.url,
      course_id: potentialCourse.course_id,
      created: new Date(potentialCourse.created),
      updated: new Date(potentialCourse.updated),
    };
  
    return course;
  }
  
  export function mapDbCourseToCourse(
    input: QueryResult<any> | null,
  ): Course | null {
    if (!input) {
      return null;
    }
  
    return courseMapper(input.rows[0]);
  }
  
  export function mapDbCoursesToCourses(
    input: QueryResult<any> | null,
  ): Array<Course> {
    if (!input) {
      return [];
    }
    const mappedCourse = input?.rows.map(courseMapper);
  
    return mappedCourse.filter((i): i is Course => Boolean(i));
  }
  