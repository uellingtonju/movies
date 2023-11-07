import { useState } from "react";
import VideoList from "../VideoList";
import "./SeachList.css"

function filterVideos(videos, seachText){
    return videos.filter((video => video.category.includes(seachText) || video.title.includes(seachText)))
}

function SeachList({videos}){
    const [seachText, setSeachText  ] = useState()
    const foundVideos = filterVideos(videos, seachText)

    return(
        

        <section className="pesquisa">
            <input 
            type="seach"
            placeholder="Pesquisar..." 
            value={seachText}
            onChange={e => setSeachText(e.target.value)}
            />
            <VideoList videos={foundVideos} emptyHeading={`Sem videos sobre "${seachText}"`}/>
        </section>
    )
}


export default SeachList;