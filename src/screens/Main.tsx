import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import useInput from '../hooks/useInput';
import useUpdateContents from '../hooks/useUpdateContents';
function Main() {
  const userId = useInput();
  const {contents, onUpdateContents} = useUpdateContents();
  const onPress = () => {
    const data = {
      id: contents[contents.length - 1].id + 1,
      contents: userId.value,
    };
    onUpdateContents(data);
    userId.onChangeText('');
  };

  return (
    <SafeAreaView>
      <View style={styles.inputContainer}>
        <CustomInput
          value={userId.value}
          onChangeText={userId.onChangeText}
          onSubmitEditing={onPress}
        />
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
          <Text>버튼</Text>
        </TouchableOpacity>
      </View>
      <View>
        {contents.map(item => {
          return (
            <View key={item.id}>
              <Text>{item.contents}</Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 5,
    backgroundColor: '#e3e3e3',
  },
});
export default Main;
