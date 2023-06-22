import { TouchableOpacity } from 'react-native';
import { FlatList, Image, StyleSheet, Text, TextInput } from 'react-native';
import { View } from 'react-native';
import SvgArrowLeft from '../../assets/svg/SvgArrowLeft';
import { useState } from 'react';

const CommentsScreen = () => {
  const [comment, setComment] = useState('');
  return (
    <View style={styles.container}>
      <Image style={styles.postImg} />
      {/* <FlatList /> */}
      <View style={styles.inputCommentWrapper}>
        <TextInput
          style={styles.commentInput}
          placeholder="Коментувати..."
          placeholderTextColor=""
          autoComplete="off"
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity style={styles.commentBtn}>
          <SvgArrowLeft />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 16,
    paddingTop: 32,

    backgroundColor: '#fff',
  },
  postImg: {
    height: 240,
    maxWidth: 343,
    marginBottom: 32,

    backgroundColor: '#f6f6f6',

    borderRadius: 8,
  },
  inputCommentWrapper: {},
  commentBtn: {
    width: '100%',
    height: 50,
    padding: 16,

    backgroundColor: '#f6f6f6',

    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 50,
  },
});
