/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  // ImageBackground,
  // BackHandler,
  // Alert,
} from 'react-native';
import {Text, Container, Footer, FooterTab} from 'native-base';
import {FlatGrid} from 'react-native-super-grid';
import Icons from 'react-native-vector-icons/MaterialIcons';
// import Icons from 'react-native-vector-icons/Fontisto';
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import SplashScreen from 'react-native-splash-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DoctorIcon from 'react-native-vector-icons/Fontisto';
import {connect} from 'react-redux';
import {changetoDoner} from '../store/middleWires/registeraction';

class BloodHome extends Component {
  state = {
    wantToDonate: false,
  };
  async componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  // handlerCheck = item => {
  //   this.props.change(!this.props.user.wantToDonate, this.props.user.token);
  // };
  render() {
    const {navigate} = this.props.navigation;
    console.log(this.props.navigation);
    const items = [
      {
        name: 'About',
        code: '#1abc9c',
        id: 1,
        nav: 'About',
        icon: 'info',
        color: '#24a0ed',
      },
      {
        name: 'OPD',
        code: '#2ecc71',
        id: 2,
        nav: 'Opd',
        icon: 'doctor',
        color: '#2AA6B6',
      },
      {
        name: 'Departments',
        code: '#3498db',
        id: 3,
        nav: 'Department',
        icon: 'columns',
        color: '#2AA6B6',
      },
      {
        name: 'Blood Bank',
        code: '#9b59b6',
        id: 4,
        nav: 'BloodHome',
        icon: 'blood-drop',
        color: '#8a0303',
      },
      {
        name: 'Qr scanner',
        code: '#9b59b6',
        id: 4,
        nav: 'ScanScreen',
        icon: 'blood-drop',
        color: '#8a0303',
      },
      {
        name: 'Doctors',
        code: '#1abc9c',
        id: 5,
        nav: 'DoctorsDetails',
        icon: 'doctor',
        color: '#1A75BB',
      },
      {
        name: 'Gallery',
        code: '#2ecc71',
        id: 6,
        nav: 'Gallery',
        icon: 'photograph',
        color: '#78858b',
      },
    ];
    return (
      <Container style={styles.container}>
        {/* <ImageBackground
          source={require('../../assets/backgroung.png')}
          style={styles.backgroundImage}> */}
        <View style={styles.imageContainer}>
          <TouchableHighlight
            underlayColor="white"
            style={styles.TopImage}
            onPress={() => this.props.navigation.openDrawer()}>
            <Image
              style={styles.TopImage}
              onPress={() => this.props.navigation.openDrawer()}
              source={{
                uri:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///9ES1Q/RlDz8/PExccuN0J0eH41PkhBSVI+RU86QkxHTlfn6On29vdLUlu7vcBUWmLJy81QVl7l5ufT1deUmJxeZGyLj5RobXRbYWioq6/f4OLs7e5/g4mdoaVscXeDh4yxtLeYnKDO0NK+wMSJaeovAAAKwUlEQVR4nO1dCZOjKhAeiTGAgke8r8Rk/v9vfGb3RdAkIyqK4/pVTdUeI3bbTV808PW1Y8eOHTt27NixY8eOHTt27Nix4wnL1+0qLW9BEET1z61MK1v3LdVkSYHlppFxCRPHoyaEACCMAIDQpJ6TxBcjSt3fzKefGjVfGnywBKHWxuOf6v/Qal6L1FdN6mAQkpUxPmLwwtgrIET1b8ZlRohqskVBLDdIau56eeMB8DEJ3PNBNfECyPQyxLhfdG+EiXES6JlqBn4GuacxGMXek0l4Sd31CtKqruFA5XwFwM61Wqd9tcqYovHi4wQJaHw7q2bnBXnkaT+LD7bxsyA1L8pVs9SCFaCPs+/p9ij1POcvPK/+2/+O8tNT+BStR47n0sSfFA6ZTliHLmWl37P8aUIOeXbXq/IR7DgmAh+4xLRcB49WlZze0Vg7choWQfrtf7aNB/87DYrQxG8nMMShrd7mEN14p581e05R2neRyZTf7bJw3jIJcOEqjnSygKJXwtDJi+xBqYPl2xE9vRvKC1TGAKSKX01F7bULOxvutQ+ZXcBXfYAwrpSJMS/MF4LAqbYPYyki55KeXnwONAtFnkPXulpVCzR2p44aay96gbSpo47B4XaEXf6cQgYl/tXp8giP0eLBamZ0XCBESSQrkfWDsOskkbGswSHfcWe6YBrI1CT/xUaj8HtBg0NSp80gQLL9FnGLTpoCnHQxFknUsaE4/JZv7XI7bE8EaEYLsUgubUMAUDBPbGUFoCVGCC+L2Bsrac0QiML7bO9yk3Ysh8IF4tSszSAwo1lfF9GWGFEyu0n14zaDcTXzC+221UbxzLXVe4tBqF3n91LZVYMtFuebFF9dCQJaLhEw5qUHlmIxazPo2MtYb2I7bRZnU5y2FQXecqsNfkuKIJnJopKQZxDRJVOa3Gu9O5lFecilJUFj2bSUGC1zM8fbScS9AmqLJ6WHlkmF8gM4knKxaB0hLp9155HGUyA9DNcdXkuUFKRrFjkhOt9yR8/4yAIoqpvkV54IuT7jYHBjI0PVkkJuIJ4MmYlGwGVqgKqr0RI+Dsc3eQO7R45BT+WiUM67/qMubVjOiAFHbd+EzwVwEEr62KRg2g89W86go2FT9rlRIWfC2HxVplTdEkJKzmeYUrLTLOZ09Kp+ZZb3GVCGyyABx+B8ecsA8L4ZBtN1Smd6D03Vk/AvKjZtoDe5Dm1xThbNW3QSR8TRVEzNFSvm60EohTwZSJie4ol6dU64WThrCWgQXMR992ntDOWJfaxAEnkywIWRp3LKQGc2p8ES5WZhnMNGTyGdQljEPhWSnI9NhM0om6JcOTeMqrX0D8i5UBKPJ42JEFIVK+k/wWV+Go/2YmevGQRJiB3kggSNEKE3dibeGj2AyXo8xRN3zpGNNKcWi/9mKN5NBytvgnicECvaMKg47X2POyv/0VFZ1IFlKfAqmTg5KJgQr2OqUi6n5+ubhQ+4nJ0YY+rTxlWAWDpxcsAMBU6HP83lmSeBD0QOsiFg2/QTE8Lw3FznAr/eX87T8HSUi1OY9ocqXHY+uLJ4uDVKinu9zbnbvyQDABe9eVHJiLwN9WdWyD5P34tI+aa5VwJQb2EvY0QOTn3c5uv0FyWzUL4EHwBh3+QibD0FD7SmhKWYp94ygT+PCOuP2xto2I2tGaqmpHGG0Ou1Uv7pA4VTgXs5zBpbA8NhHGbNWgzq787NPPiBxGmATu/HPbCy23GYv+CMVH8tK49msjQCrc8s1x/o9Bt3LxR0+7GUTWttQKEWNr8JvwdGXs3MEqu4+pGDT3KBHaG2catg1nQIg34zDfvd/R/kvi4bvlj1hc2nQRORRd10HUsVn2GboyZi40jhjA3AcnBvgi9QDHjMY0+tq4j4CotJwxvwVONH0ZpK+e/R1NyGFL/dRrfNEZnlwkgZseKhadr4JNm9VTPgmxWkxMURsWBvjUW2NvzG1EDx2nczecEyWzgmIb801IobU/aMMSNpssDJQ/QRa4zc1YHNKeHSt88qpZPWVxdC00IEE1Grwbpl5fQczYzq6S6gI+ou7CakodK6/2aE/lxfEW+6Y0sydP3Ooo5MGbmiKtdECZCuocurD6yIIhyBsakr3C3rB4Zs3ET1J/cGG8ZbY34dwfpVSiGQDegJSuTQGEYo2hcdsCKN2APVDGWaR6FGzHAQVqqZi8PzZZ6aNzLEGroYh6K5Hsu4xDj0Z+HvAbGp6AzOZqOhHKqreXc4FA0yty/Df2Aebt6WrsQf0vn84ZiY5qYuprGGxzQsLu1fO1wBRsSlXG6x9or3AyNyi+3nh9vP8bdfp/m9tTbhZaTN10v/gZr39tcttr/2tP31w+2vAf/SdXzBXO8PfmUvBhrSi8H6aVay9fczRvbTZIN7ou7Se6KETlke3RP1xXUIC/W1XVX1tZ1H9rX9A72JK+kv7VfU0f2l2+8R5vq8+9cQZ6t5n2bs895+r/7291v8lj0zbHPW4D0zq9j31Ev0lH1PXzqT4Tb3rv22/YeXEdV5bg/peo5taWPaHtLWPuC1HajwF/w+4DFJ3vb3cm9/P/4/cKYCWxBY5bkY7vRzMfjF1Y2ebbL982n4M4bQysqKks4Y4s+JmnoummRIOieKK35v9awvLnhf13ltvHJNW1rhvpWG1mNsJJ65x+s7SOSQNx1E4rmJX1ax9bMvv1zm9uFKmk/knl+69jNohxcv3g248XOE13wWtLRpw5/nrXx/fus876uk751zQgSO2jyqdSa7KW3OrPVcfYkhCCsPP+4hU9cnNdvdCKu53+Iy2/0W27+jZH33zABHdvvy9u8KUn7fU17MfN/TYzVS5Z1dh9bOo1nu7FJ775pltt49cM1e/DUruTsPhbN9XGX3H3aueJwxh1N0hyVtMzhrZKzgHlK/WPIeUgV3yVbtVpbZ75Jd+j5gEpltBntbbCTAajmNx63x89VRX+90XsZFGd17uaOJRdkPOAeocy/3UmHGm7vV7QXuVgeL3a3+CMOddg8UwIUr9+3E7fZZAUd+sP3D+/W40+aFaCCRR3IPaKdXDsX6spFwZrRVqLY4TiTLU92jpNtWjY3Fi9GH8tghAkKnkGFW71cHdoc+BiqKQ67ZbbqsCYunpt56qHX505Cqpqy8MLu0aOBEy2zshCFZaZ5e+jihqa6HgNjxy/fWIIaGnQ1XqkNmGwC/DgfjhVKY98gC701/cC3IyPaHLOxZvh3RV/HVCurdFK93Eff6rj8YIuwUpe2KBDv53S4LB7/blCLfz45BHXuc3u23gABriRGk3z8c6pz732lQhBSDtyPUsdI6GkDOJcVvCPzDJTKd8GJEZaXfs/w5OQ95dterMjIuoWOit9zVwDSdJ94dAyvArzbiySUENQ8mpZ7nOX9R/4lSU3v8x8en8Clah/yeyCNP+7lfH7bx4+8CzVNSVv8ZeRlTKVvYIKDxbV3ye8KqriGauvECYOdarZO/B8g9jeHHGSkgPgwvqbvycxwyvQw/m52f2cNJoK+hn6UPxHJv4XHgPiGAj+HNtVYuPgZCsjTGxzpO6RcmrOOfI47TjKiPXoYiSwvv6fZeWH38019H6RTpb1DNT7DcNCouceL8zyvC6C9fnpPElyJK3fXazSGwfNeu0rIMgiCqf8oyrWx3UPKxY8eOHTt27NixY8eOHTt27NixdfwH6yvJRl2iPBEAAAAASUVORK5CYII=',
              }}
            />
          </TouchableHighlight>
          <Image
            style={styles.dscImage}
            source={require('../../assets/allied2.jpeg')}
            // width={'50%'}
          />
        </View>
        {/* <View style={{flex: 3, justifyContent: 'center', marginTop: '8%'}}> */}
        <View style={{flex: 3, justifyContent: 'center', marginTop: '15%'}}>
          {/* {this.props.user && this.props.user.fullName && (
            <ListItem>
              <CheckBox
                checked={this.props.user.wantToDonate}
                onPress={() => this.handlerCheck(!this.props.user.wantToDonate)}
              />
              <Body>
                <Text>{`want to donate the Blood Mr.  ${
                  this.props.user.fullName
                }`}</Text>
              </Body>
            </ListItem>
          )} */}
          <FlatGrid
            itemDimension={170}
            items={items}
            style={styles.gridView}
            staticDimension={370}
            fixed
            spacing={8}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={[styles.itemContainer]}
                onPress={() => navigate(item.nav, {name: 'Jane'})}>
                <DoctorIcon
                  style={styles.icon}
                  color={item.color}
                  name={item.icon}
                  size={35}
                />
                <Text style={styles.itemName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <Footer>
            <FooterTab style={styles.footerTab}>
              <Icons
                onPress={() => navigate('Call', {name: 'Jane'})}
                name="call"
                size={45}
                color="#2AA6B6"
              />
              <Image
                style={styles.footerImage2}
                source={require('../../assets/footer3.png')}
              />
              <Icons
                onPress={() => navigate('Chatbot', {name: 'Jane'})}
                color="#2AA6B6"
                // style={styles.footerImage3}
                name="chat"
                size={45}
                // source={require('../../assets/footer2.png')}
              />
            </FooterTab>
          </Footer>
        </View>
        {/* </ImageBackground> */}
      </Container>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.User.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    change: (value, token) => dispatch(changetoDoner(value, token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BloodHome);

const styles = StyleSheet.create({
  helpIcon: {
    marginRight: 10,
  },
  header: {
    color: '#000000',
    // flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    // color: 'blue',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // marginBottom: 40,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
    width: '92%',
    paddingHorizontal: '5%',
  },
  text: {
    fontSize: 22,
  },
  title: {
    color: 'black',
    // alignItems: 'center',
    marginLeft: '2%',
    alignSelf: 'auto',
    justifyContent: 'center',
    // backgroundColor: 'black',
  },
  gridView: {
    // marginTop: 10,
    // flex: 1,
    // backgroundColor: 'black',
    // paddingHorizontal: '1%',
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    // padding: 10,
    height: 110,
    // backgroundColor: 'black',
    borderColor: '#2AA6B6',
    borderWidth: 1,
    alignItems: 'center',
    width: '80%',
    marginHorizontal: '12%',
  },
  itemName: {
    fontSize: 13,
    color: '#000000',
    fontWeight: '500',
    alignSelf: 'center',
    marginTop: '10%',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#000000',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    // flex: 10,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  footerImage: {
    // flex: 1,
    height: '85%',
    width: '15%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: '3%',
    marginBottom: '2%',
    padding: '1%',
    marginLeft: '5%',
  },
  footerTab: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerImage2: {
    // flex: 1,
    height: '75%',
    width: '12%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: '22%',
    marginBottom: '1%',
  },
  footerImage3: {
    // flex: 1,
    height: '75%',
    width: '12%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: '1%',
  },
  imageContainer: {
    flex: 1,
    // backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '98%',
    // height: '80%',
    // paddingTop: 0,
    marginTop: '8%',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // paddingTop: '0%',
    // height: '100%',
    backgroundColor: '#fff',
  },
  dscImage: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    width: '98%',
    marginTop: '12%',
    // height: '100%',
    // paddingTop: 0,
    // marginTop: 0,
    // marginHorizontal: 10,
  },
  TopImage: {
    width: 50,
    height: 50,
    position: 'absolute',
    zIndex: 100,
    left: 5,
    top: -10,
  },
});
