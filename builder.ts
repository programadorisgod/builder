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

  setIncludeLogo(includeLogo: boolean): this {
    this._options.includeLogo = includeLogo;
    return this;
  }

  setTitle(title: string): this {
    this._options.title = title;
    return this;
  }

  setIncludePaymentDetails(includePaymentDetails: boolean): this {
    this._options.includePaymentDetails = includePaymentDetails;
    return this;
  }

  setIncludeUserInfo(includeUserInfo: boolean): this {
    this._options.includeUserInfo = includeUserInfo;
    return this;
  }

  setIncludeTimestamp(includeTimestamp: boolean): this {
    this._options.includeTimestamp = includeTimestamp;
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
