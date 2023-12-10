import { Cycle } from ".."

export enum ActionTypes {
  CREATE_NEWCYCLE = 'createNewCycle',
  INTERRUPT_CURRENT_CYCLE = 'interruptCurrentCycle',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'markCurrentCycleAsFinished'
}

export const interruptCurrentCycleAction = () => {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export const createNewCycleAction = (newCycle: Cycle) => {
  return {
    type: ActionTypes.CREATE_NEWCYCLE,
    payload: {
      newCycle,
    },
  }
}

export const markCurrentCycleAsFinishedAction = () => {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}