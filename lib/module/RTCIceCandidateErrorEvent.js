function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import { Event } from 'event-target-shim/index';
/**
 * @eventClass
 * This event is fired whenever the ICE candidate error occurs.
 * @param {TEventType} type - The type of event.
 * @param {IRTCIceCandidateErrorEventInitDict} eventInitDict - The event init properties.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection#events MDN} for details.
 */
export default class RTCIceCandidateErrorEvent extends Event {
  /** @eventProperty */

  constructor(type, eventInitDict) {
    super(type, eventInitDict);
    _defineProperty(this, "address", void 0);
    _defineProperty(this, "port", void 0);
    _defineProperty(this, "url", void 0);
    _defineProperty(this, "errorCode", void 0);
    _defineProperty(this, "errorText", void 0);
    this.address = eventInitDict.address;
    this.port = eventInitDict.port;
    this.url = eventInitDict.url;
    this.errorCode = eventInitDict.errorCode;
    this.errorText = eventInitDict.errorText;
  }
}
//# sourceMappingURL=RTCIceCandidateErrorEvent.js.map