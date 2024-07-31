import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { ReaderProvider, Reader, useReader } from '@epubjs-react-native/core';
import { useFileSystem } from '@epubjs-react-native/expo-file-system';
import colors from '../constants.js';

export default function SearchScreen() {
  const { goToLocation } = useReader();
  return (
    <ReaderProvider>
      <SafeAreaView style={styles.container}>
        <Reader
          src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
          fileSystem={useFileSystem}
        />
      </SafeAreaView>
    </ReaderProvider>
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
