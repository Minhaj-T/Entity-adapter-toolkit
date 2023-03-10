import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

function PostsExcerpt({ post }) {
	return (
		<article>
			<h2>{post.title}</h2>
			<p className="excerpt">{post.body.substring(0, 75)}...</p>
			<p className="postCredit">
				<Link to={`post/${post.id}`}>View Post</Link>
				<PostAuthor userId={post.userId} />
				<TimeAgo timestamp={post.date} />
			</p>
			<ReactionButtons post={post} />
		</article>
	);
}
// PostsExcerpt = React.memo(PostsExcerpt);
// if the props will change only render the component, change the value of the props.
export default PostsExcerpt;
