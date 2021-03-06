export interface Block {
  actions: Action[];
  blockInfo: BlockInfo;
}

export interface IndexState {
  blockNumber: number;
  blockHash: string;
}

export interface BlockInfo {
  blockHash: string;
  blockNumber: number;
  previousBlockHash: string;
  timestamp: Date;
}

export interface Action {
  type: string;
  payload: any;
}

export interface Updater {
  actionType: string;
  updater: (state: any, payload: any, blockInfo: BlockInfo, context: any) => void;
}

export interface Effect {
  actionType: string;
  effect: (state: any, payload: any, blockInfo: BlockInfo, context: any) => void;
}
