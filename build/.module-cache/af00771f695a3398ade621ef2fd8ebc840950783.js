var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		return ( React.createElement("div", {className: ""}, 
			"Hello world!I am a CommentList." 
		)
		);
	}
});
var CommentForm = React.createClass({displayName: "CommentForm",
	render: function() {
		return ( 
			React.createElement("div", {className: "commentForm"}, 
				"Hello wold!I am a CommentForm."
			)
		);
	}

});

var CommentBox = React.createClass({
	displayName: 'CommentBox',
	render: function() {
		// return (
		// 	React.createElement('div', {
		// 		className: 'comentBox'
		// 	}, 'Hello world! I am a CommentBox.')
		// );
		return (
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "Comments"), 
				"React.createElement('div')", 
				React.createElement(CommentList, null), 
				React.createElement(CommentForm, null)
			)
		);
	}
});
ReactDOM.render(
	React.createElement(CommentBox, null),
	document.getElementById('content')
);