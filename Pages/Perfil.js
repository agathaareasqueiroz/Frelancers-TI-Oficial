import React from 'react';
import { TouchableOpacity,View, Text, Button, StyleSheet, Linking } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';



const Perfil = () => {
  const navigation = useNavigation();

  const profiles = [
    { nome: 'Pedreiro Jorge', experiencia: 'Experiência: 5 anos, me siga no Instagram', instagram: '@jorjinhopedreiro' },
    { nome: 'Gesseiro Miguel', experiencia: 'Experiência: 3 anos, me siga no Instagram', instagram: '@migueldogesso' },
    { nome: 'Ladrilheiro Fabio', experiencia: 'Experiência: 2 anos, me siga no Instagram', instagram: '@Fabio_duladrilho' },
    { nome: 'Pintor Igor', experiencia: 'Experiência: 4 anos, me siga no Instagram', instagram: '@hugopintor_br' },
    { nome: 'Armador Pedro', experiencia: 'Experiência: 6 anos, me siga no Instagram', instagram: '@pedrinho_armador' },
  ];

  const [filtro, setFiltro] = React.useState('Todos');
  const [perfilSelecionado, setPerfilSelecionado] = React.useState(null);

  const handleIrParaWelcome = () => {
    navigation.navigate('Welcome');
  };

  const handleFiltro = (filtroSelecionado) => {
    setFiltro(filtroSelecionado);
    setPerfilSelecionado(null);
  };

  const handlePerfilSelecionado = (perfil) => {
    setPerfilSelecionado(perfil);
  };

  const handleContactWhatsApp = () => {
    const phoneNumber = '+5521965391536';
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;
  
    Linking.openURL(whatsappUrl)
      .catch((error) => console.log('Error opening WhatsApp:', error));
  };
  

  const perfisFiltrados = filtro === 'Todos' ? profiles : profiles.filter(profile => profile.nome.includes(filtro));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nossos Profissionais</Text>
      <View style={styles.filterContainer}>
        <Picker
          selectedValue={filtro}
          style={styles.picker}
          onValueChange={(itemValue) => handleFiltro(itemValue)}
        >
          <Picker.Item label="Todos" value="Todos" />
          <Picker.Item label="Pedreiros" value="Pedreiro" />
          <Picker.Item label="Gesseiros" value="Gesseiro" />
          <Picker.Item label="Ladrilheiros" value="Ladrilheiro" />
          <Picker.Item label="Pintores" value="Pintor" />
          <Picker.Item label="Armadores" value="Armador" />
        </Picker>
      </View>
      {perfilSelecionado ? (
    <View style={styles.profileContainer}>
      <Text style={styles.profileText}>{perfilSelecionado.nome}</Text>
      <Text style={styles.profileExperience}>{perfilSelecionado.experiencia}</Text>
      <Text style={styles.profileInstagram}>{perfilSelecionado.instagram}</Text>
    </View>
  ) : (
    <View style={styles.profilesContainer}>
      {perfisFiltrados.map((profile, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, { backgroundColor: '#63cfbe' }]}
          onPress={() => handlePerfilSelecionado(profile)}
        >
          <Text style={styles.buttonText}>{profile.nome}</Text>
        </TouchableOpacity>
      ))}
    </View>
      )}
      <View style={styles.contactContainer}>
        <Text style={styles.contactText}>Siga-nos no Instagram:</Text>
        <Text style={styles.emailText}>@bico.freela</Text>
        <Text style={styles.contactText}>Para entrar em contato, envie um e-mail para:</Text>
        <Text style={styles.emailText}>contato.suporte@bicofreelancers.com.br</Text>
        <Text style={styles.contactText}>Clientes cadastrados ganham 5% de desconto no serviço contratado! FAÇA SEU CADASTRO!</Text>
        <TouchableOpacity
  style={[styles.button, { backgroundColor: '#63cfbe' }]}
  onPress={handleContactWhatsApp}
>
  <Text style={styles.buttonText}>Contato via WhatsApp</Text>
</TouchableOpacity>
</View>
<TouchableOpacity
  style={[styles.button, { backgroundColor: '#63cfbe' }]}
  onPress={handleIrParaWelcome}
>
  <Text style={styles.buttonText}>Início</Text>
</TouchableOpacity>
    </View>
    
  );
};
const styles = StyleSheet.create({

  picker: {
    backgroundColor: '#63cfbe',
    borderRadius: 8,
    marginTop: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#63cfbe',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#rgb(100,100,100)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#63cfbe',
  },
});


export default Perfil;
