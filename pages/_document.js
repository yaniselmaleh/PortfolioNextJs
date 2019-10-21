import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="fr-Fr">
        <Head/>
        <title>Yanis Elmaleh - Portfolio</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, minimal-ui"/>
        <body data-lang="fr" data-countrycode="fr">
          <main>
            <Main />
            <NextScript />
          </main>
        </body>
      </html>
    );
  }
}