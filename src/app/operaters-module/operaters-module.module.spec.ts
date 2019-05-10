import { OperatersModuleModule } from './operaters-module.module';

describe('OperatersModuleModule', () => {
  let operatersModuleModule: OperatersModuleModule;

  beforeEach(() => {
    operatersModuleModule = new OperatersModuleModule();
  });

  it('should create an instance', () => {
    expect(operatersModuleModule).toBeTruthy();
  });
});
