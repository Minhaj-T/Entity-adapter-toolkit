import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

function App() {
	return (
		<main className="App">
			<AddPostForm/>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<PostsList />} />
				</Route>
			</Routes>
		</main>
	);
}

export default App;
