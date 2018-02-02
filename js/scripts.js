// scripts.js

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    director: 'Reżyseria: 	Chris Columbus',
    desc: 'Opis: Film o czarodzieju',
    box: 'Boxoffice: 	$974 755 371',
    src: './pictures/harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    director: 'Reżyseria: 	Rob Minkoff, Roger Allers',
    desc: 'Opis: Film o królu sawanny',
    box: 'Boxoffice: 	$974 755 371',
    src: './pictures/lion.jpg'
  },
  {
    id: 3,
    title: 'Fernando',
    director: 'Reżyseria: 	Carlos Saldanha',
    desc: 'Opis: Przyjacielski młody byczek przez pomyłkę zostaje zwerbowany do walk na arenie',
    box: 'Boxoffice: 	$128 942 249',
    src: './pictures/fernando.jpg'
  },
  {
    id: 4,
    title: 'Shrek',
    director: 'Reżyseria: 	Andrew Adamson, Vicky Jenson',
    desc: 'Opis: By odzyskać swój dom, brzydki ogr z gadatliwym osłem wyruszają uwolnić piękną księżniczkę.',
    box: 'Boxoffice: 	$484 409 218',
    src: './pictures/shrek.jpg'
  },
  {
    id: 5,
    title: 'Madagaskar',
    director: 'Reżyseria: 	Tom McGrath, Eric Darnell',
    desc: 'Opis: Lew, zebra, hipopotam i żyrafa zostają wysłane statkiem z nowojorskiego zoo do Afryki. ',
    box: 'Boxoffice: 	$532 680 671',
    src: './pictures/madagaskar.jpg'
  },
  {
    id: 6,
    title: 'Kraina lodu',
    director: 'Reżyseria: 	Chris Buck, Jennifer Lee',
    desc: 'Opis: Kiedy posiadająca moc kontroli nad śniegiem i lodem Elsa sprowadza srogą zimę na swoje królestwo, Anna wyrusza w podróż, aby odszukać siostrę oraz zakończyć pogodowe anomalie. ',
    box: 'Boxoffice: 		$1 274 219 009',
    src: './pictures/kraina.jpg'
  }
];


var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('h2', {className: "title"}, this.props.title);
  }
}
);


var MovieDirector = React.createClass({
  propTypes: {
    director: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('p', {className: "director"}, this.props.director);
  }
});



var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('p', {className: "description"}, this.props.desc);
  }
});


var MovieBox = React.createClass({
  propTypes: {
    box: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('p', {className: "box"}, this.props.box);
  }
});


var MoviePoster = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('img', {src: this.props.src});
  }
});


var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  render: function() {
    return React.createElement("li", {key: this.props.movie.id},
          React.createElement(MovieTitle, {title: this.props.movie.title}),
          React.createElement(MovieDirector, {director: this.props.movie.director}),
          React.createElement(MovieDescription, {desc: this.props.movie.desc}),
          React.createElement(MovieBox, {box: this.props.movie.box}),
          React.createElement(MoviePoster, {src: this.props.movie.src})
      );
    }
});



var MovieList = React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired
  },
  render: function(){
    var listElement = this.props.list.map(function(movie) {
      return React.createElement(Movie, {movie: movie});
		});
      return React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, listElement)
      );
    }
});

var movieList = React.createElement(MovieList, {list: movies});

ReactDOM.render(movieList, document.getElementById('app'));
