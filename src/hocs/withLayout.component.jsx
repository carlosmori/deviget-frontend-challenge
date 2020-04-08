import React, { Component, Fragment } from 'react';
import Header from '../components/Header/Header.component';
import Footer from '../components/Footer/Footer.component';

export default function withLayout(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <Fragment>
          <Header />
          <WrappedComponent {...this.props} />
          <Footer />
        </Fragment>
      );
    }
  };
}
