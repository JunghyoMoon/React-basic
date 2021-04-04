import React from "react";
import PropTypes from "prop-types";
// 하나의 컴포넌트만 렌더링할 수 있기 때문에, 이렇게 다른 컴포넌트를 불러와야 함.
// 코드를 여러개의 '조각'으로 나눠, 재사용성과 유지보수를 편리하게.

// list내의 child는 각각 unique한 key prop을 가져야 함.
// 모든 요소들은 "유일"해야 함.
const foodILike = [
	{
		id: 1,
		name: "kimchi",
		img: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
		rating: 3.5,
	},
	{
		id: 2,
		name: "gogi",
		img:
			"https://cdn.healthinnews.co.kr/news/photo/201910/11903_12978_1915.jpg",
		rating: 5,
	},
	{
		id: 3,
		name: "ramen",
		img:
			"https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg",
	},
];

function Food({ name, img, rating }) {
	return (
		<div>
			<h1>I like {name}</h1>
			<img src={img} alt={name}></img>
			<p>{rating} / 5.0</p>
		</div>
	);
}

Food.propTypes = {
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	rating: PropTypes.number,
};

function App() {
	return (
		<div>
			<h1>hello world</h1>
			{foodILike.map((food) => (
				// react의 내부에서만 사용되는 key prop.
				<Food
					key={food.id}
					name={food.name}
					img={food.img}
					rating={food.rating}
				/>
			))}
		</div>
	);
}

export default App;
