export default {
  namespace: 'user',
  state: {
    name: 'linxun'
  },
  effects: {},
  reducers: {
    setState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}