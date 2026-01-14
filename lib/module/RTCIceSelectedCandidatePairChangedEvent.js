function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import { Event } from 'event-target-shim/index';
/**
 * @eventClass
 * This event is fired whenever the ice selected candidate pair is changed.
 * @type {RTCIceSelectedCandidatePairChangedEvent} for ice selected candidate pair related.
 * @param {IRTCIceSelectedCandidatePairChangedEventInitDict} eventInitDict - The event init properties.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection#events MDN} for details.
 */
export default class RTCIceSelectedCandidatePairChangedEvent extends Event {
  /** @eventProperty */

  constructor(eventInitDict) {
    var _eventInitDict$local, _eventInitDict$remote, _eventInitDict$reason, _eventInitDict$lastDa;
    super("iceselectedcandidatepairchanged", eventInitDict);
    _defineProperty(this, "local", void 0);
    _defineProperty(this, "remote", void 0);
    _defineProperty(this, "reason", void 0);
    _defineProperty(this, "lastDataReceivedMs", void 0);
    this.local = (_eventInitDict$local = eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.local) !== null && _eventInitDict$local !== void 0 ? _eventInitDict$local : null;
    this.remote = (_eventInitDict$remote = eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.remote) !== null && _eventInitDict$remote !== void 0 ? _eventInitDict$remote : null;
    this.reason = (_eventInitDict$reason = eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.reason) !== null && _eventInitDict$reason !== void 0 ? _eventInitDict$reason : null;
    this.lastDataReceivedMs = (_eventInitDict$lastDa = eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.lastDataReceivedMs) !== null && _eventInitDict$lastDa !== void 0 ? _eventInitDict$lastDa : null;
  }
}
//# sourceMappingURL=RTCIceSelectedCandidatePairChangedEvent.js.map