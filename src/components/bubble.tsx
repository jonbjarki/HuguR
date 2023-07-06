'use client'

import styles from '../app/home.module.css'
import classNames from 'classnames/bind'
import Link from 'next/link';


let cx = classNames.bind(styles);

export default function Bubble({title, content, isRight, btnText, btnLink}) {

    let legendClass = cx({
        bubbleTitle: true,
        bubbleTitleRight: isRight
    })

    let fieldClass = cx({
        bubble: true,
        bubbleRight: isRight
    })
    
    return (
        <fieldset className={fieldClass}>
            <legend className={legendClass}>{title}</legend>
            <p className={styles.bubbleContent}>{content}</p>
            {btnText ?
            <Link href={btnLink}><button className={styles.bubbleButton}>{btnText}</button></Link>
            : null}
        </fieldset>
    )
}