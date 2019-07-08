import { DateCountPipe } from './date-counting.pipe';

describe('DataRangePipe', () => {
  it('create an instance', () => {
    const pipe = new DateCountPipe();
    expect(pipe).toBeTruthy();
  });
});

