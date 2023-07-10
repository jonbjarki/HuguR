'use client'

import styles from '../app/home.module.css'
import classNames from 'classnames/bind'
import Link from 'next/link';


let cx = classNames.bind(styles);

export interface BubbleProps {
    title: string,
    content: string,
    isRight?: boolean,
    btnText?: string,
    btnLink?: string
}


export default function Bubble({title, content, isRight, btnText, btnLink}: BubbleProps) {

    // let legendClass = cx({
    //     bubbleTitle: true,
    //     bubbleTitleRight: isRight
    // })

    // let fieldClass = cx({
    //     bubble: true,
    //     bubbleRight: isRight
    // })

    const legendSettings = isRight ? "md:mr-5 md:text-right" : "md:ml-5 md:text-left";

    return (
        <fieldset className="m-auto border-2 rounded-larger border-red-600 w-4/6 h-fit px-8 pt-8 pb-12 flex items-center flex-col lg:flex-row text-2xl text-center md:text-left font-light font-sans shadow-md">
            <legend className={"md:m-0 text-4xl p-5 font-thin " + legendSettings}>{title}</legend>
            <p className="">{content}</p>
            {btnText ?
            <Link href={btnLink}><button className="px-6 py-3 ml-6 border-2 border-black w-48 h-20 bg-green-300 text-xl mt-6 lg:mt-0 ">{btnText}</button></Link>
            : null}
        </fieldset>
    )
}