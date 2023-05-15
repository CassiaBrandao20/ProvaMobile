import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonNavigate from '../components/button';
import { DataContext } from '../components/context/dataContext';
import { useContext } from 'react';



export default function ActivityScreen() {
  const navigation = useNavigation();

  const { count, setCount } = useContext(DataContext);

  const handleAddCount = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>Atividades</Text>
      <Text>Contador = {count}</Text>
      <Button title="Adicionar" onPress={handleAddCount} />
      <ButtonNavigate navigation={navigation} location="HomeScreen">
        Voltar
      </ButtonNavigate>
    </View>
  );
}

