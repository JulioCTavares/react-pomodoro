import { produce } from "immer";
import { ActionTypes } from "..";

export interface Cycle {
  id: string;
  task: string;
  minutes: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}



export const cyclesReducer = (state: CyclesState, action: any) => {
  switch (action.type) {
    case ActionTypes.CREATE_NEWCYCLE:
      // return {
      //   ...state,
      //   cycles: [...state.cycles, action.payload.newCycle],
      //   activeCycleId: action.payload.newCycle.id,
      // };
      return produce(state, draft => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {

      const currentIndexCycle = state.cycles.findIndex(cycle => cycle.id === state.activeCycleId);

      if (currentIndexCycle < 0) {
        return state;
      }

      return produce(state, draft => {
        draft.activeCycleId = null;
        draft.cycles[currentIndexCycle].interruptedDate = new Date();
      })
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {

      const currentIndexCycle = state.cycles.findIndex(cycle => cycle.id === state.activeCycleId);

      if (currentIndexCycle < 0) {
        return state;
      }

      return produce(state, draft => {
        draft.activeCycleId = null;
        draft.cycles[currentIndexCycle].finishedDate = new Date();
      })
    }
    default:
      return state;
  }
}