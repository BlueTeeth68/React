export class NavLinkComponent {

    constructor(
        private _active: boolean,
        private _content: string
    ) { }

    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }
    public get active(): boolean {
        return this._active;
    }
    public set active(value: boolean) {
        this._active = value;
    }
}