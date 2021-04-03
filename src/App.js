import React from "react";
// 하나의 컴포넌트만 렌더링할 수 있기 때문에, 이렇게 다른 컴포넌트를 불러와야 함.
// 코드를 여러개의 '조각'으로 나눠, 재사용성과 유지보수를 편리하게.

function Food({ name, img }) {
	return (
		<div>
			<h1>I like {name}</h1>
			<img src={img}></img>
		</div>
	);
}

const foodILike = [
	{
		name: "kimchi",
		image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
	},
	{
		name: "gogi",
		image:
			"https://cdn.healthinnews.co.kr/news/photo/201910/11903_12978_1915.jpg",
	},
	{
		name: "ramen",
		image:
			"https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg",
	},
];

function App() {
	return (
		<div>
			<h1>hello world</h1>
			{foodILike.map((food) => (
				<Food name={food.name} img={food.image} />
			))}
		</div>
	);
}

export default App;
