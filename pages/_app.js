import React, { PureComponent } from 'react';
import Head from 'next/head';
import '../styles/bootstrap.css';
import '../styles/style.css';

class _app extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    var { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Zapple | Github</title>
          <link rel="apple-touch-icon" sizes="180x180" href="https://www.zapple.org/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://www.zapple.org/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://www.zapple.org/favicon-16x16.png" />
        </Head>

        <Component {...pageProps} />
      </>
    )
  }
}

export default _app