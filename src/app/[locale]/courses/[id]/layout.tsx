'use client'

import Sidebar from "@/components/sidebar/sidebar";
import { sidebarLink } from "@/components/sidebar/sidebarItem";
import { useParams } from "next/navigation";

const OVERVIEW = 'Course Overview';
const CONTENT = 'Course Content';
const TOOLBOX = 'Toolbox';

export default function IndividualCourse({children}) {
    const params = useParams();
    const id = (params != null) ? params.id : '1'; // default to id=1 if params are null
    let sidebarItems = Array<sidebarLink>(
        {title: OVERVIEW, link: '/courses/' + id + '/overview'}, 
        {title: CONTENT, link: '/courses/' + id + '/content'}, 
        {title: TOOLBOX, link: '/courses/' + id + '/toolbox'});
    return (
        <div className="flex flex-row h-auto min-h-screen">
            <div className="w-1/5 flex">
                <Sidebar selected={OVERVIEW} items={sidebarItems}></Sidebar>
            </div>
            <div className="w-4/5 flex bg-base-100">{children}</div>
        </div>
    )
}