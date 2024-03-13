import { createModel } from '@rematch/core'
import { RootModel } from '../../../model/index'

interface IdReportModelState {
    nowValue: number;
}

export const setIntervalDemoModel = createModel<RootModel>()({
  state: {
    nowValue: 0
  } as IdReportModelState,
  reducers: {
    // 更新全局loading状态
    setNowValue(state, payload: number) {
      return {
        ...state,
        nowValue: payload
      }
    },
    
  },
  effects: (dispatch) => ({
    
  })
});