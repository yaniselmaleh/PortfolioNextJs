import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="fr-Fr">
        <Head/>
        <title>Yanis Elmaleh - Portfolio</title>
        <meta charSet="utf-8"/>
        <title>Yanis Elmaleh Portfolio</title>
        <meta name="author" content="Yanis Elmaleh"/>
        <meta name="language" content="fr"/>
        <meta name="description" content="Portfolio de Yanis Elmaleh - Web designer / Freelance sur Paris - Spécialisée dans le éveloppement web, la conception graphique de projet print et web."/>
        <meta name="robots" content="index,follow"/>
        <meta name="keywords" content="yanis elmaleh, yanis elmaleh portfolio" lang="fr"/>
        <link rel="canonical" href="https://www.yaniselmaleh.fr/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Yanis Elmaleh Portfolio"/>
        <meta property="og:description" content="Portfolio de Yanis Elmaleh - Web designer / Freelance sur Paris - SpÃ©cialisÃ©e dans le dÃ©veloppement web, la conception graphique de projet print et web."/>
        <meta property="og:url" content="https://yaniselmaleh.fr"/>
        <meta property="og:site_name" content="Yanis Elmaleh Portfolio"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, minimal-ui"/>
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