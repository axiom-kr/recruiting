import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

type State = {
  page: number;
};

type Action = {
  type: `SET_PAGE`;
  value: number;
};
type PageDispatch = Dispatch<Action>;

const initData = {
  page: 1,
};

export const PageStateContext = createContext<State | null>(null);
export const PageDispatchContext = createContext<PageDispatch | null>(null);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case `SET_PAGE`:
      return {
        ...state,
        page: action.value,
      };
    default:
      throw new Error(`Unhandled action`);
  }
};

const PageProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initData);

  return (
    <PageStateContext.Provider value={state}>
      <PageDispatchContext.Provider value={dispatch}>
        {children}
      </PageDispatchContext.Provider>
    </PageStateContext.Provider>
  );
};

export default PageProvider;

export const usePageState = () => {
  const state = useContext(PageStateContext);
  if (!state) throw new Error("Cannot find Provider");
  return state;
};

export const usePageDispatch = () => {
  const dispatch = useContext(PageDispatchContext);
  if (!dispatch) throw new Error("Cannot find Provider");
  return dispatch;
};
