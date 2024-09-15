// import flatCombineReducers from "./flat-combine-reducers";
import reducers from "./reducers";

const defaultOptions = {
  mergePrevState: true,
};

const partitionArgs = (args) => {
  const lastArgs = args[args.length - 1];

  if (typeof lastArgs !== "function") {
    return [args.slice(0, args.length - 1), lastArgs];
  }

  return [args];
};
function flatCombineReducers() {
  const [inputReducers, inputOptions] = partitionArgs([...arguments]);

  const options = Object.assign({}, defaultOptions, inputOptions);

  const reducers = options.mergePrevState
    ? [(x) => x].concat(inputReducers)
    : inputReducers;

  return (prevState, action) =>
    reducers.reduce(
      (state, reducer) => Object.assign({}, state, reducer(prevState, action)),
      {}
    );
}

export const defaultState = {};

const rootReducer = flatCombineReducers(...reducers);
export default rootReducer;


