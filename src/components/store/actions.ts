import { State } from "./state";

export const actions = {
  app: {
    setLoading: ({ state }: { state: State }, newState: boolean) => {
      state.app.loading = newState;
    },
  },
};
