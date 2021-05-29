import React from 'react';
import { BoxShadowStyle } from '../../util/BoxShadowStyle';

import { Container, Title, Button, Icon } from './styles';

interface OperationProps {
  title: string;
  icon: string;
}

const Operation = ( { title, icon } : OperationProps) => {
  return(
    <Container style={BoxShadowStyle.shadow}>
      <Button>
        <Icon name={icon} size={24} />
        <Title> { title } </Title>
      </Button>
      
    </Container>
  )
}

export default Operation;