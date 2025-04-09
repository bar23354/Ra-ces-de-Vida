import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isEmpty = (value) => submitted && value.trim() === '';

  const handleLogin = () => {
    setSubmitted(true);

    if (identifier.trim() && password.trim()) {
      console.log('Iniciar sesión...');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <TextInput
        style={[styles.input, isEmpty(identifier) && styles.errorInput]}
        placeholder="DPI o correo electrónico"
        value={identifier}
        onChangeText={setIdentifier}
        keyboardType="default"
        placeholderTextColor="#999"
      />
      <TextInput
        style={[styles.input, isEmpty(password) && styles.errorInput]}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 25,
    fontWeight: 'bold',
    color: '#1B1F3B',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    borderColor: '#2E7D32',
    borderWidth: 1,
  },
  errorInput: {
    borderColor: 'red',
  },
  button: {
    backgroundColor: '#2E7D32',
    paddingVertical: 14,
    paddingHorizontal: 100,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  link: {
    color: '#2E7D32',
    marginTop: 15,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});
