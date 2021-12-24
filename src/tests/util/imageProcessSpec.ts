import app from '../../index';
import supertest from 'supertest';
import path from 'path';
import imageProcess from '../../util/imageProcess';
import fs from 'fs';

const request = supertest(app);
const thumbDir = path.join(__dirname, '../../../images/thumb/');

describe('Test image resizing', () => {
    const filename = 'fjord';
    const width = 140;
    const height = 200;
    const expected =   thumbDir + filename + '_thumb_' + width + '_' + height + '.jpg';

    it('Checks the output image file path', async () => {
        const outputFilePath = await imageProcess.transformImage(
          filename,
          height,
          width
        );
        expect(outputFilePath).toEqual(expected);
      });

});
