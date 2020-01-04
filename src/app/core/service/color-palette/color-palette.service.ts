import { Injectable } from '@angular/core';
let Vibrant = require('node-vibrant');

@Injectable()
export class ColorPaletteService {
  constructor() {}

  public async getByImage(image: string): Promise<any> {
    let palette = await new Promise((resolve, reject) => {
      Vibrant.from(image)
        .getPalette()
        .then((palette: any) => {
          resolve(palette);
        });
    });
    return palette;
  }
}
