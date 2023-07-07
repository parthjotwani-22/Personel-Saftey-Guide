import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {
  addedSuccessfully,
  removedSuccessfully,
} from '../../services/redux/ConactDescription/action';
import assets from '../../utils/assets';

const Soscreen = () => {
  const dispatch = useDispatch();
  const conData = useSelector(res => res.contactReducer);
  const [page, setPage] = useState(true);
  const [data, setData] = useState([]);
  const [found, setfound] = useState(false);
  const [data1, setData1] = useState({
    name: null,
    phone: null,
  });
  console.log(conData);
  const message = () => {
    fetch('http://192.168.43.51:3000/message', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(conData.contactData),
    }).then(res => console.log('Data is sent'));
    //.then(res => res.json())
    // .then(data => {
    //   console.log(data);
    //   //message();
    // })
    // .catch(e => console.log(e));
  };
  checkdata = () => {
    if (conData.isempty == true) {
      setfound(false);
    } else {
      setfound(true);
    }
  };
  useEffect(() => {
    checkdata();
  }, [conData]);
  return (
    <>
      {page ? (
        <View style={styles.mainView}>
          <TouchableOpacity
            style={styles.addbutton}
            onPress={() => setPage(false)}>
            <Text style={styles.btntext}>Add Contact</Text>
          </TouchableOpacity>
          {found ? (
            <View>
              <FlatList
                data={conData.contactData}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        borderWidth: 2,
                        marginHorizontal: '5%',
                        borderRadius: 10,
                        padding: '4%',
                        marginBottom: '5%',
                        marginTop: '5%',
                        borderColor: 'purple',
                        flexDirection: 'row',
                      }}>
                      <View>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 20,
                            fontWeight: 'bold',
                          }}>
                          {item.name}
                        </Text>
                        <Text style={{color: 'gray', fontWeight: '500'}}>
                          {item.phone}
                        </Text>
                      </View>
                      <View
                        style={{
                          alignSelf: 'center',
                          marginLeft: '55%',
                        }}>
                        <TouchableOpacity>
                          <Image
                            source={assets.remove}
                            style={{height: 25, width: 25}}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          ) : (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: 'black', textAlign: 'center'}}>
                No Contact Added
              </Text>
            </View>
          )}
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 35,
              left: 40,
              backgroundColor: 'purple',
              padding: 15,
              borderRadius: 15,
            }}
            onPress={message}>
            <Text style={{color: 'white', textAlign: 'center'}}>Send</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
          <TextInput
            placeholder="Name"
            placeholderTextColor={'black'}
            style={{
              color: 'black',
              borderWidth: 1,
              borderRadius: 10,
              marginHorizontal: '8%',
              paddingLeft: 15,
            }}
            onChangeText={text => setData1({...data1, name: text})}
          />
          <TextInput
            placeholder="Phone"
            placeholderTextColor={'black'}
            style={{
              color: 'black',
              borderWidth: 1,
              borderRadius: 10,
              marginHorizontal: '8%',
              marginTop: '8%',
              paddingLeft: 15,
            }}
            onChangeText={text => setData1({...data1, phone: text})}
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'purple',
              marginHorizontal: '15%',
              marginTop: '10%',
              padding: 10,
              borderRadius: 10,
            }}
            onPress={() => {
              setPage(true);
              setData([...data, data1]);
              dispatch(addedSuccessfully(data1));
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              ADD
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Soscreen;
