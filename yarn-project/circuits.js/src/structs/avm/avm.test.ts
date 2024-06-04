import { randomInt } from '@aztec/foundation/crypto';

import { makeAvmCircuitInputs, makeAvmExecutionHints, makeAvmKeyValueHint } from '../../tests/factories.js';
import { AvmCircuitInputs, AvmExecutionHints, AvmKeyValueHint } from './avm.js';

describe('Avm circuit inputs', () => {
  describe('AvmKeyValueHint', () => {
    let avmKeyValueHint: AvmKeyValueHint;

    beforeAll(() => {
      avmKeyValueHint = makeAvmKeyValueHint(randomInt(1000));
    });

    it(`serializes to buffer and deserializes it back`, () => {
      const buffer = avmKeyValueHint.toBuffer();
      const res = AvmKeyValueHint.fromBuffer(buffer);
      expect(res).toEqual(avmKeyValueHint);
      expect(res.isEmpty()).toBe(false);
    });
  });
  describe('AvmExecutionHints', () => {
    let avmExecutionHints: AvmExecutionHints;

    beforeAll(() => {
      avmExecutionHints = makeAvmExecutionHints(randomInt(1000));
    });

    it(`serializes to buffer and deserializes it back`, () => {
      const buffer = avmExecutionHints.toBuffer();
      const res = AvmExecutionHints.fromBuffer(buffer);
      expect(res).toEqual(avmExecutionHints);
      expect(res.isEmpty()).toBe(false);
    });
  });
  describe('AvmCircuitInputs', () => {
    let avmCircuitInputs: AvmCircuitInputs;

    beforeAll(() => {
      avmCircuitInputs = makeAvmCircuitInputs(randomInt(2000));
    });

    it(`serializes to buffer and deserializes it back`, () => {
      const buffer = avmCircuitInputs.toBuffer();
      const res = AvmCircuitInputs.fromBuffer(buffer);
      expect(res).toEqual(avmCircuitInputs);
      expect(res.isEmpty()).toBe(false);
    });
  });
});
