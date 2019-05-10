import { ManagerModuleModule } from './manager-module.module';

describe('ManagerModuleModule', () => {
  let managerModuleModule: ManagerModuleModule;

  beforeEach(() => {
    managerModuleModule = new ManagerModuleModule();
  });

  it('should create an instance', () => {
    expect(managerModuleModule).toBeTruthy();
  });
});
