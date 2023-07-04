import Bubble from "./bubble"
import styles from '../app/home.module.css'
import Image from "next/image"
import classNames from "classnames/bind"

let cx = classNames.bind(styles)

export default function HomeLine({title, content, btnLink, btnText, imgSrc, isRight }) {

    const lineClass = cx({
        homeLine: true,
        homeLineRight: isRight
    })

    return (
        <div className={lineClass}>
        <Bubble title={title} content={content} isRight={isRight} btnLink={btnLink} btnText={btnText}/>

        <Image
          src={imgSrc}
          width={429}
          height={344}
          alt=''
          className={styles.bubbleImage}
          />
      </div>
    )
}