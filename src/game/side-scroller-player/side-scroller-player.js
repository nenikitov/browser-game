import { BasePlayer } from '../../engine/scene/scene-object/derived/player-base.js'
import { SideScrollerInputComponent } from './side-scroller-input-component.js'

export class SideScrollerPlayer extends BasePlayer {
    constructor(initalPos) {
        super(initalPos, SideScrollerInputComponent)
    }
}