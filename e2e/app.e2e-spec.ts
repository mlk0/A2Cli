import { MyAnglePage } from './app.po';

describe('my-angle App', () => {
  let page: MyAnglePage;

  beforeEach(() => {
    page = new MyAnglePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
