import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import colors from '../constants.js';
import { Reader, useReader } from '@epubjs-react-native/core';
import { useFileSystem } from '@epubjs-react-native/file-system';

export default function SearchScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Reader
        src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
        fileSystem={useFileSystem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
