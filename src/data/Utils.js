import React from 'react'
import Constants from './Constants'

export default class Utils {

  static toggle (array, value, isMono) {
      let index = array.indexOf(value), copy
      if (!isMono) {
          copy = array.slice()
          if (index !== -1) {
              copy.splice(index, 1);
          } else {
              copy.push(value);
          }

      } else if (index !== -1) {
          copy = [];
      } else {
          copy = [ value ];
      }

      return copy
  }
}