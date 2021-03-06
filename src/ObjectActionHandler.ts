import { AbstractActionHandler, Block } from "../demux-js";
import { db } from "./db";
import { state as initialState} from "./state";

export default class ObjectActionHandler extends AbstractActionHandler {
    public async handleWithState(handle: any) {
        await handle(initialState);
    }

    public async loadIndexState() {
        return initialState.indexState;
    }

    public async updateIndexState(state: any, block: Block, isReplay: boolean) {
        state.indexState.blockNumber = block.blockInfo.blockNumber;
        state.indexState.blockHash = block.blockInfo.blockHash;
    }
    /**
     * Will run when a rollback block number is passed to handleActions. Implement this method to
     * handle reversing actions full blocks at a time, until the last applied block is the block
     * number passed to this method.
     */
    public async rollbackTo(blockNumber: number) {
        try {
            await db.del(blockNumber);
        } catch (e) {
            // NotFoundError: Key not found in database [9000718]
        }
        console.log("ERASE BLOCK", blockNumber);
    }
}
