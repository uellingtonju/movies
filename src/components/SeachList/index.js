import { useEffect, useState } from "react";
import VideoList from "../VideoList";
import "./SeachList.css";
import Loader from "../Loader";

function filterVideos(videos, seachText) {
  return videos.filter(
    (video) =>
      video.category.includes(seachText) || video.title.includes(seachText)
  );
}

function SeachList({ videos }) {
  const [seachText, setSeachText] = useState("");
  const foundVideos = filterVideos(videos, seachText);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  return (
    <section className="pesquisa">
      <input
        type="seach"
        placeholder="Pesquisar..."
        value={seachText}
        onChange={(e) => setSeachText(e.target.value)}
      />

      {loading ? (
        <Loader />
      ) : (
        <VideoList
          videos={foundVideos}
          emptyHeading={`Sem videos sobre "${seachText}"`}
        />
      )}
    </section>
  );
}

export default SeachList;
