import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const MemberRegister = () => {
  const [firstname, setFirstName] = useState('');
  const [middlename, setMiddleName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  // Clear all inputs by setting their states to empty strings
  const clearInputs = () => {
    [setFirstName, setMiddleName, setLastname, setPhone, setValue].forEach(setter => setter(''));
  };

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
  ];

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { marginTop: 30 }]}
        placeholder="First Name"
        onChangeText={setFirstName}
        value={firstname}
      />
      <TextInput
        style={styles.input}
        placeholder="Middle Name"
        onChangeText={setMiddleName}
        value={middlename}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={setLastname}
        value={lastname}
      />
      
      <View style={styles.phoneContainer}>
        <Text style={styles.phonePrefix}>+63</Text>
        <TextInput
          style={[styles.input, styles.phoneInput]}
          placeholder="9*********"
          onChangeText={setPhone}
          value={phone}
          keyboardType="phone-pad"
        />
      </View>

      <Divider style={styles.divider} />

      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />

      {/* Add the clear button */}
      <TouchableOpacity style={styles.button} onPress={clearInputs}>
        <Text style={styles.buttonText}>Clear All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding : 10,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
    fontSize: 15,
    marginBottom: 10,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  phonePrefix: {
    fontSize: 25,
    marginTop: -5,
  },
  phoneInput: {
    width: "85%",
    marginLeft: 10,

  },
  divider: {
    backgroundColor: '#000',
    height: 1,
    width: '100%',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width:"100%"
  },
  placeholderStyle: {
    fontSize: 16,
  },
  stepContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default MemberRegister;
