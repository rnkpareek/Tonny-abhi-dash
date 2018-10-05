import { D2Module } from './d2.module';

describe('D2Module', () => {
  let d2Module: D2Module;

  beforeEach(() => {
    d2Module = new D2Module();
  });

  it('should create an instance', () => {
    expect(d2Module).toBeTruthy();
  });
});
