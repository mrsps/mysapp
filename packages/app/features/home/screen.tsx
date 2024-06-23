import { Text, useSx, View, H1, P, TextInput, Image } from 'dripsy'
import { TouchableOpacity } from 'react-native'

export function HomeScreen() {
  const sx = useSx()

  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}>
      <H1 sx={{ fontWeight: '800' }}>Welcome to the App</H1>
      <P sx={{ textAlign: 'center' }}>
        This app showcases various components like text, button, text field, and image.
      </P>
      <P sx={{ textAlign: 'center' }}>
        Made by sahibpreet.
      </P>

      <View sx={{ height: 32 }} />

      <TouchableOpacity onPress={() => alert('Button pressed!')} style={sx({ padding: 12, backgroundColor: 'blue', borderRadius: 8 })}>
        <Text sx={{ color: 'white', fontWeight: 'bold' }}>Press Me</Text>
      </TouchableOpacity>

      <View sx={{ height: 16 }} />

      <TextInput placeholder="Type here..." sx={{ width: 300, padding: 12, borderWidth: 1, borderColor: 'gray', borderRadius: 8 }} />

      <View sx={{ height: 16 }} />

      <Image source={{ uri: 'https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg?size=626&ext=jpg&ga=GA1.1.890879831.1719153648&semt=sph' }} 
      sx={{ width: 250, height: 150, }} />
    </View>
  )
}
