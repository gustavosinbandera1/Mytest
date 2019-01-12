export interface Config {
    fileUrl: string;
    bannerUrl: string;
    actorImageUrls: Array<string>;
}
export const APP_CONFIG: Config = {
    fileUrl: 'data/characters.json',
    bannerUrl: 'https://gothamlane.com/images/main_400w.jpg',
    actorImageUrls: [
                      'https://gothamlane.com/images/luke.jpg',
                      'https://gothamlane.com/images/darth.jpg',
                      'https://gothamlane.com/images/obi.jpg',
                      'https://gothamlane.com/images/R2.jpg'
                    ]
  };
