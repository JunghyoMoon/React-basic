import React from "react";
// 하나의 컴포넌트만 렌더링할 수 있기 때문에, 이렇게 다른 컴포넌트를 불러와야 함.
// 코드를 여러개의 '조각'으로 나눠, 재사용성과 유지보수를 편리하게.

function Food({ name }) {
	return <h1>I like {name}</h1>;
}

function App() {
	return (
		<div>
			<h1>hello world</h1>
			<Food name="kimchi" />
			<Food name="Gogi" />
			<Food name="Ramen" />
		</div>
	);
}

export default App;
