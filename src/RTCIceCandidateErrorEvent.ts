import { Event } from 'event-target-shim/index';

interface IRTCIceCandidateErrorEventInitDict extends Event.EventInit {
    address: string;
    port: number;
    url: string;
    errorCode: number;
    errorText: string;
}

/**
 * @eventClass
 * This event is fired whenever the ICE candidate error occurs.
 * @param {TEventType} type - The type of event.
 * @param {IRTCIceCandidateErrorEventInitDict} eventInitDict - The event init properties.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection#events MDN} for details.
 */
export default class RTCIceCandidateErrorEvent<TEventType extends 'icecandidateerror'> extends Event<TEventType> {
    /** @eventProperty */
    address: string;
    port: number;
    url: string;
    errorCode: number;
    errorText: string;
    
    constructor(type: TEventType, eventInitDict: IRTCIceCandidateErrorEventInitDict) {
        super(type, eventInitDict);

        this.address = eventInitDict.address;
        this.port = eventInitDict.port;
        this.url = eventInitDict.url;
        this.errorCode = eventInitDict.errorCode;
        this.errorText = eventInitDict.errorText;
    }
}
