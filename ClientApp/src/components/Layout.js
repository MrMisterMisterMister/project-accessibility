import React, { Component } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <>        
        <Header />
          <main id="main-content">
            {this.props.children}
          </main>
        <Footer />
      </>
    );
  }
}
