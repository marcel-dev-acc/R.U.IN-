import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, FlatList, View} from 'react-native';
import {
  Provider,
  Portal,
  Text,
  Modal,
  TextInput,
  Button as PaperButton,
  Menu,
} from 'react-native-paper';

import colours from '../../constants/colours';
import fontSizes from '../../constants/fontSizes';
import {BondItem, Button} from '../../components';
import {fetchBonds, storeBonds} from '../../services/store.bonds.service';
import {removeAuth} from '../../services/store.auth.service';

type MessagesScreenProps = {
  navigation: any;
};

/**
 * Messages screen
 *
 * The messages screen holds the relationships between
 * the given user and his/her bonds
 */
const MessagesScreen = ({
  navigation
}: MessagesScreenProps) => {

  const handleCreateNewBond = async () => {
    setLoadingBond(true);
    const response = await storeBonds([...bonds, newBond]);
    if (response.ok) {
      setBonds([...bonds, newBond]);
    } else {
      // Display error toast
      console.error('Failed to store bond data');
    }
    setLoadingBond(false);
    setModalVisible(false);
  };

  const handleFetchBonds = async () => {
    const response = await fetchBonds();
    if (response.ok) setBonds(response.data);
  };

  const handleLogout = async () => {
    const response = await removeAuth();
    if (response.ok) navigation.navigate('home');
  };

  const toggleModal = () => setModalVisible(!modalVisible);

  const bondItem = ({item}: any) => <BondItem bond={item} />;

  const defaultBonds: string[] = [];
  const [bonds, setBonds] = useState(defaultBonds);
  const [newBond, setNewBond] = useState('');
  const [loadingBond, setLoadingBond] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    handleFetchBonds();
  }, []);

  return (
    <Provider>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={toggleModal}
          style={styles.bondAddBondModal}
        >
          <TextInput
            label={
              <Text
                style={styles.inputLabel}
              >
                Bond
              </Text>
            }
            mode='outlined'
            placeholder='John'
            selectionColor={colours.LIGHT_BLUE}
            placeholderTextColor={colours.WHITE}
            outlineColor={colours.WHITE}
            activeOutlineColor={colours.WHITE}
            textColor={colours.WHITE}
            style={styles.input}
            value={newBond}
            onChangeText={(text) => setNewBond(text)}
          />
          <Text
            style={styles.bondModalTextSmall}
          >
            A bond is used to start a
            conversation between two poeple
          </Text>
          <Button
            loading={loadingBond}
            text='Form bond'
            buttonColour={colours.WHITE}
            textColour={colours.BLACK}
            textSize={fontSizes.LARGE}
            onPress={handleCreateNewBond}
          />
        </Modal>
      </Portal>
      <SafeAreaView style={styles.messagesContainer}>
        {/* Header section */}
        <View style={styles.messagesHeaderContainer}>
          <Text style={styles.messageHeaderText}>
            Relationships
          </Text>
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <PaperButton
                icon='dots-vertical'
                textColor={colours.WHITE}
                onPress={() => setMenuVisible(true)}
                contentStyle={styles.messageHeaderMenuBtn}
              > </PaperButton>
            }>
              <Menu.Item onPress={() => {
                toggleModal();
                setMenuVisible(false);
              }} title='Add bond' />
              <Menu.Item onPress={() => {
                setMenuVisible(false);
                handleLogout();
              }} title='Logout' />
          </Menu>
        </View>
        {/* Bond list */}
        {bonds.length === 0 && (
          <View style={styles.bondsTextContainer}>
            <Text
              style={[styles.bondsText, {
                marginRight: 5,
              }]}
            >
              Form a
            </Text>
            <Text
              onPress={toggleModal}
              style={[styles.bondsText, {
                borderBottomWidth: 1,
                borderBottomColor: colours.WHITE,
              }]}
            >
              relationship
            </Text>
          </View>
        )}
        {bonds.length > 0 && (
          <FlatList
            style={styles.bondsList}
            data={bonds}
            renderItem={bondItem}
          />
        )}
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  messagesContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.BLACK_BLUE,
  },
  messagesHeaderContainer: {
    backgroundColor: colours.BLACK,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  messageHeaderText: {
    color: colours.WHITE,
    fontSize: fontSizes.LARGE,
  },
  messageHeaderMenuBtn: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bondsList: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  bondsTextContainer: {
    flexDirection: 'row',
  },
  bondsText: {
    color: colours.WHITE,
    fontSize: fontSizes.LARGE,
  },
  bondAddBondModal: {
    borderRadius: 5,
    backgroundColor: colours.BLACK,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 50,
    paddingRight: 50,
  },
  bondModalTextSmall: {
    fontSize: fontSizes.MEDIUM,
    fontStyle: 'italic',
    marginBottom: 20,
    color: colours.WHITE,
  },
  input: {
    backgroundColor: colours.BLACK,
    minWidth: 200,
    marginBottom: 5,
  },
  inputLabel: {
    color: colours.WHITE,
    backgroundColor: colours.BLACK,
  },
});

export default MessagesScreen;