export type Department = {
    id: number;
    title: string;
    slug: string | undefined;
    description: string;
    courses?: Course[] | undefined;
    created: Date;
    updated: Date;
};

export type Course = {
    id: number;
    title: string;
    units: Number;
    semester: string;
    level: string;
    url: string;
    courseId: string;
    created: Date;
    updated: Date;
};