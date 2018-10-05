import { D1Module } from './d1.module';

describe('D1Module', () => {
  let d1Module: D1Module;

  beforeEach(() => {
    d1Module = new D1Module();
  });

  it('should create an instance', () => {
    expect(d1Module).toBeTruthy();
  });
});
