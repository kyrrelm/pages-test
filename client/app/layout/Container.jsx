import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Meny from './Meny.jsx';

export default class Container extends React.Component {
  render() {
    return (
        <div >
          <Meny/>
          <div className={css(styles.content)}>
            {this.props.children}
          </div>
        </div>
    );
  }
}


const styles = StyleSheet.create({
  content: {
    margin: '0 20rem 2rem',
    '@media (max-width: 1400px)': {
      marginLeft: '10rem',
      marginRight: '10rem',
    },
    '@media (max-width: 900px)': {
      marginLeft: '2rem',
      marginRight: '2rem',
    }
  },
});


