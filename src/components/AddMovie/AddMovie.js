import React, { useState } from 'react';
import styles from "./AddMovie.module.css"

const AddMovie = (props) => {

    // props yang datanya berasal dari main
    const { movies, setMovies } = props

    // state yang menghandle proses inputan
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [link, setLink] = useState("")
    const [genre, setgenre] = useState("")

    // arrow function menghandle inputan title
    const handleTitle = (e) => {setTitle(e.target.value)}

    // arrow function menghandle  inputan Link
    const handleLink = (e) => {setLink(e.target.value)}

    // arrow function menghandle inputan date
    const handleDate = (e) => {setDate(e.target.value)}

    //
    const handlegenre = (e) => {setgenre(e.target.value)}


    // arrow function menghandle submit
    const handleSubmit = (e) => {
        e.preventDefault()

        if(title === "" && date === "") {alert("Title, Link, Date Dan Genre kosong")}

        if (title === "")
        {
           alert("Isi Title Terlebih Dahulu")
        } 

        else if (link === "")
        {
            alert("Isi Link Terlebih Dahulu")
        }
        
        else if (date === "")
        {
           alert("Isi Date Terlebih Dahulu")
        } 

        else if (genre === "")
        {
            alert("Pilih Genre Terlebih Dahulu ")
        }
         
         else {
            const movie = {
                id: 4,
                title: title, 
                genre: genre,
                date: date,
                image: link
            } 

            setMovies([...movies, movie])
            alert("Berhasil Menambahkan Movie Baru")
        }
    }

    return (
        <div className={styles.container}>
           <form className={styles.addmovie} onSubmit={handleSubmit}>
           <input placeholder='Isi Title Disini' className={styles.addmovie__input} id='title' type='text' value={title} onChange={handleTitle} />

           <input placeholder='Isi Link Disini' className={styles.addmovie__input} id='link' type='text' value={link} onChange={handleLink} />
           
           <select className={styles.addmovie__input} id='genre' value={genre} onChange={handlegenre} >
           <option>Genre</option>
           <option value="Action">Action</option>
           <option value="Drama">Drama</option>
           <option value="Horror">Horror</option>
           <option value="Comedy">Comedy</option>
           <option value="Animation">Animation</option>
           <option value="Biography">Biography</option>
           <option value="Crime">Crime</option>
           <option value="Family">Family</option>
           <option value="Romance">Romance</option>
           <option value="Adventure">Adventure</option>
           <option value="Sport">Sport</option>
           <option value="War">War</option>
           <option value="Musical">Musical</option>
           </select>

           <input className={styles.addmovie__input} id='date' type='date' value={date} onChange={handleDate} />
       

           <button className={styles.addmovie__button}>Simpan</button>
           </form>
        </div>
    );
}

export default AddMovie;
