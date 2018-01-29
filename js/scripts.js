// scripts.js

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    director: 'Reżyseria: 	Chris Columbus',
    desc: 'film o czarodzieju',
    box: 'Boxoffice: 	$974 755 371',
    src: './pictures/harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    director: 'Reżyseria: 	Rob Minkoff, Roger Allers',
    desc: 'Film o królu sawanny',
    box: 'Boxoffice: 	$974 755 371',
    src: './pictures/lion.jpg'
  },
  {
    id: 3,
    title: 'Fernando',
    director: 'Reżyseria: 	Carlos Saldanha',
    desc: 'Przyjacielski młody byczek przez pomyłkę zostaje zwerbowany do walk na arenie',
    box: 'Boxoffice: 	$128 942 249',
    src: './pictures/fernando.jpg'
  },
  {
    id: 4,
    title: 'Shrek',
    director: 'Reżyseria: 	Andrew Adamson, Vicky Jenson',
    desc: 'By odzyskać swój dom, brzydki ogr z gadatliwym osłem wyruszają uwolnić piękną księżniczkę.',
    box: 'Boxoffice: 	$484 409 218',
    src: './pictures/shrek.jpg'
  },
  {
    id: 5,
    title: 'Madagaskar',
    director: 'Reżyseria: 	Tom McGrath, Eric Darnell',
    desc: 'Lew, zebra, hipopotam i żyrafa zostają wysłane statkiem z nowojorskiego zoo do Afryki. ',
    box: 'Boxoffice: 	$532 680 671',
    src: './pictures/madagaskar.jpg'
  },
  {
    id: 6,
    title: 'Kraina lodu',
    director: 'Reżyseria: 	Chris Buck, Jennifer Lee',
    desc: 'Kiedy posiadająca moc kontroli nad śniegiem i lodem Elsa sprowadza srogą zimę na swoje królestwo, Anna wyrusza w podróż, aby odszukać siostrę oraz zakończyć pogodowe anomalie. ',
    box: 'Boxoffice: 		$1 274 219 009',
    src: './pictures/kraina.jpg'
  }
];


var Movies = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },
  render: function() {
    var movies = this.props.items.map(function(movie){
      return React.createElement("li", {key: movie.id},
          React.createElement(Movie, {item: movie}),
          React.createElement(MovieDirector, {item: movie}),
          React.createElement(MovieDescription, {item: movie}),
          React.createElement(MovieBox, {item: movie}),
          React.createElement(MoviePoster, {item: movie})
      );
    });
    return (
        React.createElement('div', {},
            React.createElement('ul', {}, movies))
    );
  }
});


var Movie = React.createClass({
  propTypes: {
    movie: movies.title,
  },
  render: function() {
    return React.createElement('h2', {className: "title"}, this.props.item.title);
  }
}
);


var MovieDirector = React.createClass({
  propTypes: {
    item: movies.director,
  },
  render: function() {
    return React.createElement('p', {className: "director"}, this.props.item.director);
  }
});



var MovieDescription = React.createClass({
  propTypes: {
    item: movies.desc,
  },
  render: function() {
    return React.createElement('p', {className: "description"}, this.props.item.desc);
  }
});


var MovieBox = React.createClass({
  propTypes: {
    item: movies.box,
  },
  render: function() {
    return React.createElement('p', {className: "box"}, this.props.item.box);
  }
});


var MoviePoster = React.createClass({
  propTypes: {
    item: movies.src,
  },
  render: function() {
    return React.createElement('img', {src: this.props.item.src});
  }
});


var MovieList = React.createClass({
  render: function(){
    return React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmów'),
      React.createElement(Movies, {items: movies}, {})
    );
  }
});

var movieList = React.createElement(MovieList);

ReactDOM.render(movieList, document.getElementById('app'));
