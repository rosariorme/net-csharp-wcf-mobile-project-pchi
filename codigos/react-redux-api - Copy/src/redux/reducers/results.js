import { type as findResultsType } from '../actions/findResults';
import { type as getAllResultsType } from '../actions/getAllResults';
import items from '../../data/items';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findResultsType: {
            if (!payload) {
                return [];
            }

            const regex = new RegExp(`^${payload}` , 'i');

            return items.filter(n => regex.test(n.title));
        }
		case getAllResultsType: {
			 return items;
		} 

        default:
            return state;
    }
}

export default reducer;
