import React from 'react';

import nike_air_force_1 from '../assets/images/nike_air_force_1.svg';
import zoom_freak from '../assets/images/zoom_freak_2.svg';
import jordan_delta from '../assets/images/jorda_delta.svg';
import kyrie_7_ep from '../assets/images/kyrie_7_ep.svg';
import nike_air_zoom_bb_nxt from '../assets/images/nike_air_zoom_bb_nxt.svg';
import nike_air_edge_270 from '../assets/images/nike_air_edge_270.svg';
import kd13_ep from '../assets/images/kd13_ep.svg';
import kd_trey from '../assets/images/kd_trey_5.svg';

const useImages = ({ name }: any) => {
	switch (name) {
		case 'Nike Air Force 1':
			return nike_air_force_1;
		case 'Zoom Freak 2':
			return zoom_freak;
		case 'Jordan Delta':
			return jordan_delta;
		case 'Kyrie 7 EP':
			return kyrie_7_ep;

		case 'Nike Air Zoom BB NXT':
			return nike_air_zoom_bb_nxt;

		case 'Nike Air Edge 270':
			return nike_air_edge_270;
		case 'KD Trey 5 VII EP':
			return kd_trey;
		case 'KD13 EP':
			return kd13_ep;
		default:
			return null;
	}
};

export default useImages;
