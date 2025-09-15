import BrowseLayout from "@layouts/BrowseLayout"
import Jumbotron from "@mods/BrowsePage/Jumbotron"
import MovieList from "@mods/BrowsePage/MovieList"
import Modal from "@mods/BrowsePage/Modal"
import SearchMovies from "@mods/BrowsePage/SearchMovies"
import Footer from "@mods/BrowsePage/Footer"
import { useAtom } from "jotai"
import { searchMoviesAtom } from "@/jotai/atoms"


function Browse(){
    const [searchQuery] = useAtom(searchMoviesAtom);

    return(
        <BrowseLayout>
            {searchQuery? <SearchMovies /> : (
                <>
                    <Jumbotron />
                    <MovieList title={"Melanjutkan Tonton Film"} moviesType={"now_playing"}/>
                    <MovieList title={"Top Rating Film dan Series Hari Ini"} moviesType={"top_rated"}/>
                    <MovieList title={"Film Trending"} moviesType={"popular"}/>
                    <Footer />
                </>
            )}
            <Modal />
        </BrowseLayout>
    )
}

export default Browse