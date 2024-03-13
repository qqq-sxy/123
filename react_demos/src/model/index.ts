import { Models } from '@rematch/core';
import { setIntervalDemoModel } from '../page/setIntervalDemo/setIntervalDemoModel/index';
export interface RootModel extends Models<RootModel> {
    setIntervalDemoModel: typeof setIntervalDemoModel,
}

export const models: RootModel = {
    setIntervalDemoModel
}
