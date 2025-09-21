import { apiInstance } from "./apiInstance"

export const getVideoUrl = async ({movie_id}) => {

  if (!movie_id) {
    console.warn("getVideoUrl called with null movie_id");
    return null;
  }

  try {
    const res = await apiInstance.get(`movie/${movie_id}/videos`);
    const videos = res.data.results;

    if (!videos || videos.length === 0) return null;

    const ytTrailer = videos.find(v => v.site === "YouTube" && v.type === "Trailer");
    return ytTrailer ? ytTrailer.key : videos[0].key;
  } catch (err) {
    console.error("getVideoUrl error:", err);
    return null;
  }
}
