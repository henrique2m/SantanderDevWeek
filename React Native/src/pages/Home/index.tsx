import React from "react";
import { MaterialIcons as Icons } from '@expo/vector-icons'; 

import Toolbar from "../../components/Toolbar";
import Operation from "../../components/Operation";
import { BoxShadowStyle } from "../../util/BoxShadowStyle";

import { 
  Container,  
  DataUserAccount, 
  Username,
  UserAccountFooter,
  Agency, 
  Account,
  ContainerCard,
  CardHeader,
  CardHeaderTitle,
  CardAccountBalance,
  CardHeaderStartToLeft,
  CardContent,
  CardAccountLimit,
  CardLineDivision,
  CardFooter,
  CardFooterText,
  CardBoxLineDivision,
  BoxOperations,
  ContainerCardFinish,
  CardContentFinish,
  CardFinishHeaderStartToLeft,
  CardFinishHeaderStartToLeftText,
  CardFinishHeaderStartToLeftNumber
} from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
  return(
    <Container>
      
      <Toolbar />

      <DataUserAccount>
        <Username>Olá, Henrique </Username>

        <UserAccountFooter>
          <Agency>Ag 2021</Agency>
          <Account> Cc 01097954-4 </Account>
        </UserAccountFooter>
      </DataUserAccount>

      <ContainerCard>
        <CardContent style={BoxShadowStyle.shadow}>
          <CardHeader>
            <CardHeaderStartToLeft>
              <Icons 
                name="settings-backup-restore" 
                size={24} 
                color="#696969" 
              />
              <CardHeaderTitle> Saldo disponível </CardHeaderTitle>
            </CardHeaderStartToLeft>

            <TouchableOpacity>
              <Icons 
                name="keyboard-arrow-up" 
                size={32} 
                color="#696969" 
              />
            </TouchableOpacity>
            
          </CardHeader>

          <CardAccountBalance>R$ 3000,00 </CardAccountBalance>
          <CardAccountLimit> Saldo + Limite  R$ 5000,00 </CardAccountLimit>

          <CardBoxLineDivision>
             <CardLineDivision />
          </CardBoxLineDivision>

          <CardFooter>
            <CardFooterText>
              Ver extrato
            </CardFooterText>
          </CardFooter>
        </CardContent>
      </ContainerCard>


      <BoxOperations>
       <Operation icon="payment" title="Pagar"/>
       <Operation icon="repeat" title="Transferir"/>
       <Operation icon="smartphone" title="Recarga"/>
      </BoxOperations>


      <ContainerCardFinish>
        <CardContentFinish style={BoxShadowStyle.shadow}>
          <CardFinishHeaderStartToLeft>
            <CardFinishHeaderStartToLeftText>
              Cartão final 
            </CardFinishHeaderStartToLeftText>

            <CardFinishHeaderStartToLeftNumber>
              0000
            </CardFinishHeaderStartToLeftNumber>
          </CardFinishHeaderStartToLeft>

          <TouchableOpacity onPress={() => {}}>
            <Icons name="keyboard-arrow-down" size={32} color="#fff" />
          </TouchableOpacity>
        </CardContentFinish>
      </ContainerCardFinish>

    </Container>
  );
}

export default Home;