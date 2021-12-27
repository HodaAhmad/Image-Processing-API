import checkParam from '../../util/checkParam';

describe('Test input parameters', () => {
  const width = 100;
  const height = -200;
  const filename = 'dummy';

  it('Check width value negative or positive', async () => {
    const res = checkParam.checkWidth(width);
    expect(res).toBe(true);
  });

  it('Check height value negative or positive', async () => {
    const res = checkParam.checkWidth(height);
    expect(res).toBe(false);
  });

  it('Check file name entered', async () => {
    const res = checkParam.checkFileNameExists(filename);
    expect(res).toBe(true);
  });
});
