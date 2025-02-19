export const handleAsyncAction = (builder, action, stateKey) => {
  builder
    .addCase(action.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(action.fulfilled, (state, action) => {
      state.loading = false;
      state[stateKey] = action.payload; // Dynamically set the state using the stateKey
    })
    .addCase(action.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
};
