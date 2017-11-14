import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <h1 className={css(styles.air)}>
          API
        </h1>
      </div>
    );
  }
};

const styles = StyleSheet.create({
  air: {
    marginBottom: '3rem',
  },
});
