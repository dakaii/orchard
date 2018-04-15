import { combineReducers } from 'redux';
import VideoReducer from './VideoReducer';

const rootReducer = combineReducers({
  video: VideoReducer
});

export default rootReducer;
