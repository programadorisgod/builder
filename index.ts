import { PDFBuilder } from "./builder";
import { PDFDocumentGenerator } from "./PDFDocumentGenerator";
import { Format, Theme } from "./types/enums";

const builder = new PDFBuilder()
  .setFormat(Format.LETTER)
  .setTheme(Theme.DARK)
  .setIncludeLogo(true)
  .setTitle("Factura de Compra")
  .setIncludePaymentDetails(true)
  .setIncludeUserInfo(true)
  .setIncludeTimestamp(false)
  .setFooterMessage("Gracias por su compra");

const options = builder.build();

const generator = new PDFDocumentGenerator(options);
generator.generate("fact.pdf");
