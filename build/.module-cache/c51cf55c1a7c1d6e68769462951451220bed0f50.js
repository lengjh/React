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

// var HellowWorld = React.createClass({
// 	render: function() {
// 		return (
// 			<p>
// 				Hello,<input type="text" placeholder="Your name here "/>
// 				Is is {this.props.date.toLocaleTimeString()}
// 			</p>
// 		);
// 	}
// });
// setInterval(function(){
// 	ReactDOM.render(
// 		<HellowWorld date={new Date()}/>,
// 		document.getElementById('content')
// 	);
// },500);

//  var LikeButton = React.createClass({
//  	getInitialState:function(){
//  		return {liked:false};
//  	},
//  	handleClick:function(){
//  		var _this =this;
//  		this.setState({liked:!this.state.liked});

//  	},
//  	render:function(){
//  		var text = this.state.liked ? 'liked' : 'haven\' liked';
//  		return (
//  			<p onClick={this.handleClick}>
//  				You {text} this. Click to toggle.
//  			</p>
//  		);
//  	}
//  });
//  ReactDOM.render(
//  	<LikeButton />,
//  	document.getElementById('example')
//  );

var data = [{
	category: "Sporting Goods",
	price: "$49.99",
	stocked: true,
	name: "Football"
}, {
	category: "Sporting Goods",
	price: "$9.99",
	stocked: true,
	name: "Baseball"
}, {
	category: "Sporting Goods",
	price: "$29.99",
	stocked: false,
	name: "Basketball"
}, {
	category: "Electronics",
	price: "$99.99",
	stocked: true,
	name: "iPod Touch"
}, {
	category: "Electronics",
	price: "$399.99",
	stocked: false,
	name: "iPhone 5"
}, {
	category: "Electronics",
	price: "$199.99",
	stocked: true,
	name: "Nexus 7"
}];

var FilterableProductTable,
	SearchBar,
	ProductTable,
	ProductCategoryRow,
	ProductRow;