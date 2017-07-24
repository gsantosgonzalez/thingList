import { ThingListPage } from './app.po';

describe('thing-list App', () => {
  let page: ThingListPage;

  beforeEach(() => {
    page = new ThingListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
