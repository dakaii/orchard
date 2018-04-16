import { GET_VIDEO_SUCCESS, GET_VIDEO_FAILURE } from '../actions/Index';

export default function(state = [], action) {
    switch (action.type) {
    case GET_VIDEO_SUCCESS:
        return action.payload;
    case GET_VIDEO_FAILURE:
        return [action.payload, ...state];
    default:
        return state
    }
    return state;
}