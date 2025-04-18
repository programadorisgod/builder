// PDFBuilder.ts
import { PDFBuildOptions } from "./types/PDFBuildOptions";
import { Theme, Format } from "./types/enums";

export class PDFBuilder {
  private _options: Partial<PDFBuildOptions> = { format: Format.A4 };

  setFormat(format: Format): this {
    this._options.format = format;
    return this;
  }

  setTheme(theme: Theme): this {
    this._options.theme = theme;
    return this;
  }

  setIncludeLogo(): this {
    this._options.includeLogo = true;
    return this;
  }

  setTitle(title: string): this {
    this._options.title = title;
    return this;
  }

  setIncludePaymentDetails(): this {
    this._options.includePaymentDetails = true;
    return this;
  }

  setIncludeUserInfo(): this {
    this._options.includeUserInfo = true;
    return this;
  }

  setIncludeTimestamp(): this {
    this._options.includeTimestamp = true;
    return this;
  }

  setFooterMessage(message: string): this {
    this._options.footerMessage = message;
    return this;
  }

  build(): PDFBuildOptions {
    return this._options as PDFBuildOptions;
  }
}
