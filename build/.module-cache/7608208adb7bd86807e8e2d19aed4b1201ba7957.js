 var CommentBox = React.createClass({
 	displayName: 'CommentBox',
 	render: function() {
 		return (
 			React.createElement('div', {
 				className: 'comentBox'
 			}, 'Hello world! I am a CommentBox.')
 		);
 	}
 });
 React.render(
 	React.createElement(CommentBox, null),
 	document.getElementById('content')
 );