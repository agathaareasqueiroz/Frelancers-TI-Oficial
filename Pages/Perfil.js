import React from 'react';
import { TouchableOpacity,View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';



const Perfil = () => {
  const navigation = useNavigation();

  const profiles = [
    { nome: 'Programador Jorge', experiencia: 'Experiência: 5 anos, me siga no Instagram', instagram: '@programador_Jorge' },
    { nome: 'Analista de Infraestutura Miguel', experiencia: 'Experiência: 3 anos, me siga no Instagram', instagram: '@migueldainfra' },
    { nome: 'Devops Fabio', experiencia: 'Experiência: 2 anos, me siga no Instagram', instagram: '@Fabio_devops' },
    { nome: 'Analista de BI Igor', experiencia: 'Experiência: 4 anos, me siga no Instagram', instagram: '@igorBI_br' },
    { nome: 'FrontEnd Pedro', experiencia: 'Experiência: 6 anos, me siga no Instagram', instagram: '@pedrinho_frontend' },
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
    const phoneNumber = '+5521984757151';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
    Linking.canOpenURL(whatsappUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(whatsappUrl);
        } else {
          console.log('Não é possível abrir o WhatsApp');
        }
      })
      .catch((error) => console.log('Erro ao abrir o WhatsApp:', error));
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
          <Picker.Item label="Programadores" value="Programador" />
          <Picker.Item label="Analistas de Infraestutura" value="Analista de Infraestutura" />
          <Picker.Item label="Devops" value="Devops" />
          <Picker.Item label="Analistas de BI" value="Analista de BI" />
          <Picker.Item label="FrontEnds" value="FrontEnd" />
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
          style={[styles.button, { backgroundColor: '#425B89' }]}
          onPress={() => handlePerfilSelecionado(profile)}
        >
          <Text style={styles.buttonText}>{profile.nome}</Text>
        </TouchableOpacity>
      ))}
    </View>
      )}
      <View style={styles.contactContainer}>
        <Text style={styles.contactText}>Siga-nos no Instagram:</Text>
        <Text style={styles.emailText}>@TI.freela</Text>
        <Text style={styles.contactText}>Para entrar em contato, envie um e-mail para:</Text>
        <Text style={styles.emailText}>contato.suporte@TIBRfreelancers.com.br</Text>
        <Text style={styles.contactText}>Clientes cadastrados ganham 10% de desconto no serviço contratado! FAÇA SEU CADASTRO!</Text>
        <TouchableOpacity
  style={[styles.button, { backgroundColor: '#425B89' }]}
  onPress={handleContactWhatsApp}
>
  <Text style={styles.buttonText}>Contato via WhatsApp</Text>
</TouchableOpacity>
</View>

    </View>
    
  );
};
const styles = StyleSheet.create({

  picker: {
    backgroundColor: '#425B89',
    borderRadius: 8,
    marginTop: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#425B89',
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
    backgroundColor: '#C0C0C0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#425B89',
  },
});


export default Perfil;
