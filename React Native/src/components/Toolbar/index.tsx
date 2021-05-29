import React from 'react';
import { MaterialIcons as Icons } from '@expo/vector-icons'; 
import { Image, TouchableOpacity } from 'react-native';

import { Container } from './styles'

import logoSantander from '../../assets/logo/logo_santander.png'

const Toolbar = () => {
  return (
    <Container>
      <TouchableOpacity onPress={() => {}}>
        <Icons name="menu" size={24} color="#fff" />
      </TouchableOpacity>
      
      <Image source={logoSantander} />

      <TouchableOpacity onPress={() => {}}>
        <Icons name="notifications-active" size={24} color="#fff" />
      </TouchableOpacity>
      
    </Container>
  )
};


export default Toolbar;
