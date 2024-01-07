export default function selectionFilter({ series, movie }) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series.filter((item) => item.genre === "documentaries"),
      },
      {
        title: "Comedies",
        data: series.filter((item) => item.genre === "comedies"),
      },
      {
        title: "Children",
        data: series.filter((item) => item.genre === "children"),
      },
      {
        title: "Crime",
        data: series.filter((item) => item.genre === "crime"),
      },
      {
        title: "Feel Good",
        data: series.filter((item) => item.genre === "feel-good"),
      },
    ],
    movie: [
      {
        title: "Drama",
        data: movie.filter((item) => item.genre === "drama"),
      },
      {
        title: "Thriller",
        data: movie.filter((item) => item.genre === "thriller"),
      },
      {
        title: "Children",
        data: movie.filter((item) => item.genre === "children"),
      },
      {
        title: "Suspense",
        data: movie.filter((item) => item.genre === "suspense"),
      },
      {
        title: "Romance",
        data: movie.filter((item) => item.genre === "romance"),
      },
    ],
  };
}
