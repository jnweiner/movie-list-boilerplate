var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

export default movies;

// when a movie is added
  // make get request to search for the movie in the movie databse
  // from this we can get the movie's id
  // then make another get request using the movie id in path, to get details
    // we want access to year, runtime, metascore, imdb rating, poster path
    // when we have those, we want to update the movie obj as part of add movie