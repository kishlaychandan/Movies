const movies = [
    {
        id: 1,
        title: "The Matrix",
        date: '1-2-2024',
        rating: 8.7,
        genre: ["Action"],
        image: "https://images.moviesanywhere.com/ac6bd831c08ca0d43a83cf4a04f378b5/3b27bff6-35ad-4a23-be1f-e6faeb56e062.jpg"
    },
    {
        id: 2,
        title: "Inception",
        date: '1-2-2024',
        rating: 8.8,
        genre: ["Sci-Fi"],
        image: "https://images.moviesanywhere.com/3b27bff6-35ad-4a23-be1f-e6faeb56e062.jpg"
    },
    {
        id: 3,
        title: "Terminator 2: Judgment Day",
        date: '1-2-2024',
        rating: 8.5,
        genre: ["Action", "Thriller"],
        image: "https://images.moviesanywhere.com/3b27bff6-35ad-4a23-be1f-e6faeb56e062.jpg"
    },
    {
        id: 4,
        title: "Blade Runner 2049",
        date: '1-2-2024',
        rating: 8.0,
        genre: ["Sci-Fi", "Thriller"],
        image: "https://images.moviesanywhere.com/3b27bff6-35ad-4a23-be1f-e6faeb56e062.jpg"
    },
    {
        id: 5,
        title: "Mad Max: Fury Road",
        date: '1-2-2024',
        rating: 8.1,
        genre: ["Adventure", "Thriller"],
        image: "https://images.moviesanywhere.com/3b27bff6-35ad-4a23-be1f-e6faeb56e062.jpg"
    },
    {
        id: 6,
        title: "The Dark Knight",
        date: '1-2-2024',
        rating: 9.0,
        genre: ["Crime", "Sci-Fi"],
        image: "https://images.moviesanywhere.com/3b27bff6-35ad-4a23-be1f-e6faeb56e062.jpg"
    },
    {
        id: 7,
        title: "Equilibrium",
        date: '1-2-2024',
        rating: 7.4,
        genre: ["Action", "Adventure"],
        image: "https://images.moviesanywhere.com/3b27bff6-35ad-4a23-be1f-e6faeb56e062.jpg"
    },
    {
        id: 8,
        title: "Minority Report",
        date: '1-2-2024',
        rating: 7.7,
        genre: ["Action", "Drama"],
        image: "https://images.moviesanywhere.com/3b27bff6-35ad-4a23-be1f-e6faeb56e062.jpg"
    },
    {
        id: 9,
        title: "The Fifth Element",
        date: '1-2-2024',
        rating: 7.7,
        genre: ["Action", "Rom-Com"],
        image: "https://images.moviesanywhere.com/3b27bff6-35ad-4a23-be1f-e6faeb56e062.jpg"
    },
    {
        id: 10,
        title: "Looper",
        date: '1-2-2024',
        rating: 7.4,
        genre: ["Action", "Drama"],
        image: "https://images.moviesanywhere.com/3b27bff6-35ad-4a23-be1f-e6faeb56e062.jpg"
    }
];

export function getMovie(movieId) {
    return movies.find((movie) => movie.id == movieId);
}

export default movies;