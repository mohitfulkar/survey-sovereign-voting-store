export const handleAsyncAction = (
  builder,
  action,
  stateKey,
  additionState = null
) => {
  builder
    .addCase(action.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    })
    .addCase(action.fulfilled, (state, action) => {
      state.loading = false;
      state[stateKey] = action.payload; // Dynamically set the state using the stateKey
      state.success = true;
      if (additionState) {
        state[additionState] = action.payload.token; // Set additional state
      }
    })
    .addCase(action.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.success = false;
    });
};
