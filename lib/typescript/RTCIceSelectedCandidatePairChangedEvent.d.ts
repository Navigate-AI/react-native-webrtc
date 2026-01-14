import { Event } from 'event-target-shim/index';
import type RTCIceCandidate from './RTCIceCandidate';
interface IRTCIceSelectedCandidatePairChangedEventInitDict extends Event.EventInit {
    local: RTCIceCandidate | null;
    remote: RTCIceCandidate | null;
    reason: string;
    lastDataReceivedMs: number;
}
/**
 * @eventClass
 * This event is fired whenever the ice selected candidate pair is changed.
 * @type {RTCIceSelectedCandidatePairChangedEvent} for ice selected candidate pair related.
 * @param {IRTCIceSelectedCandidatePairChangedEventInitDict} eventInitDict - The event init properties.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection#events MDN} for details.
 */
export default class RTCIceSelectedCandidatePairChangedEvent extends Event<"iceselectedcandidatepairchanged"> {
    /** @eventProperty */
    local: RTCIceCandidate | null;
    remote: RTCIceCandidate | null;
    reason: string;
    lastDataReceivedMs: number;
    constructor(eventInitDict: IRTCIceSelectedCandidatePairChangedEventInitDict);
}
export {};
