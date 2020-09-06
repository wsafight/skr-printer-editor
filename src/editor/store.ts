import {writable} from 'svelte/store';
import LocationStorage from "../utils/LocationStorage";

interface Stage {
  tempId: string;
  bizId: string;
  page: string;
  scale: number;
  elements: any[],
  select: string,
  xLines: any[],
  yLines: any[]
}

function getInitialStage() {
  return {
    tempId: '',
    bizId: '',
    page: '',
    scale: 1,
    elements: [],
    select: '',
    xLines: [],
    yLines: []
  }
}

const STAGE_KEY: string = 'skr_editor_stage'

function createStage() {
  const initialStorage: string = LocationStorage.getItem(STAGE_KEY)

  const stage: Stage = initialStorage ? JSON.parse(initialStorage) : getInitialStage()
  const {subscribe, set, update} = writable<Stage>(stage);


  return {
    subscribe,
    increment: () => {

      LocationStorage.setItem(STAGE_KEY, JSON.stringify({}))
      return update(n => n)
    },
    decrement: () => {

      LocationStorage.setItem(STAGE_KEY, JSON.stringify({}))
      return update(n => n)
    },
    reset: () => {
      LocationStorage.setItem(STAGE_KEY, JSON.stringify(getInitialStage()))
      set({} as any)
    }
  };
}

export const stage = createStage()