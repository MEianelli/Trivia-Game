import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { loginReducer as login,
  configReducer as config,
  questionsReducer as questions,
  updateReducer as update,
  rankingReducer as ranking,
} from './reducers';

const rootReducer = combineReducers({
  login,
  config,
  questions,
  update,
  ranking,
});

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk)));

export default store;
