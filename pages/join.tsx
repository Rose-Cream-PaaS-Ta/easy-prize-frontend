import * as React from 'react';

import Form from '../src/components/Form';
import Layout from '../src/components/Layout';

interface IJoinProps {};

interface IJoinState {};

export default class Join extends React.Component<IJoinProps, IJoinState> {
  public render() {
    return (
      <Layout>
        <Form />
      </Layout>
    );
  }
}
