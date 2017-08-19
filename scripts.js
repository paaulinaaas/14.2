var movies = [
{
  id: 1,
  title: 'Harry Potter',
  description: 'film o czarodzieju',
  pic:'http://imgur.com/n8OYCzR.png'
},
{
  id: 2,
  title: 'Król Lew',
  description: 'Film o królu sawanny',
  pic: 'http://imgur.com/n8OYCzR.png'
},
{
  id: 3,
  title: 'Pocahontas',
  description: 'Film o dziewczynie o imieniu Pocahontas',
  pic: 'http://imgur.com/n8OYCzR.png'
},
{
  id: 4,
  title: 'Kubuś Puchatek',
  description: 'Film o niedzwiadku, poszukującym miodu',
  pic: 'http://imgur.com/n8OYCzR.png'
},
{
  id: 5,
  title: 'Alien',
  description: 'Film o wyprawie kosmicznej',
  pic: 'http://imgur.com/n8OYCzR.png'
}
];
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title), //czemu movie skoro mam zmienna movies?
    React.createElement('ul', {}, movie.description),
    React.createElement('img', {src: movie.pic})
    );
});


var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
    );

  ReactDOM.render(element, document.getElementById('app'));