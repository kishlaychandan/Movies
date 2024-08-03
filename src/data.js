const movies = [
    {
        id: 1,
        title: "The Matrix",
        date: '1-2-2024',
        rating: 8.7,
        genre: ["Action"],
        image: "https://rukminim2.flixcart.com/image/850/1000/kmns7m80/poster/l/p/f/medium-the-matrix-an-american-maxi-origins-jumbo-medium-size-original-imagfgb6gx9yhwzs.jpeg?q=90&crop=false"
    },
    {
        id: 2,
        title: "Inception",
        date: '1-2-2024',
        rating: 8.8,
        genre: ["Sci-Fi"],
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
        id: 3,
        title: "Terminator 2: Judgment Day",
        date: '1-2-2024',
        rating: 8.5,
        genre: ["Action", "Thriller"],
        image: "https://play-lh.googleusercontent.com/nVRLkFz82t9oSRPQ2NU3jvdkJKY3cBZeb0MUceGOUstTNsv-xp9ZCqjmkVhsU9fg4UapVueM8VNLehiIuAf3=w240-h480-rw"
    },
    {
        id: 4,
        title: "Blade Runner 2049",
        date: '1-2-2024',
        rating: 8.0,
        genre: ["Sci-Fi", "Thriller"],
        image: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg"
    },
    {
        id: 5,
        title: "Mad Max: Fury Road",
        date: '1-2-2024',
        rating: 8.1,
        genre: ["Adventure", "Thriller"],
        image: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: 6,
        title: "The Dark Knight",
        date: '1-2-2024',
        rating: 9.0,
        genre: ["Crime", "Sci-Fi"],
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
    },
    {
        id: 7,
        title: "Equilibrium",
        date: '1-2-2024',
        rating: 7.4,
        genre: ["Action", "Adventure"],
        image: "https://m.media-amazon.com/images/I/51SgpPKC-8L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 8,
        title: "Minority Report",
        date: '1-2-2024',
        rating: 7.7,
        genre: ["Action", "Drama"],
        image: "https://m.media-amazon.com/images/M/MV5BZTI3YzZjZjEtMDdjOC00OWVjLTk0YmYtYzI2MGMwZjFiMzBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    },
    {
        id: 9,
        title: "The Fifth Element",
        date: '1-2-2024',
        rating: 7.7,
        genre: ["Action", "Rom-Com"],
        image: "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/the-fifth-element-1997/large_yph0ZQC0I56CzQANxEMxj3x78gb.jpg"
    },
    {
        id: 10,
        title: "Looper",
        date: '1-2-2024',
        rating: 7.4,
        genre: ["Action", "Drama"],
        image: "https://play-lh.googleusercontent.com/HFsDtiZko50hoRv4TbAWjKemgSmbg2JFR52tvknggxar1a-RsZZmAGmJgJV3tP6BuAAf3w"
    }
];

export function getMovie(movieId) {
    return movies.find((movie) => movie.id == movieId);
}

export default movies;