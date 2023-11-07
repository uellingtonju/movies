import Card from "../Card"
import "./VideoList.css"

function VideoList({ videos, emptyHeading }) {
    const count = videos.length
    let heading = emptyHeading
    if(count > 0) {
        const noun = count > 1 ? 'videos' : 'video'
        heading = `${count} ${noun}`
    } 

    return (
        <div>
            <h2>{heading}</h2>
            <section className="videos">
                {videos.map((video) => <Card id={video.id} key={video.id} />)}
            </section>
        </div>
    )
}

 
export default VideoList;