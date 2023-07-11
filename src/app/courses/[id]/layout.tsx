'use client'

import Sidebar from "@/components/sidebar";
import { sidebarLink } from "@/components/sidebarItem";

const OVERVIEW = 'Course Overview';
const CONTENT = 'Course Content';
const TOOLBOX = 'Toolbox';
const GOALS = 'Goals';

const ID = 3; // TODO: fetch from database

export default function IndividualCourse() {
    let sidebarItems = Array<sidebarLink>(
        {title: OVERVIEW, link: '/courses/' + ID + '/overview'}, 
        {title: CONTENT, link: '/courses/' + ID + '/content'}, 
        {title: TOOLBOX, link: '/courses/' + ID + '/toolbox'}, 
        {title: GOALS, link: '/courses/' + ID + '/goals'});
    return (
        <Sidebar selected={OVERVIEW} items={sidebarItems}></Sidebar>
    )
}