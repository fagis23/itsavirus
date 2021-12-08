import React, {
	createContext,
	FC,
	useContext,
	useState,
	useEffect,
} from 'react';
import { SneakersData } from '../Data';
import images from '../hooks/useImages';
import { EccomerceNode, Sneakers } from './ecommerce-interface';

const EccomerceContext = createContext<EccomerceNode>({} as EccomerceNode);
export const EccomerceConsumer = EccomerceContext.Consumer;

export const EccomerceProvider: FC = ({ children }) => {
	const [category, setCategory] = useState<string>('men');
	const [sneakers, setSneakers] = useState<Sneakers>({} as Sneakers);

	const apiSneakers = async () => {
		const result = await fetch(
			'https://my-json-server.typicode.com/megasuartika/fe-assignment/db',
		);

		const data = await result.json();

		if (data) {
			const shoes = data.shoes;
			const dataShoes = shoes.map((value: any) => {
				const tempData = { ...value };
				tempData.images = images({ name: value.name });

				return tempData;
			});
			setSneakers(dataShoes);
		}
		// console.log(result);
		// return result;
		// setSneakers(result);
		// setSneakers(Sneakers);
		// console.log(Data);
	};

	return (
		<EccomerceContext.Provider
			value={{
				category,
				setCategory,
				sneakers,
				setSneakers,
				apiSneakers,
			}}
		>
			{children}
		</EccomerceContext.Provider>
	);
};

export const useEccomerce = () => useContext(EccomerceContext);
