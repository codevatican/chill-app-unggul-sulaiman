import {apiInstance} from "./apiInstance"

export const getMoviesByType = async({moviesType}) => {
    try {
        if (moviesType === "new_releases"){
            const today = new Date()
            const firstDay = new Date(today.getFullYear(), today.getMonth(), 3)
            const lastDay = new Date(today.getFullYear(), today.getMonth() + 3, 0)

            const formatDate = (date) => date.toISOString().split("T")[0]

            const movies = await apiInstance.get("discover/movie", {
                params: {
                "primary_release_date.gte": formatDate(firstDay),
                "primary_release_date.lte": formatDate(lastDay),
                with_release_type: "1|3|4", 
                sort_by: "primary_release_date.asc"
                }
            })

            return movies.data.results
        } else {
            let movies = await apiInstance.get("movie/" + moviesType)
            return movies.data.results
        }
    } catch (error) {
        console.log(error)
    }
}