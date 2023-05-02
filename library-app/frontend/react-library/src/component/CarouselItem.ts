export class CarouselItem {

    constructor(
        private _url: string,
        private _title: string
    ) {
    }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get url(): string {
        return this._url;
    }
    public set url(value: string) {
        this._url = value;
    }
    public getImage(): string {
        // return require(this.url);
        let path = require('path');
        let imagePath = path.join('', this.url);
        return require(imagePath);
    }
}