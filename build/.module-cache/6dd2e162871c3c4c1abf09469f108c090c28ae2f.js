// var CommentList = React.createClass({
// 	render: function() {
// 		return ( <div className = "">
// 			Hello <strong>{this.props.author} </strong>! <em>{this.props.date}</em>I am a CommentList. 
// 		</div>
// 		);
// 	}
// });
// var CommentForm = React.createClass({
// 	render: function() {
// 		return ( 
// 			<div className = "commentForm">
// 				<strong>{this.props.author}</strong>
// 				<em>{this.props.date}</em>
// 				Hello wold!I am a CommentForm.
// 				{this.props.children}
// 			</div>
// 		);
// 	}

// });

// var CommentBox = React.createClass({
// 	displayName: 'CommentBox',
// 	render: function() {
// 		// return (
// 		// 	React.createElement('div', {
// 		// 		className: 'comentBox'
// 		// 	}, 'Hello world! I am a CommentBox.')
// 		// );
// 		return (
// 			<div className="commentBox">
// 				<h1>Comments</h1>
// 				<CommentList author="kingwell" date="2015-12-12"/>
// 				<CommentForm author="leng" date="2016-10-12"/>
// 			</div>
// 		);
// 	}
// });
// ReactDOM.render(
// 	React.createElement(CommentBox, null),
// 	document.getElementById('content')
// );
var Comment = React.createClass({displayName: "Comment",
	render: function() {
		return (
			React.createElement("div", {className: "comment"}, 
				React.createElement("h2", {className: "commentAuthor"}, 
					this.props.author
				), 
				marked(this.props.children.toString())
			)
		);
	}
});