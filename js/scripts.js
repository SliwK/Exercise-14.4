// scripts.js
var propTypes = require('prop-types');

//klasa Movie
var Movie = React.createClass({
  propTypes: {
    movies: React.propTypes.arrayOf(React.propTypes.object).isRequired
//    key: React.PropTypes.number.isRequired
//    title: React.PropTypes.string
//    director: React.PropTypes.string,
//    desc: React.PropTypes.string,
//    box: React.PropTypes.string,
//    scr: React.PropTypes.string
  },
  render: movies.map(function(movie) {
    return React.createElement('li', {key: id},
        React.createElement('h2', {}, title)
//        React.createElement('p', {}, director),
//        React.createElement('p', {}, desc),
//        React.createElement('p', {}, box),
//        React.createElement('img', {src: src})
      );
  })
});

//element klasy
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

var element = React.createElement(Movie, {key: key,
      title: title,
//      director: director,
//      desc: desc,
//      box: box,
//      scr: scr
    });


ReactDOM.render(element, document.getElementById('app'));
