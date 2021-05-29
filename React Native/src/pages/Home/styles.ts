import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const DataUserAccount = styled.View`
  width: 100%;
  height: 116px;
  padding: 16px;
  background-color: #ce0000;
`;

export const Username = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const UserAccountFooter = styled.View`
  flex-direction: row;
  margin-top: 6px;
`;

export const Agency = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const Account = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-left: 12px;
`;

export const ContainerCard = styled.View`
  height: 194px;
  background-color: #fff;
  padding-left: 16px;
  padding-right: 16px;
`;

export const CardContent = styled.View`
  flex: 1;
  background-color: #fff;
  border-radius: 5px;
  margin-top: -30px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const CardHeaderStartToLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const CardHeaderTitle = styled.Text`
  margin-left: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #696969;
`;

export const CardAccountBalance = styled.Text`
  margin-top: 16px;
  margin-left: 16px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

export const CardAccountLimit = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-top: 8px;
  margin-left: 16px;
  color: #696969;
`;

export const CardBoxLineDivision = styled.View`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
`;
export const CardLineDivision = styled.View`
  width: 100%;
  border: 1px;
  border-color: #ddd;
  margin-top: 32px;
`;

export const CardFooter = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

export const CardFooterText = styled.Text`
  color: #ce0000;
  font-weight: bold;
  font-size: 14px;
`;

export const BoxOperations = styled.View`
  width: 100%;
  height: 148px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export const ContainerCardFinish = styled.View`
  width: 100%;
  height: 96px;
  padding: 16px;
`;

export const CardContentFinish = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #ce0000;
  border-radius: 5px;
`;

export const CardFinishHeaderStartToLeft = styled.View`
  flex-direction: row;
`;

export const CardFinishHeaderStartToLeftText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const CardFinishHeaderStartToLeftNumber = styled.Text`
  margin-left: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
