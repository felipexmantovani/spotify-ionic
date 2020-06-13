import { Injectable } from '@angular/core';
const Vibrant = require('node-vibrant');

@Injectable()
export class ColorPaletteService {
  constructor() {}

  public async getByImage(image: string): Promise<any> {
    const palette = await new Promise((resolve, reject) => {
      Vibrant.from(image)
        .getPalette()
        .then((paletteR: any) => {
          resolve(paletteR);
        });
    });
    return palette;
  }
}
