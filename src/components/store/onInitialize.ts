import { OnInitialize } from "overmind";

export const onInitialize: OnInitialize = async ({ state }) => {
  state.app.loading = true;

  state.app.loading = false;
};
