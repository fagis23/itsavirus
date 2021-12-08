import React, { useState } from 'react';
import { useLocation } from 'react-router';
import Header from '../../Header/Header';
import './style.scss';
import videoIcon from '../../../assets/icons/video.svg';
import delivery from '../../../assets/icons/delivery.svg';
import arrow from '../../../assets/icons/arrow_white.svg';

const EcommerceDetail: React.FC = () => {
	const { state } = useLocation();
	const { name, category, colors, description, image, price, sizes, video } =
		state;
	console.log(state);
	const [sizePick, setSizePick] = useState<string>('');
	const [colorPick, setColorPick] = useState<string>('');
	return (
		<div>
			<Header />
			<div className="body">
				<div className="body__img">
					<img style={{ width: 500, height: 600 }} alt="asd..." src={image} />
				</div>
				<div className="body__desc">
					<div className="body__desc__category">
						<span>{category}</span>
					</div>
					<div className="body__desc__name">
						<span>{name}</span>
					</div>
					<div className="body__desc__desc">
						<span>{description}</span>
					</div>
					<div className="body__desc__video">
						<div className="body__desc__video__img">
							<img alt="asd.." src={videoIcon} />
						</div>
						<div className="body__desc__video__text">
							<span>PLAY VIDEO</span>
						</div>
					</div>
					<div className="body__desc__select">
						<span>SELECT SIZE (US)</span>
					</div>
					<div className="body__desc__sizes">
						{sizes.map((size: any) => {
							return (
								<div
									className={`body__desc__sizes__box ${
										sizePick === size ? 'active' : ''
									}`}
									onClick={() => setSizePick(size)}
								>
									<span>{size}</span>
								</div>
							);
						})}
					</div>
					<div className="body__desc__color">
						<span>SELECT COLOR</span>
					</div>
					<div className="body__desc__colors">
						{colors.map((color: any, key: any) => {
							const a = document.getElementById(
								`body__desc__colors__choice__${key}`,
							);
							return (
								<div
									id={key}
									className={`body__desc__colors__choice`}
									style={
										colorPick === color.name
											? {
													background: color.color_hash,
													border: '5px solid black',
											  }
											: {
													background: color.color_hash,
													border: '5px solid ' + color.color_hash,
											  }
									}
									onClick={() => {
										setColorPick(color.name);
									}}
								></div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="footer">
				<div className="footer__left">
					<div className="footer__left__img">
						<img alt="asd" src={delivery} />
					</div>
					<div className="footer__left__text">
						<span>FREE SHIPPING OVER $100 PURCHASE</span>
					</div>
				</div>
				<div className="footer__right">
					<div className="footer__right__text">ADD TO BAG - ${price}</div>
					<div className="footer__right__img">
						<img alt="asd..." src={arrow} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default EcommerceDetail;
