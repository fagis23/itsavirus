import React, { useState } from 'react';
import down from '../../assets/icons/arrow_down.svg';
import './style.scss';
import shipping from '../../assets/icons/delivery.svg';
import logo from '../../assets/icons/nike.svg';
import bag from '../../assets/icons/bag.svg';
import profile from '../../assets/icons/profile.svg';
import small_bag from '../../assets/icons/small_bag.svg';
import { useEccomerce } from '../../context/EcommerceContext';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = ({}) => {
	const { category, setCategory } = useEccomerce();
	const navigate = useNavigate();
	return (
		<React.Fragment>
			<div className="header__container">
				<div className="header__container__flex">
					<div className="header__container__flex__language">
						<div className="header__container__flex__language__text">
							<span>English</span>
						</div>
						<div className="header__container__flex__language__img">
							<img alt="asd.." src={down} />
						</div>
					</div>
					<div className="header__container__flex__shipping">
						<div className="header__container__flex__shipping__img">
							<img src={shipping} alt="asd.." />
						</div>
						<div className="header__container__flex__shipping__text">
							<span>FREE SHIPPING OVER $100 PURCHASE</span>
						</div>
					</div>
					<div className="header__container__flex__tabs">
						<div className="header__container__flex__tabs__shipping">
							<span>Shipping</span>
						</div>
						<div className="header__container__flex__tabs__faq">
							<span>FAQ</span>
						</div>
						<div className="header__container__flex__tabs__contact">
							<span>Contact</span>
						</div>
					</div>
				</div>
			</div>
			<div className="header__container__flex2">
				<div className="header__container__flex2__logo">
					<Link to="/">
						<img alt="asd..." src={logo} />
					</Link>
				</div>
				<div className="header__container__flex2__tabs">
					<div
						className="header__container__flex2__tabs__men"
						onClick={() => {
							setCategory('men');
							navigate('/');
						}}
						style={
							category === 'men'
								? { borderBottom: '1px solid  #131212', paddingBottom: 8 }
								: {}
						}
					>
						<span>Men Shoes</span>
					</div>
					<div
						className="header__container__flex2__tabs__running"
						onClick={() => {
							setCategory('running');
							navigate('/');
						}}
						style={
							category === 'running'
								? { borderBottom: '1px solid  #131212', paddingBottom: 8 }
								: {}
						}
					>
						<span>Running Shoes</span>
					</div>
					<div
						className="header__container__flex2__tabs__basketball"
						onClick={() => {
							setCategory('basketball');
							navigate('/');
						}}
						style={
							category === 'basketball'
								? { borderBottom: '1px solid  #131212', paddingBottom: 8 }
								: {}
						}
					>
						<span>Basketball Shoes</span>
					</div>
				</div>
				<div className="header__container__flex2__account">
					<div style={{ position: 'relative', display: 'flex' }}>
						<div className="header__container__flex2__account__bag">
							<img alt="asd..." src={small_bag} />
						</div>
						<div className="header__container__flex2__account__count">
							<span>0</span>
						</div>
					</div>

					<div className="header__container__flex2__account__profile">
						<div className="header__container__flex2__account__profile__box">
							<img alt="asd..." src={profile} />
							<span>Fachri</span>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Header;
