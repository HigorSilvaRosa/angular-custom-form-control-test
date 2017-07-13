import { AngularCustomFormControlTestPage } from './app.po';

describe('angular-custom-form-control-test App', () => {
  let page: AngularCustomFormControlTestPage;

  beforeEach(() => {
    page = new AngularCustomFormControlTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
