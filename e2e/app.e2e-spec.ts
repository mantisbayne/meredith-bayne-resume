import { MeredithBayneResumePage } from './app.po';

describe('meredith-bayne-resume App', () => {
  let page: MeredithBayneResumePage;

  beforeEach(() => {
    page = new MeredithBayneResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
