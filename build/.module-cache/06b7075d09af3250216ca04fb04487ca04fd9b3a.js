// var CommentList = React.createClass({
// 	render: function() {
// 		return ( < div className = "" >
// 			Hello < strong > {
// 				this.props.author
// 			} < /strong>! <em>{this.props.date}</em > I am a CommentList. < /div>
// 		);
// 	}
// });
// var CommentForm = React.createClass({
// 	render: function() {
// 		return ( < div className = "commentForm" >
// 			< strong > {
// 				this.props.author
// 			} < /strong> < em > {
// 				this.props.date
// 			} < /em>
// 			Hello wold!I am a CommentForm. {
// 				this.props.children
// 			} < /div>
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
// var Comment = React.createClass({
// 	render: function() {
// 		return (
// 			<div className="comment">
// 				<h2 className="commentAuthor">
// 					{this.props.author}
// 				</h2>
// 				{marked(this.props.children.toString())}
// 			</div>
// 		);
// 	}
// });
// var data = [{
// 	author: "Pete Hunt",
// 	text: "This is one comment"
// }, {
// 	author: "Jordan Walke",
// 	text: "This is *another* comment"
// }];
// var CommentList = React.createClass({
//   render: function() {
//     var commentNodes = this.props.data.map(function (comment) {
//       return (
//         <Comment author={comment.author}>
//           {comment.text}
//         </Comment>
//       );
//     });
//     return (
//       <div className="commentList">
//         {commentNodes}
//       </div>
//     );
//   }
// });
// var CommentBox = React.createClass({
//   render: function() {
//     return (
//       <div className="commentBox">
//         <h1>Comments</h1>
//         <CommentList data={this.props.data} />
//         <CommentForm />
//       </div>
//     );
//   }
// });

// ReactDOM.render(
//   <CommentBox data={data} />,
//   document.getElementById('content')
// );

var HellowWorld = React.createClass({displayName: "HellowWorld",
	render: function() {
		return (
			React.createElement("p", null, 
				"Hello,", React.createElement("input", {type: "text", placeholder: "Your name here "}), 
				"Is is ", this.props.date.toLocaleTimeString()
			)
		);
	}
});
setInterval(function(){
	ReactDOM.render(
		React.createElement(HellowWorld, {date: new Date()}),
		document.getElementById('content')
	);
},500);

 var LikeButton = React.createClass({displayName: "LikeButton",
 	getInitialState:function(){
 		return {liked:false};
 	},
 	handleClick:function(){
 		var _this =this;
 		this.setState({liked:!this.state.liked});
 		setTimeout(function(){
 		//	alert(0);
 			_this.handleClick();
 		},1000);
 	},
 	render:function(){
 		var text = this.state.liked ? 'liked' : 'haven\' liked';
 		return (
 			React.createElement("p", {onClick: this.handleClick}, 
 				"You ", text, " this. Click to toggle."
 			)
 		);
 	}
 });
 ReactDOM.render(
 	React.createElement(LikeButton, null),
 	document.getElementById('example')
 );