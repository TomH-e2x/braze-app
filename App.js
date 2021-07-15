/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  NativeBaseProvider,
  Text,
  Box,
  Button,
  Stack,
  Icon,
  Modal,
} from 'native-base';
import {theme} from './theme';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <NativeBaseProvider theme={theme} data-test="main-view">
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        space={1}
        alignItems={{
          base: 'center',
          md: 'flex-start',
        }}
        justifyContent="center"
        bg="primary.200"
        flex={1}>
        <Text>Hello world</Text>
        {['xs', 'sm', 'md', 'lg'].map(size => (
          <Box key={size} data-test="box-component">
            <Button
              colorScheme="secondary"
              _text={{color: 'white'}}
              onPress={() => console.log('hello world')}
              key={size}
              size={size}>
              PRIMARY
            </Button>
          </Box>
        ))}
        <Box>
          <Button isLoading isLoadingText="Submitting">
            BUTTON
          </Button>
        </Box>
        <Box>
          <Button
            variant="outline"
            _text={{color: 'black'}}
            // startIcon={
            //   <Icon as={MaterialCommunityIcons} name="email" size={5} />
            // }
            onPress={() => setShowModal(true)}
            data-test="open-modal">
            Open Modal
          </Button>
        </Box>
      </Stack>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna
            exercitation reprehenderit magna aute tempor cupidatat consequat
            elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt
            cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna
            exercitation reprehenderit magna aute tempor cupidatat consequat
            elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt
            cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim
            exercitation reprehenderit magna aute tempor cupidatat consequat
            elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt
            cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button>Learn More</Button>
              <Button onPress={() => setShowModal(false)}>ACCEPT</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
