import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import { useNavigate } from 'react-router-dom';
import {
	useEccomerce,
	EccomerceProvider,
} from '../../../context/EcommerceContext';
import './style.scss';
import { SneakersData } from '../../../Data';

const EcommerceView: React.FC = ({}) => {
	const { category, sneakers, apiSneakers } = useEccomerce();
	const navigate = useNavigate();

	useEffect(() => {
		apiSneakers();
	}, []);
	console.log(sneakers);

	return (
		<div>
			<Header />
			<div className="top">
				<span>{category}</span>
			</div>
			<div className="card">
				{category === 'men'
					? SneakersData.shoes
							.filter((datas) => datas.category === 'Men Shoes')
							.map((value) => {
								return (
									<div
										className="card__box"
										onClick={() => {
											navigate('/view/detail', {
												state: {
													name: value.name,
													category: value.category,
													colors: value.colors,
													description: value.description,
													video: value.video,
													image: value.image,
													price: value.price,
													sizes: value.sizes,
												},
											});
										}}
									>
										<div className="card__box__img">
											<img alt="asd.." src={value.image} />
										</div>
										<div className="card__box__top">
											<div className="card__box__top__name">
												<span>{value.name}</span>
											</div>
											<div className="card__box__top__price">
												<span>${value.price}</span>
											</div>
										</div>
										<div className="card__box__bot">
											<span>{value.category}</span>
										</div>
									</div>
								);
							})
					: category === 'running'
					? SneakersData.shoes
							.filter((datas) => datas.category === 'Running Shoes')
							.map((value) => {
								return (
									<div
										className="card__box"
										onClick={() => {
											navigate('/view/detail', {
												state: {
													name: value.name,
													category: value.category,
													colors: value.colors,
													description: value.description,
													video: value.video,
													image: value.image,
													price: value.price,
													sizes: value.sizes,
												},
											});
										}}
									>
										<div className="card__box__img">
											<img alt="asd.." src={value.image} />
										</div>
										<div className="card__box__top">
											<div className="card__box__top__name">
												<span>{value.name}</span>
											</div>
											<div className="card__box__top__price">
												<span>${value.price}</span>
											</div>
										</div>
										<div className="card__box__bot">
											<span>{value.category}</span>
										</div>
									</div>
								);
							})
					: SneakersData.shoes
							.filter((datas) => datas.category === 'Basketball Shoes')
							.map((value) => {
								return (
									<div
										className="card__box"
										onClick={() => {
											navigate('/view/detail', {
												state: {
													name: value.name,
													category: value.category,
													colors: value.colors,
													description: value.description,
													video: value.video,
													image: value.image,
													price: value.price,
													sizes: value.sizes,
												},
											});
										}}
									>
										<div className="card__box__img">
											<img alt="asd.." src={value.image} />
										</div>
										<div className="card__box__top">
											<div className="card__box__top__name">
												<span>{value.name}</span>
											</div>
											<div className="card__box__top__price">
												<span>${value.price}</span>
											</div>
										</div>
										<div className="card__box__bot">
											<span>{value.category}</span>
										</div>
									</div>
								);
							})}
			</div>
		</div>
	);
};

export default EcommerceView;
