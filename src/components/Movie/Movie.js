import React from 'react';
import styles from "./Movie.module.css"

const Movie = (props) => {
    const { title, date, image, genre } = props
    return (
    <div className={styles.movie}>
        <img 
            className={styles.movie__image}
            src={image}
            alt=""
        />
            <h3 className={styles.movie__title}>{title}</h3>
            <h2 className={styles.movie__genre}>{genre}</h2>
            <p className={styles.movie__date}>{date}</p>
    </div>
    );
}

export default Movie;
