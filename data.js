export const sampleFilm = {
  name: "The Shawshank Redemption (1994)",
  description:
    "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
  releaseDate: new Date("Sep 17 1994").toISOString(),
  rating: 4,
  ticketPrice: 10.99,
  country: "USA",
  genre: Array("Drama"),
  photo:
    "https://images-na.ssl-images-amazon.com/images/P/B000P0J0EW.01._SX200_SCLZZZZZZZ_.jpg",
  slug: "the-shawshank-redemption-1994",
};

export const sampleFilms = [1, 2, 3, 4].map((e) => sampleFilm);

export const sampleComment = {
  name: "John",
  comment: "Nice movie!! I like it",
  filmId: "",
};

export const sampleComments = [1, 2, 3].map((e) => sampleComment);
