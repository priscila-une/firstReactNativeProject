import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image ,Text, View, SafeAreaView, Pressable, Linking } from 'react-native';

const colorGithub = '#010409';
const grayGithub = 'gray';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/67204758?v=4';
const urlGithub = 'https://github.com/priscila-une';
const gif ='https://media4.giphy.com/media/is14HLE2EUHPryPkmU/giphy.gif?cid=790b76118af0b9f09fc3f8c4128d0eb2b9e8c76da5e4132d&rid=giphy.gif&ct=g';

export default function App() {
  
  const handlePressGoToGithub = async () =>{
    const response = await Linking.canOpenURL(urlGithub);
    if(response){
      await Linking.openURL(urlGithub);
    }
  };
  
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.content}>
          <Image accessibilityLabel='uma octocat de cabelo laranja de kimono segurando um notebook'
           style={styles.avatar}
           source={{uri: imageProfileGithub}}
          />  
          <Text accessibilityLabel='Nome Evelin Une' style={[styles.defaultText, styles.text]}>Evelin Une</Text>
          <Text accessibilityLabel='Nickname @priscila-une' style={styles.defaultText}>@priscila-une</Text>
          <Text accessibilityLabel='Descrição Desenvolvedora Front-end | Javascript | DIO Campus Expert' style={[styles.defaultText, styles.descriptionText ]}>Desenvolvedora Front-end | Javascript | DIO Campus Expert</Text>
          <Pressable onPress={handlePressGoToGithub}>
           
            <View style={styles.button}>
              <Text 
                accessibilityLabel='Open github'
                accessibilityHint='abrindo o github em outra janela'
              >Open in Github</Text>
            </View>
          </Pressable>
          <Image style={styles.gif}  source={{uri: gif}}/>
          <Text style={styles.defaultText}>Keep Coding...</Text>
        </View>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorGithub,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  content:{
    alignItems: 'center',
  },  
  
  avatar: {
    width: 100,
    height: 100,
    borderColor: '#bc8f8f',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 50,
  },

  gif:{
    width: 150,
    height: 150,
    marginTop: 20,
  },

  defaultText: {
    color: '#fff',
    fontSize: 20,
  },
  
  text:{
    fontSize: 25,
    fontWeight: 'bold',
    
  },
  
  descriptionText: {
    fontSize: 10
  },
  
  button: {
    backgroundColor: '#bc8f8f',
    borderRadius: 10,
    padding: 20,
    marginTop: 10, 
  }
});
