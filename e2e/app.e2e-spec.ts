import { GitsterAppPage } from './app.po';

describe('gitster-app App', function() {
  let page: GitsterAppPage;

  beforeEach(() => {
    page = new GitsterAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
