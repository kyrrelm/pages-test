import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Meny = () => {
  return (
      <div className={css(styles.meny)}>
        Meny
      </div>
  );
};

const styles = StyleSheet.create({
  meny: {
    paddingLeft: '20rem',
    paddingRight: '2rem',
    paddingTop: '2rem',
  },
});

export default Meny;
