import React from 'react';
import Banner from './Banner'
import TopLayout from '../../../plugins/gatsby-plugin-top-layout/TopLayout'

export default {
    title: 'Banner',
  };
export const banner = () => <TopLayout><Banner /></TopLayout>;