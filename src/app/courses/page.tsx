import Image from "next/image";
import styles from "./courses.module.css";
import Course from "@/components/course";
import data from "../../mockdata.json";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Database } from "@/lib/database.types";

export default async function CourseHome() {
  const supabase = createServerComponentClient<Database>({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    // this is a protected route - only users who are signed in can view this route
    redirect("/");
  }

  return (
    <main className="mt-6 w-11/12 m-auto">
      <h1 className="text-4xl text-center font-normal">Courses</h1>
      <ul className={styles.courses}>
        {data.courses.map((item) => (
          <Course
            key={item.ID}
            ID={item.ID}
            title={item.title}
            duration={item.duration}
            content={item.content}
            imgSrc={item.imgSrc}
          />
        ))}
        {/* <Course
          ID={1}
          title="Stress Management"
          duration="2 weeks"
          content="Short description of course and what it entails.
          In this course you will lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed pharetra arcu. Phasellus posuere dictum maximus."
          imgSrc="/images/personsofa.png" /> */}
      </ul>
    </main>
  );
}
