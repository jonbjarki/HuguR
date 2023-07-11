'use client'

import Sidebar from "@/components/sidebar";
import { sidebarLink } from "@/components/sidebarItem";
import { useParams } from "next/navigation";

const OVERVIEW = 'Course Overview';
const CONTENT = 'Course Content';
const TOOLBOX = 'Toolbox';
const GOALS = 'Goals';

export default function IndividualCourse() {
    const params = useParams();
    const id = params.id;
    let sidebarItems = Array<sidebarLink>(
        {title: OVERVIEW, link: '/courses/' + id + '/overview'}, 
        {title: CONTENT, link: '/courses/' + id + '/content'}, 
        {title: TOOLBOX, link: '/courses/' + id + '/toolbox'}, 
        {title: GOALS, link: '/courses/' + id + '/goals'});
    return (
        <Sidebar selected={OVERVIEW} items={sidebarItems}></Sidebar>
    )
}