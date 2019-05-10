import { MasterownerModule } from './masterowner.module';

describe('MasterownerModule', () => {
  let masterownerModule: MasterownerModule;

  beforeEach(() => {
    masterownerModule = new MasterownerModule();
  });

  it('should create an instance', () => {
    expect(masterownerModule).toBeTruthy();
  });
});
