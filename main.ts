//% color=#FFD700 icon="\uf1eb" block="SPIKE Prime"
namespace spikePrime {

    export enum Command {
        //% block="RAIN"
        RAIN = 1,

        //% block="DRY"
        DRY = 0
    }

    /**
     * Send command to SPIKE Prime
     */
    //% block="SPIKE send %command"
    export function send(command: Command): void {
        // BLE transport will be added here
    }
}
