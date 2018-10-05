import { M3Module } from './m3.module';

describe('M3Module', () => {
  let m3Module: M3Module;

  beforeEach(() => {
    m3Module = new M3Module();
  });

  it('should create an instance', () => {
    expect(m3Module).toBeTruthy();
  });
});
